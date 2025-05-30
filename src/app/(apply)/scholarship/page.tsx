import FAQcomponent from "@/components/atoms/faqComponent";
import ApplyLayout from "../_components/layout";

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

export default function Scholarship() {
  return (
    <ApplyLayout page="scholarship">
      <>
        <p>
          The IKMF Scholarship programme supports bright students from lower
          socio-economic backgrounds access secondary school education
          increasing opportunities for 100% transition. We identify students
          with strong academic potential and significant financial need, with a
          focus on those from vulnerable households and orphans.
        </p>
        <p>
          The IKMF Scholarship programme supports bright students from lower
          socio-economic backgrounds access secondary school education
          increasing opportunities for 100% transition. We identify students
          with strong academic potential and significant financial need, with a
          focus on those from vulnerable households and orphans.
        </p>
        <ul className="max-w-full space-y-1 text-gray-800 list-disc list-inside m-3 mb-0 font-semibold">
          {/* {FAQ.map((item, index) => (
            <li key={index}>
              <strong>{item.question}</strong> {item.answer}
            </li>
          ))} */}
          <li>
            Covers school fees, mentorship and Material support e.g. tablet,
            uniforms, setbooks
          </li>
          <li>Supports students from across Kenya</li>
          <li>Currently supporting 61 students</li>
          <li>103 students supported between 2015 and 2024</li>
        </ul>
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
        <h3 className="font-semibold text-xl mb-2">FAQs</h3>
        <FAQcomponent FAQs={FAQs} />
      </>
    </ApplyLayout>
  );
}
