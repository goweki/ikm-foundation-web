import Footer from "@/components/Footer";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import textConfig from "@/config/copy.json";
import Image from "next/image";
import Link from "next/link";

export default function FormLayout({
  children,
  page,
  descLink,
}: {
  children: React.ReactNode;
  page:
    | "scholarship"
    | "headstart"
    | "healthcare"
    | "vulnerable-group"
    | "special-project";
  descLink?: {
    label: string;
    link: string;
  };
}) {
  const texts = textConfig.pages[page as keyof typeof textConfig.pages];

  return (
    <>
      <nav className="w-full bg-slate-800">
        <div className="p-3 pl-0 md:p-4 md:pl-0 lg:pr-8 mx-auto max-w-7xl flex flex-row flex-1 items-start px-4">
          <Link
            href={"/" + page}
            className="flex flex-row text-gray-400 hover:text-white text-xl font-bold"
          >
            <ChevronLeftIcon height={26} />
            <h1 className="my-auto">Back</h1>
          </Link>
        </div>
      </nav>

      <main className="w-full max-w-7xl bg-card border-y-0 border-x-0 lg:border-x-1 border-slate-400/50 overflow-hidden shadow-md flex flex-col md:flex-row m-auto">
        {/* <!-- Left Section --> */}
        <div className="w-full md:w-1/2 relative text-white">
          <div className="relative h-full">
            <Image
              alt="Banner"
              className="w-full h-full object-cover"
              height={1024}
              src="/videos/apply_education.webp"
              width={1024}
            />

            <div className="absolute inset-0 bg-purple-800/60" />
            <div className="absolute top-6 left-6 m-4">
              <h2 className="text-2xl md:text-4xl font-semibold mb-2">
                {texts.subtitle1}
              </h2>
              <h2 className="text-xl md:text-2xl font-semibold">
                {texts.subtitle2}
              </h2>
              <div className="flex gap-2 mt-6">
                <div className="w-4 h-1 bg-white/30 rounded" />
                <div className="w-4 h-1 bg-white/30 rounded" />
                <div className="w-4 h-1 bg-white rounded" />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Right Section --> */}
        <div className="w-full md:w-1/2 p-6 md:p-12 flex justify-center items-center bg-purple-100">
          <div className="max-w-md w-full">
            <h1 className="text-2xl md:text-4xl font-semibold mb-2">
              {texts.title}
            </h1>
            <p className="text-foreground-500 mb-8">
              <span className="mr-2 italic">{texts.description}</span>
              {descLink && (
                <Link className="hover:underline" href={descLink.link}>
                  {descLink.label}
                </Link>
              )}
            </p>

            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
