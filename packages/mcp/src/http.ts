import { baseUrl, cacheTtlMs } from "./config";
import { version } from "./version";

interface CacheEntry<T> {
  expires: number;
  value: T;
}

export class HttpError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
    this.name = "HttpError";
  }
}

export class NotFoundError extends HttpError {
  constructor(message: string) {
    super(message, 404);
    this.name = "NotFoundError";
  }
}

const cache = new Map<string, CacheEntry<unknown>>();

function isExpired(entry: CacheEntry<unknown>): boolean {
  return entry.expires < Date.now();
}

function purgeExpired(): void {
  for (const [key, entry] of cache) {
    if (isExpired(entry)) cache.delete(key);
  }
}

async function fetchCached<T>(
  path: string,
  parse: (text: string) => T,
): Promise<T> {
  const cached = cache.get(path);
  if (cached && !isExpired(cached)) {
    return cached.value as T;
  }

  const url = `${baseUrl()}/${path}`;
  const res = await fetch(url, {
    headers: { "user-agent": `herocn-mcp/${version}` },
  });

  if (!res.ok) {
    const message = `GET ${url} failed with ${res.status} ${res.statusText}`;
    if (res.status === 404) throw new NotFoundError(message);
    throw new HttpError(message, res.status);
  }

  const text = await res.text();
  const value = parse(text);

  if (cache.size > 0) purgeExpired();
  cache.set(path, { expires: Date.now() + cacheTtlMs(), value });

  return value;
}

export function fetchText(path: string): Promise<string> {
  return fetchCached(path, (text) => text);
}

export function fetchJson<T>(path: string): Promise<T> {
  return fetchCached(path, (text) => JSON.parse(text) as T);
}
