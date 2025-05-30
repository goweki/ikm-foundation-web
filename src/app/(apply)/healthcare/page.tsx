import FAQcomponent from "@/components/atoms/faqComponent";
import ApplyLayout from "../_components/layout";

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
    <ApplyLayout page="healthcare">
      <>
        <p>
          We improve access to quality healthcare through raising funds for
          medical fees and donation of medical equipment. Our interventions
          focus on vulnerable individuals who are unable to afford treatment.
        </p>
        <p>Recent support includes:</p>
        <ul className="max-w-full space-y-1 text-gray-800 list-disc list-inside m-3 mb-0 font-semibold">
          <li>Surgeries for children in need</li>
          <li>
            Donations to Faraja Cancer Centre and Kenya Mended Hearts Patients
            Association (KMHPA)
          </li>
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
