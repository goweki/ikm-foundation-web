"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export type SlideItem = {
  id: number;
  name?: string;
  description?: string;
  image: string;
  link?: string;
};

const initialSlides: SlideItem[] = [
  {
    id: 1,
    name: "Scotland",
    description:
      "Experience the mystical Highlands under twilight skies and misty lochs.",
    image:
      "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1074&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Norway",
    description:
      "Chase the Northern Lights under star-lit skies along scenic fjord roads.",
    image:
      "https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?q=80&w=1173&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "New Zealand",
    description:
      "Wander dramatic, mist-laden mountain paths that feel straight out of a dream.",
    image:
      "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=1170&auto=format&fit=crop",
    link: "https://github.com/goweki",
  },
  {
    id: 4,
    name: "Japan",
    description:
      "Discover serene mountain temples shrouded in dusk and ancient forest trails.",
    image:
      "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2070&auto=format&fit=crop",
    link: "https://github.com/goweki",
  },
];

export default function ImageSlider({ _slides = initialSlides }) {
  const [slides, setSlides] = useState(_slides);

  const next = () => {
    setSlides((prev) => [...prev.slice(1), prev[0]]);
  };

  const prev = () => {
    setSlides((prev) => [
      prev[prev.length - 1],
      ...prev.slice(0, prev.length - 1),
    ]);
  };

  return (
    <div className="slider-container">
      {/* SLIDE */}
      <div className="slide">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="slide-item"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* CONTENT */}
            {index === 1 && (
              <div className="absolute left-[100px] top-1/2 w-[300px] -translate-y-1/2 font-system text-[#eee]">
                <h2 className="animate-slide-in text-4xl font-bold uppercase">
                  {slide.name}
                </h2>
                <p className="animate-slide-in-delay mt-3 mb-5">
                  {slide.description}
                </p>
                {slide.link && (
                  <a href={slide.link} target="_blank">
                    <Button
                      variant="secondary"
                      className="animate-slide-in-delay-2 rounded-lg"
                    >
                      See More
                    </Button>
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="absolute bottom-5 flex w-full justify-center gap-5">
        <Button variant="outline" size="icon" onClick={prev}>
          ◁
        </Button>
        <Button variant="outline" size="icon" onClick={next}>
          ▷
        </Button>
      </div>
    </div>
  );
}
