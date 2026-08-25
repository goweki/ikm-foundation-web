import Image from "next/image";
import Link from "next/link";

interface YouTubePreviewProps {
  url: string;
  title?: string;
  className?: string;
}

export default function YouTubePreview({
  url,
  title = "Watch on YouTube",
  className,
}: YouTubePreviewProps) {
  const videoId = getYouTubeId(url);

  if (!videoId) {
    return null;
  }

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block overflow-hidden rounded-xl ${className ?? ""}`}
    >
      <div className="relative aspect-video">
        <Image
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt={title}
          fill
          priority={false}
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
          <div className="rounded-full bg-red-600 p-4 shadow-lg transition-transform duration-300 group-hover:scale-110">
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8 fill-white"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

function getYouTubeId(url: string): string | null {
  const regex =
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([^?&/"']{11})/;

  return url.match(regex)?.[1] ?? null;
}
