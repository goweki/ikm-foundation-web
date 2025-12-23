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

export default function PlayButton() {
  const YOUTUBE_VIDEO_URL = "https://youtu.be/mWEX5Y1jLRw?si=HM7poS4oswKozSaw"; // Replace with your video

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="video-button">
          View More
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
  );
}
