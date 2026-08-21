import { baseUrl, DOCS_INDEX_URL } from "../config";
import { fetchText } from "../http";
import type { DocEntry } from "../types";

const DOC_ENTRY = /^-\s+\[([^\]]+)\]\(([^)]+)\)(?::\s*(.*))?$/;

export function parseDocsIndex(text: string): DocEntry[] {
  const entries: DocEntry[] = [];

  for (const line of text.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed.startsWith("- ")) continue;

    const match = trimmed.match(DOC_ENTRY);
    if (!match) continue;

    const title = match[1];
    const path = match[2];
    const description = match[3]?.trim() || undefined;

    if (!title || !path) continue;

    const slug = path.replace(/^\/docs\/?/, "");
    if (!slug) continue;

    entries.push({
      slug,
      title,
      description,
      url: `${baseUrl()}/${path.replace(/^\//, "")}`,
    });
  }

  return entries;
}

export function getDocsIndex(): Promise<DocEntry[]> {
  return fetchText(DOCS_INDEX_URL).then(parseDocsIndex);
}
