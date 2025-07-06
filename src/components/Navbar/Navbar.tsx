"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "../Logos/ikmf";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "About us", href: "#about-us" },
  { label: "Focus areas", href: "#focus-areas" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact us", href: "#contact-us" },
];

const Navbar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isMobileMenuOpen, setMobileMenuIsOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    function controllNavBar() {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    }

    window.addEventListener("scroll", controllNavBar);

    return () => {
      window.removeEventListener("scroll", controllNavBar);
    };
  }, []);

  return (
    <header
      className={`w-full fixed z-30 bg-gray-800/80 text-white backdrop-blur-md lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-sm transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex-1 flex justify-between items-center mix-blend-screen">
        <Link href="/" className="text-xl font-bold">
          <div className="flex flex-row items-center justify-center">
            <div className="w-10 h-10 m-2 mb-1">
              <Logo />
            </div>
            <p className="w-fit leading-none text-blue-300">
              IKM <br />
              Foundation
            </p>
          </div>
        </Link>
      </div>

      <label
        htmlFor="menu-toggle"
        className="pointer-cursor md:hidden block text-white hover:text-blue-200"
      >
        {!isMobileMenuOpen ? (
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        )}
      </label>

      <div
        className="hidden md:flex md:items-center md:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul className="md:flex items-center justify-between text-base pt-4 md:pt-0">
            {navItems.map((navItem_) => (
              <li key={navItem_.label}>
                <Link
                  className="md:p-4 py-3 px-0 block text-white hover:text-blue-200"
                  href={navItem_.href}
                >
                  {navItem_.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {isMobileMenuOpen ? (
        <div
          className="flex md:hidden w-full"
          id="mobile-menu"
          onClick={() => setMobileMenuIsOpen(false)}
        >
          <nav>
            <ul className="md:hidden flex flex-col text-base pt-4">
              {navItems.map((navItem_) => (
                <li key={navItem_.label} className="block">
                  <Link
                    className="py-2 px-2 block text-white hover:bg-blue-800 rounded-lg"
                    href={navItem_.href}
                  >
                    {navItem_.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
