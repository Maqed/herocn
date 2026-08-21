import { cacheTtlMs, docsPageUrl } from "../config";
import { fetchText } from "../http";
import { mapWithConcurrency } from "../utils/concurrency";
import { getDocsIndex } from "./index";

export function fetchPageContent(slug: string): Promise<string> {
  return fetchText(docsPageUrl(slug));
}

let warmPromise: Promise<void> | undefined;
let warmExpiresAt = 0;

export function getAllPageContents(): Promise<void> {
  if (warmPromise && Date.now() < warmExpiresAt) {
    return warmPromise;
  }

  const warming = getDocsIndex().then(async (entries) => {
    await mapWithConcurrency(entries, 8, async (entry) => {
      await fetchPageContent(entry.slug);
    });
  });

  warmPromise = warming.then(
    () => {
      warmExpiresAt = Date.now() + cacheTtlMs();
    },
    (err) => {
      warmPromise = undefined;
      warmExpiresAt = 0;
      throw err;
    },
  );

  return warmPromise;
}
