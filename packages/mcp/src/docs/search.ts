import type { SearchResult } from "../types";
import { fetchPageContent, getAllPageContents } from "./content";
import { getDocsIndex } from "./index";

function toTerms(query: string): string[] {
  return query
    .toLowerCase()
    .split(/[\s-]+/)
    .filter((term) => term.length > 1);
}

function buildSnippet(content: string, term: string): string | undefined {
  const index = content.toLowerCase().indexOf(term);
  if (index === -1) return undefined;

  const start = Math.max(0, index - 120);
  const end = Math.min(content.length, index + term.length + 280);
  const raw = content.slice(start, end).replace(/\s+/g, " ").trim();

  return `${start > 0 ? "..." : ""}${raw}${end < content.length ? "..." : ""}`;
}

export async function searchDocs(
  query: string,
  limit: number,
  includeContent: boolean,
): Promise<SearchResult[]> {
  const terms = toTerms(query);
  if (terms.length === 0) return [];

  const entries = await getDocsIndex();

  if (includeContent) {
    await getAllPageContents();
  }

  const scored: SearchResult[] = [];

  for (const entry of entries) {
    const title = entry.title.toLowerCase();
    const slug = entry.slug.toLowerCase();
    const description = entry.description?.toLowerCase() ?? "";
    const content = includeContent
      ? (await fetchPageContent(entry.slug)).toLowerCase()
      : "";

    let score = 0;
    let snippet: string | undefined;

    for (const term of terms) {
      if (title.includes(term)) score += 10;
      if (slug.includes(term)) score += 5;
      if (description.includes(term)) score += 3;
      if (content.includes(term)) {
        score += 1;
        if (!snippet) {
          const rawContent = includeContent
            ? await fetchPageContent(entry.slug)
            : "";
          snippet = buildSnippet(rawContent, term);
        }
      }
    }

    if (score > 0) {
      scored.push({
        slug: entry.slug,
        title: entry.title,
        url: entry.url,
        score,
        snippet,
      });
    }
  }

  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, limit);
}
