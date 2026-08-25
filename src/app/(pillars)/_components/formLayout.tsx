import Footer from "@/components/Footer";
// import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import textConfig from "@/config/copy.json";
import { FormName } from "@/lib/application-windows";
import Image from "next/image";
// import Link from "next/link";
// import { PageBreadcrumb } from "@/components/BreadCrumb";
// import { toTitleCase } from "@/lib/utils";

export default function FormLayout({
  children,
  page,
}: {
  children: React.ReactNode;
  // page:
  //   | "scholarship"
  //   | "headstart"
  //   | "healthcare"
  //   | "vulnerable-group"
  //   | "special-project"
  //   | "grant"
  //   | "fap";
  page: FormName;
}) {
  const texts = textConfig.pages[page as keyof typeof textConfig.pages];

  return (
    <div className="pt-22">
      {/* <PageBreadcrumb
        className="p-2 max-w-7xl mx-auto"
        items={[
          {
            label: "Our Foundation Pillars",
            href: "/pillars",
          },
        ]}
      /> */}

      <main className="w-full max-w-7xl bg-card border-y-0 border-x-0 lg:border-x-1 border-slate-400/50 overflow-hidden shadow-md flex flex-col md:flex-row m-auto">
        {/* <!-- Left Section --> */}
        <div className="w-full md:w-1/2 relative text-white">
          <div className="relative h-full">
            <Image
              alt="Banner"
              className="w-full h-full object-cover"
              height={1024}
              src={texts.formImage}
              width={1024}
            />

            <div className="absolute inset-0 bg-blue-800/60" />
            <div className="absolute top-6 left-6 m-4">
              <h2 className="text-2xl md:text-4xl font-semibold mb-2">
                {texts.title}
              </h2>
              <h2 className="text-xl md:text-2xl font-semibold">
                {texts.description}
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
        <div className="w-full md:w-1/2 flex justify-center items-center bg-blue-200">
          <div className="w-full">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
