import Link from "next/link";
import textConfig from "@/config/copy.json";

const Apply = () => {
  const PageConfigs = textConfig.pages;

  return (
    <div
      id="applications-section"
      className="mx-auto max-w-7xl sm:py-4 lg:px-8 mt-14"
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

          {Object.entries(PageConfigs).map(([key, props], index) => {
            // Determine the background color based on the index
            const backgroundColorClass =
              index % 2 === 0 ? "bg-blue-900" : "bg-blue-100";
            const hoverBackgroundColorClass =
              index % 2 === 0 ? "hover:bg-blue-700" : "hover:bg-blue-200";
            const textColorClass =
              index % 2 === 0 ? "text-white" : "text-gray-800";
            const ascentColorClass =
              index % 2 === 0 ? "text-purple-300" : "text-purple-800";

            return (
              <Link
                key={key}
                href={`/${key}`}
                className={`bg-${key} ${backgroundColorClass} ${hoverBackgroundColorClass} ${textColorClass} hover:shadow-lg pt-16 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl cursor-pointer transition-all duration-200`}
              >
                <h2 className="text-xl font-normal tracking-widest mb-5 text-center sm:text-start">
                  {props.title}
                </h2>
                <h3 className="text-4xl sm:text-65xl font-bold leading-snug mb-5 text-center sm:text-start">
                  <span className={ascentColorClass}>{props.CTA.action} </span>
                  {props.CTA.desc}
                </h3>
                <h5 className="text-lg pt-2 mb-5 text-center sm:text-start">
                  {props.description}
                </h5>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Apply;
