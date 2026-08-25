import FAQcomponent from "@/components/atoms/faqComponent";
import PillarsLayout from "../_components/layout";
import { Heart } from "lucide-react";
// import ImageSlider, { SlideItem } from "@/components/ui/image-slider";

const support = [
  "Strengthening access to cancer care by supporting patient and facility needs at Faraja Cancer Centre, helping reduce barriers to timely treatment and supportive care.",
  "Enabling life-changing surgical care for children through targeted support that helps children in need receive critical procedures they might otherwise miss.",
  "Improving healthcare capacity through equipment and essential supplies, supporting facilities and frontline delivery where gaps affect patient outcomes.",
  "Providing practical medical support for individuals and families facing urgent health needs, prioritising interventions that ease financial strain and improve recovery prospects.",
];

// const _images: SlideItem[] = [
//   {
//     id: 6926,
//     image: "/images/pillars/ikmf-2023-DSC_6926.jpg",
//     // name: "Headstart Africa",
//   },
//   {
//     id: 401,
//     image: "/gallery/special-projects-loitoktok/DSC_4404.JPG",
//     // name: "Special Projects",
//   },
//   {
//     id: 402,
//     image: "/gallery/special-projects-loitoktok/DSC_4448.JPG",
//     // name: "Special Projects",
//   },
//   {
//     id: 403,
//     image: "/gallery/special-projects-loitoktok/DSC_5024.JPG",
//     // name: "Special Projects",
//   },
//   {
//     id: 102,
//     image: "/images/pillars/headstart_great.jpg",
//     // name: "Headstart Africa",
//   },
// ];

const FAQs = [
  {
    question: "What kind of healthcare support does IKMF provide?",
    answer:
      "We support life-saving interventions such as surgeries, cancer care, disability support, and emergency medical aid, particularly for children and marginalised individuals.",
  },
  {
    question: "Can individuals apply for medical support?",
    answer:
      "Yes. While most support is through strategic partnerships or through organisations, we also consider individual cases referred through schools, hospitals, or community leaders.",
  },
  {
    question: "How are healthcare cases selected?",
    answer:
      "We prioritise urgent, high-impact interventions, especially where the individual cannot afford treatment and the case has a clear medical plan and cost estimate.",
  },
  {
    question: "How can healthcare organisations partner with IKMF?",
    answer:
      "We welcome proposals from hospitals, cancer centres, or health NGOs aligned with our mission. Please fill this form to express your interest by end of January each year.",
  },
];

export default function Healthcare() {
  return (
    <PillarsLayout page="healthcare">
      {/* ── Description ── */}
      <div className="mb-12 max-w-2xl">
        <p className="text-gray-600 mb-6 leading-relaxed">
          Access to quality healthcare can be the difference between crisis and
          recovery. We improve access to quality healthcare through raising
          funds for medical fees and donation of medical equipment. We focus on
          support that makes care more accessible, so patients can receive
          timely treatment with dignity and reduced burden on families.
        </p>

        <div className="space-y-3 mb-8">
          {support.map((item, i) => (
            <div key={i} className="flex items-center text-sm text-gray-600">
              <Heart className="w-4 h-4 mr-2 text-blue-500" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── IMAGE COROUSAL ── */}
      {/* <div className="max-w-4xl mx-auto overflow-auto">
        <ImageSlider _slides={_images} />
      </div> */}

      {/* ── FAQ ── */}
      <section id="faq-section" className="mt-12">
        <h3 className="font-semibold text-xl mb-2">FAQs</h3>
        <FAQcomponent FAQs={FAQs} />
      </section>
    </PillarsLayout>
  );
}
