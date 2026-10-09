/**
 *  ------------------
 *  VERSION A
 *  ------------------
 */

// import PlayButton from "./play-button";

// export default function Hero() {
//   return (
//     <section className="hero min-h-screen py-20">
//       <div className="hero-background"></div>

//       <div className="floating-elements">
//         <div className="floating-element"></div>
//         <div className="floating-element"></div>
//         <div className="floating-element"></div>
//       </div>

//       <div className="hero-content">
//         {/* <h1 className="hero-title">Transform Your Vision Into Reality</h1> */}
//         <h1 className="hero-title my-12">
//           Improving Lives through <span className="">Responsible</span>
//           <br />
//           Business
//         </h1>
//         {/* <p className="hero-subtitle">
//           Discover innovative solutions that push boundaries and create
//           extraordinary experiences. Join thousands who have already embarked on
//           this transformative journey.
//         </p> */}

//         <PlayButton />
//       </div>
//     </section>
//   );
// }

/**
 *  ------------------
 *  VERSION B
 *  ------------------
 */
import { buttonVariants } from "@/components/ui/button";
import DonateModal from "../../atoms/DonateModal";
import Link from "next/link";
import { cn } from "@/lib/utils";

const TextBlock = () => {
  return (
    <div className="flex md:w-1/2 flex-col gap-6">
      <h1 className="font-serif text-3xl text-white font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl 2xl:text-6xl">
        Improving lives through{" "}
        <em className="not-italic text-sky-400">education</em>, healthcare
        {" & "} <em className="not-italic text-sky-400">community</em> support
      </h1>
      <p className="text-white text-xl">
        IKM Foundation invests in young people and communities across Kenya
        through four pillars: Education, Healthcare, Vulnerable Groups, and
        Special Projects.
      </p>
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <DonateModal buttonLocation="hero" />

        <Link
          href="/impact"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "text-white hover:border-none",
          )}
        >
          See Our Impact
        </Link>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="banner"
      className="banner-bg bg-cover bg-center w-full min-h-screen bg-no-repeat pt-20 md:pt-24 flex items-center"
    >
      <div className="w-[90%] mx-auto h-full flex items-center justify-between py-10">
        <TextBlock />
      </div>
    </section>
  );
};
export default Hero;

/**
 *  ------------------
 *  VERSION C
 *  ------------------
 */

// "use client";

// import { useState, useCallback } from "react";
// import Image from "next/image";
// import { ArrowRight, Play } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// // ─── Constants ────────────────────────────────────────────────────────────────

// /** Replace with your real YouTube video ID, e.g. "dQw4w9WgXcQ" */
// const YOUTUBE_VIDEO_ID = "YOUR_VIDEO_ID";
// // ─── Sub-components ───────────────────────────────────────────────────────────

// function TextBlock() {
//   return (
//     <div className="flex flex-col gap-6 mt-6">
//       <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
//         United in <em className="not-italic text-sky-400">Vision</em>
//         {" & "}Mission
//       </h1>
//
//       <div className="flex flex-wrap items-center gap-4 pt-2">
//         <Button
//           size="lg"
//           className="rounded-full bg-sky-500 px-8 text-white shadow-lg shadow-sky-500/20 hover:bg-sky-400 transition-colors"
//         >
//           Get Involved
//           <ArrowRight className="ml-2 h-4 w-4" />
//         </Button>

//         <Button
//           size="lg"
//           variant="ghost"
//           className="rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
//         >
//           Our Story
//         </Button>
//       </div>
//     </div>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────

// interface VideoBlockProps {
//   isPlaying: boolean;
//   onPlay: () => void;
// }

// function VideoBlock({ isPlaying, onPlay }: VideoBlockProps) {
//   return (
//     <div className="relative w-full">
//       {/* Ambient glow behind card */}
//       <div
//         aria-hidden
//         className="absolute -inset-4 rounded-3xl opacity-20 pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(ellipse at 60% 40%, #38bdf8 0%, transparent 70%)",
//         }}
//       />

//       <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/60">
//         <div className="relative aspect-video w-full bg-black">
//           {isPlaying ? (
//             // YouTube iframe — no <video> hacks needed, autoplay via URL param
//             <iframe
//               src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
//               title="Watch our story"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               className="absolute inset-0 h-full w-full border-0"
//             />
//           ) : (
//             <>
//               {/* Poster */}
//               <Image
//                 src="/hero-poster.jpg" // ← replace with your poster
//                 alt="Watch our story"
//                 fill
//                 priority
//                 sizes="(max-width: 768px) 100vw, 50vw"
//                 className="object-cover transition-transform duration-500 hover:scale-[1.02]"
//               />

//               {/* Vignette overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

//               {/*
//                * Play button — pill style, frosted glass.
//                * Deliberately understated: no giant coloured circle,
//                * just a small filled Play icon + label.
//                */}
//               <button
//                 onClick={onPlay}
//                 aria-label="Play video: Watch our story"
//                 className={cn(
//                   "group absolute inset-0 flex items-center justify-center",
//                   "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400",
//                   "focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 rounded-2xl",
//                 )}
//               >
//                 <span
//                   className={cn(
//                     "flex items-center gap-2.5 rounded-full",
//                     "bg-black/30 backdrop-blur-sm border border-white/15",
//                     "px-5 py-2.5 text-white/90 text-sm font-medium tracking-wide",
//                     "transition-all duration-300",
//                     "group-hover:bg-black/50 group-hover:border-white/25 group-hover:scale-105",
//                   )}
//                 >
//                   {/* Solid-filled play icon — subtle, not a garish button */}
//                   <Play
//                     className="h-3.5 w-3.5 text-sky-300 fill-sky-300 group-hover:text-sky-200 group-hover:fill-sky-200 transition-colors"
//                     strokeWidth={0}
//                   />
//                   Watch our story
//                 </span>
//               </button>
//             </>
//           )}
//         </div>
//       </div>

//       <p className="mt-3 text-center text-xs text-slate-500">
//         See how your support transforms lives in Cité Soleil, Haiti
//       </p>
//     </div>
//   );
// }

// // ─── Page-level component ─────────────────────────────────────────────────────

// export default function HeroSection() {
//   const [isPlaying, setIsPlaying] = useState(false);

//   // Stable reference — avoids unnecessary re-renders of VideoBlock
//   const handlePlay = useCallback(() => setIsPlaying(true), []);

//   return (
//     <section className="relative flex py-28 w-full items-center overflow-hidden banner-bg bg-cover">
//       {/* Subtle cross-hatch texture */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0 opacity-[0.04]"
//       />

//       <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2 md:items-center md:gap-16 xl:px-16">
//         <TextBlock />
//         <VideoBlock isPlaying={isPlaying} onPlay={handlePlay} />
//       </div>
//     </section>
//   );
// }
