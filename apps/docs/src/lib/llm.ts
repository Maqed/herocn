import fs from "node:fs";
import { Index } from "../../registry/__index__";
import { source } from "./source";

function getComponentsList() {
  const components = source.pageTree.children.find(
    (page) => page.$id === "components",
  );

  if (components?.type !== "folder") {
    return "";
  }

  const list = components.children.filter(
    (component): component is typeof component & { url: string } =>
      component.type === "page" && "url" in component,
  );

  return list
    .map((component) => `- [${component.name}](${component.url})`)
    .join("\n");
}

export function processMdxForLLMs(content: string) {
  // Replace <ComponentsList /> with a markdown list of components.
  const componentsListRegex = /<ComponentsList\s*\/>/g;
  content = content.replace(componentsListRegex, getComponentsList());

  //Replace <ComponentPreview /> with its source code
  const componentPreviewRegex =
    /<ComponentPreview[\s\S]*?name="([^"]+)"[\s\S]*?\/>/g;

  return content.replace(componentPreviewRegex, (match, name) => {
    try {
      const component = Index[name];
      if (!component?.files?.length) {
        return match;
      }

      const src: string | undefined = component.files[0]?.path;
      if (!src) {
        return match;
      }

      let source = fs.readFileSync(src, "utf8");

      source = source.replaceAll("@/registry/new-york-v4/", "@/components/");
      source = source.replaceAll("export default", "export");

      return `\`\`\`tsx\n${source}\n\`\`\``;
    } catch (error) {
      console.error(`Error processing ComponentPreview ${name}:`, error);
      return match;
    }
  });
}
