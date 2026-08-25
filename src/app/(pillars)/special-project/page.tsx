import FAQcomponent from "@/components/atoms/faqComponent";
import PillarsLayout from "../_components/layout";
import { Heart } from "lucide-react";
// import ImageSlider, { SlideItem } from "@/components/ui/image-slider";

const support = [
  "Enhancing access to safe, supportive learning environments through the construction of school blocks and dormitories for disadvantaged learners in partnership with Amara Charitable Trust,",
  "Improving the learning environment for students at St Maria Goretti-Loitoktok and St Christophers in Kitale through construction of school blocks, and solarising and drilling boreholes to provide safe reliable water.",
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
    question: "What qualifies as a Special Project?",
    answer:
      "Projects that don’t fit under Education, Healthcare, or Vulnerable Groups pillars but have significant community benefit—such as borehole drilling, school infrastructure, or large-scale donation drives.",
  },
  {
    question: "How are these projects initiated?",
    answer:
      "Most are initiated through partnerships, community outreach, or fundraising collaborations. However, we welcome proposals from credible institutions.",
  },
  {
    question: "What criteria do you use to approve funding?",
    answer:
      "We assess community need, feasibility, transparency, and long-term impact. A project must align with our values and have measurable outcomes.",
  },
  {
    question: "Can companies or donors co-fund a project with IKMF?",
    answer:
      "Yes. We actively seek co-funding opportunities. Please fill this form to express your interest by end of January each year.",
  },
];

export default function VulnerableGroup() {
  return (
    <PillarsLayout page="special-project">
      {/* <>
        <div className="relative bg-white rounded-2xl shadow-lg transition-all duration-500 overflow-hidden border border-gray-100">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>

          <div className="relative p-8">
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our special projects are aimed at building community resilience by
              supporting long term sustainability projects such as environmental
              and infrastructure projects. Examples include:
            </p>

            <div className="space-y-3 mb-8">
              {support.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center text-sm text-gray-600"
                >
                  <Heart className="w-4 h-4 mr-2 text-blue-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <br />
        <section id="faq-section">
          <h3 className="font-semibold text-xl mb-2">FAQs</h3>
          <FAQcomponent FAQs={FAQs} />
        </section>
      </> */}

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
