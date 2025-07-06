import FAQcomponent from "@/components/atoms/faqComponent";
import FocusLayout from "../_components/layout";

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
    <FocusLayout page="vulnerable-group">
      <>
        <p>
          IKMF supports abandoned children, elderly individuals, and those
          living in vulnerable conditions. We partner with care homes, schools,
          and shelters to improve living conditions and restore dignity.
        </p>
        <p>Key activities:</p>
        <ul className="max-w-full space-y-1 text-gray-800 list-disc list-inside m-3 mb-0 font-semibold">
          <li>Donating food and essentials to children’s homes</li>
          <li>Renovation and solar power installation at Nyumba ya Wazee</li>
          <li>
            Construction of school blocks and dormitories for disadvantaged
            learners through Amara Charitable Trust
          </li>
          <li>
            Providing academic materials and essential items for visually
            impaired students at Thika School for the Visually Impaired
          </li>
        </ul>
        <br />
        <section id="faq-section">
          <h3 className="font-semibold text-xl mb-2">FAQs</h3>
          <FAQcomponent FAQs={FAQs} />
        </section>
      </>
    </FocusLayout>
  );
}
