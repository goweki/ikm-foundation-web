"use client";

// import { DataContext, Impact } from "@/app/providers";
import Image from "next/image";
// import { useContext } from "react";
import TestimonialCards from "./_testimonialCards";
import MeasuringImpact from "./_measuringImpact";
import TheoryOfChange from "./_theoryOfChange";
import Reports from "./_reports";

export default function Impact() {
  // const dataContext = useContext(DataContext);

  // const impact: Impact[] = dataContext?.data?.impact || [];
  const impact: { quantity: string; description: string }[] = [
    { quantity: "2,000", description: "beneficiaries" },
    { quantity: "5", description: "projects" },
    {
      quantity: "47M+",
      description: "KES invested",
    },
    { quantity: "230", description: "Scholars" },
  ];

  return (
    <section className="" id="testimonials">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid items-center gap-4 xl:grid-cols-5">
          <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2">
            <div>
              <h3
                className="text-xl sm:text-5xl font-bold text-white/75 my-3"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-duration="1000"
              >
                Our Impact
              </h3>
              <h3
                className="text-xl sm:text-5xl font-bold text-white/25 lg:ml-8 mb-4 -mt-4"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-duration="1100"
              >
                Our Impact
              </h3>
            </div>
            <div>
              <div className="mx-auto max-w-xl lg:px-8">
                <div className="mt-6 relative animate-float">
                  <div className="dance-text mb-5 text-left text-white">
                    {/* inspiring change */}
                  </div>
                  <Image
                    src="/images/manage/toggle.svg"
                    alt="toggle-image"
                    width={24}
                    height={24}
                    className="ml-6 -mt-4"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 mx-5 gap-14 md:gap-6 text-white">
                  {impact.map((item, i) => (
                    <div key={i} className="h-fit rounded-xl p-6">
                      <div className="font-semibold text-5xl md:text-2xl tracking-tight border-b">
                        {item.quantity}+
                      </div>
                      <div className="font-normal opacity-75">
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <TestimonialCards />
        </div>
      </div>
      <hr />
      <MeasuringImpact />
      <hr />
      <TheoryOfChange />
      <hr />
      <Reports />
    </section>
  );
}
