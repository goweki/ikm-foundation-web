"use client";
import React from "react";
import ReactPlayer from "react-player";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function Hero() {
  const YOUTUBE_VIDEO_URL = "https://youtu.be/mWEX5Y1jLRw?si=h8ugmLEhoe4WzeUX"; // Replace with your video

  return (
    <section className="hero min-h-screen py-20">
      <div className="hero-background"></div>

      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      <div className="hero-content">
        {/* <h1 className="hero-title">Transform Your Vision Into Reality</h1> */}
        <h1 className="hero-title my-12">
          Improving Lives through{" "}
          <span className="!text-purple-500">Responsible</span>
          <br />
          Business
        </h1>
        {/* <p className="hero-subtitle">
          Discover innovative solutions that push boundaries and create
          extraordinary experiences. Join thousands who have already embarked on
          this transformative journey.
        </p> */}

        {/* Dialog for Video */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="video-button">
              <svg className="play-icon" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl w-full aspect-video p-0 border-0 shadow-xl rounded-xl overflow-hidden">
            <VisuallyHidden>
              <DialogHeader>
                <DialogTitle>IKM Foundation</DialogTitle>
                <DialogDescription>IKM Foundation</DialogDescription>
              </DialogHeader>
            </VisuallyHidden>
            <ReactPlayer
              src={YOUTUBE_VIDEO_URL}
              playing
              controls
              width="100%"
              height="100%"
            />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
