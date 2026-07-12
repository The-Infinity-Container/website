export type SeoCheckStatus = "good" | "ok" | "bad";

export type SeoCheck = {
  id: string;
  status: SeoCheckStatus;
  message: string;
};

export type SeoScore = "red" | "orange" | "green";

export const SEO_SCORE_META: Record<SeoScore, { label: string; color: string }> = {
  red: { label: "Needs Work", color: "#CC5547" },
  orange: { label: "Almost There", color: "#ED7E21" },
  green: { label: "Good to Go", color: "#3F8F52" },
};

function stripTags(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function extractFirstParagraphText(html: string): string {
  const match = html.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  return match ? stripTags(match[1]) : "";
}

function extractHeadingTexts(html: string): string[] {
  return [...html.matchAll(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/gi)].map((m) => stripTags(m[1]));
}

function extractLinkHrefs(html: string): string[] {
  return [...html.matchAll(/<a\s+[^>]*href=["']([^"']*)["'][^>]*>/gi)].map((m) => m[1]);
}

function countOccurrences(haystack: string, needle: string): number {
  if (!needle) return 0;
  const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const matches = haystack.match(new RegExp(escaped, "gi"));
  return matches ? matches.length : 0;
}

// The site's own domain is treated as "internal" by substring match, since
// this runs identically on the server and client (no window.location.host
// available during SSR) — deployed staging/preview domains would be
// misclassified as outbound, which just means an extra nudge to add a link.
function classifyLinks(hrefs: string[]): { internal: number; outbound: number } {
  let internal = 0;
  let outbound = 0;
  for (const href of hrefs) {
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) continue;
    if (href.startsWith("/") || href.includes("theinfinitycontainer.com")) internal++;
    else if (href.startsWith("http")) outbound++;
  }
  return { internal, outbound };
}

export type SeoAnalysisInput = {
  focusKeyphrase: string;
  seoTitle: string;
  metaDescription: string;
  slug: string;
  altText: string;
  body: string;
  usedKeyphrases: string[];
};

export function analyzeSeo(fields: SeoAnalysisInput): SeoCheck[] {
  const kp = fields.focusKeyphrase.trim();
  const kpLower = kp.toLowerCase();
  const hasKp = kpLower.length > 0;
  const contains = (text: string) => hasKp && text.toLowerCase().includes(kpLower);

  const bodyText = stripTags(fields.body);
  const wordCount = bodyText.length > 0 ? bodyText.split(/\s+/).filter(Boolean).length : 0;
  const firstParagraphText = extractFirstParagraphText(fields.body);
  const headingTexts = extractHeadingTexts(fields.body);
  const linkHrefs = extractLinkHrefs(fields.body);
  const occurrences = hasKp ? countOccurrences(bodyText, kp) : 0;
  const density = wordCount > 0 ? (occurrences / wordCount) * 100 : 0;
  const { internal, outbound } = classifyLinks(linkHrefs);

  const checks: SeoCheck[] = [];

  checks.push({
    id: "keyphrase-set",
    status: hasKp ? "good" : "bad",
    message: hasKp
      ? `Using "${kp}" as the focus keyphrase.`
      : "Set a focus keyphrase — the main term you want this post to rank for. Every check below depends on it.",
  });

  checks.push({
    id: "title-keyphrase",
    status: contains(fields.seoTitle) ? "good" : "bad",
    message: contains(fields.seoTitle)
      ? "The SEO title contains the focus keyphrase."
      : `Add "${kp || "your focus keyphrase"}" to the SEO title, ideally near the beginning.`,
  });

  const titleLen = fields.seoTitle.trim().length;
  checks.push({
    id: "title-length",
    status: titleLen === 0 ? "bad" : titleLen >= 40 && titleLen <= 60 ? "good" : "ok",
    message:
      titleLen === 0
        ? "Write an SEO title."
        : titleLen < 40
          ? `The SEO title is ${titleLen} characters — a little short. Aim for 40–60 so it doesn't look thin in search results.`
          : titleLen > 60
            ? `The SEO title is ${titleLen} characters — it may get cut off in search results. Aim for 40–60.`
            : `Good SEO title length (${titleLen} characters).`,
  });

  const metaLen = fields.metaDescription.trim().length;
  checks.push({
    id: "meta-length",
    status: metaLen === 0 ? "bad" : metaLen >= 120 && metaLen <= 156 ? "good" : "ok",
    message:
      metaLen === 0
        ? "Write a meta description."
        : metaLen < 120
          ? `The meta description is ${metaLen} characters — a little short. Aim for 120–156.`
          : metaLen > 156
            ? `The meta description is ${metaLen} characters — it may get cut off in search results. Aim for 120–156.`
            : `Good meta description length (${metaLen} characters).`,
  });

  checks.push({
    id: "meta-keyphrase",
    status: contains(fields.metaDescription) ? "good" : "bad",
    message: contains(fields.metaDescription)
      ? "The meta description contains the focus keyphrase."
      : `Mention "${kp || "your focus keyphrase"}" in the meta description.`,
  });

  const kpSlug = kpLower.replace(/\s+/g, "-");
  const slugHasKp = hasKp && fields.slug.toLowerCase().includes(kpSlug);
  checks.push({
    id: "slug-keyphrase",
    status: slugHasKp ? "good" : "bad",
    message: slugHasKp
      ? "The slug contains the focus keyphrase."
      : `Include "${kp || "your focus keyphrase"}" in the slug.`,
  });

  const altLen = fields.altText.trim().length;
  checks.push({
    id: "alt-keyphrase",
    status: altLen === 0 ? "bad" : contains(fields.altText) ? "good" : "ok",
    message:
      altLen === 0
        ? "Add alt text for the primary image."
        : contains(fields.altText)
          ? "The image alt text contains the focus keyphrase."
          : `Consider adding "${kp}" to the image alt text.`,
  });

  const introHasKp = hasKp && firstParagraphText.toLowerCase().includes(kpLower);
  checks.push({
    id: "intro-keyphrase",
    status: bodyText.length === 0 ? "bad" : introHasKp ? "good" : "bad",
    message:
      bodyText.length === 0
        ? "Write the post body before checking the introduction."
        : introHasKp
          ? "The focus keyphrase appears in the opening paragraph."
          : `Mention "${kp || "your focus keyphrase"}" in the first paragraph — Google weighs the introduction heavily.`,
  });

  checks.push({
    id: "keyphrase-density",
    status:
      !hasKp || wordCount === 0
        ? "bad"
        : occurrences === 0
          ? "bad"
          : density < 0.5 || density > 3
            ? "ok"
            : "good",
    message:
      !hasKp || wordCount === 0
        ? "Add body content to check keyphrase density."
        : occurrences === 0
          ? `"${kp}" doesn't appear in the body text at all. Use it a few times naturally.`
          : density < 0.5
            ? `The keyphrase appears ${occurrences} time${occurrences === 1 ? "" : "s"} (${density.toFixed(1)}%) — a little low. Aim for 0.5–3% of the text.`
            : density > 3
              ? `The keyphrase appears ${occurrences} times (${density.toFixed(1)}%) — that's frequent enough to look like keyword stuffing. Aim for 0.5–3%.`
              : `Good keyphrase density (${density.toFixed(1)}%, used ${occurrences} times).`,
  });

  const subheadingHasKp = hasKp && headingTexts.some((h) => h.toLowerCase().includes(kpLower));
  checks.push({
    id: "subheading-keyphrase",
    status: headingTexts.length === 0 ? "ok" : subheadingHasKp ? "good" : "bad",
    message:
      headingTexts.length === 0
        ? "Add a subheading (H2 or H3) that includes the focus keyphrase — none found yet."
        : subheadingHasKp
          ? "The focus keyphrase appears in a subheading."
          : `Use "${kp || "your focus keyphrase"}" in at least one subheading (H2 or H3).`,
  });

  checks.push({
    id: "content-length",
    status: wordCount === 0 ? "bad" : wordCount < 300 ? "ok" : "good",
    message:
      wordCount === 0
        ? "Write the post body."
        : wordCount < 300
          ? `The post is ${wordCount} words — a little thin. Aim for at least 300 words.`
          : `Good length (${wordCount} words).`,
  });

  checks.push({
    id: "outbound-link",
    status: outbound > 0 ? "good" : "ok",
    message:
      outbound > 0
        ? "The post links out to at least one external source."
        : "Consider linking out to a relevant, authoritative external source.",
  });

  checks.push({
    id: "internal-link",
    status: internal > 0 ? "good" : "ok",
    message:
      internal > 0
        ? "The post links to at least one other page on your site."
        : "Consider linking to another page on your site, like a related post.",
  });

  const reused = hasKp && fields.usedKeyphrases.some((k) => k.trim().toLowerCase() === kpLower);
  checks.push({
    id: "keyphrase-reuse",
    status: reused ? "ok" : "good",
    message: reused
      ? `"${kp}" is already the focus keyphrase on another post — reusing it can make the two posts compete with each other in search results.`
      : "This focus keyphrase isn't used on any other post.",
  });

  return checks;
}

export function seoScore(checks: SeoCheck[]): SeoScore {
  const points = checks.reduce((sum, c) => sum + (c.status === "good" ? 2 : c.status === "ok" ? 1 : 0), 0);
  const max = checks.length * 2;
  const fraction = max > 0 ? points / max : 0;
  if (fraction >= 0.8) return "green";
  if (fraction >= 0.5) return "orange";
  return "red";
}
