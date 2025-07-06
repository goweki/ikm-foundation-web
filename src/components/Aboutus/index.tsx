import Image from "next/image";
import Link from "next/link";

interface datatype {
  title: string;
  description: string;
  imgSrc: string;
  href: string;
}

const Aboutdata: datatype[] = [
  {
    title: "IKMF Scholarship",
    imgSrc: "/images/about-us/academic_icon.svg",
    description:
      "Increasing access to learning for children from disadvantages environments",
    href: "/scholarship",
  },
  {
    title: "Head Start Africa",
    imgSrc: "/images/about-us/mentor_icon.svg",
    description:
      "Nurturing future professionals within the legal field and beyond",
    href: "/headstart",
  },
  {
    title: "Healthcare",
    imgSrc: "/images/about-us/health_icon.svg",
    description:
      "Improving access to life-saving therapies and medications in our communities",
    href: "/healthcare",
  },
  {
    title: "Vulnerable Groups",
    imgSrc: "/images/about-us/vulnerable_icon.svg",
    description:
      "Protecting dignity and stability of vulnerable persons and groups in communities",
    href: "/vulnerable-group",
  },
  {
    title: "Special projects",
    imgSrc: "/images/about-us/stars_icon.svg",
    description:
      "Building community resilience by supporting long term sustainability projects.",
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
                  Founded in 2011, The IKM Foundation (IKMF) has the objective
                  of creating a platform to run IKM Advocates&#39; Corporate
                  Social Responsibility (CSR) activities. Our mission is to
                  transform lives through impactful partnerships and sustainable
                  programmes by working to establish lasting, community-driven
                  change.
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
        <div id="focus-areas" className="max-w-7xl mx-auto px-6">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
