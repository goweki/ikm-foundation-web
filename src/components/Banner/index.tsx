import Image from "next/image";
import DonateModal from "../atoms/DonateModal";

const Banner = () => {
  return (
    <section className="py-24 gradient-banner text-white">
      <div className="shapes-container">
        <div
          className="shape"
          data-aos="fade-down-left"
          data-aos-duration="1500"
          data-aos-delay="100"
        ></div>
        <div
          className="shape"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="100"
        ></div>
        <div
          className="shape"
          data-aos="fade-up-right"
          data-aos-duration="1000"
          data-aos-delay="200"
        ></div>
        <div
          className="shape"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        ></div>
        <div
          className="shape"
          data-aos="fade-down-left"
          data-aos-duration="1000"
          data-aos-delay="100"
        ></div>
        <div
          className="shape"
          data-aos="fade-down-left"
          data-aos-duration="1000"
          data-aos-delay="100"
        ></div>
        <div
          className="shape"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="300"
        ></div>
        <div
          className="shape"
          data-aos="fade-down-right"
          data-aos-duration="500"
          data-aos-delay="200"
        ></div>
        <div
          className="shape"
          data-aos="fade-down-right"
          data-aos-duration="500"
          data-aos-delay="100"
        ></div>
        <div
          className="shape"
          data-aos="zoom-out"
          data-aos-duration="2000"
          data-aos-delay="500"
        ></div>
        <div
          className="shape"
          data-aos="fade-up-right"
          data-aos-duration="500"
          data-aos-delay="200"
        ></div>
        <div
          className="shape"
          data-aos="fade-down-left"
          data-aos-duration="500"
          data-aos-delay="100"
        ></div>
        <div
          className="shape"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="0"
        ></div>
        <div
          className="shape"
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-delay="0"
        ></div>
        <div
          className="shape"
          data-aos="fade-up-right"
          data-aos-duration="500"
          data-aos-delay="100"
        ></div>
        <div
          className="shape"
          data-aos="fade-down-left"
          data-aos-duration="500"
          data-aos-delay="0"
        ></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 flex">
        <div className="flex flex-row items-center mx-auto">
          <div className="order-1">
            <div className="p-4 md:px-8 xl:px-16">
              <button className="italic border text-purple-300 shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider">
                Social Responsibility
              </button>
              <div className="py-3 text-center lg:text-start">
                <h1 className="text-3xl font-bold">
                  Improving <span className="text-purple-300">lives</span>,
                  <br />
                  <span className="text-5xl">
                    through
                    <br />
                    <span> Responsible</span> <br />
                    <span className="text-blue-300 text-6xl">Business.</span>
                  </span>
                </h1>
              </div>
              <div className="text-center lg:text-start rounded-lg">
                <DonateModal buttonLocation="banner" />
              </div>
            </div>
          </div>
          <div className="order-2 hidden md:block">
            <Image
              // src="/images/banner/induction_03_cropped.jpg"
              src="/images/banner/headstart_03_cropped.jpg"
              width={378}
              height={500}
              className="banner-img rounded-2xl border-blue-500 border"
              alt="banner-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
