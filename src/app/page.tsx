"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = +targetDate - +new Date();
  let timeLeft: TimeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

export default function LandingSection() {
  const targetDate = React.useMemo(() => {
    const date = new Date("2025-12-12T00:00:00Z");
    return date;
  }, []);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({});
  const [launched, setLaunched] = useState<boolean>(false);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const initialTimeLeft = calculateTimeLeft(targetDate);
    setTimeLeft(initialTimeLeft);
    const isLaunchedInitially =
      (initialTimeLeft.days === 0 || initialTimeLeft.days === undefined) &&
      (initialTimeLeft.hours === 0 || initialTimeLeft.hours === undefined) &&
      (initialTimeLeft.minutes === 0 ||
        initialTimeLeft.minutes === undefined) &&
      (initialTimeLeft.seconds === 0 || initialTimeLeft.seconds === undefined);

    if (isLaunchedInitially) {
      setLaunched(true);
    }

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);

      const isLaunchedNow =
        (newTimeLeft.days === 0 || newTimeLeft.days === undefined) &&
        (newTimeLeft.hours === 0 || newTimeLeft.hours === undefined) &&
        (newTimeLeft.minutes === 0 || newTimeLeft.minutes === undefined) &&
        (newTimeLeft.seconds === 0 || newTimeLeft.seconds === undefined);

      if (isLaunchedNow) {
        setLaunched(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="banner-bg min-h-screen flex items-center justify-center text-white p-4 sm:p-8">
      <div className="max-w-md mx-auto text-center bg-blue-500/10 backdrop-blur-sm rounded-xl shadow-lg p-12">
        <Image
          src="/logo_onDark.png"
          alt="Logo"
          height={124}
          width={124}
          className="mx-auto mb-4 rounded-full"
        />

        <p className="text-lg md:text-2xl text-gray-300 mb-2 font-inter">
          IKM Foundation
        </p>

        <h1 className="text-4xl md:text-6xl sm:text-5xl font-extrabold text-white mb-6 font-inter">
          Coming Soon
        </h1>

        <div
          className={`
            countdown flex justify-center items-center space-x-4 sm:space-x-6
            text-2xl sm:text-3xl font-bold rounded-lg p-4 shadow bg-blue-800/50
            ${launched ? "text-teal-400" : "text-white"}
          `}
        >
          {launched ? (
            <div>Launched!</div>
          ) : (
            <>
              {isClient &&
              (timeLeft.days !== undefined ||
                timeLeft.hours !== undefined ||
                timeLeft.minutes !== undefined ||
                timeLeft.seconds !== undefined) ? (
                <>
                  <div className="flex flex-col items-center">
                    {timeLeft.days}
                    <span className="text-sm font-normal text-gray-400">
                      Days
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    {timeLeft.hours}
                    <span className="text-sm font-normal text-gray-400">
                      Hours
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    {timeLeft.minutes}
                    <span className="text-sm font-normal text-gray-400">
                      Minutes
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    {timeLeft.seconds}
                    <span className="text-sm font-normal text-gray-400">
                      Seconds
                    </span>
                  </div>
                </>
              ) : (
                <div>Loading Countdown...</div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
