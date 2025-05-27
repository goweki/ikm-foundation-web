import ApplyLayout from "../_components/layout";

// const FAQ = [
//   {
//     question: "Who can apply for the IKMF Scholarship?",
//     answer:
//       "Students who have completed their Kenya Junior Secondary Education Assessment (KJSEA) and are transitioning to senior secondary school. We prioritise academically promising students from low-income households, orphans, vulnerable children, and students with disabilities.",
//   },
//   {
//     question: "What does the scholarship cover?",
//     answer:
//       "The scholarship covers tuition fees, school supplies, and other educational expenses.",
//   },
//   {
//     question: "When do applications open and close?",
//     answer:
//       "Applications open in late December and close around the first or second week of January, depending on the release of national exam results.",
//   },
//   {
//     question: "How does the selection process work?",
//     answer:
//       "Applications are reviewed based on financial need, academic merit, and supporting documents. Shortlisted applicants are invited for interviews and home visits before final decisions are made.",
//   },
//   {
//     question: "How long does the scholarship cover?",
//     answer:
//       "Yes, the scholarship covers the entire three years at senior secondary, subject to academic performance, discipline, and participation in mentorship activities.",
//   },
//   {
//     question: "How do I apply?",
//     answer:
//       "Visit our website in December to access the application form. Make sure to complete it and submit all required documents before the deadline.",
//   },
// ];

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
        <ul className="max-w-md space-y-1 text-gray-800 list-disc list-inside m-3 font-semibold">
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
      </>
    </ApplyLayout>
  );
}
