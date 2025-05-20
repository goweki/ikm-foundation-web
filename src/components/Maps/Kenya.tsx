"use client";

import React, { useState, useEffect, useRef } from "react";
import { fetcher } from "@/utils/fetcher"; // Assuming you have a fetcher utility
import PopUp from "../atoms/popup";

interface CountyData {
  [key: string]: {
    name: string;
    capital?: string;
    population?: string;
    area?: string;
  };
}

const countyData: CountyData = {
  KE01: { name: "Mombasa" },
  KE02: { name: "Kwale" },
  KE03: { name: "Kilifi" },
  KE04: { name: "Tana River" },
  KE05: { name: "Lamu" },
  KE06: { name: "Taita Taveta" },
  KE07: { name: "Garissa" },
  KE08: { name: "Wajir" },
  KE09: { name: "Mandera" },
  KE10: { name: "Marsabit" },
  KE11: { name: "Isiolo" },
  KE12: { name: "Meru" },
  KE13: { name: "Tharaka-Nithi" },
  KE14: { name: "Embu" },
  KE15: { name: "Kitui" },
  KE16: { name: "Machakos" },
  KE17: { name: "Makueni" },
  KE18: { name: "Nyandarua" },
  KE19: { name: "Nyeri" },
  KE20: { name: "Kirinyaga" },
  KE21: { name: "Murang'a" },
  KE22: { name: "Kiambu" },
  KE23: { name: "Turkana" },
  KE24: { name: "West Pokot" },
  KE25: { name: "Samburu" },
  KE26: { name: "Trans Nzoia" },
  KE27: { name: "Uasin Gishu" },
  KE28: { name: "Elgeyo-Marakwet" },
  KE29: { name: "Nandi" },
  KE30: { name: "Baringo" },
  KE31: { name: "Laikipia" },
  KE32: { name: "Nakuru" },
  KE33: { name: "Narok" },
  KE34: { name: "Kajiado" },
  KE35: { name: "Kericho" },
  KE36: { name: "Bomet" },
  KE37: { name: "Kakamega" },
  KE38: { name: "Vihiga" },
  KE39: { name: "Bungoma" },
  KE40: { name: "Busia" },
  KE41: { name: "Siaya" },
  KE42: { name: "Kisumu" },
  KE43: { name: "Homa Bay" },
  KE44: { name: "Migori" },
  KE45: { name: "Kisii" },
  KE46: { name: "Nyamira" },
  KE47: { name: "Nairobi" },
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
        const response = await fetcher("/maps/kenya/ke.svg");
        const svgText = await response.text();
        if (mapRef.current) {
          mapRef.current.innerHTML = svgText; //insert svg
          // Select all county <path> elements inside the <g id="features"> group
          const featuresGroup = document.getElementById("features");
          const countyPaths = featuresGroup?.querySelectorAll("path");

          const pointsGroup = document.getElementById(
            "points"
          ) as HTMLDivElement;

          const popupElement = document.getElementById(
            "county-popup"
          ) as HTMLDivElement;

          const labelsGroup = document.getElementById(
            "label_points"
          ) as HTMLDivElement;

          if (!countyPaths || !pointsGroup || !labelsGroup || !popupElement) {
            console.error(
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
              console.log("mouseenter triggered...");
              if (target) {
                // Check target
                const countyId = target.getAttribute("id");
                if (!countyId) {
                  console.error("countyId could not be extracted from target");
                  return;
                } else {
                  setCountyInfo(countyData[countyId]);
                }
                const labelElement = labelsGroup.querySelector("#" + countyId);
                if (!labelElement) {
                  console.error(
                    "points could not be extracted from labelElement using countyId - " +
                      "#" +
                      countyId
                  );
                  return;
                }
                // Extract the cx and cy values as numbers, throwing an error if they are missing
                const cxAttr = labelElement.getAttribute("cx");
                const cyAttr = labelElement.getAttribute("cy");
                if (cxAttr === null || cyAttr === null) {
                  console.error(
                    "Missing 'cx' or 'cy' attributes on the element with id: " +
                      countyId
                  );
                  return;
                }

                const cx = parseFloat(cxAttr);
                const cy = parseFloat(cyAttr);
                popupElement.style.left = `${cx}px`;
                popupElement.style.top = `${cy}px`;
              }
            });

            county.addEventListener("mouseleave", () => {
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
      <div ref={mapRef} id="kenya-map" className="m-auto" />
    </div>
  );
};

export default KenyaMap;
