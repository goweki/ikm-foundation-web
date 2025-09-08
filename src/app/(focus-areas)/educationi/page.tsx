"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface EducationOption {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageSrc: string;
  imageAlt: string;
  features: string[];
  applyUrl: string;
  gradient: string;
  iconColor: string;
}

const educationOptions: EducationOption[] = [
  {
    id: "scholarship",
    title: "Scholarship Program",
    description:
      "Financial support for outstanding students pursuing higher education in technology and democratic governance.",
    longDescription:
      "Our comprehensive scholarship program provides full financial support for deserving students who demonstrate exceptional academic excellence and a passion for using technology to strengthen democratic processes. Recipients receive tuition coverage, living allowances, and mentorship opportunities.",
    imageSrc:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=300&fit=crop",
    imageAlt: "Students studying together",
    features: [
      "Full tuition coverage for 4 years",
      "Monthly living allowance",
      "Laptop and learning materials",
      "Internship opportunities",
      "Career placement assistance",
    ],
    applyUrl: "/education/scholarship/apply",
    gradient: "from-blue-600 via-purple-600 to-indigo-800",
    iconColor: "text-blue-500",
  },
  {
    id: "mentorship",
    title: "Mentorship Program",
    description:
      "One-on-one guidance from industry experts in technology, civic engagement, and leadership development.",
    longDescription:
      "Connect with seasoned professionals who will guide your journey in technology and civic leadership. Our mentors are carefully selected industry leaders, government officials, and entrepreneurs who are passionate about nurturing the next generation of democratic leaders.",
    imageSrc:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    imageAlt: "Mentor and mentee in discussion",
    features: [
      "Weekly 1-on-1 sessions",
      "Industry networking opportunities",
      "Project collaboration guidance",
      "Career development planning",
      "Leadership skill development",
    ],
    applyUrl: "/education/mentorship/apply",
    gradient: "from-emerald-600 via-teal-600 to-cyan-800",
    iconColor: "text-emerald-500",
  },
];

export default function EducationPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Education Programs
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Empowering the next generation of leaders through education and
              mentorship in technology and democratic governance.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Options Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {educationOptions.map((option) => (
            <div key={option.id} className="relative">
              <div
                className={`group relative overflow-hidden bg-white rounded-2xl shadow-xl ring-1 ring-gray-200 transition-all duration-500 cursor-pointer
                  ${hoveredOption === option.id ? "scale-105 shadow-2xl" : ""}
                  ${
                    selectedOption === option.id
                      ? "ring-2 ring-blue-500 ring-offset-2"
                      : ""
                  }
                `}
                onClick={() =>
                  setSelectedOption(
                    selectedOption === option.id ? null : option.id
                  )
                }
                onMouseEnter={() => setHoveredOption(option.id)}
                onMouseLeave={() => setHoveredOption(null)}
              >
                {/* Gradient Background Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src={option.imageSrc}
                      alt={option.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Floating Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                      {option.id === "scholarship" ? (
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                        </svg>
                      ) : (
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.999 1.999 0 0 0 18.04 8h-.05c-.8 0-1.54.5-1.84 1.25l-1.92 5.78A2 2 0 0 0 16.13 17H18v5h2zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-6H6l2.5-7.5C8.8 7.7 9.6 7 10.5 7S12.2 7.7 12.5 8.5L15 16h-1.5v6h-6z" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {option.title}
                    </h2>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {option.description}
                  </p>

                  {/* Features Preview */}
                  <div className="space-y-2 mb-6">
                    {option.features.slice(0, 3).map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            option.id === "scholarship"
                              ? "bg-blue-500"
                              : "bg-emerald-500"
                          } mr-3`}
                        ></div>
                        {feature}
                      </div>
                    ))}
                    {option.features.length > 3 && (
                      <div className="text-sm text-gray-400 ml-5">
                        +{option.features.length - 3} more benefits
                      </div>
                    )}
                  </div>

                  {/* Apply Button */}
                  <Link href={option.applyUrl}>
                    <button
                      className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform group-hover:scale-105
                      ${
                        option.id === "scholarship"
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-blue-500/25"
                          : "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-emerald-500/25"
                      } shadow-lg hover:shadow-xl`}
                    >
                      Apply Now
                      <svg
                        className="inline-block w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>

                {/* Expanded Details */}
                {selectedOption === option.id && (
                  <div className="border-t border-gray-100 p-8 bg-gray-50/50 animate-fadeIn">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Program Details
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {option.longDescription}
                    </p>

                    <h4 className="text-md font-semibold text-gray-800 mb-3">
                      All Benefits Include:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {option.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <svg
                            className={`w-4 h-4 mr-3 ${option.iconColor}`}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Shape the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of students and professionals who are using
              technology to build stronger democratic institutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/education/scholarship/apply">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Apply for Scholarship
                </button>
              </Link>
              <Link href="/education/mentorship/apply">
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Find a Mentor
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
