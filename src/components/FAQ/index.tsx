import Link from "next/link";

const faqData: { label: string; href: string }[] = [
  { label: "IKMF Scholarship", href: "/scholarship#faq-section" },
  { label: "Head Start Africa", href: "/headstart#faq-section" },
  { label: "Healthcare Support", href: "/healthcare#faq-section" },
  { label: "Vulnerable Groups", href: "/vulnerable-group#faq-section" },
];

const FAQ = () => {
  return (
    <>
      <h2 className="font-light text-4xl lg:text-6xl text-center text-moss mb-12">
        Frequently asked questions
      </h2>
      <div
        id="faq"
        className="mx-auto max-w-7xl py-24 lg:px-8 bg-blue-800 rounded-2xl my-16 faq-bg"
      >
        <h3 className="text-xl font-normal text-white text-center mb-6">
          FAQs by cartegory{" "}
        </h3>

        <div className="w-full px-4 pt-16 flex flex-col items-center text-xl font-semibold">
          {faqData.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5 text-center hover:text-2xl hover:bg-linear-to-r hover:from-cyan-200 hover:to-blue-500 hover:translate-y-1 transition-all duration-200 ease-in-out"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
