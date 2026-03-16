import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

// fill this with your actual GitHub info, for example:
export const gitConfig = {
  user: "Maqed",
  repo: "ui",
  branch: "main",
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      enabled: false,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
