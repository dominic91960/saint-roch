"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import logo from "@/assets/images/logo.png";
import "@/assets/styles/navbar.css";

const inter = Inter({ subsets: ["latin"] });
const navLinks = [
  { mainLink: null, links: [{ to: "/", label: "Home" }] },
  {
    mainLink: "Products",
    links: [
      { to: "/combi", label: "Combi" },
      { to: "/ultra", label: "Ultra" },
      { to: "/optimajor", label: "Optimajor" },
      { to: "/commodore", label: "Commodore" },
    ],
  },
  { mainLink: null, links: [{ to: "/about", label: "About Us" }] },
  { mainLink: null, links: [{ to: "/contact", label: "Contact Us" }] },
];

const Navbar = () => {
  const path = usePathname();
  const router = useRouter();

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  console.log(path);

  useEffect(() => {
    const closeMobileNav = () => {
      if (window.innerWidth >= 768) setIsMobileNavOpen(false);
    };

    window.addEventListener("resize", closeMobileNav);

    return () => window.removeEventListener("resize", closeMobileNav);
  }, []);

  const toggleMobileNav = () => {
    document.body.classList.toggle("nav-open");
    setIsMobileNavOpen((prev) => !prev);
  };
  const getColor = (currentPath: string) => {
    const activeClasses = "text-primary border-b-primary";
    const inactiveClasses = "text-black border-b-black/30";

    if (path === currentPath) return activeClasses;
    else if (path.includes(currentPath) && currentPath !== "/")
      return activeClasses;
    else return inactiveClasses;
  };
  const pushRoute = (to: string) => {
    const bodyClasses = document.body.classList;
    if (bodyClasses.contains("nav-open")) bodyClasses.remove("nav-open");

    router.push(to);
  };

  return (
    <section
      className={`z-50 flex items-center bg-white ${inter.className} relative text-[16px] shadow-[0_0_5px_rgba(0,0,0,0.6)]`}
    >
      {/* Contains logo, desktop nav links and mobile toggle */}
      <div className="section-padding container mx-auto flex h-[60px] items-center justify-between 2xl:px-[50px]">
        {/* Logo */}
        <button
          className="flex items-center justify-start"
          onClick={() => pushRoute("/")}
        >
          <Image
            src={logo}
            alt="Logo of saint roch"
            className="h-[35px] w-fit object-contain"
          />
        </button>

        {/* Desktop nav links */}
        <nav className="hidden gap-[3em] font-medium md:flex md:items-center">
          {navLinks.map(({ mainLink, links }) => {
            if (!mainLink)
              return (
                <button
                  key={links[0].label}
                  className={`${getColor(links[0].to)} hover:text-primary`}
                  onClick={() => pushRoute(links[0].to)}
                >
                  {links[0].label}
                </button>
              );

            return (
              <Select key={mainLink} onValueChange={pushRoute}>
                <SelectTrigger className="w-fit hover:text-primary">
                  <SelectValue placeholder={mainLink} />
                </SelectTrigger>
                <SelectContent align="center">
                  {links.map(({ to, label }) => (
                    <SelectItem
                      key={label}
                      value={to}
                      className={`${getColor(to)} cursor-pointer hover:text-primary`}
                    >
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            );
          })}
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
        className={`mobile-nav ${isMobileNavOpen ? "" : "hidden"} fixed left-0 right-0 top-[60px] h-[calc(100dvh-60px)] w-full overflow-hidden bg-white/80 backdrop-blur-sm`}
      >
        <nav className="section-padding container mx-auto flex flex-col gap-[1em] pb-[2.5em] pt-[1em] font-medium">
          {navLinks.map(({ mainLink, links }) => {
            if (!mainLink)
              return (
                <button
                  key={links[0].label}
                  className={`w-full border-b py-[0.5em] ${getColor(links[0].to)} hover:text-primary`}
                  onClick={() => pushRoute(links[0].to)}
                >
                  {links[0].label}
                </button>
              );

            return (
              <Select key={mainLink} onValueChange={pushRoute}>
                <SelectTrigger className="w-full border-b border-b-black/30 py-[0.5em] text-center hover:text-primary">
                  <SelectValue placeholder={mainLink} />
                </SelectTrigger>
                <SelectContent align="center" className="rounded-none">
                  {links.map(({ to, label }) => (
                    <SelectItem
                      key={label}
                      value={to}
                      className={`${getColor(to)} cursor-pointer rounded-none hover:text-primary`}
                    >
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            );
          })}
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
