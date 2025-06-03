"use client";

import { useState } from "react";
import { toast } from "react-toastify";

const MessageUsForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    try {
      const _postResponse = await fetch("/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      });

      if (!_postResponse.ok) {
        const errorData = await _postResponse.json();
        const error_message_ = errorData.message || "Message not sent";

        console.log("Message submission failed: ", error_message_);
        toast.error(error_message_);

        return;
      }

      const postResponse = await _postResponse.json();
      formElement.reset();
      toast.info(postResponse.message);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(
        "ERROR in MessageUs form: ",
        error.message || error || "UNKNOWN ERROR"
      );
      toast.error(error.message || error || "UNKNOWN ERROR");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      id="contactForm"
      onSubmit={handleSubmit}
      className="mx-auto max-w-md pt-5 px-4"
    >
      <div className="sm:col-span-4 mb-4">
        <label htmlFor="name" className="block text-sm/6 font-medium">
          Name
        </label>
        <div className="mt-2">
          <div className="flex items-center rounded-md bg-slate-200 pl-3 outline-1 -outline-offset-1 outline-slate-500 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            <input
              type="text"
              name="name"
              id="name"
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base placeholder:text-slate-500 focus:outline-none sm:text-sm/6"
              placeholder="Your name (optional)"
            />
          </div>
        </div>
      </div>
      <div className="sm:col-span-4 mb-4">
        <label htmlFor="phone" className="block text-sm/6 font-medium">
          Phone No.
        </label>
        <div className="mt-2">
          <div className="flex items-center rounded-md bg-slate-200 pl-3 outline-1 -outline-offset-1 outline-slate-500 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            <input
              type="tel"
              name="phone"
              id="phone"
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base placeholder:text-slate-500 focus:outline-none sm:text-sm/6"
              placeholder="Phone No. (optional)"
            />
          </div>
        </div>
      </div>
      <div className="sm:col-span-4 mb-4">
        <label htmlFor="email" className="block text-sm/6 font-medium">
          Email <span className="text-red-500">*</span>
        </label>
        <div className="mt-2">
          <div className="flex items-center rounded-md bg-slate-200 pl-3 outline-1 -outline-offset-1 outline-slate-500 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            <input
              type="email"
              name="email"
              id="email"
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base placeholder:text-slate-500 focus:outline-none sm:text-sm/6"
              placeholder="Email address"
              required
            />
          </div>
        </div>
      </div>

      <div className="col-span-full">
        <label htmlFor="message" className="block text-sm/6 font-medium">
          Message <span className="text-red-500">*</span>
        </label>
        <div className="mt-2">
          <textarea
            name="message"
            id="message"
            placeholder="Write your message..."
            rows={3}
            className="block w-full rounded-md bg-slate-200 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-slate-500 placeholder:text-slate-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn-primary font-bold hover:shadow-xl hover:scale-105 transition duration-200 py-2 md:py-3 w-full rounded-full my-6 uppercase"
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="flex justify-center items-center space-x-2">
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M4 12a8 8 0 018-8 8 8 0 010 16 8 8 0 01-8-8z"
              ></path>
            </svg>
            <span>Submitting...</span>
          </div>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
};

export default MessageUsForm;
