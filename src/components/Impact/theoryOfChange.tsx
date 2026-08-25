"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Heart, Building2, Target } from "lucide-react";

const TheoryOfChange = () => {
  const theoryOfChangeData = [
    {
      title: "Inputs",
      icon: Target,
      color: "bg-blue-500",
      items: [
        "Financial support",
        "Scholarships",
        "Programme staff time",
        "Technical partners",
        "Training resources",
        "Community partnerships",
        "Donor contributions",
      ],
    },
    {
      title: "Activities",
      icon: TrendingUp,
      color: "bg-green-500",
      items: [
        "Scholarship disbursements",
        "Leadership bootcamps",
        "Mentorship cycles",
        "Work placements",
        "Health outreaches",
        "Psychosocial and material support",
        "WASH improvements",
        "Classroom and dormitory upgrades",
        "Provision of assistive or learning materials",
      ],
    },
    {
      title: "Outputs",
      icon: Users,
      color: "bg-purple-500",
      items: [
        "Students supported",
        "Training hours delivered",
        "Health beneficiaries reached",
        "Vulnerable households assisted",
        "Improved learning and sanitation facilities",
        "Strengthened partner network",
      ],
    },
    {
      title: "Outcomes",
      icon: Heart,
      color: "bg-orange-500",
      items: [
        "Improved academic progress",
        "Enhanced career readiness",
        "Better health and hygiene outcomes",
        "Increased safety, dignity and well-being for vulnerable groups",
        "Stronger school environments",
      ],
    },
    {
      title: "Long-Term Impact",
      icon: Building2,
      color: "bg-rose-500",
      items: [
        "Social mobility for disadvantaged youth",
        "Healthier and safer communities",
        "Increased access to opportunities",
        "Stable and inclusive community systems",
        "Long-term improvements in quality of life",
      ],
    },
  ];

  return (
    <section className="space-y-8 px-4 py-12">
      {/* <div className="w-20 h-1 bg-blue-600 mx-auto"></div> */}
      <div className="text-center space-y-4">
        <h2
          className="font-bold text-3xl lg:text-4xl text-center text-moss mb-6"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="500"
        >
          Our Theory of Change
        </h2>
        <p className="text-lg opacity-80 max-w-3xl mx-auto">
          Our strategic framework connects resources and activities to
          meaningful, lasting outcomes
        </p>
      </div>

      {/* Desktop View - Horizontal Flow */}
      <div className="hidden lg:grid lg:grid-cols-5 gap-4">
        {theoryOfChangeData.map((stage, index) => {
          const Icon = stage.icon;
          return (
            <div key={stage.title} className="relative">
              <Card className="h-full hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-lg">
                <CardHeader className="pb-3">
                  <div
                    className={`${stage.color} w-12 h-12 rounded-lg flex items-center justify-center mb-3`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{stage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {stage.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-600 flex items-start"
                      >
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              {index < theoryOfChangeData.length - 1 && (
                <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                  <div className="w-4 h-4 rotate-45 border-t-2 border-r-2 border-gray-400"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile/Tablet View - Vertical Stack */}
      <div className="lg:hidden space-y-6">
        {theoryOfChangeData.map((stage, index) => {
          const Icon = stage.icon;
          return (
            <div key={stage.title} className="relative">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div
                      className={`${stage.color} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{stage.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {stage.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-600 flex items-start"
                      >
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              {index < theoryOfChangeData.length - 1 && (
                <div className="flex justify-center py-2">
                  <div className="w-1 h-8 bg-gray-300"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TheoryOfChange;
