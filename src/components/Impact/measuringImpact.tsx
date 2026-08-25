"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const MeasuringImpact = () => {
  return (
    <section className="space-y-6 px-4 py-12">
      <div className="text-center space-y-4">
        <h2
          className="font-bold text-3xl lg:text-4xl text-center mb-6"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="500"
        >
          Measuring Impact
        </h2>
      </div>

      <Card className="bg-white/80 border-l-4 border-l-blue-600 backdrop-blur-lg overflow-hidden">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Text */}
            <div className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  At IKM Foundation, our work is grounded in a commitment to
                  measurable, lasting change. Across education, healthcare,
                  support to vulnerable groups, and community infrastructure, we
                  apply an evidence-based approach that ensures every
                  intervention delivers value where it matters most. We combine
                  rigorous monitoring tools with on-the-ground insights to
                  understand how our programmes improve lives, and how we can
                  strengthen them.
                </p>

                <p>
                  We track not only the services delivered, but the
                  transformation they enable, students progressing into
                  professional careers, communities accessing better health and
                  sanitation, families regaining stability, and schools gaining
                  the infrastructure needed to thrive. By capturing quantitative
                  outcomes and the human stories behind them, we hold ourselves
                  accountable to the communities we serve and to the partners
                  who make this work possible.
                </p>
              </div>
            </div>

            {/* Illustration */}
            <div className="relative h-64 md:h-auto">
              <Image
                src="/gallery/vulnerable-groups-thika/Sue Tree.jpg"
                alt="Measuring impact illustration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default MeasuringImpact;
