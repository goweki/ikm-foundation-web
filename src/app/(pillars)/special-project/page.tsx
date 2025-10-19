import FAQcomponent from "@/components/atoms/faqComponent";
import PillarsLayout from "../_components/layout";
import { Heart, UserRoundPlus } from "lucide-react";

const support = [
  "Fundraising for Palmhouse Foundation and Starehe Girls",
  "Sports, disability inclusion, and school infrastructure projects",
  "Drilling a borehole for water access in Kitale",
];

const stats = [
  {
    number: "2,000+",
    description: "2,000+ beneficiaries ",
    icon: UserRoundPlus,
    bg: "bg-yellow-50",
  },
  {
    number: "7M+",
    description: "7M+ KES in donations and in-kind support ",
    icon: UserRoundPlus,
    bg: "bg-green-50",
  },
];

const impact = [
  {
    number: "2,000",
    description: "2,000 beneficiaries",
    icon: UserRoundPlus,
    bg: "bg-yellow-50",
  },
  {
    number: "5+",
    description: "5+ development projects",
    icon: UserRoundPlus,
    bg: "bg-green-50",
  },
  {
    number: "47M+",
    description:
      "47M+ KES invested in education and community support programs",
    icon: UserRoundPlus,
    bg: "bg-green-50",
  },
  {
    number: "230+",
    description: "230+ Scholars",
    icon: UserRoundPlus,
    bg: "bg-green-50",
  },
];

const FAQs = [
  {
    question: "What qualifies as a Special Project?",
    answer:
      "Projects that don’t fit under Education, Healthcare, or Vulnerable Groups pillars but have significant community benefit—such as borehole drilling, school infrastructure, or large-scale donation drives.",
  },
  {
    question: "How are these projects initiated?",
    answer:
      "Most are initiated through partnerships, community outreach, or fundraising collaborations. However, we welcome proposals from credible institutions.",
  },
  {
    question: "What criteria do you use to approve funding?",
    answer:
      "We assess community need, feasibility, transparency, and long-term impact. A project must align with our values and have measurable outcomes.",
  },
  {
    question: "Can companies or donors co-fund a project with IKMF??",
    answer:
      "Yes. We actively seek co-funding opportunities. Please fill this form to express your interest by end of January each year.",
  },
];

export default function VulnerableGroup() {
  return (
    <PillarsLayout page="special-project">
      <>
        <div className="relative bg-white rounded-2xl shadow-lg transition-all duration-500 overflow-hidden border border-gray-100">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>

          <div className="relative p-8">
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our special projects are aimed at building community resilience by
              supporting long term sustainability projects such as environmental
              and infrastructure projects. Examples include:
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

            {/* <p className="text-gray-600 font-bold mb-4 leading-relaxed">
              Stats
            </p> */}
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

            <p className="text-gray-600 font-bold mb-4 leading-relaxed">
              Impact
            </p>
            <div className="max-w-4xl mx-auto mb-8">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                {impact.map(({ number, description, icon: Icon, bg }, i) => (
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
