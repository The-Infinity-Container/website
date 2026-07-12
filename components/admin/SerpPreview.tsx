const SITE_NAME = "The Infinity Container";
const SITE_DOMAIN = "theinfinitycontainer.com";
const TITLE_TRUNCATE = 60;
const DESCRIPTION_TRUNCATE = 160;

function truncate(text: string, max: number): string {
  return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;
}

export default function SerpPreview({
  title,
  seoTitle,
  slug,
  excerpt,
  metaDescription,
}: {
  title: string;
  seoTitle: string;
  slug: string;
  excerpt: string;
  metaDescription: string;
}) {
  // Mirrors the fallback chain in generateMetadata() on the real post page,
  // so this preview matches what actually ships to <title>/<meta description>.
  const displayTitle = truncate(`${(seoTitle || title || "Untitled post").trim()} — ${SITE_NAME}`, TITLE_TRUNCATE + SITE_NAME.length + 3);
  const rawDescription = (metaDescription || excerpt).trim();
  const displayDescription = rawDescription
    ? truncate(rawDescription, DESCRIPTION_TRUNCATE)
    : "No meta description set — Google may generate one automatically from the page content.";

  return (
    <div className="border-2 border-black p-4 bg-white">
      <p className="text-xs font-bold uppercase tracking-wide text-black/50 mb-2">
        Preview in Google search results
      </p>
      <div className="font-sans max-w-xl">
        <p className="text-sm text-[#4d5156] truncate">
          {SITE_DOMAIN} <span className="text-black/30">›</span> blog <span className="text-black/30">›</span>{" "}
          {slug || "post-slug"}
        </p>
        <p className="text-xl text-[#1a0dab] leading-snug truncate">{displayTitle}</p>
        <p className="text-sm text-[#4d5156] leading-snug">{displayDescription}</p>
      </div>
    </div>
  );
}
