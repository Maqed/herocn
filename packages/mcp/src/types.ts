export interface DocEntry {
  slug: string;
  title: string;
  description?: string;
  url: string;
}

export interface RegistryFile {
  path: string;
  type: string;
  content?: string;
}

export interface RegistryItem {
  name: string;
  type: string;
  dependencies?: string[];
  devDependencies?: string[];
  registryDependencies?: string[];
  cssVars?: {
    light?: Record<string, string>;
    dark?: Record<string, string>;
    theme?: Record<string, string>;
  };
  css?: string;
  files?: RegistryFile[];
}

export interface SearchResult {
  slug: string;
  title: string;
  url: string;
  score: number;
  snippet?: string;
}
