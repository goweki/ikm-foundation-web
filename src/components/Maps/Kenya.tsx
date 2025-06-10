"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { fetcher } from "@/utils/fetcher";
import PopUp from "../atoms/popup";

interface RegionData {
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
  const [regionInfo, setRegionInfo] = useState<{
    name: string;
    [key: string]: unknown;
  } | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [clientX, setClientX] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [clientY, setClientY] = useState(0);

  // Reset selected region and info on unmount
  useEffect(() => {
    return () => {
      setRegionInfo(null);
    };
  }, []);

  // Callback for mouse move on SVG
  const handleMouseMove = useCallback(
    (evt: MouseEvent) => {
      // Client coordinates from the event
      const _clientX: number = evt.clientX;
      const _clientY: number = evt.clientY;
      setClientX(_clientX);
      setClientY(_clientY);

      if (!mapRef.current) return;
      const svg = mapRef.current.querySelector("svg");
      if (svg) {
        // const rect = svg.getBoundingClientRect();
        // const x = evt.clientX - rect.left;
        // const y = evt.clientY - rect.top;

        let point = svg.createSVGPoint();
        // point.x = x;
        // point.y = y;
        point.x = _clientX;
        point.y = _clientY;

        try {
          const ctm = svg.getScreenCTM();
          if (ctm) {
            point = point.matrixTransform(ctm.inverse());
          }
        } catch (e) {
          console.error("Error getting or inverting CTM:", e);
        }

        if (!popupRef.current) return;

        popupRef.current.style.left = `${Math.floor(point.x)}px`;
        popupRef.current.style.top = `${Math.floor(point.y)}px`;
      }
    },
    [setClientX, setClientY]
  );

  //load map
  useEffect(() => {
    const loadMap = async () => {
      try {
        const response = await fetcher("/maps/map_ke_regions.svg");
        const svgText = await response.text();
        if (mapRef.current) {
          mapRef.current.innerHTML = svgText; //insert svg
          const svg = mapRef.current.querySelector("svg");
          if (!svg) {
            console.error(
              "Failed to load or parse the SVG element from the inserted markup."
            );
            return;
          }

          const regionsGroup = document.getElementById("regions");
          const regionsPaths = regionsGroup?.querySelectorAll("path");

          const centersGroup = document.getElementById(
            "centers"
          ) as HTMLDivElement;

          if (!regionsPaths || !centersGroup) {
            console.warn(
              "Failed to parse map: missing - ",
              !regionsPaths
                ? "regions group"
                : !centersGroup
                ? "centers group"
                : null
            );
            return;
          }

          svg.addEventListener("mousemove", handleMouseMove);

          regionsPaths.forEach((county) => {
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
                const regionId = target.getAttribute("id");
                if (!regionId) {
                  console.warn("regionId could not be extracted from target");
                  return;
                } else {
                  setRegionInfo(regionData[regionId]);
                }
                const labelCircle = centersGroup.querySelector("#" + regionId);
                if (!labelCircle) {
                  console.warn(
                    "points could not be extracted from labelElement using countyId - " +
                      "#" +
                      regionId
                  );
                  return;
                }

                // Extract the cx and cy values
                const cxAttr = labelCircle.getAttribute("cx");
                const cyAttr = labelCircle.getAttribute("cy");
                if (cxAttr === null || cyAttr === null) {
                  console.warn(
                    "Missing 'cx' or 'cy' attributes on the element with id: " +
                      regionId
                  );
                  return;
                }
                const cx = parseFloat(cxAttr);
                const cy = parseFloat(cyAttr);

                // Create a point in SVG space
                const pt = svg.createSVGPoint();
                pt.x = cx;
                pt.y = cy;
                const ctm = svg.getScreenCTM();
                if (!ctm) {
                  console.error("Failed to get screen CTM from SVG.");
                  return;
                }
                const screenPoint = pt.matrixTransform(ctm);

                // popupElement.style.position = "absolute";
                // popupElement.style.left = `${screenPoint.x}px`;
                // popupElement.style.top = `${screenPoint.y}px`;

                // popupElement.style.left = `${cx}px`;
                // popupElement.style.top = `${cy}px`;
                console.log(
                  `Region center X: ${cx}, Y: ${cy} , scrrenpoint: ${screenPoint}`
                );
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

              setRegionInfo(null);
            });
          });
        }
      } catch (error) {
        console.error("Error loading SVG:", error);
      }
    };

    loadMap();
  }, [handleMouseMove]);

  return (
    <div id="map-container" className="flex relative overflow-hidden">
      <PopUp popupRef={popupRef} data={regionInfo ?? undefined}></PopUp>
      <div ref={mapRef} id="kenya-map" className="w-full text-blue-500" />
    </div>
  );
};

export default KenyaMap;
