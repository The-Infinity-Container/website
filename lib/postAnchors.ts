// Heading text -> anchor id, per post slug. The CMS editor (Tiptap) has no
// way to set id attributes on headings, so anchors used by "Dive deeper"
// links elsewhere on the site are injected here at render time by matching
// on heading text instead.
export const POST_HEADING_ANCHORS: Record<string, Record<string, string>> = {
  "what-is-psychedelic-integration-a-behavioral-scientist-s-guide": {
    "Why Integration Builds Capacities, Not Just Skills": "capacities-not-skills",
    "Why Integration Needs a Container — Not Just a Practice": "why-a-container",
  },
};

function stripTags(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

export function injectHeadingAnchors(html: string, anchors: Record<string, string>): string {
  const byText = new Map(
    Object.entries(anchors).map(([text, id]) => [text.trim().toLowerCase(), id])
  );

  return html.replace(/<(h[1-6])([^>]*)>([\s\S]*?)<\/\1>/gi, (match, tag, attrs, inner) => {
    if (/\bid=/.test(attrs)) return match;
    const id = byText.get(stripTags(inner).toLowerCase());
    if (!id) return match;
    // scroll-anchor-target (globals.css) offsets for the sticky nav — a plain CSS
    // class because this HTML bypasses Tailwind's build-time class scanner.
    const withId = `${attrs} id="${id}"`;
    const withClass = /\bclass="/.test(withId)
      ? withId.replace(/\bclass="([^"]*)"/, `class="$1 scroll-anchor-target"`)
      : `${withId} class="scroll-anchor-target"`;
    return `<${tag}${withClass}>${inner}</${tag}>`;
  });
}
