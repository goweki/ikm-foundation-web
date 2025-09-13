import FAQcomponent from "@/components/atoms/faqComponent";
import PillarsLayout from "../_components/layout";
import { Heart } from "lucide-react";

const support = [
  "Surgeries for children in need",
  "Donations to Faraja Cancer Centre and Kenya Mended Hearts Patients Association (KMHPA)",
];

const FAQs = [
  {
    question: "What kind of healthcare support does IKMF provide?",
    answer:
      "We support life-saving interventions such as surgeries, cancer care, disability support, and emergency medical aid, particularly for children and marginalised individuals.",
  },
  {
    question: "Can individuals apply for medical support?",
    answer:
      "Yes. While most support is through strategic partnerships or through organisations, we also consider individual cases referred through schools, hospitals, or community leaders.",
  },
  {
    question: "How are healthcare cases selected?",
    answer:
      "We prioritise urgent, high-impact interventions—especially where the individual cannot afford treatment and the case has a clear medical plan and cost estimate.",
  },
  {
    question: "How can healthcare organisations partner with IKMF?",
    answer:
      "We welcome proposals from hospitals, cancer centres, or health NGOs aligned with our mission. Please fill this form to express your interest by end of January each year.",
  },
];

export default function Healthcare() {
  return (
    <PillarsLayout page="healthcare">
      <>
        <div className="relative bg-white rounded-2xl shadow-lg transition-all duration-500 overflow-hidden border border-gray-100">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>

          <div className="relative p-8">
            <p className="text-gray-600 mb-6 leading-relaxed">
              We improve access to quality healthcare through raising funds for
              medical fees and donation of medical equipment. Our interventions
              focus on vulnerable individuals who are unable to afford
              treatmentRecent support includes:
            </p>

            <div className="space-y-3 mb-8">
              {support.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center text-sm text-gray-600"
                >
                  <Heart className="w-4 h-4 mr-2 text-blue-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* <div className="space-y-4">
              <Link
                href="/grant"
                className="group inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02]"
              >
                Apply for Grant
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/fap"
                className="group inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02]"
              >
                Apply for Financial Assistance below 200K
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div> */}
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
