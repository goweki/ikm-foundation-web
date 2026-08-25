import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StatTiles } from "./impact-numbers";

// ─── Section ──────────────────────────────────────────────────────────────────

export default function ImpactSnapshot() {
  return (
    <section className="w-full bg-sky-700">
      {/* Top hairline — visually separates from QuickActions */}
      <div className="h-px w-full bg-white/10" />

      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 xl:px-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* ── Stats grid ── */}
          <StatTiles />

          {/* ── CTA ── */}
          <div className="flex shrink-0 justify-center lg:justify-end lg:pl-12">
            <Link
              href="/impact"
              className="group inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              Explore our impact
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
