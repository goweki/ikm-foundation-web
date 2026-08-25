// import PillarsLayout from "../_components/layout";
// import Link from "next/link";
// import { ArrowRight, GraduationCap, Users } from "lucide-react";

// export default function Headstart() {
//   return (
//     <PillarsLayout page="education">
//       <div className="bg-gradient-to-br from-blue-50 via-white to-purple-100">
//         {/* Hero Section */}
//         <div className="container mx-auto">
//           {/* Options Grid */}
//           <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//             {/* Scholarship Option */}
//             <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>

//               <div className="relative p-8">
//                 <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 group-hover:bg-blue-200 transition-colors duration-300">
//                   <GraduationCap className="w-8 h-8 text-blue-600" />
//                 </div>

//                 <h2 className="text-3xl font-semibold text-gray-800 mb-4">
//                   IKMF Scholarship
//                 </h2>

//                 <p className="text-gray-600 mb-6 leading-relaxed">
//                   Increasing access to learning for children from disadvantaged
//                   backgrounds
//                 </p>

//                 <Link
//                   href="/scholarship"
//                   className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 group-hover:scale-[1.02]"
//                 >
//                   Learn more
//                   <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
//                 </Link>
//               </div>
//             </div>

//             {/* Mentorship Option */}
//             <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
//               <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-teal-500/5 group-hover:from-purple-500/10 group-hover:to-teal-500/10 transition-all duration-500"></div>

//               <div className="relative p-8">
//                 <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-6 group-hover:bg-purple-200 transition-colors duration-300">
//                   <Users className="w-8 h-8 text-blue-600" />
//                 </div>

//                 <h2 className="text-3xl font-semibold text-gray-800 mb-4">
//                   Head Start Africa, Kenya
//                 </h2>

//                 <p className="text-gray-600 mb-6 leading-relaxed">
//                   Nurturing future professionals within the legal industry
//                 </p>

//                 <div className="space-y-3 mb-8">
//                   {/* items */}

//                   {/* <div className="flex items-center text-sm text-gray-600">
//                       <Heart className="w-4 h-4 mr-2 text-purple-500" />
//                       <span>One-on-one guidance sessions</span>
//                     </div>
//                     <div className="flex items-center text-sm text-gray-600">
//                       <Heart className="w-4 h-4 mr-2 text-purple-500" />
//                       <span>One-on-one guidance sessions</span>
//                     </div> */}
//                 </div>

//                 <Link
//                   href="/headstart"
//                   className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 group-hover:scale-[1.02]"
//                 >
//                   Learn more
//                   <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </PillarsLayout>
//   );
// }

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
