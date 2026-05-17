type JsonLdProps = {
  data: object | object[];
  id?: string;
};

export function JsonLd({ data, id }: JsonLdProps) {
  const json = Array.isArray(data) ? data : [data];
  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": json }),
      }}
    />
  );
}
