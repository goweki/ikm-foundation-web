// "use client";

import FAQcomponent from "@/components/atoms/faqComponent";
import FocusLayout from "../_components/layout";
// import { useSearchParams } from "next/navigation";

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
  // const searchParams = useSearchParams();
  // const section = searchParams.get("section");
  // if (section=='faq-section') {}

  return (
    <FocusLayout page="scholarship">
      <>
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
        <section id="faq-section">
          <h3 className="font-semibold text-xl mb-2">FAQs</h3>
          <FAQcomponent FAQs={FAQs} />
        </section>
      </>
    </FocusLayout>
  );
}

// export default function Scholarship() {
//   return (
//     <div className="max-w-7xl mx-auto">
//       <nav
//         aria-label="breadcrumb"
//         className="fixed top-0 left-0 w-full p-4 z-30 bg-gray-800/80 text-gray-200 backdrop-blur-md py-4 flex flex-wrap items-center shadow-sm"
//       >
//         <div className="w-full max-w-7xl mx-auto px-2">
//           <ol className="flex h-8 space-x-2">
//             <li className="flex items-center">
//               <Link
//                 rel="noopener noreferrer"
//                 href="/"
//                 title="Back to homepage"
//                 className="hover:underline flex flex-row justify-center items-center w-fit"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                   className="w-6 h-6 pr-2"
//                 >
//                   <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
//                 </svg>
//                 <span className="uppercase">Home</span>
//               </Link>
//             </li>
//             <li className="flex items-center space-x-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 32 32"
//                 aria-hidden="true"
//                 fill="currentColor"
//                 className="w-2 h-2 mt-1 transform rotate-90 text-gray-400"
//               >
//                 <path d="M32 30.031h-32l16-28.061z"></path>
//               </svg>
//               <Link
//                 rel="noopener noreferrer"
//                 href="/#focus-areas"
//                 className="flex items-center px-1 uppercase hover:underline"
//               >
//                 Focus areas
//               </Link>
//             </li>
//             <li className="flex items-center space-x-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 32 32"
//                 aria-hidden="true"
//                 fill="currentColor"
//                 className="w-2 h-2 mt-1 transform rotate-90 text-gray-400"
//               >
//                 <path d="M32 30.031h-32l16-28.061z"></path>
//               </svg>
//               <span className="flex items-center px-1">Scholarship</span>
//             </li>
//           </ol>
//         </div>
//       </nav>

//       <main className="pt-16">
//         <div className="block">
//           <div
//             className="mb-4 md:mb-0 w-full relative inline-block"
//             style={{ height: "24em" }}
//           >
//             <div
//               className="absolute left-0 bottom-0 w-full h-full z-10"
//               style={{
//                 backgroundImage:
//                   "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
//               }}
//             ></div>
//             <img
//               src="/images/scholarship/scholarship_banner.jpg"
//               className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
//             />
//             <div className="p-4 absolute bottom-0 left-0 z-20">
//               <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
//                 IKMF Scholarship
//               </span>
//               <h2 className="text-4xl font-semibold text-gray-100 leading-tight max-w-3xl">
//                 Supporting bright students from lower/vulnerable socio-economic
//                 backgrounds access secondary school education.
//               </h2>
//             </div>
//           </div>
//         </div>

//         <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
//           {/* <!-- post cards --> */}
//           <div className="w-full lg:w-2/3">
//             {children}
//           </div>

//           {/* <!-- right sidebar --> */}
//           <div className="w-full lg:w-1/3 px-3">
//             {/* <!-- topics --> */}
//             <div className="mb-4">
//               <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2">
//                 {" "}
//                 Popular Topics{" "}
//               </h5>
//               <ul>
//                 <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
//                   <a
//                     href="#"
//                     className="flex items-center text-gray-600 cursor-pointer"
//                   >
//                     <span className="inline-block h-4 w-4 bg-green-300 mr-3"></span>
//                     Nutrition
//                     <span className="text-gray-500 ml-auto">23 articles</span>
//                     <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
//                   </a>
//                 </li>
//                 <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
//                   <a
//                     href="#"
//                     className="flex items-center text-gray-600 cursor-pointer"
//                   >
//                     <span className="inline-block h-4 w-4 bg-indigo-300 mr-3"></span>
//                     Food & Diet
//                     <span className="text-gray-500 ml-auto">18 articles</span>
//                     <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
//                   </a>
//                 </li>
//                 <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
//                   <a
//                     href="#"
//                     className="flex items-center text-gray-600 cursor-pointer"
//                   >
//                     <span className="inline-block h-4 w-4 bg-yellow-300 mr-3"></span>
//                     Workouts
//                     <span className="text-gray-500 ml-auto">34 articles</span>
//                     <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
//                   </a>
//                 </li>
//                 <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
//                   <a
//                     href="#"
//                     className="flex items-center text-gray-600 cursor-pointer"
//                   >
//                     <span className="inline-block h-4 w-4 bg-blue-300 mr-3"></span>
//                     Immunity
//                     <span className="text-gray-500 ml-auto">9 articles</span>
//                     <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* <!-- divider --> */}
//             <div className="border border-dotted"></div>

//             {/* <!-- subscribe --> */}
//             <div className="p-1 mt-4 mb-4">
//               <h5 className="font-bold text-lg uppercase text-gray-700 mb-2">
//                 {" "}
//                 Subscribe{" "}
//               </h5>
//               <p className="text-gray-600">
//                 Subscribe to our newsletter. We deliver the best health related
//                 articles to your inbox
//               </p>
//               <input
//                 placeholder="your email address"
//                 className="text-gray-700 bg-gray-100 rounded-t hover:outline-none p-2 w-full mt-4 border"
//               />
//               <button className="px-4 py-2 bg-indigo-600 text-gray-200 rounded-b w-full capitalize tracking-wide">
//                 Subscribe
//               </button>
//             </div>

//             {/* <!-- divider --> */}
//             <div className="border border-dotted"></div>
//           </div>
//         </div>
//       </main>
//       {/* <!-- main ends here --> */}

//       {/* <!-- footer --> */}
//       <footer className="border-t mt-32 pt-12 pb-32 px-4 lg:px-0">
//         <div className="flex">
//           <div className="w-full md:w-1/3 lg:w-1/4">
//             <h6 className="font-semibold text-gray-700 mb-4">Company</h6>
//             <ul>
//               <li>
//                 {" "}
//                 <a href="#" className="block text-gray-600 py-2">
//                   Team
//                 </a>{" "}
//               </li>
//               <li>
//                 {" "}
//                 <a href="#" className="block text-gray-600 py-2">
//                   About us
//                 </a>{" "}
//               </li>
//               <li>
//                 {" "}
//                 <a href="#" className="block text-gray-600 py-2">
//                   Press
//                 </a>{" "}
//               </li>
//             </ul>
//           </div>

//           <div className="w-full md:w-1/3 lg:w-1/4">
//             <h6 className="font-semibold text-gray-700 mb-4">Content</h6>
//             <ul>
//               <li>
//                 {" "}
//                 <a href="#" className="block text-gray-600 py-2">
//                   Blog
//                 </a>{" "}
//               </li>
//               <li>
//                 {" "}
//                 <a href="#" className="block text-gray-600 py-2">
//                   Privacy Policy
//                 </a>{" "}
//               </li>
//               <li>
//                 {" "}
//                 <a href="#" className="block text-gray-600 py-2">
//                   Terms & Conditions
//                 </a>{" "}
//               </li>
//               <li>
//                 {" "}
//                 <a href="#" className="block text-gray-600 py-2">
//                   Documentation
//                 </a>{" "}
//               </li>
//             </ul>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
