"use client";
import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

// Social type
interface Social {
  id: string;
  name: string;
  url: string;
  handle?: string;
  description?: string;
  accent?: string;
}

// Socials data
const socials: Social[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/iseme-kamau-&-maema-advocates/",
    handle: "IKM Advocates",
    description: "Professional updates, legal insights, and careers.",
    accent: "bg-blue-600/10 text-blue-600",
  },
  {
    id: "twitter",
    name: "Twitter",
    url: "https://x.com/IKMAdvocates",
    handle: "@IKMAdvocates",
    description: "Quick updates, realtime conversations, and news.",
    accent: "bg-sky-500/10 text-sky-500",
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/ikmadvocates/?hl=en",
    handle: "@ikmadvocates",
    description: "Visual stories showcasing our culture and impact.",
    accent: "bg-pink-500/10 text-pink-500",
  },
];

export default function SocialCarousel() {
  return (
    <div className="socials-bg py-12" id="social-section">
      <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-medium text-4xl lg:text-6xl text-center text-moss mb-12">
            We Are Social
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-12">
          {socials.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.35 }}
              className="w-full"
            >
              <div className="rounded-2xl shadow-md hover:shadow-lg transition-shadow bg-white flex flex-col h-full">
                <div className="flex items-center gap-4 p-6 border-b">
                  <div
                    className={`flex items-center gap-3 ${s.accent} rounded-full p-2`}
                  >
                    <SocialIcon url={s.url} className="h-6 w-6" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-base font-medium">{s.name}</h3>
                    {s.handle && (
                      <p className="text-sm text-gray-500">{s.handle}</p>
                    )}
                  </div>
                </div>
                {/* 
                <div className="flex flex-row flex-1 m-6">
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex-1 w-full"
                  >
                    <button className="w-full transition-all duration-200 hover:scale-105 py-2 px-4 md:py-4 md:px-8 text-xl md:text-4xl bg-blue-600 text-white hover:bg-linear-to-r hover:from-blue-700 hover:to-purple-700 font-semibold rounded-lg cursor-pointer">
                      Visit {s.name}
                    </button>
                  </a>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// "use client";
// import Slider from "react-slick";
// import React, { Component } from "react";
// import Image from "next/image";

// type YouTubeVideo = {
//   youtubeUrl: string;
// };

// type Props = {
//   events: YouTubeVideo[];
// };

// class Carousels extends Component<Props> {
//   render() {
//     const { events } = this.props;

//     const carouselSettings = {
//       dots: false,
//       infinite: true,
//       slidesToShow: 3,
//       centerMode: true,
//       slidesToScroll: 2,
//       autoplay: false,
//       speed: 500,
//       cssEase: "linear",
//       responsive: [
//         {
//           breakpoint: 1200,
//           settings: { slidesToShow: 2, slidesToScroll: 1 },
//         },
//         {
//           breakpoint: 600,
//           settings: { slidesToShow: 1, slidesToScroll: 1 },
//         },
//       ],
//     };

//     return (
//       <div className="socials-bg py-20" id="blog-section">
//         <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 ">
//           <div className="text-center">
//             <h2 className="font-medium text-4xl lg:text-6xl text-center text-moss mb-12">
//               We Are Social
//             </h2>
//           </div>

//           <div className="mx-12">
//             <Slider {...carouselSettings}>
//               {events.map((event, i) => {
//                 const videoId = getYouTubeId(event.youtubeUrl);
//                 const thumbnailUrl = videoId
//                   ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
//                   : "/images/fallback-thumbnail.jpg";

//                 return (
//                   <div key={i}>
//                     <a
//                       href={event.youtubeUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="block"
//                     >
//                       <Image
//                         src={thumbnailUrl}
//                         alt={`YouTube video ${i + 1}`}
//                         width={389}
//                         height={262}
//                         className="inline-block m-auto rounded-lg shadow-md hover:scale-105 transition-transform"
//                       />
//                     </a>
//                   </div>
//                 );
//               })}
//             </Slider>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default function MultipleItemsWrapper() {
//   return <Carousels events={youtubeVideos} />;
// }

// const youtubeVideos: YouTubeVideo[] = [
//   { youtubeUrl: "https://www.youtube.com/watch?v=84_ZMDgEPRA" },
//   { youtubeUrl: "https://www.youtube.com/watch?v=mWEX5Y1jLRw" },
//   { youtubeUrl: "https://www.youtube.com/watch?v=t4yRqIZIoX0" },
//   { youtubeUrl: "https://www.youtube.com/watch?v=T2-0zX2XM8E" },
// ];

// // Helper function
// function getYouTubeId(url: string): string | null {
//   const regex = /(?:youtube\.com\/.*v=|youtu\.be\/)([^"&?/\s]{11})/;
//   const match = url.match(regex);
//   return match ? match[1] : null;
// }
