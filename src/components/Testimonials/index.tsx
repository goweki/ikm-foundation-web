// import TestimonialsSlider from "./_testimonials";

// export default function Testimonials() {
//   return (
//     <section className="bg-testimonial pt-40 pb-32 lg:py-33" id="testimonials">
//       {/* <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
//         <div className="text-center">
//           <h3
//             className="text-4xl sm:text-6xl font-bold text-black my-3"
//             data-aos="fade-up"
//             data-aos-anchor-placement="top-center"
//             data-aos-duration="1000"
//           >
//             Stories of Impact
//           </h3>

//           <h3
//             className="text-4xl sm:text-6xl font-bold text-black/50 lg:mr-48 my-4"
//             data-aos="fade-up"
//             data-aos-anchor-placement="top-center"
//             data-aos-duration="1100"
//           >
//             Stories of Impact
//           </h3>

//           <h3
//             className="text-4xl sm:text-6xl font-bold text-black/25 opacity-25 lg:-mr-32 my-4"
//             data-aos="fade-up"
//             data-aos-anchor-placement="top-center"
//             data-aos-duration="1000"
//           >
//             Stories of Impact
//           </h3>
//         </div>
//         <TestimonialsSlider />
//       </div> */}
//       <div className="text-center mb-6 md:mb-12">
//         <h3
//           className="text-4xl sm:text-6xl font-bold text-black my-3"
//           data-aos="fade-up"
//           data-aos-anchor-placement="top-center"
//           data-aos-duration="1000"
//         >
//           Stories of Impact
//         </h3>

//         <h3
//           className="text-4xl sm:text-6xl font-bold text-black/50 lg:mr-48 my-4"
//           data-aos="fade-up"
//           data-aos-anchor-placement="top-center"
//           data-aos-duration="700"
//         >
//           Stories of Impact
//         </h3>

//         <h3
//           className="text-4xl sm:text-6xl font-bold text-black/25 opacity-25 lg:-mr-32 my-4"
//           data-aos="fade-up"
//           data-aos-anchor-placement="top-center"
//           data-aos-duration="500"
//         >
//           Stories of Impact
//         </h3>
//       </div>
//       <div className="container max-w-xl mx-auto">
//         <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
//           <img
//             src="https://source.unsplash.com/random/100x100?4"
//             alt=""
//             className="w-20 h-20 rounded-full dark:bg-gray-500"
//           />
//           <blockquote className="max-w-lg text-lg italic font-medium text-center">
//             "Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae?
//             Rem unde atque mollitia!"
//           </blockquote>
//           <div className="text-center dark:text-gray-600">
//             <p>Leroy Jenkins</p>
//             <p>CEO of Company Co.</p>
//           </div>
//           <div className="flex space-x-2">
//             <button
//               type="button"
//               aria-label="Page 1"
//               className="w-2 h-2 rounded-full dark:bg-gray-900"
//             ></button>
//             <button
//               type="button"
//               aria-label="Page 2"
//               className="w-2 h-2 rounded-full dark:bg-gray-400"
//             ></button>
//             <button
//               type="button"
//               aria-label="Page 3"
//               className="w-2 h-2 rounded-full dark:bg-gray-400"
//             ></button>
//             <button
//               type="button"
//               aria-label="Page 4"
//               className="w-2 h-2 rounded-full dark:bg-gray-400"
//             ></button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { DataContext, Impact } from "@/app/providers";
import Image from "next/image";
import { useContext } from "react";
import TestimonialCards from "./_testimonialCards";

export default function Testimonials() {
  const dataContext = useContext(DataContext);
  const impact: Impact[] = dataContext?.data?.impact || [];
  return (
    <section className="" id="testimonials">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid items-center gap-4 xl:grid-cols-5">
          <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2">
            <div>
              <h3
                className="text-xl sm:text-5xl font-bold text-white/75 my-3"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-duration="1000"
              >
                Stories of Impact
              </h3>
              <h3
                className="text-xl sm:text-5xl font-bold text-white/25 lg:ml-8 mb-4 -mt-4"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-duration="1100"
              >
                Stories of Impact
              </h3>
            </div>
            <div>
              <div className="mx-auto max-w-xl lg:px-8">
                <div className="mt-6 relative animate-float">
                  <div className="dance-text mb-5 text-left text-white">
                    impact driven
                  </div>
                  <Image
                    src="/images/manage/toggle.svg"
                    alt="toggle-image"
                    width={24}
                    height={24}
                    className="ml-6 -mt-4"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 mx-5 gap-14 md:gap-6 text-white">
                  {impact.map((item, i) => (
                    <div key={i} className="h-fit rounded-xl p-6">
                      <div className="font-semibold mb-1 text-lg md:text-base text-blue-200 border-b">
                        {item.label}
                      </div>
                      <div className="font-semibold text-5xl md:text-2xl tracking-tight ">
                        {item.quantity}
                      </div>
                      <div className="font-normal opacity-75">{item.unit}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <TestimonialCards />
        </div>
      </div>
    </section>
  );
}
