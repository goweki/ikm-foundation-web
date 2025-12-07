"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const Reports = () => {
  return (
    <section className="space-y-6 px-4 py-12">
      <div className="text-center space-y-4">
        <h2
          className="font-bold text-3xl lg:text-4xl text-center text-white mb-6"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="500"
        >
          Reports
        </h2>
      </div>

      <Card className="bg-white/80 border-t-4 border-t-blue-600 backdrop-blur-lg overflow-hidden">
        <CardContent className="p-0">
          {/* Illustration Header */}
          <div className="relative h-56 w-full">
            <Image
              src="/gallery/ikmf-2023/DSC_6979.jpg"
              alt="Reports illustration"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="p-6 md:p-8 space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Each year, we publish a Sustainability Report covering the four
              pillars of our work. These reports provide transparent insights
              into our progress, the resources invested, the partnerships
              leveraged, and the change created across education, healthcare,
              vulnerable groups, and special community projects. They highlight
              the milestones reached, lessons learned, and strategic direction
              for the year ahead.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our annual reports invite donors, partners, and the public to
              understand how their support translates into real impact, and how
              we continuously evolve to meet the needs of the communities we
              serve.
            </p>

            {/* Report Item */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-10 h-10 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      2024 Sustainability Report
                    </h3>
                    <p className="text-sm text-gray-600">
                      Annual impact and progress review
                    </p>
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <FileText className="w-4 h-4 mr-2" />
                  View Report
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Reports;
