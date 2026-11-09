import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/primitives";
import { Markdown } from "@/components/markdown";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, graph, webPageSchema, type Crumb } from "@/lib/schema";
import { formatDate } from "@/lib/utils";

export function LegalPage({
  title,
  description,
  path,
  updated,
  body,
}: {
  title: string;
  description: string;
  path: string;
  updated: string;
  body: string;
}) {
  const crumbs: Crumb[] = [
    { name: "Home", path: "/" },
    { name: title, path },
  ];
  return (
    <>
      <article>
        <header className="border-b border-line">
          <Container size="md" className="pb-12 pt-10 lg:pt-14">
            <Breadcrumbs items={crumbs} />
            <h1 id="page-title" className="heading mt-8 text-h1 text-fg">
              {title}
            </h1>
            <p className="mt-4 text-sm text-muted">
              Last updated <time dateTime={updated}>{formatDate(updated)}</time>
            </p>
          </Container>
        </header>
        <Container size="md" className="prose-qy py-14">
          <Markdown body={body} />
        </Container>
      </article>
      <JsonLd data={graph(webPageSchema({ path, name: title, description }), breadcrumbSchema(crumbs))} />
    </>
  );
}
