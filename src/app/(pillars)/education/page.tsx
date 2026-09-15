import PillarsLayout from "../_components/layout";
import Link from "next/link";
import { ArrowRight, GraduationCap, Users } from "lucide-react";

const PROGRAMS = [
  {
    title: "IKMF Scholarship",
    description:
      "Increasing access to learning for children from disadvantaged backgrounds.",
    href: "/scholarship",
    icon: GraduationCap,
  },
  {
    title: "Head Start Africa, Kenya",
    description: "Nurturing future professionals within the legal industry.",
    href: "/headstart",
    icon: Users,
  },
];

export default function EducationPage() {
  return (
    <PillarsLayout page="education">
      {/* ── Description ── */}
      <div className="mb-12 max-w-2xl">
        <p className="text-slate-600 leading-relaxed mb-4">
          Access to education can be life-changing — but for many bright young
          people, financial barriers and unequal opportunity still stand in the
          way. At IKM Foundation, our Education Pillar is designed to bridge
          that gap by supporting talented learners from disadvantaged
          backgrounds to stay in school, thrive academically, and transition
          into meaningful career pathways.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Through a combination of scholarships, mentorship, and structured
          leadership development, we help students build confidence, strengthen
          essential life skills, and access guidance that prepares them for the
          demands of higher education and the workplace. We work to ensure
          students are supported not only to stay in school, but to thrive.
        </p>
      </div>

      {/* ── Programs Grid ── */}
      <div className="grid gap-px overflow-hidden rounded-2xl bg-slate-200/70 md:grid-cols-2 shadow-sm">
        {PROGRAMS.map((program) => {
          const Icon = program.icon;

          return (
            <Link
              key={program.title}
              href={program.href}
              className="group relative flex flex-col justify-between bg-white p-8 transition-all duration-300 hover:bg-sky-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              {/* Top */}
              <div>
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 group-hover:bg-sky-100 transition-colors">
                  <Icon className="h-5 w-5 text-slate-500 group-hover:text-sky-600" />
                </div>

                <h2 className="text-xl font-semibold text-slate-800 mb-3">
                  {program.title}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {program.description}
                </p>
              </div>

              {/* CTA (now just visual, not primary interaction) */}
              <div className="group/link inline-flex items-center gap-2 text-sm font-medium text-sky-600">
                Learn more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>

              {/* Subtle background accent */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky-100 blur-2xl"></div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* ── Student Story ── */}
      <div className="my-12">
        {/* Eyebrow */}
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
          Student story
        </p>

        {/* Quote */}
        <blockquote className="max-w-2xl">
          <p className="text-lg md:text-xl font-serif leading-relaxed text-slate-800">
            “The program has enabled me to meet with different people who have
            inspired me in different ways.”
          </p>

          <footer className="mt-4 text-sm text-slate-500">
            — Joy, IKMF Scholarship Alumna
          </footer>
        </blockquote>

        {/* CTA (Video link) */}
        <Link
          href="https://youtu.be/5tI50woOibE?si=lBK4Fv3eyBn8F7Q5" // 🔁 replace with actual video URL or anchor
          className="group/link mt-6 inline-flex items-center gap-2 text-sm font-medium text-sky-600 hover:text-sky-700 transition-colors"
        >
          Watch Joy’s story
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </PillarsLayout>
  );
}
