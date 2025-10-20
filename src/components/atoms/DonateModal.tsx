"use client";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import { Heart, X } from "lucide-react";
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

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(true);
  };

  return (
    <>
      <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
        <div className={"w-full items-center justify-center"}>
          <button
            type="button"
            className={`transition-all duration-200 hover:scale-105 ${
              buttonLocation == "hero"
                ? "text-xl md:text-4xl py-2 px-4 md:py-4 md:px-8"
                : "py-1 px-2 md:py-2 md:px-4"
            } bg-blue-600 text-white hover:bg-linear-to-r hover:from-blue-700 hover:to-purple-700 font-semibold rounded-lg cursor-pointer`}
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
            <div className="fixed inset-0 bg-foreground/90" />
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
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all bg-card">
                  {/*Header Snippet */}
                  <div className="relative -mt-6 -mx-6 px-6 py-8 bg-gradient-to-br from-blue-600 via-blue-800 to-blue-900 overflow-hidden">
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="floating-orb absolute top-2 left-4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                      <div className="floating-orb absolute bottom-2 right-4 w-24 h-24 bg-blue-200 rounded-full blur-2xl"></div>
                      <div className="floating-orb absolute top-1/2 left-1/3 w-20 h-20 bg-purple-200 rounded-full blur-2xl"></div>
                    </div>

                    {/* Decorative Pattern */}
                    <div className="absolute inset-0 opacity-15">
                      <div className="absolute top-4 right-16 w-12 h-12 border-2 border-white/60 rounded-full animate-spin-slow"></div>
                      <div className="absolute bottom-4 left-4 w-8 h-8 border border-white/40 rounded-lg rotate-45 animate-bounce"></div>
                      <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-white/30 rounded-full animate-pulse"></div>
                    </div>

                    {/* Gradient Overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10"></div>

                    {/* Header Content */}
                    <div className="relative z-10">
                      <div className="flex justify-between items-start">
                        {/* Left side - Icon and Content */}
                        <div className="flex-1 pr-4">
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-4 border border-white/30 shadow-lg">
                            <Heart className="w-6 h-6 text-white drop-shadow-lg animate-pulse" />
                          </div>

                          <p className="text-white font-light text-lg sm:text-xl leading-relaxed drop-shadow-sm">
                            Donate to support our cause and help us make a
                            difference in the society.
                          </p>
                        </div>

                        {/* Right side - Close Button */}
                        <button
                          type="button"
                          onClick={closeModal}
                          className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Bottom gradient fade */}
                    <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white to-transparent"></div>
                  </div>

                  <div className="py-2 lg:py-4 px-4 mx-auto max-w-screen-md">
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
                      <div className="grid grid-cols-2 gap-4">
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
                      </div>
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
