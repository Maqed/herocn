import Link from "next/link";
import { getPagesFromFolder } from "@/lib/page-tree";
import { source } from "@/lib/source";

export function ComponentsList() {
  const componentsFolder = source.pageTree.children.find(
    (page) => page.$id === "components",
  );

  if (componentsFolder?.type !== "folder") {
    return null;
  }

  const list = getPagesFromFolder(componentsFolder);

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-x-8 lg:gap-x-16 lg:gap-y-6 xl:gap-x-20">
      {list.map((component) => (
        <Link
          key={component.$id}
          href={component.url}
          className="inline-flex items-center gap-2 text-lg font-medium underline-offset-4 hover:underline md:text-base"
        >
          {component.name}
        </Link>
      ))}
    </div>
  );
}
