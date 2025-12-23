import Navbar from "@/components/Navbar";
import TitleLayout, { TitleProps } from "./title";

export default function PageLayout({
  tProps,
  children,
}: {
  tProps: TitleProps;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <TitleLayout {...tProps} />
        {children}
      </div>
    </>
  );
}
