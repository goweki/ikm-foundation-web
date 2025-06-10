import Link from "next/link";
import MessageUsForm from "../forms/MessageUs";

const MessageUs = () => {
  return (
    <div className="bg-messageus my-32" id="contactus-section">
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8">
        <div className="text-center">
          <h3 className="text-blue text-lg font-normal tracking-widest">
            SEND US A MESSAGE
          </h3>
          <h2 className="text-4xl sm:text-6xl font-bold my-6 leading-12">
            We&apos;d love to hear from <br /> you
          </h2>
          <p className="text-slate-700 text-base font-normal">
            Write us a message in the form below or
            <br /> send us an email at{" "}
            <Link
              className="text-blue-600 hover:underline"
              href="mailto:info@ikm-foundation.org"
            >
              info@ikm-foundation.org
            </Link>
          </p>
        </div>

        <MessageUsForm />
      </div>
    </div>
  );
};

export default MessageUs;
