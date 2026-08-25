import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";

// ─── Story data ───────────────────────────────────────────────────────────────

const STORY = {
  quote:
    "With IKMF's support, I focused on my studies without worrying about fees. Today, I'm living my dream.",
  attribution: "Concilia",
  role: "IKMF Scholarship and Head Start Alumna",
  image: {
    src: "/images/homepage/featured-quote.png",
    alt: "Concilia, IKMF Scholarship and Head Start Alumna",
  },
  cta: {
    label: "More stories & reports",
    href: "/impact",
  },
} as const;

// ─── Section ──────────────────────────────────────────────────────────────────

export default function FeaturedStory() {
  return (
    <section className="w-full bg-sky-50 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 xl:px-16">
        {/* Eyebrow */}
        <p className="mb-8 text-xs font-semibold uppercase tracking-widest text-slate-400">
          Featured story
        </p>

        {/*
         * Card — full-bleed image on mobile, side-by-side on md+
         * Image is intentionally large (≈ 55 % of card width) so the face
         * has presence and the quote has room to breathe.
         */}
        <div className="group relative overflow-hidden rounded-2xl bg-sky-800 shadow-xl shadow-slate-900/15 md:grid md:grid-cols-[1fr_auto]">
          {/* ── Left: text block ── */}
          <div className="relative z-10 flex flex-col justify-between gap-10 px-8 py-10 md:px-12 md:py-14 lg:px-16">
            {/* Large decorative quote mark */}
            <Quote
              className="h-10 w-10 text-sky-400/40 -mb-4 shrink-0 scale-x-[-1]"
              strokeWidth={1.5}
            />

            {/* Quote */}
            <blockquote className="flex flex-col gap-6">
              <p className="font-serif text-xl leading-relaxed text-white sm:text-2xl lg:text-3xl lg:leading-snug max-w-prose">
                {STORY.quote}
              </p>

              <footer className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-sky-300">
                  {STORY.attribution}
                </span>
                <span className="text-xs text-slate-400">{STORY.role}</span>
              </footer>
            </blockquote>

            {/* CTA */}
            <Link
              href={STORY.cta.href}
              className="group/link mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              {STORY.cta.label}
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5"
                strokeWidth={2}
              />
            </Link>
          </div>

          {/* ── Right: image ── */}
          {/*
           * On mobile the image stacks below the text at 16:9.
           * On md+ it fills a fixed 420 px column at full card height.
           * The gradient on the left edge softens the text/image boundary.
           */}
          <div className="relative aspect-video w-full md:aspect-auto md:w-[420px] lg:w-[480px]">
            <Image
              src={STORY.image.src}
              alt={STORY.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover object-top"
              priority
            />

            {/* Left-edge fade — desktop only */}
            <div
              aria-hidden
              className="absolute inset-y-0 left-0 w-24 hidden md:block"
              style={{
                background: "linear-gradient(to right, #075985, transparent)",
              }}
            />

            {/* Bottom-edge fade — mobile only */}
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-24 md:hidden"
              style={{
                background: "linear-gradient(to top, #075985, transparent)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
