import Footer from "@/components/Footer";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import textConfig from "@/config/copy.json";
import Link from "next/link";

const applyOptions = [
  "scholarship",
  "headstart",
  "healthcare",
  "vulnerable-group",
];

export default function ApplyLayout({
  children,
  page,
}: {
  children: React.ReactNode;
  page:
    | "scholarship"
    | "headstart"
    | "healthcare"
    | "vulnerable-group"
    | "special-project";
}) {
  const texts = textConfig.pages[page as keyof typeof textConfig.pages];

  return (
    <>
      <nav className="w-full bg-slate-800">
        <div className="p-3 pl-0 md:p-4 md:pl-0 lg:pr-8 mx-auto max-w-7xl flex flex-row flex-1 items-start px-4">
          <Link
            href="/"
            className="flex flex-row text-gray-400 hover:text-white text-xl font-bold"
          >
            <ChevronLeftIcon height={26} />
            <h1 className="my-auto">Homepage</h1>
          </Link>
        </div>
      </nav>

      <main className="w-full max-w-7xl bg-card border-y-0 border-x-0 lg:border-x-1 border-slate-400/50 overflow-hidden shadow-md flex flex-col md:flex-row m-auto">
        <div className="grid grid-cols-3 gap-4 w-full my-4">
          <div className="col-span-3 md:col-span-2">
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold mb-2 flex flex-row items-center">
                {texts.subtitle1}{" "}
                <Link
                  href={"/" + page + "/apply"}
                  className="btn-primary text-sm uppercase py-2 px-4 rounded-full ml-8 hover:scale-105 transition-all duration-200"
                >
                  Apply Now
                </Link>
              </h2>
              {children}
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 bg-slate-200 rounded-2xl m-6 border-1 border-slate-400/50 shadow-md">
            <div className="p-4">
              <p className="md:text-2xl">Other Applications</p>
              <ul className="ml-3">
                {applyOptions
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
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
