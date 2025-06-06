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
        </div>
      </div>
    );
  }
}
