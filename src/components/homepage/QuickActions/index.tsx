import Link from "next/link";
import { Users, LayoutGrid, BarChart2, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Data ─────────────────────────────────────────────────────────────────────

const ACTIONS = [
  {
    title: "About Us",
    description: "Who we are and how we work",
    href: "/about",
    icon: Users,
    accent: "sky",
  },
  {
    title: "Our Pillars",
    description: "What we focus on across Kenya",
    href: "/pillars",
    icon: LayoutGrid,
    accent: "teal",
  },
  {
    title: "Our Impact",
    description: "Results, stories and annual reports",
    href: "/impact",
    icon: BarChart2,
    accent: "indigo",
  },
] as const;

// Tailwind needs full class strings present in source for the JIT compiler
const ACCENT_MAP: Record<
  string,
  { icon: string; border: string; glow: string }
> = {
  sky: {
    icon: "text-sky-500",
    border: "group-hover:border-sky-400/60",
    glow: "group-hover:shadow-sky-500/10",
  },
  teal: {
    icon: "text-teal-500",
    border: "group-hover:border-teal-400/60",
    glow: "group-hover:shadow-teal-500/10",
  },
  indigo: {
    icon: "text-indigo-500",
    border: "group-hover:border-indigo-400/60",
    glow: "group-hover:shadow-indigo-500/10",
  },
};

// ─── Card ─────────────────────────────────────────────────────────────────────

interface ActionCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
  accent: string;
}

function ActionCard({
  title,
  description,
  href,
  icon: Icon,
  accent,
}: ActionCardProps) {
  const { icon, border, glow } = ACCENT_MAP[accent];

  return (
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col gap-4 rounded-2xl p-6",
        "bg-white border border-slate-200/80",
        "shadow-sm transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-xl",
        glow,
        border,
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 transition-colors duration-300 group-hover:bg-white",
          "shadow-inner",
        )}
      >
        <Icon
          className={cn("h-5 w-5 transition-colors duration-300", icon)}
          strokeWidth={1.75}
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold text-slate-800 tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-slate-500 leading-snug">{description}</p>
      </div>

      {/* Arrow — slides in on hover */}
      <ArrowUpRight
        className={cn(
          "absolute right-5 top-5 h-4 w-4 text-slate-300",
          "translate-x-1 -translate-y-1 opacity-0 transition-all duration-300",
          "group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100",
          icon,
        )}
        strokeWidth={2}
      />
    </Link>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function QuickActions() {
  return (
    <section className="w-full bg-sky-100 border-t border-slate-200/60">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-12 xl:px-16">
        {/* Optional eyebrow label */}
        <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-slate-400">
          Explore
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {ACTIONS.map((action) => (
            <ActionCard key={action.href} {...action} />
          ))}
        </div>
      </div>
    </section>
  );
}
