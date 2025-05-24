import Image from "next/image";
import DonateModal from "../atoms/DonateModal";

const Banner = () => {
  return (
    <div className="mx-auto max-w-7xl sm:py-10 px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        {/* COLUMN-1 */}

        <div className="flex">
          <div className="m-auto h-fit">
            <div className="py-3 text-center lg:text-start">
              <button className="text-blue-800 bg-blue-100 shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider">
                Social Responsibility
              </button>
            </div>
            {/* Improving Lives Through Responsible Business */}
            <div className="">
              <div className="py-3 text-center lg:text-start">
                <h1 className="text-3xl font-bold text-darkpurple">
                  Improving <span className="text-purple-500">lives</span>,
                  <br />
                  <span className="text-5xl">
                    through
                    <br />
                    <span> Responsible</span> <br />
                    <span className="text-blue-500 text-6xl">Business.</span>
                  </span>
                </h1>
              </div>
              <div className="my-7 text-center lg:text-start">
                <DonateModal buttonType="primary" />
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN-2 */}

        <div className="lg:-m-24 lg:pt-20 hidden lg:block">
          <Image
            className="overflow-hidden"
            src="/images/banner/banner.jpg"
            alt="hero-image"
            width={800}
            height={642}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
