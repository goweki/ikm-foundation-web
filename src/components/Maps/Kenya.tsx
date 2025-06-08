"use client";

import React, { useState, useEffect, useRef } from "react";
import { fetcher } from "@/utils/fetcher"; // Assuming you have a fetcher utility
import PopUp from "../atoms/popup";

interface CountyData {
  [key: string]: {
    name: string;
    [key: string]: unknown;
  };
}

const regionData: RegionData = {
  western: { name: "western", scholarships: 30 },
  nyanza: { name: "nyanza", projects: 30 },
  "rift-valley": { name: "rift-valley", projects: 30 },
  central: { name: "central", scholarships: 30 },
  nairobi: { name: "nairobi", projects: 30 },
  coast: { name: "coast", scholarships: 30 },
  eastern: { name: "eastern", projects: 30 },
  "north-eastern": { name: "north-eastern", scholarships: 30 },
};

const KenyaMap = () => {
  const [countyInfo, setCountyInfo] = useState<{
    name: string;
    capital?: string;
    population?: string;
    area?: string;
    popupCordinate?: Record<string, number>;
  } | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  // Reset selected county and info on unmount
  useEffect(() => {
    return () => {
      setCountyInfo(null);
    };
  }, []);

  //load map
  useEffect(() => {
    const loadMap = async () => {
      try {
        const response = await fetcher("/maps/map_ke.svg");
        const svgText = await response.text();
        if (mapRef.current) {
          mapRef.current.innerHTML = svgText; //insert svg
          // Select all county <path> elements inside the <g id="features"> group
          const featuresGroup = document.getElementById("features");
          const countyPaths = featuresGroup?.querySelectorAll("path");

          const pointsGroup = document.getElementById(
            "points"
          ) as HTMLDivElement;

          // map center : x,y
          let centerXNum = 0;
          let centerYNum = 0;
          const centerCircle = pointsGroup.querySelector(
            "#c"
          ) as SVGCircleElement;

          if (centerCircle) {
            const centerX = centerCircle.getAttribute("cx");
            const centerY = centerCircle.getAttribute("cy");

            centerXNum = parseFloat(centerX || "0");
            centerYNum = parseFloat(centerY || "0");
          } else {
            console.warn("Circle with ID 'c' not found.");
          }

          const popupElement = document.getElementById(
            "county-popup"
          ) as HTMLDivElement;
          popupElement.style.left = `${centerXNum}px`;
          popupElement.style.top = `${centerYNum}px`;

          const labelsGroup = document.getElementById(
            "label_points"
          ) as HTMLDivElement;

          if (!countyPaths || !pointsGroup || !labelsGroup || !popupElement) {
            console.warn(
              "Failed to parse map: missing - " + !countyPaths
                ? "county svg paths"
                : !pointsGroup
                ? "pointsGroup element"
                : !labelsGroup
                ? "labelsGroup element"
                : !popupElement
                ? "popupElement"
                : null
            );
            return;
          } else {
            console.log("county paths - ", countyPaths);
          }

          countyPaths.forEach((county) => {
            county.addEventListener("mouseenter", (event) => {
              const target = event.target as SVGPathElement;
              if (target) {
                // Option 1: Set the 'fill' attribute to 'currentColor'
                // This makes the path fill inherit the text color of its parent.
                target.setAttribute("fill", "currentColor");

                // Option 2: Set the 'stroke' attribute to 'currentColor'
                // This makes the path stroke inherit the text color of its parent.
                // You might use this for outlines.
                // target.setAttribute('stroke', 'currentColor');

                // If you need to revert or apply a specific color from CSS:
                // target.style.fill = 'initial'; // Reverts to the fill defined in CSS or SVG
                // target.style.fill = 'blue';    // Sets a specific CSS color

                // Check target
                const countyId = target.getAttribute("id");
                if (!countyId) {
                  console.warn("countyId could not be extracted from target");
                  return;
                } else {
                  setCountyInfo(countyData[countyId]);
                }
                const labelElement = labelsGroup.querySelector("#" + countyId);
                if (!labelElement) {
                  console.warn(
                    "points could not be extracted from labelElement using countyId - " +
                      "#" +
                      countyId
                  );
                  return;
                }
                // Extract the cx and cy values as numbers
                const cxAttr = labelElement.getAttribute("cx");
                const cyAttr = labelElement.getAttribute("cy");
                if (cxAttr === null || cyAttr === null) {
                  console.warn(
                    "Missing 'cx' or 'cy' attributes on the element with id: " +
                      countyId
                  );
                  return;
                }

                const cx = parseFloat(cxAttr);
                const cy = parseFloat(cyAttr);
                // popupElement.style.left = `${cx}px`;
                // popupElement.style.top = `${cy}px`;
                console.log(`County center X: ${cx}, Y: ${cy}`);
              }
            });

            county.addEventListener("mouseleave", () => {
              // Option 1: Remove the 'fill' attribute entirely.
              // This will make the path transparent or revert to a fill defined in CSS.
              county.removeAttribute("fill");

              // Option 2: Set the fill to 'none' (fully transparent)
              // county.setAttribute("fill", "none");

              // Option 3: Set the fill to a specific default color (e.g., black)
              // county.setAttribute("fill", "black");

              // Option 4: If you were using 'currentColor' on hover, you might revert to a specific color
              // or remove the attribute if the default is handled by CSS.
              // county.setAttribute("fill", "originalColorValue"); // Replace originalColorValue

              setCountyInfo(null);
            });
          });
        }
      } catch (error) {
        console.error("Error loading SVG:", error);
      }
    };

    loadMap();
  }, []);

  return (
    <div id="map-container" className="flex relative overflow-hidden">
      <PopUp title={countyInfo?.name}></PopUp>
      <div ref={mapRef} id="kenya-map" className="w-full" />
    </div>
  );
};

export default KenyaMap;
