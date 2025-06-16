import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

interface datatype {
  heading: string;
  imgSrc: string;
  paragraph: string;
  href: string;
}

const Aboutdata: datatype[] = [
  {
    heading: "IKMF Scholarship",
    imgSrc: "/images/aboutus/initiative1.svg",
    paragraph:
      "Increasing access to learning for children from disadvantages environments",
    href: "/scholarship",
  },
  {
    heading: "Head Start Africa",
    imgSrc: "/images/aboutus/initiative2.svg",
    paragraph:
      "Nurturing future professionals within the legal field and beyond",
    href: "/headstart",
  },
  {
    heading: "Healthcare",
    imgSrc: "/images/aboutus/initiative3.svg",
    paragraph:
      "Improving access to life-saving therapies and medications in our communities",
    href: "/healthcare",
  },
  {
    heading: "Vulnerable Groups",
    imgSrc: "/images/aboutus/initiative4.svg",
    paragraph:
      "Protecting dignity and stability of vulnerable persons and groups in communities",
    href: "/vulnerable-group",
  },
  {
    heading: "Special projects",
    imgSrc: "/images/aboutus/initiative5.svg",
    paragraph:
      "Building community resilience by supporting long term sustainability projects.",
    href: "/special-project",
  },
];

const Aboutus = () => {
  return (
    <div
      id="aboutus-section"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-duration="1000"
    >
      <div className="mx-auto max-w-7xl px-4 my-32 rounded-3xl relative">
        <Image
          src="/images/aboutus/dots.svg"
          width={100}
          height={100}
          alt="dots-image"
          className="absolute bottom-1 -left-20"
        />
        <div className="we-are-block rounded-3xl overflow-hidden">
          <div id="about-us-section">
            <div className="about-us-image">
              <Image
                className="h-full object-cover"
                src="/images/initiatives/mentorship_indoor.jpg"
                width="808"
                height="458"
                alt="about-us-image"
              />
            </div>

            <div className="who-we-are">
              <h2>Who We Are</h2>

              <p>
                Founded in 2011, The IKM Foundation (IKMF) has the objective of
                creating a platform to run IKM Advocates&#39; Corporate Social
                Responsibility (CSR) activities. Our mission is to transform
                lives through impactful partnerships and sustainable programmes
                by working to establish lasting, community-driven change.
              </p>

              <Link href="#" className="px-2 py-1 transitions-all duration-200">
                MORE ABOUT US
              </Link>
            </div>
          </div>

          <div id="what-we-do-section">
            <div className="our-programs-image">
              {/* bg-[url(https://digitalupgrade.com/images/building_pic.jpg)] bg-cover */}
              <Image
                className="h-full"
                src="/images/initiatives/talk_students.jpg"
                width="951"
                height="471"
                alt="our-programs-image"
              />
            </div>

            <div className="our-programs-info">
              <h2>What We Do</h2>

              <div>
                <p>We support four key areas:</p>
                <ul className="list-disc pl-5 mt-4">
                  <li>
                    <strong>Education:</strong> Nurturing talent and increasing
                    access to learning.
                  </li>
                  <li>
                    <strong>Healthcare:</strong> Improving accessibility of
                    healthcare in our communities.
                  </li>
                  <li>
                    <strong>Vulnerable Groups:</strong> Promoting the dignity
                    and stability of vulnerable children and the elderly.
                  </li>
                  <li>
                    <strong>Special Projects:</strong> Investing in community
                    resilience and infrastructure.
                  </li>
                </ul>
              </div>

              {/* <Link href="#" className="px-2 py-1 transitions-all duration-200">
                OUR PROGRAMMES
              </Link> */}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32">
          {Aboutdata.map((item, i) => (
            <div
              key={i}
              className="hover:bg-blue-200 bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group transition-all duration-200"
            >
              <h4 className="text-4xl font-semibold  text-black mb-5 h-20">
                {item.heading}
              </h4>
              <Image
                src={item.imgSrc}
                alt={item.imgSrc}
                width={100}
                height={100}
                className="mb-5"
              />
              <h4 className="text-lg font-normal text-black mb-5 min-h-20">
                {item.paragraph}
              </h4>
              <Link
                href={item.href}
                className="text-lg font-semibold text-blue-800 hover-underline hover:scale-105"
              >
                Learn more
                <ChevronRightIcon width={20} height={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
