import Image from "next/image";
import Link from "next/link";

interface datatype {
  heading: string;
  imgSrc: string;
  paragraph: string;
  href: string;
}

const Aboutdata: datatype[] = [
  {
    heading: "IKMF Scholarship",
    imgSrc: "/images/about-us/academic_icon.svg",
    paragraph:
      "Increasing access to learning for children from disadvantages environments",
    href: "/scholarship",
  },
  {
    heading: "Head Start Africa",
    imgSrc: "/images/about-us/mentor_icon.svg",
    paragraph:
      "Nurturing future professionals within the legal field and beyond",
    href: "/headstart",
  },
  {
    heading: "Healthcare",
    imgSrc: "/images/about-us/health_icon.svg",
    paragraph:
      "Improving access to life-saving therapies and medications in our communities",
    href: "/healthcare",
  },
  {
    heading: "Vulnerable Groups",
    imgSrc: "/images/about-us/vulnerable_icon.svg",
    paragraph:
      "Protecting dignity and stability of vulnerable persons and groups in communities",
    href: "/vulnerable-group",
  },
  {
    heading: "Special projects",
    imgSrc: "/images/about-us/stars_icon.svg",
    paragraph:
      "Building community resilience by supporting long term sustainability projects.",
    href: "/special-project",
  },
];

const Aboutus = () => {
  return (
    <>
      <section className="about-us-bg min-h-screen pt-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left bg-white/70 p-8 rounded-xl backdrop-blur-sm shadow-lg">
              <div className="space-y-6">
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-moss shadow-md">
                  <span className="block">Who We Are</span>
                  {/* <span className="block font-light">Are</span> */}
                </h1>
                <p className="text-lg text-text-dark/90 max-w-lg mx-auto lg:mx-0">
                  Founded in 2011, The IKM Foundation (IKMF) has the objective
                  of creating a platform to run IKM Advocates&#39; Corporate
                  Social Responsibility (CSR) activities. Our mission is to
                  transform lives through impactful partnerships and sustainable
                  programmes by working to establish lasting, community-driven
                  change.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
              </div>
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
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-light text-4xl lg:text-6xl text-center text-moss mb-12">
            Our Focus Areas
          </h2>

          <div className="flex flex-wrap items-center justify-center mt-10 lg:mt-16 gap-4 lg:gap-8">
            {Aboutdata.map((item, i) => (
              <div key={i} className="relative">
                <div className="group relative overflow-hidden bg-gray-300 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                  <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-linear-to-r from-cyan-500 to-blue-800 transition-all duration-300 group-hover:scale-[10]"></span>
                  <div className="relative z-10 mx-auto max-w-md">
                    <span className="grid h-20 w-20 place-items-center rounded-full bg-white transition-all duration-300 group-hover:bg-blue-200">
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-10 w-10 text-white transition-all"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                        />
                      </svg> */}
                      <img
                        className="object-cover w-full h-full rounded-t-lg p-4 lg:p8 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                        src={item.imgSrc}
                        alt="key-area-img"
                      />
                    </span>
                    <div className="space-y-6 pt-5 font-bold text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                      <p>{item.heading}</p>
                    </div>
                    <p className="text-gray-600 font-thin transition-all duration-300 group-hover:text-white/90">
                      {item.paragraph}
                    </p>
                    <div className="pt-5 text-base font-semibold leading-7">
                      <p>
                        <a
                          href={item.href}
                          className="text-blue-500 text-lg transition-all duration-300 group-hover:text-white"
                        >
                          Apply &rarr;
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
