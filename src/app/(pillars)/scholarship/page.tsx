// "use client";

import FAQcomponent from "@/components/atoms/faqComponent";
import PillarsLayout from "../_components/layout";
import { BookOpen, Check } from "lucide-react";

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

const eligibility = [
  "Scored in the 70th percentile in Kenya Junior Secondary Education Assessment (KJSEA) based on school and background (70% and above)",
  "Come from a low-income household, is orphaned or a vulnerable child and/or is living with disability",
  "Attended a government public school",
  "Maintained good grades based on school and background (70% and above)",
  "Leadership and moral fitness letter from the primary school",
  "Have a letter from the local Chief",
  "Have a high school admission letter",
];

const support = [
  "Covers school fees",
  "Mentorship",
  "Material support e.g. tablet, uniforms, set books ",
];

export default function Scholarship() {
  // const searchParams = useSearchParams();
  // const section = searchParams.get("section");
  // if (section=='faq-section') {}

  return (
    <PillarsLayout page="scholarship">
      <>
        <div className="relative bg-white rounded-2xl shadow-lg transition-all duration-500 overflow-hidden border border-gray-100">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>

          <div className="relative p-8">
            <p className="text-gray-600 mb-6 leading-relaxed">
              The IKMF Scholarships Program supports bright students from lower
              socio-economic backgrounds to access secondary school education,
              promoting 100% transition. Each year, we identify students across
              Kenya who demonstrate strong academic potential and significant
              financial need, with a focus on those from vulnerable households
              and orphaned children
            </p>
            <p className="text-gray-600 font-bold mb-4 leading-relaxed">
              What we offer
            </p>
            <div className="space-y-3 mb-8">
              {support.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center text-sm text-gray-600"
                >
                  <BookOpen className="w-4 h-4 mr-2 text-blue-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 font-bold mb-4 leading-relaxed">
              Eligibility
            </p>

            <div className="space-y-3 mb-8">
              {eligibility.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center text-sm text-gray-600"
                >
                  <Check className="w-4 h-4 mr-2 text-blue-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* <Link
              href="/scholarship/apply"
              className="group inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02]"
            >
              Apply for Scholarship
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link> */}
          </div>
        </div>
        <br />
        <section id="faq-section">
          <h3 className="font-semibold text-xl mb-2">FAQs</h3>
          <FAQcomponent FAQs={FAQs} />
        </section>
      </>
    </PillarsLayout>
  );
}
