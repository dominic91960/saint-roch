"use client";

import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Link from "next/link";

import "@/assets/styles/navbar.css";

const inter = Inter({ subsets: ["latin"] });
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/commodore", label: "Products" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
];

const Navbar = () => {
  const path = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  console.log(path);

  useEffect(() => {
    const closeMobileNav = () => {
      if (window.innerWidth >= 768) setIsMobileNavOpen(false);
    };

    window.addEventListener("resize", closeMobileNav);

    return () => window.removeEventListener("resize", closeMobileNav);
  }, []);

  const toggleMobileNav = () => setIsMobileNavOpen((prev) => !prev);
  const getColor = (currentPath: string) => {
    const activeClasses = "text-primary border-b-primary";
    const inactiveClasses = "text-black border-b-black/30";

    if (path === currentPath) return activeClasses;
    else if (path.includes(currentPath) && currentPath !== "/")
      return activeClasses;
    else return inactiveClasses;
  };

  return (
    <section
      className={`relative z-50 flex h-[60px] items-center bg-white ${inter.className} text-[16px] shadow-[0_0_5px_rgba(0,0,0,0.6)]`}
    >
      {/* Contains logo, desktop nav links and mobile toggle */}
      <div className="container mx-auto flex items-center justify-between px-[15px]">
        {/* Logo */}
        {/* <div className="h-8"></div> */}
        <Link href="/" className="font-semibold">
          LOGO
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden space-x-[3em] font-medium md:block">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              href={to}
              className={`${getColor(to)} hover:text-primary`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className={`${isMobileNavOpen ? "active" : ""} mobile-nav-toggle size-8 md:hidden`}
          onClick={toggleMobileNav}
        >
          <div className="relative h-0.5 w-full bg-black ease-out before:absolute before:left-0 before:top-0 before:h-0.5 before:w-full before:-translate-y-2 before:bg-black after:absolute after:left-0 after:top-0 after:h-0.5 after:w-full after:translate-y-2 after:bg-black"></div>
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={`mobile-nav ${isMobileNavOpen ? "" : "hidden"} fixed left-0 right-0 top-[60px] h-[calc(100dvh-60px)] w-full overflow-hidden bg-overlay backdrop-blur-sm`}
      >
        <nav className="container mx-auto flex flex-col gap-[1em] px-[15px] pb-[2.5em] pt-[1em] font-medium">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              href={to}
              className={`w-full border-b py-[0.5em] ${getColor(to)} hover:text-primary`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
