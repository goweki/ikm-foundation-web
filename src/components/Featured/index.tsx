"use client";
// import Slider from "react-slick";
import React, { Component } from "react";

export default class MultipleItems extends Component {
  render() {
    return (
      <div className="bg-blue-200 py-20 marginFeature bg-featured">
        <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 ">
          <div className="text-center pt-48 pb-10 md:pt-96">
            <h3 className="text-4xl sm:text-6xl font-bold  my-2">
              Impactful works.
            </h3>
            <h3 className="text-4xl sm:text-6xl font-bold opacity-50 lg:mr-48 my-2">
              Impactful works.
            </h3>
            <h3 className="text-4xl sm:text-6xl font-bold opacity-25 lg:-mr-32 my-2">
              Impactful works.
            </h3>
          </div>

          {/* <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div className="bg-transparent m-3 pb-12 my-10 rounded-3xl">
                  <Image
                    src={items.imgSrc}
                    alt="gaby"
                    width={636}
                    height={620}
                    className="rounded-2xl"
                  />
                  <div className="w-345">
                    <h4 className="sm:text-5xl font-bold sm:pt-6 text-center sm:text-start mt-10 text-white">
                      {items.heading}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </Slider> */}
        </div>
      </div>
    );
  }
}
