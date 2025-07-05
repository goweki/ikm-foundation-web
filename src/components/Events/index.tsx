"use client";
import Slider from "react-slick";
import React, { Component, useContext } from "react";
import Image from "next/image";
import { DataContext, Event as EventType } from "@/app/providers";

type Props = {
  events: EventType[];
};

class MultipleItems extends Component<Props> {
  render() {
    const { events } = this.props;

    const carouselSettings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      centerMode: true,
      slidesToScroll: 2,
      // arrows: true,
      autoplay: false,
      speed: 500,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <>
        <div className="events-bg py-20" id="blog-section">
          <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 ">
            <div className="text-center">
              <h2
                className="font-medium text-4xl lg:text-6xl text-center text-moss mb-12"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-duration="1000"
              >
                Our latest events.
              </h2>
            </div>

            <Slider {...carouselSettings}>
              {events.map((event, i) => (
                <div key={i}>
                  <div className="bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative">
                    <Image
                      src={
                        event.image &&
                        Array.isArray(event.image) &&
                        event.image.length > 0 &&
                        event.image[0]?.url
                          ? (event.image[0].url as string)
                          : "/images/events/calendar.webp"
                      }
                      alt="event-image"
                      width={389}
                      height={262}
                      className="inline-block m-auto rounded-2xl"
                    />

                    <h3 className="absolute bg-blue-800 text-white py-3 px-6 rounded-full article-img">
                      {event.date}
                    </h3>
                    <h4 className="text-2xl font-bold pt-6 text-black">
                      {event.name}
                    </h4>
                    {/* <h4 className="text-2xl font-bold pt-1 text-black">
                    {items.description}
                  </h4> */}

                    <div>
                      <h3 className="text-base font-normal py-2 opacity-75">
                        {event.description}
                      </h3>
                      {/* <h3 className="text-base font-normal pb-1 opacity-75">
                      {items.date}
                    </h3> */}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </>
    );
  }
}

export default function MultipleItemsWrapper() {
  const dataContext = useContext(DataContext);
  const events: EventType[] = dataContext?.data?.events || [];

  return <MultipleItems events={events} />;
}
