import Link from "next/link";
import {
  GraduationCap,
  HeartPulse,
  HandHeart,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PILLARS = [
  {
    title: "Education",
    description:
      "Scholarships, mentorship and career readiness for talented young people from disadvantaged backgrounds.",
    href: "/education",
    icon: GraduationCap,
    position: "top-left",
  },
  {
    title: "Healthcare",
    description:
      "Support that strengthens access to essential healthcare and patient wellbeing in our communities.",
    href: "/healthcare",
    icon: HeartPulse,
    position: "top-right",
  },
  {
    title: "Vulnerable Groups",
    description:
      "Targeted support that promotes dignity, inclusion and improved living conditions.",
    href: "/vulnerable-group",
    icon: HandHeart,
    position: "bottom-left",
  },
  {
    title: "Special Projects",
    description:
      "Sustainable infrastructure and WASH projects that build resilient learning environments.",
    href: "/special-project",
    icon: Wrench,
    position: "bottom-right",
  },
] as const;

// Corner radius per grid position — inner corners stay sharp, outer rounded
const RADIUS_MAP: Record<string, string> = {
  "top-left": "rounded-tl-2xl",
  "top-right": "rounded-tr-2xl",
  "bottom-left": "rounded-bl-2xl",
  "bottom-right": "rounded-br-2xl",
};

// ─── Tile ─────────────────────────────────────────────────────────────────────

interface PillarTileProps {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
  position: string;
}

function PillarTile({
  title,
  description,
  href,
  icon: Icon,
  position,
}: PillarTileProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col gap-4 p-7 bg-white",
        "border border-border",
        "transition-all duration-300 hover:bg-sky-50 hover:border-sky-200/80 hover:z-10",
        RADIUS_MAP[position],
      )}
    >
      {/* Icon badge */}
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 transition-colors duration-300 group-hover:bg-sky-100">
        <Icon
          className="h-4.5 w-4.5 text-slate-500 transition-colors duration-300 group-hover:text-sky-600"
          strokeWidth={1.75}
          size={18}
        />
      </div>

      {/* Copy */}
      <div className="flex flex-col gap-1.5">
        <h3 className="text-sm font-semibold tracking-tight text-slate-800 group-hover:text-sky-800 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-500">{description}</p>
      </div>

      {/* Arrow — fades in on hover */}
      <ArrowRight
        className="mt-auto h-3.5 w-3.5 text-sky-400 opacity-0 translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"
        strokeWidth={2}
      />
    </Link>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function DonationPillars() {
  return (
    <section className="w-full bg-sky-100">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 xl:px-16">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Your input matters
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
              Where your donation goes
            </h2>
          </div>

          <Link
            href="/pillars"
            className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sky-600 hover:text-sky-700 transition-colors sm:mt-0"
          >
            See all pillars
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </Link>
        </div>

        {/* 2×2 grid — stacks to 1 col on mobile, 2 col on sm+ */}
        <div className="grid grid-cols-1 gap-px bg-slate-200/80 overflow-hidden rounded-2xl shadow-sm sm:grid-cols-2">
          {PILLARS.map((pillar) => (
            <PillarTile key={pillar.title} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
