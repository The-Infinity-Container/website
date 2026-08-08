import sanitizeHtml from "sanitize-html";

export function sanitizePostBody(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "h1", "h2"]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ["src", "alt"],
      a: ["href", "target", "rel"],
    },
    // Admin-authored links get target/rel from Tiptap's own safe defaults,
    // but Kit-imported broadcast content is raw HTML that never passes
    // through Tiptap — this guards against a target="_blank" link with no
    // rel making it into a published post (reverse tabnabbing).
    transformTags: {
      a: (tagName, attribs) => {
        if (attribs.target) {
          const rel = new Set((attribs.rel ?? "").split(/\s+/).filter(Boolean));
          rel.add("noopener");
          rel.add("noreferrer");
          attribs.rel = [...rel].join(" ");
        }
        return { tagName, attribs };
      },
    },
  });
}
