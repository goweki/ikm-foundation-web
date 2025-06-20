"use client";
import Slider from "react-slick";
import React, { Component } from "react";
// import { StarIcon } from "@heroicons/react/24/solid";
// import Image from "next/image";

// CAROUSEL DATA

interface DataType {
  name: string;
  title: string;
  comment: string;
  imgSrc: string;
}

const postData: DataType[] = [
  {
    name: "Kelvin",
    title: "Alumni, Head Start Africa",
    comment:
      "The Head Start Program transformed how I see myself and my future. I left with courage, clarity, and a whole new support system.",
    imgSrc: "/images/testimonial/user1.png",
  },
  {
    name: "Jackie",
    title: "Benefitiary, Health Financial Assistance Program",
    comment:
      "The Health Financial Assistance Program was a lifesaver. I received that cruscial care I needed, just when I needed it and I am forever grateful.",
    imgSrc: "/images/testimonial/user1.png",
  },

  {
    name: "Mwangi",
    title: "Benefitiary, IKMF Scholarship",
    comment:
      "The world is a better place when we step up for help each other. I am greatful to IKMF scholarship for stepping up for me",
    imgSrc: "/images/testimonial/user1.png",
  },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      // centerMode: true,
      slidesToScroll: 2,
      arrows: false,
      autoplay: false,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 450,
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
      <div
        className="bg-testimonial pt-40 pb-32 lg:py-32"
        id="testimonial-section"
      >
        <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 ">
          <div className="text-center">
            <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">
              Stories of Impact
            </h3>
            <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 lg:mr-48 my-4">
              Stories of Impact
            </h3>
            <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-25 lg:-mr-32 my-4">
              Stories of Impact
            </h3>
          </div>

          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i} className="relative">
                {/* <div className="bg-white test-sha m-3 p-10 my-20 rounded-3xl">
                  <h4 className="text-base font-medium text-testColor my-4">
                    {items.comment}
                  </h4>
                  <hr style={{ color: "lightgrey" }} />
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-base font-medium pt-4 pb-2">
                        {items.name}
                      </h3>
                      <h3 className="text-xs font-medium  pb-2 opacity-50">
                        {items.title}
                      </h3>
                    </div>
                  </div>
                </div> */}
                <div className="group duration-300 hover:-skew-x-0 skew-x-6 hover:translate-x-2">
                  <div className="group-hover:duration-200 relative rounded-2xl w-72 h-36 bg-blue-900 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-teal-700 before:right-3 before:top-0 before:w-72 before:h-32 before:-z-10">
                    <span className="text-5xl font-bold">{items.name}</span>
                    <p className="text-amber-300 font-thin">{items.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
