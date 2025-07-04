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
    imgSrc: "/images/about-us/initiative1.svg",
    paragraph:
      "Increasing access to learning for children from disadvantages environments",
    href: "/scholarship",
  },
  {
    heading: "Head Start Africa",
    imgSrc: "/images/about-us/initiative2.svg",
    paragraph:
      "Nurturing future professionals within the legal field and beyond",
    href: "/headstart",
  },
  {
    heading: "Healthcare",
    imgSrc: "/images/about-us/initiative3.svg",
    paragraph:
      "Improving access to life-saving therapies and medications in our communities",
    href: "/healthcare",
  },
  {
    heading: "Vulnerable Groups",
    imgSrc: "/images/about-us/initiative4.svg",
    paragraph:
      "Protecting dignity and stability of vulnerable persons and groups in communities",
    href: "/vulnerable-group",
  },
  {
    heading: "Special projects",
    imgSrc: "/images/about-us/initiative5.svg",
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
              <a
                key={i}
                href={item.href}
                className="py-2 md:py-4 flex flex-col items-center border border-gray-200 rounded-lg shadow-sm hover:shadow-lg md:flex-row md:max-w-xl hover:bg-linear-to-r hover:from-cyan-100 hover:to-blue-200 hover:translate-y-1 transition-all duration-200 ease-in-out"
              >
                <img
                  className="object-cover w-full h-full rounded-t-lg p-4 lg:p8 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src={item.imgSrc}
                  alt="key-area-img"
                />
                <div className="flex flex-col justify-between p-4 leading-normal max-w-xs">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight">
                    {item.heading}
                  </h5>
                  <p className="mb-3 font-normal min-h-[72px]">
                    {item.paragraph}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
