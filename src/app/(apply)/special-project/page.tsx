import FAQcomponent from "@/components/atoms/faqComponent";
import ApplyLayout from "../_components/layout";

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
    <ApplyLayout page="special-project">
      <>
        <p>
          Our special projects are aimed at building community resilience by
          supporting long term sustainability projects such as environmental and
          infrastructure projects.
        </p>
        <p>Examples include::</p>
        <ul className="max-w-full space-y-1 text-gray-800 list-disc list-inside m-3 mb-0 font-semibold">
          <li>Fundraising for Palmhouse Foundation and Starehe Girls</li>
          <li>
            Sports, disability inclusion, and school infrastructure projects
          </li>
          <li>Drilling a borehole for water access in Kitale</li>
        </ul>
        <br />
        <section id="faq-section">
          <h3 className="font-semibold text-xl mb-2">FAQs</h3>
          <FAQcomponent FAQs={FAQs} />
        </section>
      </>
    </ApplyLayout>
  );
}
