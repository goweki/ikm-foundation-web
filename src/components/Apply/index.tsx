import Link from "next/link";

const Apply = () => {
  return (
    <div
      id="applications-section"
      className="mx-auto max-w-7xl sm:py-4 lg:px-8 mt-32"
    >
      <h2 className="text-4xl lg:text-6xl pt-4 font-bold sm:leading-tight mt-5 text-center">
        Apply to our programs & <br /> initiatives
      </h2>
      <h3 className="text-2xl font-medium text-center pt-10 opacity-50">
        We are always looking out for individuals and groups <br />
        that we can help create impact and build resilience and sustainability.
        Apply for support in any of the cartegories below:
      </h3>

      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-12">
          {/* CARD-1 */}

          <Link
            href="/scholarship"
            className="bg-blue-800 hover:bg-blue-600 hover:shadow-lg text-white bg-scholarship pt-16 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl cursor-pointer transition-all duration-200"
          >
            <h2 className="text-xl font-normal tracking-widest mb-5 text-center sm:text-start">
              IKMF Scholarship
            </h2>
            <h3 className="text-4xl sm:text-65xl font-bold leading-snug mb-5 text-center sm:text-start">
              <span className="text-white">Apply </span>
              <span className="text-slate-200">for education support.</span>
            </h3>
            <h5 className="text-lg pt-2 mb-5 text-center sm:text-start">
              The IKMF Scholarship programme supports bright students from lower
              socio-economic backgrounds access secondary school education, with
              a focus on those from vulnerable households and orphans.
            </h5>
            {/* <div className="text-center sm:text-start">
            <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-blue-400">
              Get Started
            </button>
          </div> */}
          </Link>

          {/* CARD-2 */}

          <Link
            href="/headstart"
            className="bg-mentorship bg-teal-100 hover:bg-teal-300 hover:shadow-lg pt-16 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl cursor-pointer transition-all duration-200"
          >
            <h2 className="text-xl font-normal text-blue tracking-widest mb-5 text-center sm:text-start">
              Head Start Africa
            </h2>
            <h3 className="text-4xl sm:text-65xl font-bold text-black leading-snug mb-5 text-center sm:text-start">
              <span className="text-blue-700">Apply</span>{" "}
              <span className="text-slate-700">for mentorship!</span>
            </h3>
            <h5 className="text-lg bluish pt-2 mb-5 text-center sm:text-start">
              Part of DLA Piper&apos;s global Head Start initiative, Head Start
              Africa supports talented young people from low-income backgrounds
              to succeed in legal careers through structured, long-term support.
            </h5>
            {/* <div className="text-center sm:text-start">
            <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue-500 border border-blue hover:bg-blue-400">
              Learn more
            </button>
          </div> */}
          </Link>

          {/* CARD-3 */}

          <Link
            href="/healthcare"
            className="bg-healthcare bg-teal-100 hover:bg-teal-300 hover:shadow-lg pt-16 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl cursor-pointer transition-all duration-200"
          >
            <h2 className="text-xl font-normal tracking-widest mb-5 text-center sm:text-start">
              Healthcare
            </h2>
            <h3 className="text-4xl sm:text-65xl font-bold text-black leading-snug mb-5 text-center sm:text-start">
              <span className="text-blue-700">Request</span>{" "}
              <span className="text-slate-700">Medical Assistance</span>
            </h3>
            <h5 className="text-lg bluish pt-2 mb-5 text-center sm:text-start">
              Improving access to quality healthcare through raising funds for
              medical fees and donation of medical equipment.
            </h5>
            {/* <div className="text-center sm:text-start">
            <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue-500 border border-blue hover:bg-blue-400">
              Learn more
            </button>
          </div> */}
          </Link>

          {/* CARD-4 */}

          <Link
            href="/vulnerable-group"
            className="bg-group bg-blue-800 hover:bg-blue-600 hover:shadow-lg text-white pt-16 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl cursor-pointer transition-all duration-200"
          >
            <h2 className="text-xl font-normal tracking-widest mb-5 text-center sm:text-start">
              Vulnerable Groups
            </h2>
            <h3 className="text-4xl sm:text-65xl font-bold leading-snug mb-5 text-center sm:text-start">
              <span className="text-white">Partner </span>
              <span className="text-slate-200">to improve lives</span>
            </h3>
            <h5 className="text-lg pt-2 mb-5 text-center sm:text-start">
              Supporting persons living in vulnerable conditions through
              partnering with care homes, schools, and shelters to improve
              living conditions and restore dignity.
            </h5>
            {/* <div className="text-center sm:text-start">
            <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-blue-400">
              Get Started
            </button>
          </div> */}
          </Link>

          {/* CARD-5 */}

          <Link
            href="/special-project"
            className="bg-group bg-teal-100 hover:bg-teal-300 hover:shadow-lg pt-16 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl cursor-pointer transition-all duration-200"
          >
            <h2 className="text-xl font-normal tracking-widest mb-5 text-center sm:text-start">
              Special Project
            </h2>
            <h3 className="text-4xl sm:text-65xl font-bold text-black leading-snug mb-5 text-center sm:text-start">
              <span className="text-blue-700">Recommend</span>{" "}
              <span className="text-slate-700">Special Project</span>
            </h3>
            <h5 className="text-lg bluish pt-2 mb-5 text-center sm:text-start">
              Supporting initiatives that do not fall under our main cartegories
              and have significant community benefits
            </h5>
            {/* <div className="text-center sm:text-start">
            <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue-500 border border-blue hover:bg-blue-400">
              Learn more
            </button>
          </div> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Apply;
