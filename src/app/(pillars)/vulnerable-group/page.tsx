import FAQcomponent from "@/components/atoms/faqComponent";
import PillarsLayout from "../_components/layout";
import { Heart } from "lucide-react";

const support = [
  "Donating food and essentials to children’s homes",
  "Renovation and solar power installation at Nyumba ya Wazee",
  "Construction of school blocks and dormitories for disadvantaged learners through Amara Charitable Trust",
  "Providing academic materials and essential items for visually impaired students at Thika School for the Visually Impaired",
];

const FAQs = [
  {
    question: "What kind of support does IKMF provide to vulnerable groups?",
    answer:
      "We offer food and essential item donations, educational materials to orphanages or schools and homes for the elderly.",
  },
  {
    question:
      "Can organisations request support for renovations or infrastructure?",
    answer:
      "Yes. We fund improvement projects that create long-term impact, like installing solar power or drilling boreholes, or building new classrooms and dormitories.",
  },
  {
    question: "How do you choose which groups to support?",
    answer:
      "We consider need, reach, sustainability of the intervention, and the organisation’s track record. Due diligence is part of our review process.",
  },
  {
    question: "Can individuals or small organisations apply for support?",
    answer:
      "Yes. We accept applications from registered homes, schools and organisations that serve vulnerable populations. Please fill this form to express your interest by end of January each year.",
  },
];

export default function VulnerableGroup() {
  return (
    <PillarsLayout page="vulnerable-group">
      <>
        <div className="relative bg-white rounded-2xl shadow-lg transition-all duration-500 overflow-hidden border border-gray-100">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>

          <div className="relative p-8">
            <p className="text-gray-600 mb-6 leading-relaxed">
              IKMF supports abandoned children, elderly individuals, and those
              living in vulnerable conditions. We partner with care homes,
              schools, and shelters to improve living conditions and restore
              dignity. Key activities:
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
