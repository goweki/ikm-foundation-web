"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQcomponent({ FAQs }: { FAQs: FAQ[] }) {
  return (
    <div className="w-full">
      {FAQs.map((FAQitem, i) => (
        <div
          key={i}
          className="mx-auto w-full max-w-5xl rounded-2xl bg-slate-200 py-4 px-2 mb-5"
        >
          <Disclosure>
            {({ open }) => (
              <div>
                <DisclosureButton className="flex w-full justify-between rounded-lg p-2 text-left text-lg font-medium">
                  <span>{FAQitem.question}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </DisclosureButton>
                <DisclosurePanel className="px-4 pt-4 pb-2 text-base font-normal opacity-75">
                  {FAQitem.answer} <br />
                  {FAQitem.answer.includes("donate") && (
                    <span>
                      Do it via the{" "}
                      <Link href="#donate" className="text-blue-500">
                        donation link
                      </Link>
                    </span>
                  )}
                  {FAQitem.answer.includes("work together") && (
                    <span>
                      Check out the{" "}
                      <Link href="#requests" className="text-blue-500">
                        Requests Section
                      </Link>{" "}
                      and choose a suitable partnership
                    </span>
                  )}
                </DisclosurePanel>
              </div>
            )}
          </Disclosure>
        </div>
      ))}
    </div>
  );
}
