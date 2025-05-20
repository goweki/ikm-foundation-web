const Beliefs = () => {
  return (
    <div
      id="applications-section"
      className="mx-auto max-w-7xl sm:py-4 lg:px-8 mt-32"
    >
      <h2 className="text-4xl lg:text-6xl pt-4 font-bold sm:leading-tight mt-5 text-center">
        Education - the great <br /> equalizer
      </h2>
      <h3 className="text-2xl font-medium text-center pt-10 opacity-50">
        Through education, communities and marginalized persons can <br />{" "}
        ensure resilience and sustainability.
      </h3>

      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-12">
          {/* COLUMN-1 */}

          <div className="bg-blue-800 hover:bg-blue-600 hover:shadow-lg text-white bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl cursor-pointer">
            <h2 className="text-lg font-normal tracking-widest mb-5 text-center sm:text-start">
              IKMF Scholarchip
            </h2>
            <h3 className="text-4xl sm:text-65xl font-bold leading-snug mb-5 text-center sm:text-start">
              Apply{" "}
              <span className="text-slate-300">for education support.</span>
            </h3>
            <h5 className="pt-2 mb-5 text-center sm:text-start">
              The IKMF Scholarship programme supports bright students from lower
              socio-economic backgrounds access secondary school education
              increasing opportunities for 100% transition. We identify students
              with strong academic potential and significant financial need,
              with a focus on those from vulnerable households and orphans.
            </h5>
            {/* <div className="text-center sm:text-start">
            <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-blue-400">
              Get Started
            </button>
          </div> */}
          </div>

          {/* COLUMN-2 */}

          <div className="bg-beliefs bg-teal-100 hover:bg-teal-200 hover:shadow-lg pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl cursor-pointer">
            <h2 className="text-lg font-normal text-blue tracking-widest mb-5 text-center sm:text-start">
              Head Start Africa
            </h2>
            <h3 className="text-4xl sm:text-65xl font-bold text-black leading-snug mb-5 text-center sm:text-start">
              <span className="text-blue-500">Apply</span> for legal mentorship!
            </h3>
            <h5 className="bluish pt-2 mb-5 text-center sm:text-start">
              Head Start Africa is a transformative, five-year programme
              designed to break social and financial barriers to entering and
              succeeding in the legal profession. Part of DLA Piper’s global
              Head Start initiative, It supports talented young people from
              low-income backgrounds to access legal careers through structured,
              long-term support. Head Start in Kenya is a partnership between
              DLA Piper International and IKM Foundation.
            </h5>
            {/* <div className="text-center sm:text-start">
            <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue-500 border border-blue hover:bg-blue-400">
              Learn more
            </button>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beliefs;
