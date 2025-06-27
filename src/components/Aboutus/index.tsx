import Image from "next/image";

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

              {/* <Link href="#" className="px-2 py-1 transitions-all duration-200">
                MORE ABOUT US
              </Link> */}
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
        <div className="flex flex-wrap items-center justify-center mt-10 lg:mt-16 gap-4 lg:gap-8">
          {Aboutdata.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="flex flex-col items-center border border-gray-200 rounded-lg shadow-sm hover:shadow-lg md:flex-row md:max-w-xl hover:bg-linear-to-r hover:from-cyan-100 hover:to-blue-200 hover:translate-y-1 transition-all duration-200 ease-in-out"
            >
              <img
                className="object-cover w-full rounded-t-lg h-full p-4 lg:p8 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={item.imgSrc}
                alt="key-area-img"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">
                  {item.heading}
                </h5>
                <p className="mb-3 font-normal">{item.paragraph}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
