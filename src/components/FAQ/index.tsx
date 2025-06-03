import Link from "next/link";

const FAQ = () => {
  return (
    <div
      id="faq-section"
      className="mx-auto max-w-7xl py-24 lg:px-8 bg-blue-800 rounded-2xl my-16 faq-bg"
    >
      <h3 className="text-xl font-normal text-white text-center mb-6">FAQ</h3>
      <h2 className="text-4xl lg:text-6xl font-semibold text-center text-white">
        Frequently asked questions
        <br /> by cartegory
      </h2>
      <div className="w-full px-4 pt-16 flex flex-col items-center text-xl font-semibold">
        <Link
          href="/scholarship#faq-section"
          className="mx-auto w-full max-w-5xl rounded-2xl bg-white hover:bg-slate-200 hover:text-2xl py-8 px-6 mb-5 text-center transition-all duration-200"
        >
          IKMF Scholarship
        </Link>

        <Link
          href="/headstart#faq-section"
          className="mx-auto w-full max-w-5xl rounded-2xl bg-white hover:bg-slate-200 hover:text-2xl py-8 px-6 mb-5 text-center transition-all duration-200"
        >
          Head Start Africa
        </Link>

        <Link
          href="/healthcare#faq-section"
          className="mx-auto w-full max-w-5xl rounded-2xl bg-white hover:bg-slate-200 hover:text-2xl py-8 px-6 mb-5 text-center transition-all duration-200"
        >
          Healthcare Support
        </Link>
        <Link
          href="/vulnerable-group#faq-section"
          className="mx-auto w-full max-w-5xl rounded-2xl bg-white hover:bg-slate-200 hover:text-2xl py-8 px-6 mb-5 text-center transition-all duration-200"
        >
          Vulnerable Groups
        </Link>
      </div>
    </div>
  );
};

export default FAQ;
