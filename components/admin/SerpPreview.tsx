export const SITE_NAME = "The Infinity Container";
const SITE_DOMAIN = "theinfinitycontainer.com";
const TITLE_TRUNCATE = 60;
const DESCRIPTION_TRUNCATE = 160;

function truncate(text: string, max: number): string {
  return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;
}

// Purely presentational — the caller resolves whatever fallback chain its
// content type actually uses (e.g. blog posts fall back to "title | site
// name"; static pages just store the final string) and passes the exact
// title/description that will render.
export default function SerpPreview({
  title,
  path,
  description,
}: {
  title: string;
  path: string;
  description: string;
}) {
  const displayTitle = title.trim() ? truncate(title.trim(), TITLE_TRUNCATE) : "Untitled";
  const rawDescription = description.trim();
  const displayDescription = rawDescription
    ? truncate(rawDescription, DESCRIPTION_TRUNCATE)
    : "No meta description set — Google may generate one automatically from the page content.";
  const segments = path.split("/").filter(Boolean);

  return (
    <div className="border-2 border-black p-4 bg-white">
      <p className="text-xs font-bold uppercase tracking-wide text-black/50 mb-2">
        Preview in Google search results
      </p>
      <div className="font-sans max-w-xl">
        <p className="text-sm text-[#4d5156] truncate">
          {SITE_DOMAIN}
          {segments.map((segment) => (
            <span key={segment}>
              {" "}
              <span className="text-black/30">›</span> {segment}
            </span>
          ))}
        </p>
        <p className="text-xl text-[#1a0dab] leading-snug truncate">{displayTitle}</p>
        <p className="text-sm text-[#4d5156] leading-snug">{displayDescription}</p>
      </div>
    </div>
  );
}
