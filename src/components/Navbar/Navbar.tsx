"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "About Us", href: "#aboutus" },
  { label: "Apply", href: "#applications" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Us", href: "#contact-us" },
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
        <a href="#" className="text-4xl font-extrabold">
          IKM Foundation
        </a>
      </div>

      <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      <div
        className="hidden md:flex md:items-center md:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul className="md:flex items-center justify-between text-base pt-4 md:pt-0">
            {navItems.map((navItem_) => (
              <li key={navItem_.label}>
                <a className="md:p-4 py-3 px-0 block" href={navItem_.href}>
                  {navItem_.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
