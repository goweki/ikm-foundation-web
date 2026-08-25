import {
  Target,
  Lightbulb,
  Users2Icon,
  HandshakeIcon,
  BarChart2Icon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ImageSlider, { SlideItem } from "../ui/image-slider";
import MessageUs from "../MessageUs";
import Image from "next/image";

export default function AboutPage() {
  const _images: SlideItem[] = [
    {
      id: 6926,
      image: "/images/pillars/ikmf-2023-DSC_6926.jpg",
      // name: "Headstart Africa",
    },
    {
      id: 401,
      image: "/gallery/special-projects-loitoktok/DSC_4404.JPG",
      // name: "Special Projects",
    },
    {
      id: 402,
      image: "/gallery/special-projects-loitoktok/DSC_4448.JPG",
      // name: "Special Projects",
    },
    {
      id: 403,
      image: "/gallery/special-projects-loitoktok/DSC_5024.JPG",
      // name: "Special Projects",
    },
    {
      id: 102,
      image: "/images/pillars/headstart_great.jpg",
      // name: "Headstart Africa",
    },
  ];

  return (
    <>
      <p className="text-xl text-gray-600 leading-relaxed max-w-4xl m-auto my-8 text-center px-8">
        We partner with schools, institutions, and community actors to expand
        opportunity and strengthen resilience. Our approach prioritises
        responsible stewardship, measurable results, and transparency to create
        meaningful change.
      </p>

      {/* Image Slider */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto overflow-auto">
          <ImageSlider _slides={_images} />
        </div>
      </section>

      {/* Values Section */}
      <CoreValues />

      {/* Team Section */}
      <Team />

      {/* How We Work */}
      <HowWeWork />

      {/* Message Us */}
      <section className="mx-auto px-4 py-16 bg-blue-50">
        <MessageUs />
      </section>
    </>
  );
}

// DATA
const TEAM = [
  {
    name: "James Kamau",
    role: "Managing Partner",
    image: "/images/about/team-James.jpg",
  },
  {
    name: "Beatrice Nyabira",
    role: "Co-Chair",
    image: "/images/about/team-Beatrice.jpg",
  },
  {
    name: "Kamami Michira",
    role: "Co-Chair",
    image: "/images/about/team-Kamami.jpg",
  },

  {
    name: "Sandra Abongo",
    role: "Responsible Business Coordinator",
    image: "/images/about/team-Sandra.jpg",
  },
];

const VALUES = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To create lasting social impact by investing in education, supporting vulnerable communities, and advancing meaningful special projects that improve lives and build sustainable futures.",
  },
  {
    icon: Lightbulb,
    title: "Purpose-Driven Impact",
    description:
      "We focus our resources where they matter most, empowering learners, protecting vulnerable groups, and funding innovative projects that address real societal challenges.",
  },
];

const HOW_WE_WORK = [
  {
    icon: Users2Icon,
    heading: "Community-led",
    body: "We listen first and design with communities and institutions.",
  },
  {
    icon: HandshakeIcon,
    heading: "Partnership-driven",
    body: "We collaborate to scale what works and avoid duplication.",
  },
  {
    icon: BarChart2Icon,
    heading: "Accountable",
    body: "We track outputs and outcomes to strengthen and improve our programs.",
  },
] as const;

// // ─── Team ────────────────────────────────────

function TeamCard({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) {
  return (
    <div className="group flex flex-col items-center text-center">
      {/* Avatar */}
      <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-2xl bg-slate-100 shadow-md transition-shadow duration-300 group-hover:shadow-xl">
        <Image
          src={image}
          alt={name}
          fill
          sizes="200px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p className="text-sm font-semibold text-slate-800">{name}</p>
      <p className="mt-0.5 text-xs text-slate-500">{role}</p>
    </div>
  );
}

function Team() {
  return (
    <section className="w-full bg-sky-50">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 xl:px-16">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400 text-center">
          The team
        </p>
        <h2 className="mb-10 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl text-center">
          The people behind our work
        </h2>

        <div className="flex flex-wrap justify-center gap-10 sm:gap-14">
          {TEAM.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

// // ─── Values ────────────────────────────────────
function CoreValues() {
  return (
    <section className="w-full bg-sky-100">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 xl:px-16">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-1 m-auto sm:justify-between text-center">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
              What We Stand For
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
              Our Core Values
            </h2>
          </div>
        </div>

        {/* 2×2 grid — stacks to 1 col on mobile, 2 col on sm+ */}
        <div className="grid grid-cols-1 gap-8 overflow-hidden rounded-2xl sm:grid-cols-2">
          {VALUES.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className=" hover:bg-sky-50 transition-all hover:shadow-xl bg-white"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-sky-400" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// // ─── How we work ────────────────────────────────────
function HowWeWork() {
  return (
    <section className="w-full bg-sky-100 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 xl:px-16">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400 text-center">
          Our approach
        </p>
        <h2 className="mb-10 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl text-center">
          How we work
        </h2>

        <ul className="flex flex-col gap-8 sm:gap-6 mx-auto w-fit">
          {HOW_WE_WORK.map(({ icon: Icon, heading, body }) => (
            <li key={heading} className="flex items-start gap-4">
              {/* Icon */}
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-50">
                <Icon
                  className="h-4.5 w-4.5 text-sky-500"
                  size={18}
                  strokeWidth={1.75}
                />
              </span>
              {/* Text */}
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  {heading}
                </p>
                <p className="mt-0.5 text-sm text-slate-500 leading-relaxed">
                  {body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
