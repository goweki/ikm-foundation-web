// "use client";

import FAQcomponent from "@/components/atoms/faqComponent";
import PillarsLayout from "../_components/layout";
import { GraduationCap, MapPin, Users, TrendingUp } from "lucide-react";

const FAQs = [
  {
    question: "Who can apply for the IKMF Scholarship?",
    answer:
      "Students who have completed their Kenya Junior Secondary Education Assessment (KJSEA) and are transitioning to senior secondary school. We prioritise academically promising students from low-income households, orphans, vulnerable children, and students with disabilities.",
  },
  {
    question: "What does the scholarship cover?",
    answer:
      "The scholarship covers tuition fees, school supplies, and other educational expenses.",
  },
  {
    question: "When do applications open and close?",
    answer:
      "Applications open in late December and close around the first or second week of January, depending on the release of national exam results.",
  },
  {
    question: "How does the selection process work?",
    answer:
      "Applications are reviewed based on financial need, academic merit, and supporting documents. Shortlisted applicants are invited for interviews and home visits before final decisions are made.",
  },
  {
    question: "How long does the scholarship cover?",
    answer:
      "Yes, the scholarship covers the entire three years at senior secondary, subject to academic performance, discipline, and participation in mentorship activities.",
  },
  {
    question: "How do I apply?",
    answer:
      "Visit our website in December to access the application form. Make sure to complete it and submit all required documents before the deadline.",
  },
];

const itemsList = [
  {
    description:
      "school fees, mentorship and material support including tablets, uniforms, and setbooks",
    icon: GraduationCap,
    gradient: "from-purple-400/70 via-purple-200/40 to-transparent",
  },
  {
    description:
      "Supporting students from across Kenya, ensuring equal opportunities regardless of location",
    icon: MapPin,
    gradient: "from-purple-400/70 via-purple-200/40 to-transparent",
  },
  {
    description:
      "Currently supporting 61 students in their educational journey towards a brighter future",
    icon: Users,
    gradient: "from-purple-400/70 via-purple-200/40 to-transparent",
  },
  {
    description:
      "103 students successfully supported between 2015 and 2024, creating lasting change",
    icon: TrendingUp,
    gradient: "from-purple-400/70 via-purple-200/40 to-transparent",
  },
];

export default function Scholarship() {
  // const searchParams = useSearchParams();
  // const section = searchParams.get("section");
  // if (section=='faq-section') {}

  return (
    <PillarsLayout page="scholarship">
      <>
        <p>
          The IKMF Scholarships Program supports bright students from lower
          socio-economic backgrounds to access secondary school education,
          promoting 100% transition. Each year, we identify students across
          Kenya who demonstrate strong academic potential and significant
          financial need, with a focus on those from vulnerable households and
          orphaned children.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 mr-6 my-6">
          {itemsList.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 cursor-default bg-gradient-to-br ${item.gradient}`}
              >
                {/* Glass overlay */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 p-6 h-64 flex flex-col justify-center items-center text-center">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 group-hover:bg-white/15 transition-colors duration-300 w-full">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:rotate-12 transition-transform duration-300">
                      <IconComponent size={24} className="text-black" />
                    </div>
                    <p className="text-black/90 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <br />
        <h3 className="font-semibold text-xl mb-2">Eligibility</h3>
        <p>To be eligible for IKMF Scholarship you must have:</p>
        <ul className="max-w-full space-y-1 text-gray-800 list-disc list-inside m-3 mt-2 font-semibold">
          {/* {FAQ.map((item, index) => (
            <li key={index}>
              <strong>{item.question}</strong> {item.answer}
            </li>
          ))} */}
          <li>
            Scored in the 70th percentile in Kenya Junior Secondary Education
            Assessment (KJSEA) based on school and background (70% and above)
          </li>
          <li>
            Come from a low-income household, is orphaned or a vulnerable child
            and/or is living with disability
          </li>
          <li>Attended a government public school</li>
          <li>
            Maintained good grades based on school and background (70% and
            above)
          </li>
          <li>Leadership and moral fitness letter from the primary school</li>
          <li>Have a letter from the local Chief</li>
          <li>Have a high school admission letter</li>
        </ul>
        <br />
        <section id="faq-section">
          <h3 className="font-semibold text-xl mb-2">FAQs</h3>
          <FAQcomponent FAQs={FAQs} />
        </section>
      </>
    </PillarsLayout>
  );
}
