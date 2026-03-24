type SiteConfigType = {
  name: string;
  url: string;
  description: string;
  links: {
    twitter: string;
    github: string;
  };
  navItems: { href: string; label: string; isExternal?: boolean }[];
};

export const siteConfig: SiteConfigType = {
  name: "herocn",
  url: "https://herocn.pages.dev/",
  description: "shadcn/ui abstract, heroui beautiful styles.",
  links: {
    twitter: "https://twitter.com/0xMaqed",
    github: "https://github.com/Maqed/herocn",
  },
  navItems: [
    {
      href: "/docs/installation",
      label: "Docs",
    },
    {
      href: "/docs/components",
      label: "Components",
    },
    {
      href: "https://herocn.featurebase.app/",
      label: "Roadmap",
      isExternal: true,
    },
  ],
};

export const PAGES_METADATA = new Map([
  [
    "/",
    {
      title: "herocn",
      description: "shadcn's abstraction. HeroUI's design system.",
    },
  ],
]);
