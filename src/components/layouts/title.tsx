import { ReactNode } from "react";

export interface TitleProps {
  title1: string;
  title2: string;
  title3?: string;
  description?: ReactNode;
}

export default function TitleLayout({
  title1,
  title2,
  title3,
  description,
}: TitleProps) {
  return (
    <section className="container mx-auto px-4 pt-16 md:pt-24">
      <div className="max-w-4xl mx-auto text-center mt-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          {title1} <span className="text-blue-600"> {title2} </span> {title3}
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">{description}</p>
      </div>
    </section>
  );
}
