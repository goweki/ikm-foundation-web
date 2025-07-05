interface TestimonialCardProp {
  name: string;
  position: string;
  avatar: string;
  review: string;
}

const REVIEWS: TestimonialCardProp[] = [
  {
    name: "Kelvin",
    position: "IKMF Beneficiary",
    avatar: "/images/testimonial/user.svg",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum, quam quis congue faucibus, ipsum tortor maximus justo, sed luctus quam risus sit amet purus.`,
  },
  {
    name: "Kesley",
    position: "Headstart Alumni",
    avatar: "/images/testimonial/user.svg",
    review: `Pellentesque tempor nisl tempus leo egestas vehicula. Curabitur iaculis vel arcu ut auctor. Aliquam blandit, orci at ornare porttitor, est mi pulvinar augue, non commodo nunc lectus eleifend neque.`,
  },
  {
    name: "John",
    position: "Head-Start Alumni",
    avatar: "/images/testimonial/user.svg",
    review: `Bryntum components have streamlined my workflows.`,
  },
  {
    name: "Concilia",
    position: "Grant Benefitiary",
    avatar: "/images/testimonial/user.svg",
    review: `Vestibulum gravida est vel iaculis facilisis. Mauris commodo auctor purus non pharetra. In ac felis aliquam, vestibulum mi sit amet, cursus odio. Aenean sit amet orci eget augue porttitor dignissim.`,
  },
  {
    name: "Bernard",
    position: "IKMF Beneficiary",
    avatar: "/images/testimonial/user.svg",
    review: `Nulla ac egestas mauris. Curabitur id orci accumsan, semper orci ut, auctor nibh. Mauris cursus orci id lorem posuere, sed rutrum quam mollis.`,
  },
];

// const ReviewSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const total = REVIEWS.length;

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % total);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + total) % total);
//   };

//   return (
//     <div className="relative w-full max-w-xl mx-auto py-10">
//       <div className="mt-6 flex justify-center gap-8">
//         <button
//           onClick={prevSlide}
//           className="bg-trasparent px-4 py-2 rounded transition-all duration-300 hover:font-bold hover:text-blue-800 hover:cursor-pointer"
//         >
//           ‹ Prev
//         </button>
//         <button
//           onClick={nextSlide}
//           className="bg-trasparent px-4 py-2 rounded transition-all duration-300 hover:font-bold hover:text-blue-800 hover:cursor-pointer"
//         >
//           Next ›
//         </button>
//       </div>
//       <div className="relative h-80">
//         {REVIEWS.map((review, index) => (
//           <div
//             key={review.id}
//             className={`absolute inset-0 transition-all duration-500 ease-in-out ${
//               index === currentIndex
//                 ? "opacity-100 scale-100 z-10"
//                 : "opacity-0 scale-95 z-0 pointer-events-none"
//             }`}
//           >
//             <div className="bg-white p-6 rounded-xl shadow-lg text-center">
//               <img
//                 src={review.avatar}
//                 alt={review.name}
//                 className="w-50 h-50 rounded-full mx-auto mb-4 border-2 border-gray-300"
//               />
//               <div className="details">
//                 <h4 className="font-bold text-xl">{review.name}</h4>
//                 <p className="text-sm text-gray-500">{review.role}</p>
//               </div>
//               <blockquote className="text-xl italic my-2">
//                 “{review.review}”
//               </blockquote>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ReviewSlider;

export default function Testimonials() {
  return (
    <div className="p-6 xl:col-span-3">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid content-center gap-4">
          {REVIEWS.slice(0, 2).map((review, i) => (
            <div key={i}>
              <TestimonialCard testimonial={review} />
            </div>
          ))}
        </div>
        <div className="grid content-center gap-4">
          {REVIEWS.slice(3, 5).map((review, i) => (
            <div key={i}>
              <TestimonialCard testimonial={review} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: TestimonialCardProp;
}) {
  return (
    <div className="p-6 rounded shadow-md bg-white/75 backdrop-blur-lg">
      <p>{testimonial.review}</p>
      <div className="flex items-center mt-4 space-x-4">
        <img
          src={testimonial.avatar}
          alt="photo"
          className="w-12 h-12 bg-center bg-cover rounded-full"
        />
        <div>
          <p className="text-lg font-semibold">{testimonial.name}</p>
          <p className="text-sm text-gray-600">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
}
