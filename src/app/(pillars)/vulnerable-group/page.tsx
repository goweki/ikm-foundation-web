import FAQcomponent from "@/components/atoms/faqComponent";
import PillarsLayout from "../_components/layout";
import { Heart } from "lucide-react";
// import ImageSlider, { SlideItem } from "@/components/ui/image-slider";

const support = [
  "Supporting children’s homes with essential food and supplies, helping create stable, safe living environments for children in care.",
  "Improving dignity and day-to-day wellbeing for older persons through facility upgrades, including renovations and solar power installation at Nyumba ya Wazee.",
  "Strengthening inclusive learning for students with visual impairment by providing academic materials and essential items at Thika School for the Visually Impaired.",
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
    question: "What kind of support does IKMF provide to vulnerable groups?",
    answer:
      "We offer food and essential item donations, educational materials to orphanages or schools and homes for the elderly.",
  },
  {
    question:
      "Can organisations request support for renovations or infrastructure?",
    answer:
      "Yes. We fund improvement projects that create long-term impact, like installing solar power or drilling boreholes, or building new classrooms and dormitories.",
  },
  {
    question: "How do you choose which groups to support?",
    answer:
      "We consider need, reach, sustainability of the intervention, and the organisation’s track record. Due diligence is part of our review process.",
  },
  {
    question: "Can individuals or small organisations apply for support?",
    answer:
      "Yes. We accept applications from registered homes, schools and organisations that serve vulnerable populations. Please fill this form to express your interest by end of January each year.",
  },
];

export default function VulnerableGroup() {
  return (
    <PillarsLayout page="vulnerable-group">
      {/* ── Description ── */}
      <div className="mb-12 max-w-2xl">
        <p className="text-gray-600 mb-6 leading-relaxed">
          Our Special Projects strengthens community resilience through
          long-term, practical investments, particularly in infrastructure and
          sustainability initiatives that improve everyday life in schools and
          communities.
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
