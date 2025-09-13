import Link from "next/link";
import MessageUsForm from "../forms/MessageUs";

const MessageUs = () => {
  return (
    <div id="contact-us" className="bg-messageus my-32">
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-blue text-xl font-bold tracking-widest my-4">
            SEND US A MESSAGE
          </h2>
          <p className="text-slate-700 text-base font-normal max-w-xl m-auto">
            Whether you&apos;d like to support our Scholars, partner with us, or
            learn more, we&apos;d love to hear from you. Send us an email at{" "}
            <Link
              className="text-blue-600 hover:underline"
              href="mailto:info@ikm-foundation.org"
            >
              info@ikm-foundation.org
            </Link>{" "}
            or fill the form below
          </p>
        </div>

        <MessageUsForm />
      </div>
    </div>
  );
};

export default MessageUs;
