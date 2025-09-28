import FAQcomponent from "@/components/atoms/faqComponent";
import PillarsLayout from "../_components/layout";
import { Handshake, Heart, UserRoundPlus } from "lucide-react";

const support = [
  "Donating food and essentials to children’s homes",
  "Renovation and solar power installation at Nyumba ya Wazee",
  "Construction of school blocks and dormitories for disadvantaged learners through Amara Charitable Trust",
  "Providing academic materials and essential items for visually impaired students at Thika School for the Visually Impaired",
];

const stats = [
  {
    number: "2M",
    description: "Over 2M KES in donations and in-kind support",
    icon: Handshake,
    bg: "bg-yellow-50",
  },
  {
    number: "5",
    description: "Over 500 beneficiaries",
    icon: UserRoundPlus,
    bg: "bg-green-50",
  },
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

            <p className="text-gray-600 font-bold mb-4 leading-relaxed">
              Stats
            </p>
            <div className="max-w-4xl mx-auto mb-8">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                {stats.map(({ number, description, icon: Icon, bg }, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center justify-center p-6 text-center sm:border-0 sm:border-r last:border-r-0 ${bg}`}
                  >
                    <Icon className="w-8 h-8 text-gray-700 mb-3" />
                    <dd className="order-1 text-3xl font-extrabold text-gray-800">
                      {number}
                    </dd>
                    <dt className="order-2 text-sm mt-2 leading-6 text-gray-600">
                      {description}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
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
