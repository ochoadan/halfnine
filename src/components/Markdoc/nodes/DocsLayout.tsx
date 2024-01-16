import { type Node } from "@markdoc/markdoc";
import { collectSections } from "@/lib/sections";

import {
  DocsHeader,
  Prose,
  TableOfContents,
} from "@/components/Markdoc";

export function DocsLayout({
  children,
  frontmatter: { title },
  nodes,
}: {
  children: React.ReactNode;
  frontmatter: { title?: string };
  nodes: Array<Node>;
}) {
  let tableOfContents = collectSections(nodes);

  return (
    <div className="relative mx-auto flex w-full max-w-7xl flex-auto justify-center">
      <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
        <article>
          <DocsHeader title={title} />
          <Prose>{children}</Prose>
        </article>
      </div>
      <TableOfContents tableOfContents={tableOfContents} />
    </div>
  );
}
