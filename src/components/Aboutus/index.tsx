import Image from "next/image";
import Link from "next/link";

import textConfig from "@/config/copy.json";

interface datatype {
  title: string;
  description: string;
  backgroundImage: string;
  href: string;
}

const Aboutdata: datatype[] = [
  {
    title: "Education",
    backgroundImage: "/images/focus-areas/headstart_square.jpg",
    description: textConfig.pages.education.description,
    href: "/education",
  },
  {
    title: "Healthcare",
    backgroundImage: "/images/focus-areas/health_square.jpg",
    description: textConfig.pages.healthcare.description,
    href: "/healthcare",
  },
  {
    title: "Vulnerable Groups",
    backgroundImage: "/images/focus-areas/vulnerable_group_square.jpg",
    description: textConfig.pages["vulnerable-group"].description,
    href: "/vulnerable-group",
  },
  {
    title: "Special projects",
    backgroundImage: "/images/focus-areas/specialproject_square.jpg",
    description: textConfig.pages["special-project"].description,
    href: "/special-project",
  },
];

const Aboutus = () => {
  return (
    <>
      <section
        id="about-us"
        className="about-us-bg min-h-screen pt-20 flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 py-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left bg-white/70 p-8 rounded-xl backdrop-blur-sm shadow-lg">
              <div className="space-y-6">
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-moss shadow-md">
                  <span className="block">Who We Are</span>
                  {/* <span className="block font-light">Are</span> */}
                </h1>

                <p className="text-lg text-text-dark/90 max-w-lg mx-auto lg:mx-0">
                  Founded in 2011 as the CSR platform of IKM Advocates, IKM
                  Foundation was established to promote lasting,
                  community-driven change by supporting access to education,
                  healthcare, and inclusive opportunities for vulnerable groups.
                  Our mission is to transform lives through impactful
                  partnerships and sustainable programmes.
                </p>
                <p className="mb-2 italic">
                  Empowering communities through access to education, healthcare
                  and social support.
                </p>
              </div>

              {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="#"
                  className="px-8 py-3 border border-text-dark text-text-dark font-medium rounded-full hover:bg-white transition-colors"
                >
                  The Board
                </Link>
                <Link
                  href="#"
                  className="px-8 py-3 border border-text-dark text-text-dark font-medium rounded-full hover:bg-white transition-colors"
                >
                  More About Us
                </Link>
              </div> */}
            </div>

            <div className="relative animate-float">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-cream/50">
                <Image
                  src="/images/about-us/mentorship_03.jpg"
                  alt="mentorship_img"
                  height={1201}
                  width={1805}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white py-16">
        <div id="pillars" className="max-w-7xl mx-auto px-6">
          <h2 className="font-light text-4xl lg:text-6xl text-center text-moss mb-12">
            Our Foundation Pillars
          </h2>

          <div className="flex flex-wrap items-center justify-center mt-10 lg:mt-16 gap-4 lg:gap-8">
            {Aboutdata.map((item, i) => (
              <article
                key={i}
                className="group relative aspect-video h-96 w-[36rem] overflow-hidden rounded-xl shadow-md hover:shadow-2xl"
              >
                {/* Background image */}
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src={item.backgroundImage}
                  alt="Foundation Pillar"
                />

                {/* Dark overlay for hover */}
                <div className="absolute inset-0 bg-black/20 transition-colors duration-300 ease-out group-hover:bg-black/50" />

                {/* Gradient + content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent to-90% text-white transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-black/60 group-hover:transition-all group-hover:duration-500">
                  <h2 className="absolute bottom-8 left-8 m-0 font-extrabold uppercase transition-all delay-300 duration-100 ease-out group-hover:bottom-1/2 group-hover:delay-0 group-hover:duration-300">
                    {item.title}
                  </h2>
                  <p className="absolute left-8 top-1/2 line-clamp-3 max-w-[80%] pt-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:delay-500 group-hover:duration-300">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="absolute bottom-8 left-8 max-w-[80%] rounded-lg border px-4 py-2 uppercase opacity-0 transition-opacity ease-out group-hover:opacity-100 group-hover:transition-opacity group-hover:delay-500 group-hover:duration-300 hover:border-blue-400 hover:text-blue-400"
                  >
                    find out more
                  </Link>
                </div>
              </article>
            ))}

            {/* <Link
                href={item.href}
                key={i}
                className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
               
                <div
                  style={{
                    backgroundImage: `url('${item.backgroundImage}')`,
                  }}
                  className="absolute inset-0 bg-cover bg-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>

           
                <div className="absolute inset-0 glass-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="w-12 h-12 bg-white/50 rounded-lg flex items-center justify-center mb-3 group-hover:rotate-12 transition-transform duration-300">
                      <Image
                        src={item.imgSrc}
                        alt="Icon"
                        width={24}
                        height={24}
                        className="text-white"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-xs">{item.description}</p>
                  </div>
                </div>
              </Link> */}

            {/* 
            alternatives
            */}

            {/* <!-- Option 1: v0 --> */}
            {/* <div key={i} className="relative">
                <div className="group relative overflow-hidden bg-gray-300 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                  <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-linear-to-r from-cyan-500 to-blue-800 transition-all duration-300 group-hover:scale-[10]"></span>
                  <div className="relative z-10 mx-auto max-w-md">
                    <span className="grid h-20 w-20 place-items-center rounded-full bg-white transition-all duration-300 group-hover:bg-blue-200">
                      <img
                        className="object-cover w-full h-full rounded-t-lg p-4 lg:p8 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                        src={item.imgSrc}
                        alt="focus-area-img"
                      />
                    </span>
                    <div className="space-y-6 pt-5 font-bold text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                      <p>{item.title}</p>
                    </div>
                    <p className="text-gray-600 font-thin transition-all duration-300 group-hover:text-white/90">
                      {item.description}
                    </p>
                    <div className="pt-5 text-base font-semibold leading-7">
                      <p>
                        <Link
                          href={item.href}
                          className="text-blue-500 text-lg transition-all duration-300 group-hover:text-white"
                        >
                          Apply &rarr;
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}

            {/* <!-- Option 2: Geometric Pattern Background --> */}

            {/* <div className="group relative overflow-hidden bg-white geometric-bg rounded-2xl shadow-xl border transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              
              <div className="absolute inset-0 opacity-10">
                <svg
                  className="absolute top-0 left-0 w-32 h-32"
                  viewBox="0 0 100 100"
                >
                  <polygon
                    points="50,10 90,90 10,90"
                    fill="currentColor"
                    className="text-blue-500"
                  />
                </svg>
                <svg
                  className="absolute bottom-0 right-0 w-24 h-24 rotate-45"
                  viewBox="0 0 100 100"
                >
                  <rect
                    x="25"
                    y="25"
                    width="50"
                    height="50"
                    fill="currentColor"
                    className="text-red-500"
                  />
                </svg>
              </div>

              <div className="relative z-10 p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-45 transition-transform duration-300">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Geometric Patterns
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Modern geometric design with subtle pattern overlays and clean
                  typography.
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-gray-400 text-sm">Explore</span>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
