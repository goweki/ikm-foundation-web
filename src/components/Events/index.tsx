"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

type YouTubeVideo = {
  youtubeUrl: string;
};

type Props = {
  events: YouTubeVideo[];
};

class Carousels extends Component<Props> {
  render() {
    const { events } = this.props;

    const carouselSettings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      centerMode: true,
      slidesToScroll: 2,
      autoplay: false,
      speed: 500,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: { slidesToShow: 2, slidesToScroll: 1 },
        },
        {
          breakpoint: 600,
          settings: { slidesToShow: 1, slidesToScroll: 1 },
        },
      ],
    };

    return (
      <div className="events-bg py-20" id="blog-section">
        <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 ">
          <div className="text-center">
            <h2 className="font-medium text-4xl lg:text-6xl text-center text-moss mb-12">
              We Are Social
            </h2>
          </div>

          <div className="mx-12">
            <Slider {...carouselSettings}>
              {events.map((event, i) => {
                const videoId = getYouTubeId(event.youtubeUrl);
                const thumbnailUrl = videoId
                  ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                  : "/images/fallback-thumbnail.jpg";

                return (
                  <div key={i}>
                    <a
                      href={event.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Image
                        src={thumbnailUrl}
                        alt={`YouTube video ${i + 1}`}
                        width={389}
                        height={262}
                        className="inline-block m-auto rounded-lg shadow-md hover:scale-105 transition-transform"
                      />
                    </a>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default function MultipleItemsWrapper() {
  return <Carousels events={youtubeVideos} />;
}

const youtubeVideos: YouTubeVideo[] = [
  { youtubeUrl: "https://www.youtube.com/watch?v=84_ZMDgEPRA" },
  { youtubeUrl: "https://www.youtube.com/watch?v=mWEX5Y1jLRw" },
  { youtubeUrl: "https://www.youtube.com/watch?v=t4yRqIZIoX0" },
  { youtubeUrl: "https://www.youtube.com/watch?v=T2-0zX2XM8E" },
];

// Helper function
function getYouTubeId(url: string): string | null {
  const regex = /(?:youtube\.com\/.*v=|youtu\.be\/)([^"&?/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}
