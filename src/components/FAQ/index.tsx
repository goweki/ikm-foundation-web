import Link from "next/link";
import { GraduationCap, Rocket, Heart, Shield, Star } from "lucide-react";

const faqData: { label: string; href: string; icon: React.ReactNode }[] = [
  {
    label: "IKMF Scholarship",
    href: "/scholarship#faq-section",
    icon: <GraduationCap className="w-8 h-8" />,
  },
  {
    label: "Head Start Africa",
    href: "/headstart#faq-section",
    icon: <Rocket className="w-8 h-8" />,
  },
  {
    label: "Healthcare Support",
    href: "/healthcare#faq-section",
    icon: <Heart className="w-8 h-8" />,
  },
  {
    label: "Vulnerable Groups",
    href: "/vulnerable-group#faq-section",
    icon: <Shield className="w-8 h-8" />,
  },
  {
    label: "Special Project",
    href: "/special-project#faq-section",
    icon: <Star className="w-8 h-8" />,
  },
];

const FAQ = () => {
  return (
    <>
      <div
        id="faq"
        className="mx-auto max-w-7xl py-24 lg:px-8 bg-blue-800 rounded-2xl my-16 faq-bg"
      >
        <h2 className="font-light text-4xl lg:text-6xl text-center text-moss mb-12 px-4 text-white">
          Frequently Asked Questions
        </h2>
        <div className="w-full px-4 pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {faqData.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group aspect-square rounded-2xl bg-white p-6 text-center hover:bg-gradient-to-br hover:from-blue-100 hover:to-purple-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-4"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white group-hover:from-purple-500 group-hover:to-blue-600 transition-all duration-300 shadow-lg">
                {item.icon}
              </div>
              <span className="text-lg font-semibold group-hover:text-gray-800 transition-colors duration-300">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
