import DonateModal from "../atoms/DonateModal";

const Banner = () => {
  return (
    <section
      id="banner"
      className="banner-bg w-full min-h-screen bg-no-repeat pt-20 md:pt-24 flex items-center"
    >
      <div className="w-[90%] mx-auto h-full flex items-center justify-between py-10">
        <div className="lg:w-fit">
          <div className="text-2xl xs:text-4xl sm:text-6xl text-left text-white font-serif font-extrabold">
            <h1>
              Improving Lives
              <br />
              through
              <br />
              <span className="bg-blue-500/50 text-white backdrop-blur-md rounded-sm px-1 shadow-sm shadow-white/50 uppercase">
                Responsible
              </span>
              <br />
              Business
            </h1>
          </div>
          <div className="w-full flex items-center justify-between mt-6 py-1 px-4 uppercase">
            <h3 className="text-white text-lg font-semibold">
              <DonateModal buttonLocation="banner" />
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
