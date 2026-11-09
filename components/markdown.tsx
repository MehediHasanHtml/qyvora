import * as React from "react";
import Link from "next/link";

/** Minimal, safe markdown for articles: headings, lists, paragraphs, bold and links. */

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function headingsOf(body: string) {
  return body
    .split("\n")
    .filter((l) => l.startsWith("## "))
    .map((l) => ({ text: l.slice(3).trim(), id: slugify(l.slice(3)) }));
}

function inline(text: string, keyBase: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) out.push(<strong key={`${keyBase}-${i++}`}>{m[1]}</strong>);
    else if (m[2] && m[3]) {
      const href = m[3];
      out.push(
        href.startsWith("/") || href.startsWith("mailto:") ? (
          <Link key={`${keyBase}-${i++}`} href={href}>
            {m[2]}
          </Link>
        ) : (
          <a key={`${keyBase}-${i++}`} href={href} target="_blank" rel="noopener noreferrer">
            {m[2]}
          </a>
        ),
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function Markdown({ body }: { body: string }) {
  const lines = body.split("\n");
  const blocks: React.ReactNode[] = [];
  let para: string[] = [];
  let list: { type: "ul" | "ol"; items: string[] } | null = null;

  const flushPara = () => {
    if (para.length) {
      const k = `p${blocks.length}`;
      blocks.push(<p key={k}>{inline(para.join(" "), k)}</p>);
      para = [];
    }
  };
  const flushList = () => {
    if (list) {
      const k = `l${blocks.length}`;
      const items = list.items.map((it, i) => <li key={i}>{inline(it, `${k}-${i}`)}</li>);
      blocks.push(list.type === "ul" ? <ul key={k}>{items}</ul> : <ol key={k}>{items}</ol>);
      list = null;
    }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (!line.trim()) {
      flushPara();
      flushList();
      continue;
    }
    if (line.startsWith("## ") || line.startsWith("### ")) {
      flushPara();
      flushList();
      const level = line.startsWith("### ") ? 3 : 2;
      const text = line.slice(level + 1).trim();
      const k = `h${blocks.length}`;
      blocks.push(level === 2 ? <h2 key={k} id={slugify(text)}>{text}</h2> : <h3 key={k}>{text}</h3>);
      continue;
    }
    const ul = line.match(/^- (.*)$/);
    const ol = line.match(/^\d+\. (.*)$/);
    if (ul || ol) {
      flushPara();
      const type = ul ? "ul" : "ol";
      if (list && list.type !== type) flushList();
      if (!list) list = { type, items: [] };
      list.items.push((ul ?? ol)![1]);
      continue;
    }
    flushList();
    para.push(line.trim());
  }
  flushPara();
  flushList();
  return <>{blocks}</>;
}
