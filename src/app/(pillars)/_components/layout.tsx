import Footer from "@/components/Footer";
import textConfig from "@/config/copy.json";
import { Page } from "@/config/types";
import Link from "next/link";
import {
  Handshake,
  UserRoundPlus,
  Users,
  GraduationCap,
  Venus,
  Wallet,
  Activity,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { PageBreadcrumb } from "@/components/BreadCrumb";
import { toTitleCase } from "@/lib/utils";
import YouTubePreview from "@/components/atoms/youtube-preview";

const iconMap: Record<string, React.ElementType> = {
  Handshake,
  UserRoundPlus,
  Users,
  GraduationCap,
  Venus,
  Wallet,
  Activity,
};

type Applications =
  | "education"
  | "headstart"
  | "scholarship"
  | "healthcare"
  | "vulnerable-group"
  | "special-project";

export default function PillarsLayout({
  children,
  page,
}: {
  children: React.ReactNode;
  page: Applications;
}) {
  const texts = textConfig.pages[page as keyof typeof textConfig.pages] as Page;
  const stats = texts.stats;

  return (
    <div className="max-w-7xl mx-auto min-h-screen flex flex-col">
      {/* <nav
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
                href="/#pillars"
                className="flex items-center px-1 uppercase hover:underline"
              >
                Our Foundation Pillars
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
              <span className="flex items-center px-1 uppercase">{page}</span>
            </li>
          </ol>
        </div>
      </nav> */}
      <PageBreadcrumb
        className="mt-24 p-2"
        items={[
          {
            label: "Our Foundation Pillars",
            href: "/pillars",
          },
          {
            label: toTitleCase(page),
          },
        ]}
      />

      <main className="flex flex-col flex-1 border-gray-200">
        <div className="block -mb-4">
          <div
            className="w-full relative inline-block"
            style={{ height: "24em" }}
          >
            <div
              className="absolute left-0 bottom-0 w-full h-full z-10"
              style={{
                backgroundImage:
                  "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
              }}
            ></div>
            <Image
              alt="banner-img"
              src={texts.banner}
              className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
              width={1200}
              height={400}
            />
            <div className="p-4 absolute bottom-0 left-0 z-20">
              {/* <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
                {texts.title}
              </span>
              <h2 className="text-4xl font-semibold text-gray-100 leading-tight max-w-3xl">
                {texts.description}
              </h2> */}
              {/* ── Header ── */}
              <div className="mb-12 ml-12 max-w-2xl">
                <p className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-3 w-fit text-xs font-semibold uppercase tracking-widest ">
                  {texts.title}
                </p>
                <h1 className="text-gray-100 leading-tight max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  {texts.description}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="block lg:flex lg:space-x-2 lg:p-0">
          {/* <!-- children --> */}
          <div className="w-full lg:w-2/3">
            <section className="w-full bg-sky-50">
              <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 xl:px-16">
                {children}
              </div>
            </section>
          </div>

          {/* <!-- right sidebar --> */}
          <div className="w-full lg:w-1/3 p-3">
            <div className="flex flex-col space-y-8 my-12 px-8">
              {renderApplyLinks(page)}
              {renderVideoLink(page)}
            </div>

            {/* <!-- divider --> */}
            <div className="my-4 border border-dotted"></div>

            {/* <!-- stats --> */}
            <dl className="rounded-lg shadow-lg grid grid-cols-1">
              {stats.map(({ number, description, icon, bg }, i) => {
                const IconComponent = iconMap[icon];
                return (
                  <div
                    key={i}
                    className={`flex flex-col p-6 border-b-2 last:border-b-0 border-dotted rounded-lg ${bg}`}
                  >
                    <IconComponent className="w-8 h-8 text-gray-700 mb-3" />
                    <dd className="order-1 text-3xl font-extrabold text-gray-800">
                      {number}
                    </dd>
                    <dt className="order-2 mt-2 leading-6 text-gray-600">
                      {description}
                    </dt>
                  </div>
                );
              })}
            </dl>

            {/* <!-- divider --> */}
            {/* <div className="border border-dotted"></div> */}
          </div>
        </div>
      </main>
      {/* <!-- main ends here --> */}

      {/* <!-- footer --> */}
      <Footer />
    </div>
  );
}

// function getYouTubeId(url: string): string | null {
//   const regex = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
//   const match = url.match(regex);
//   return match ? match[1] : null;
// }

// // Youtube preview

// function YouTubePreview(page: string) {
//   const url =
//     page == "scholarship"
//       ? "https://youtu.be/t4yRqIZIoX0"
//       : page === "headstart"
//       ? "https://youtu.be/mWEX5Y1jLRw"
//       : page === "healthcare"
//       ? "https://youtu.be/7sDaDhWrlvw"
//       : null;

//   if (!url) return null;
//   const videoId = getYouTubeId(url);
//   if (!videoId) return <p className="italic text-destructive">missing link</p>;

//   const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

//   return (
//     <div className="flex flex-col mt-8">
//       <Link href={url} target="_blank" rel="noopener noreferrer">
//         <span className="italic">Watch to learn more...</span>
//         <Image
//           src={thumbnailUrl}
//           alt="YouTube video preview"
//           width={480}
//           height={270}
//           className="w-full h-auto object-cover"
//         />
//       </Link>
//     </div>
//   );
// }

function renderVideoLink(page: string) {
  const ytLink =
    page == "scholarship"
      ? "https://youtu.be/t4yRqIZIoX0"
      : page === "headstart"
        ? "https://youtu.be/mWEX5Y1jLRw"
        : page === "healthcare"
          ? "https://youtu.be/7sDaDhWrlvw"
          : null;

  return ytLink ? (
    <>
      {/* <Dialog>
        <DialogTrigger asChild>
          <Button className="gap-x-2" variant="outline">
            <Play className="fill-red-500 stroke-0" />
            Learn more
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl w-full aspect-video p-0 border-0 shadow-xl rounded-xl overflow-hidden">
          <VisuallyHidden>
            <DialogHeader>
              <DialogTitle>IKM Foundation</DialogTitle>
              <DialogDescription>IKM Foundation</DialogDescription>
            </DialogHeader>
          </VisuallyHidden>
          <ReactPlayer
            src={ytLink}
            playing
            controls
            width="100%"
            height="100%"
          />
        </DialogContent>
      </Dialog> */}

      <YouTubePreview url={ytLink} />
    </>
  ) : null;
}

const renderApplyLinks = (page: string) => {
  if (page == "scholarship" || page === "headstart")
    return (
      <Link
        href={"/" + page + "/apply"}
        className={buttonVariants({ variant: "default" })}
      >
        Apply Now
      </Link>
    );
  else if (page == "education") return null;
  else
    return (
      <>
        <Link
          href={"/grant"}
          className={buttonVariants({ variant: "default" })}
        >
          Apply As Grant
        </Link>
        <Link href={"/fap"} className={buttonVariants({ variant: "default" })}>
          Apply As Financial Assistance below 200k
        </Link>
      </>
    );
};
