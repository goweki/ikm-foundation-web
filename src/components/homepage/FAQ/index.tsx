import Link from "next/link";
import {
  GraduationCap,
  Rocket,
  Heart,
  Shield,
  Star,
  ArrowUpRight,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const FAQ_LINKS = [
  {
    label: "IKMF Scholarship",
    href: "/scholarship#faq-section",
    icon: GraduationCap,
  },
  {
    label: "Head Start Africa",
    href: "/headstart#faq-section",
    icon: Rocket,
  },
  {
    label: "Healthcare Support",
    href: "/healthcare#faq-section",
    icon: Heart,
  },
  {
    label: "Vulnerable Groups",
    href: "/vulnerable-group#faq-section",
    icon: Shield,
  },
  {
    label: "Special Projects",
    href: "/special-project#faq-section",
    icon: Star,
  },
] as const;

// ─── Tile ─────────────────────────────────────────────────────────────────────

interface FaqTileProps {
  label: string;
  href: string;
  icon: React.ElementType;
}

function FaqTile({ label, href, icon: Icon }: FaqTileProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col items-start gap-4 rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200/80 hover:bg-sky-50 hover:shadow-lg hover:shadow-sky-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
    >
      {/* Icon */}
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 transition-colors duration-300 group-hover:bg-sky-100">
        <Icon
          size={18}
          strokeWidth={1.75}
          className="text-slate-500 transition-colors duration-300 group-hover:text-sky-600"
        />
      </div>

      {/* Label */}
      <span className="text-sm font-semibold tracking-tight text-slate-800 transition-colors duration-300 group-hover:text-sky-800">
        {label}
      </span>

      {/* Arrow */}
      <ArrowUpRight
        size={14}
        strokeWidth={2}
        className="absolute right-4 top-4 text-sky-400 opacity-0 transition-all duration-300 group-hover:opacity-100"
      />
    </Link>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function FAQ() {
  return (
    <section className="w-full bg-sky-100 border-t border-slate-200/60">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 xl:px-16">
        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Got questions?
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
            Frequently asked questions
          </h2>
          {/* <p className="mt-2 text-sm text-slate-500">
            Browse FAQs by programme area.
          </p> */}
        </div>

        {/* Tile grid — 2 col mobile → 3 col sm → 5 col lg */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {FAQ_LINKS.map((item) => (
            <FaqTile key={item.href} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
