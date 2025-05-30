"use client";

import { DataContext, Impact } from "@/app/providers";
import Image from "next/image";
import { useContext } from "react";

const ImpactSection = () => {
  const dataContext = useContext(DataContext);
  const impact: Impact[] = dataContext?.data?.impact || [];

  return (
    <div id="services-section">
      <div className="mx-auto max-w-7xl sm:py-8 lg:px-8">
        <div className="mt-6 relative">
          <div className="dance-text mb-5">impact driven</div>
          <Image
            src="/images/manage/toggle.svg"
            alt="toggle-image"
            width={24}
            height={24}
            className="toggleImage"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-14 manage">
          {impact.map((items, i) => (
            <div className="manageTabs text-center p-10" key={i}>
              <h4 className="text-2xl font-bold mb-3">{items.label}</h4>
              <h2 className="text-5xl sm:text-65xl font-extrabold mb-3">
                {items.quantity}+
              </h2>
              <p className="text-sm font-medium mb-6">{items.unit}</p>
              <hr
                style={{ color: "slate-400", width: "50%", margin: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
