"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
  time: string;
  title: string;
  description: string;
  date: string;
  imgSrc: string;
}

const postData: DataType[] = [
  {
    time: "5 min",
    title: "We Launch One Two Three Four",
    description: "Published on Startupon",
    date: "August 19, 2021",
    imgSrc: "/images/articles/article.png",
  },
  {
    time: "5 min",
    title: "We Launch Two Three Four Five Six Secen",
    description: "Published on Startupon",
    date: "August 19, 2021",
    imgSrc: "/images/articles/article2.png",
  },
  {
    time: "5 min",
    title: "We Launch Three Four Five Six Seven Eight Nine",
    description: "Published on Startupon",
    date: "August 19, 2021",
    imgSrc: "/images/articles/article3.png",
  },
  {
    time: "5 min",
    title: "We Launch Four Five Six Seven Eight Nine Ten",
    description: "Published on Startupon",
    date: "August 19, 2021",
    imgSrc: "/images/articles/article.png",
  },
  {
    time: "5 min",
    title: "We Launch Five Six Seven Eight Nine Ten Eleven",
    description: "Published on Startupon",
    date: "August 19, 2021",
    imgSrc: "/images/articles/article2.png",
  },
  {
    time: "5 min",
    title: "We Launch Six Seven Eight Nine Ten Eleven Twelve",
    description: "Published on Startupon",
    date: "August 19, 2021",
    imgSrc: "/images/articles/article3.png",
  },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
    const settings = {
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
      <div className="bg-slate-300 py-20" id="blog-section">
        <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 ">
          <div className="text-center">
            <h3 className="text-blue text-lg font-normal tracking-widest">
              EVENTS
            </h3>
            <h3 className="text-4xl sm:text-6xl font-bold">
              Our latest events.
            </h3>
          </div>

          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div className="bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative">
                  <Image
                    src={items.imgSrc}
                    alt="gaby"
                    width={389}
                    height={262}
                    className="inline-block m-auto"
                  />

                  <h3 className="absolute bg-blue-800 text-white py-3 px-6 rounded-full article-img">
                    {items.date}
                  </h3>
                  <h4 className="text-2xl font-bold pt-6 text-black">
                    {items.title}
                  </h4>
                  {/* <h4 className="text-2xl font-bold pt-1 text-black">
                    {items.description}
                  </h4> */}

                  <div>
                    <h3 className="text-base font-normal pt-6 pb-2 opacity-75">
                      {items.description}
                    </h3>
                    <h3 className="text-base font-normal pb-1 opacity-75">
                      {items.time}
                    </h3>
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
