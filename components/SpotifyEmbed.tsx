export default function SpotifyEmbed() {
  return (
    <div className="w-full">
      <iframe
        src="https://open.spotify.com/embed/playlist/4dXmXxaXA2PDX0janyZoM3?utm_source=generator"
        style={{ borderRadius: 12, width: "100%", height: 180 }}
        frameBorder={0}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="The Infinity Container Playlist"
      />
    </div>
  );
}
