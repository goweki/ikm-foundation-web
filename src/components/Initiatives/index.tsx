"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
  description: string;
  imgSrc: string;
}

const initiativesData: DataType[] = [
  {
    description: "Education",
    imgSrc: "/images/initiatives/talk_students.jpg",
  },
  {
    description: "Infastructure",
    imgSrc: "/images/initiatives/water_use.jpg",
  },
  {
    description: "Community",
    imgSrc: "/images/initiatives/mentorship_indoor.jpg",
  },
  {
    description: "Sustainability",
    imgSrc: "/images/initiatives/water_project_launch.jpg",
  },
  {
    description: "Mentorship",
    imgSrc: "/images/initiatives/mentorship_outdoor.jpg",
  },
  {
    description: "Health",
    imgSrc: "/images/initiatives/health_walk.jpg",
  },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      centerMode: true,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 4000,
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
      <div className="bg-initiatives sm:py-10">
        <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 ">
          <div className="text-center">
            <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">
              We support several initiatives.
            </h3>
            <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 lg:mr-48 my-2">
              We support several initiatives.
            </h3>
            <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-25 lg:-mr-32 my-2">
              We support several initiatives.
            </h3>
          </div>
        </div>

        <Slider {...settings}>
          {initiativesData.map((items, i) => (
            <div key={i}>
              <div className="bg-blue-100 m-3 text-center shadow-xl rounded-3xl">
                <Image
                  className="rounded-2xl rounded-b-none"
                  src={items.imgSrc}
                  alt="initiative_img"
                  width={800}
                  height={533}
                />
                <h3 className="text-xl lg:text-2xl font-bold py-4 lg:py-6">
                  {items.description}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
