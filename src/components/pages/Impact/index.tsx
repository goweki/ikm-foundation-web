"use client";

import Image from "next/image";
import {
  Quote,
  FileText,
  Target,
  TrendingUp,
  Users,
  Heart,
  Building2,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatTiles } from "@/components/homepage/Impact/impact-numbers";

// ─── Data ──────────────────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    name: "Jacob",
    position: "Head Start Scholar",
    avatar: "/images/testimonials/jacob.png",
    review:
      "At the two-week Head Start Africa Academy, we were exposed to real-world skills needed to thrive in the 21st century, these reflections inspire me to use my knowledge and experience in the future to advocate for a mega Africa-focused curriculum.",
  },
  {
    name: "Bernard",
    position: "Head Start Scholar",
    avatar: "/images/testimonials/benard.png",
    review:
      "The programme has ignited my passion for law, while its life skills training empowered me to invest in farming to supplement family income and fund my legal education.",
  },
  {
    name: "Concilia",
    position: "Alumna — IKMF Scholarship / Head Start",
    avatar: "/images/testimonials/concilia.png",
    review:
      "With IKMF's support, I focused on my studies without worrying about fees. Today, I'm living my dream.",
  },
  {
    name: "Sister Lydia",
    position: "Principal, St Maria Girls Rombo, Loitoktok",
    avatar: "/images/testimonials/sst_lydia.png",
    review:
      "I would like to express my sincere gratitude for your support in the water drilling project. Your commitment to assisting the school will significantly improve the lives of our learners by addressing the long-standing challenge of water scarcity.",
  },
] as const;

const THEORY_OF_CHANGE = [
  {
    title: "Inputs",
    icon: Target,
    accent: "sky",
    items: [
      "Financial support",
      "Scholarships",
      "Programme staff time",
      "Technical partners",
      "Training resources",
      "Community partnerships",
      "Donor contributions",
    ],
  },
  {
    title: "Activities",
    icon: TrendingUp,
    accent: "teal",
    items: [
      "Scholarship disbursements",
      "Leadership bootcamps",
      "Mentorship cycles",
      "Work placements",
      "Health outreaches",
      "Psychosocial & material support",
      "WASH improvements",
      "Classroom & dormitory upgrades",
    ],
  },
  {
    title: "Outputs",
    icon: Users,
    accent: "indigo",
    items: [
      "Students supported",
      "Training hours delivered",
      "Health beneficiaries reached",
      "Vulnerable households assisted",
      "Improved facilities",
      "Strengthened partner network",
    ],
  },
  {
    title: "Outcomes",
    icon: Heart,
    accent: "sky",
    items: [
      "Improved academic progress",
      "Enhanced career readiness",
      "Better health & hygiene outcomes",
      "Increased safety & dignity",
      "Stronger school environments",
    ],
  },
  {
    title: "Long-Term Impact",
    icon: Building2,
    accent: "teal",
    items: [
      "Social mobility for disadvantaged youth",
      "Healthier, safer communities",
      "Increased access to opportunities",
      "Stable, inclusive community systems",
      "Long-term quality of life improvements",
    ],
  },
] as const;

// Accent map — full Tailwind strings for JIT
const ACCENT_MAP: Record<string, { icon: string; bg: string; dot: string }> = {
  sky: {
    icon: "text-sky-600",
    bg: "bg-sky-50",
    dot: "text-sky-500",
  },
  teal: {
    icon: "text-teal-600",
    bg: "bg-teal-50",
    dot: "text-teal-500",
  },
  indigo: {
    icon: "text-indigo-600",
    bg: "bg-indigo-50",
    dot: "text-indigo-500",
  },
};

// ─── 1. Measuring Impact ───────────────────────────────────────────────────────

function MeasuringImpact() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-12 xl:px-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 items-center">
          {/* Text */}
          <div className="flex flex-col gap-5">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
                Our approach
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
                Measuring <span className="text-sky-600">impact</span> that
                lasts
              </h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              At IKM Foundation, our work is grounded in a commitment to
              measurable, lasting change. Across education, healthcare, support
              to vulnerable groups, and community infrastructure, we apply an
              evidence-based approach that ensures every intervention delivers
              value where it matters most.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We track not only the services delivered, but the transformation
              they enable — students progressing into professional careers,
              communities accessing better health and sanitation, families
              regaining stability, and schools gaining the infrastructure needed
              to thrive.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-md md:h-80">
            <Image
              src="/gallery/vulnerable-groups-thika/Sue Tree.jpg"
              alt="Measuring impact"
              fill
              className="object-cover object-center"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-sky-900/10" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 2. Impact Numbers ─────────────────────────────────────────────────────────

function ImpactNumbers() {
  return (
    <section className="w-full bg-sky-800 border-t border-sky-700">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-12 xl:px-16">
        <p className="mb-8 text-xs font-semibold uppercase tracking-widest text-sky-300">
          By the numbers
        </p>
        <StatTiles />
      </div>
    </section>
  );
}

// ─── 3. Testimonials ───────────────────────────────────────────────────────────

function TestimonialCard({
  name,
  position,
  avatar,
  review,
}: {
  name: string;
  position: string;
  avatar: string;
  review: string;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
      <Quote
        className="h-5 w-5 text-sky-400/60 scale-x-[-1]"
        strokeWidth={1.5}
      />
      <p className="text-sm text-slate-600 leading-relaxed flex-1">{review}</p>
      <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-slate-100">
          <Image
            src={avatar}
            alt={name}
            fill
            sizes="40px"
            className="object-cover object-top"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800">{name}</p>
          <p className="text-xs text-slate-500">{position}</p>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="w-full bg-sky-50 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 xl:px-16">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
          Voices from the field
        </p>
        <h2 className="mb-10 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
          What our beneficiaries say
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 4. Theory of Change ───────────────────────────────────────────────────────

function TheoryOfChange() {
  return (
    <section className="w-full bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 xl:px-16">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
          Strategic framework
        </p>
        <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
          Our theory of change
        </h2>
        <p className="mb-10 text-sm text-slate-500 max-w-2xl">
          Our strategic framework connects resources and activities to
          meaningful, lasting outcomes.
        </p>

        {/* Desktop — horizontal flow */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-6">
          {THEORY_OF_CHANGE.map(
            ({ title, icon: Icon, accent, items }, index) => {
              const { icon, bg, dot } = ACCENT_MAP[accent];
              return (
                <div key={title} className="relative flex flex-col gap-0">
                  <div className="flex flex-col gap-4 rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm h-full">
                    {/* Icon */}
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${bg}`}
                    >
                      <Icon className={`h-5 w-5 ${icon}`} strokeWidth={1.75} />
                    </div>
                    <p className="text-sm font-bold text-slate-800">{title}</p>
                    <ul className="flex flex-col gap-1.5">
                      {items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-1.5 text-xs text-slate-500"
                        >
                          <span className={`mt-1 shrink-0 ${dot}`}>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Arrow connector */}
                  {index < THEORY_OF_CHANGE.length - 1 && (
                    <div className="absolute -right-5 top-1/4 z-10 -translate-y-1/2">
                      <ArrowUpRight
                        className="h-5 w-5 rotate-45 text-slate-300"
                        strokeWidth={1.5}
                      />
                    </div>
                  )}
                </div>
              );
            },
          )}
        </div>

        {/* Mobile — vertical stack */}
        <div className="flex flex-col gap-4 lg:hidden">
          {THEORY_OF_CHANGE.map(
            ({ title, icon: Icon, accent, items }, index) => {
              const { icon, bg, dot } = ACCENT_MAP[accent];
              return (
                <div key={title} className="flex flex-col gap-0">
                  <div className="flex flex-col gap-4 rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${bg}`}
                      >
                        <Icon
                          className={`h-5 w-5 ${icon}`}
                          strokeWidth={1.75}
                        />
                      </div>
                      <p className="text-sm font-bold text-slate-800">
                        {title}
                      </p>
                    </div>
                    <ul className="flex flex-col gap-1.5">
                      {items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-1.5 text-xs text-slate-500"
                        >
                          <span className={`mt-1 shrink-0 ${dot}`}>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {index < THEORY_OF_CHANGE.length - 1 && (
                    <div className="flex justify-center py-1">
                      <div className="h-6 w-px bg-slate-200" />
                    </div>
                  )}
                </div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}

// ─── 5. Annual Reports ─────────────────────────────────────────────────────────

function Reports() {
  return (
    <section className="w-full bg-sky-100 border-t border-slate-200/60">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 xl:px-16">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
          Transparency
        </p>
        <h2 className="mb-10 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
          Annual reports
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-start md:gap-12">
          {/* Text */}
          <div className="flex flex-col gap-5">
            <p className="text-sm text-slate-600 leading-relaxed">
              Each year, we publish a Sustainability Report covering the four
              pillars of our work. These reports provide transparent insights
              into our progress, the resources invested, the partnerships
              leveraged, and the change created across education, healthcare,
              vulnerable groups, and special community projects.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our annual reports invite donors, partners, and the public to
              understand how their support translates into real impact, and how
              we continuously evolve to meet the needs of the communities we
              serve.
            </p>

            {/* Report row */}
            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50">
                  <FileText
                    className="h-5 w-5 text-sky-600"
                    strokeWidth={1.75}
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    2024 Sustainability Report
                  </p>
                  <p className="text-xs text-slate-500">
                    Annual impact and progress review
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-fit border-slate-200 text-sm text-slate-700 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
              >
                <FileText className="mr-2 h-4 w-4" />
                View Report
              </Button>
            </div>
          </div>

          <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-slate-200 shadow-md md:w-72 md:h-80">
            {/* Replace src below with your chosen image */}
            <Image
              src={"/images/impact/team_boat_balancing.png"}
              alt="img"
              // height={594}
              // width={800}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page assembly ─────────────────────────────────────────────────────────────

export default function ImpactPage() {
  return (
    <>
      <MeasuringImpact />
      <ImpactNumbers />
      <Testimonials />
      <TheoryOfChange />
      <Reports />
    </>
  );
}
