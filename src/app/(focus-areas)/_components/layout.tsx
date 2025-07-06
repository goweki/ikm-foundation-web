import Footer from "@/components/Footer";
import textConfig from "@/config/copy.json";
import Link from "next/link";

const applications = [
  "scholarship",
  "headstart",
  "healthcare",
  "vulnerable-group",
  "special-project",
];

export default function FocusLayout({
  children,
  page,
}: {
  children: React.ReactNode;
  page: (typeof applications)[number];
}) {
  const texts = textConfig.pages[page as keyof typeof textConfig.pages];

  return (
    <div className="max-w-7xl mx-auto">
      <nav
        aria-label="breadcrumb"
        className="fixed top-0 left-0 w-full p-4 z-30 bg-gray-800/80 text-gray-200 backdrop-blur-md py-4 flex flex-wrap items-center shadow-sm"
      >
        <div className="w-full max-w-7xl mx-auto px-2">
          <ol className="flex h-8 space-x-2">
            <li className="flex items-center">
              <Link
                rel="noopener noreferrer"
                href="/"
                title="Back to homepage"
                className="hover:underline flex flex-row justify-center items-center w-fit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6 pr-2"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                <span className="uppercase">Home</span>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                fill="currentColor"
                className="w-2 h-2 mt-1 transform rotate-90 text-gray-400"
              >
                <path d="M32 30.031h-32l16-28.061z"></path>
              </svg>
              <Link
                rel="noopener noreferrer"
                href="/#focus-areas"
                className="flex items-center px-1 uppercase hover:underline"
              >
                Focus areas
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                fill="currentColor"
                className="w-2 h-2 mt-1 transform rotate-90 text-gray-400"
              >
                <path d="M32 30.031h-32l16-28.061z"></path>
              </svg>
              <span className="flex items-center px-1">{page}</span>
            </li>
          </ol>
        </div>
      </nav>

      <main className="pt-16">
        <div className="block">
          <div
            className="mb-4 md:mb-0 w-full relative inline-block"
            style={{ height: "24em" }}
          >
            <div
              className="absolute left-0 bottom-0 w-full h-full z-10"
              style={{
                backgroundImage:
                  "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
              }}
            ></div>
            <img
              src={texts.image}
              className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
            />
            <div className="p-4 absolute bottom-0 left-0 z-20">
              <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
                {texts.title}
              </span>
              <h2 className="text-4xl font-semibold text-gray-100 leading-tight max-w-3xl">
                {texts.description}
              </h2>
            </div>
          </div>
        </div>

        <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
          {/* <!-- children --> */}
          <div className="w-full lg:w-2/3 px-2 md:px-8">{children}</div>

          {/* <!-- right sidebar --> */}
          <div className="w-full lg:w-1/3 p-3">
            <div className="flex flex-col space-y-2">
              {renderApplyLinks(page)}
            </div>

            {/* <!-- divider --> */}
            <div className="my-4 border border-dotted"></div>

            {/* <!-- other applications --> */}
            <div className="p-1 mt-4 mb-4">
              <p className="md:text-2xl">Other Applications</p>
              <ul className="ml-3">
                {applications
                  .filter((option) => option !== page)
                  .map((option, index) => {
                    return (
                      <li key={index} className="my-4">
                        <Link
                          href={`/${option}`}
                          className="w-40 flex items-center hover:underline bg-white px-1 py-1 rounded-md text-black transition hover:translate-x-2"
                        >
                          <span className="mx-2">{option}</span>
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>

            {/* <!-- divider --> */}
            <div className="border border-dotted"></div>
          </div>
        </div>
      </main>
      {/* <!-- main ends here --> */}

      {/* <!-- footer --> */}
      <Footer />
    </div>
  );
}

const renderApplyLinks = (page: string) => {
  if (page == "scholarship" || page === "headstart")
    return (
      <Link
        href={"/" + page + "/apply"}
        className="btn-primary w-fit uppercase py-2 px-4 hover:scale-105 transition-all duration-200 ml-8 sm:ml-0"
      >
        Apply Now
      </Link>
    );
  else
    return (
      <>
        <Link
          href={"/grant"}
          className="btn-primary w-fit uppercase py-2 px-4 hover:scale-105 transition-all duration-200 ml-8 sm:ml-0"
        >
          Apply As Grant
        </Link>
        <Link
          href={"/fap"}
          className="btn-primary w-fit uppercase py-2 px-4 hover:scale-105 transition-all duration-200 ml-8 sm:ml-0"
        >
          Apply As Financial Assistance below 200k
        </Link>
      </>
    );
};
