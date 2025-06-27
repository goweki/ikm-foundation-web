"use client";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, useState } from "react";
import { PaystackButton } from "react-paystack";

const DonateModal = ({ buttonLocation = "default" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY as string;
  const [amount, setAmount] = useState<number>(1000);
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const paystackProps = {
    email,
    amount: amount * 100,
    currency: "KES",
    metadata: {
      custom_fields: [
        {
          display_name: "Name",
          variable_name: "name",
          value: name,
        },
        {
          display_name: "Phone Number",
          variable_name: "phone",
          value: phone,
        },
      ],
    },
    publicKey,
    text: "DONATE",
    onSuccess: () => alert("Thanks for donating to the Foundation!"),
    onClose: () => alert("We appreciate the thought, it counts!"),
  };

  // const isDisabled = !email || !amount || !publicKey;

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
        <div
          className={
            buttonLocation == "navbar"
              ? "hidden lg:block"
              : "w-full items-center justify-center"
          }
        >
          <button
            type="button"
            className={`${
              buttonLocation == "navbar"
                ? " hover:bg-purple-800 hover:text-white navbutton justify-end"
                : buttonLocation == "banner"
                ? "bg-purple-800 hover:bg-purple-900 text-white"
                : "btn-primary"
            } px-6 md:px-8 lg:px-12 py-2 md:py-4 text-md md:text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full cursor-pointer`}
            onClick={openModal}
          >
            Donate
          </button>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-200 bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="py-2 px-4 mt-2 text-sm text-red-600 hover:text-red-800 font-medium w-fit text-center rounded-lg bg-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 hover:bg-red-100"
                    >
                      X
                    </button>
                  </div>
                  <div className="py-2 lg:py-4 px-4 mx-auto max-w-screen-md">
                    {/* <div className="flex flex-shrink-0 items-center justify-center">
                      <p className="text-2xl sm:text-4xl font-semibold text-black">
                        Support The Cause
                      </p>
                    </div> */}
                    <p className="mb-4 lg:mb-8 mt-2 font-light text-center sm:text-xl text-slate-600">
                      Donate to support our cause and help us make a difference
                      in the society.
                    </p>
                    <form className="space-y-2">
                      <Field>
                        <Label className="text-sm/6 font-medium">
                          Email <span className="text-red-600">*</span>{" "}
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className={clsx(
                            "my-2 block w-full rounded-lg border-none bg-black/5 px-3 py-1.5 text-sm/6 text-black",
                            "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-black/25"
                          )}
                        />
                      </Field>
                      <Field>
                        <Label className="text-sm/6 font-medium">
                          Amount <span className="text-red-600">*</span>{" "}
                          <span className="text-xs italic font-normal">
                            (in Kenya Shillings)
                          </span>
                        </Label>
                        <Input
                          id="amount"
                          type="number"
                          value={amount}
                          onChange={(e) => setAmount(Number(e.target.value))}
                          required
                          className={clsx(
                            "my-2 block w-full rounded-lg border-none bg-black/5 px-3 py-1.5 text-sm/6 text-black",
                            "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-black/25"
                          )}
                        />
                      </Field>
                      <Field>
                        <Label className="text-sm/6 font-medium">
                          Name{" "}
                          <span className="text-xs italic font-normal">
                            (optional)
                          </span>
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                          className={clsx(
                            "my-2 block w-full rounded-lg border-none bg-black/5 px-3 py-1.5 text-sm/6 text-black",
                            "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-black/25"
                          )}
                        />
                      </Field>
                      <Field>
                        <Label className="text-sm/6 font-medium">
                          Phone No.{" "}
                          <span className="text-xs italic font-normal">
                            (optional)
                          </span>
                        </Label>
                        <Input
                          id="phone"
                          type="text"
                          onChange={(e) => setPhone(e.target.value)}
                          value={phone}
                          className={clsx(
                            "my-2 block w-full rounded-lg border-none bg-black/5 px-3 py-1.5 text-sm/6 text-black",
                            "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-black/25"
                          )}
                        />
                      </Field>
                    </form>
                    <PaystackButton
                      className="btn-primary my-4 text-sm uppercase font-semibold hover:shadow-xl hover:scale-105 transition duration-200 py-2 w-full md:py-3 rounded-full"
                      {...paystackProps}
                    />
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default DonateModal;
