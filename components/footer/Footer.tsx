"use client";

import React from "react";
import Image from "next/image";

import logo from "@/assets/images/logo.png";
import CorporateLinks from "./CorporateLinks";
import PageLinks from "./PageLinks";
import ProductLinks from "./ProductLinks";
import BoilerLinks from "./BoilerLinks";
import LegalLinks from "./LegalLinks";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <section className="relative z-10 bg-[#F1F1F1] pt-[1.5em] text-[12px] leading-none sm:text-[12.75px] md:text-[13.5px] lg:pt-[4em] lg:text-[14.25px] xl:text-[15px] 2xl:text-[15.75px]">
      <div className="section-padding container mx-auto grid grid-cols-2 gap-[1em] sm:grid-cols-3 lg:grid-cols-4">
        {/* Logo */}
        <Image
          src={logo}
          alt="Logo"
          className="col-span-full mx-auto mb-[0.8em] w-[150px] lg:hidden"
        />

        {/* Wrapper for corporate, page and legal links */}
        <div className="flex flex-col gap-[1.5em] lg:col-span-2 lg:grid lg:grid-cols-2">
          <div className="flex flex-col justify-between gap-[1.5em] bg-slate-600/0">
            {/* Logo */}
            <Image
              src={logo}
              alt="Logo"
              className="mt-[1em] hidden bg-black/0 lg:block lg:w-[180px] xl:w-[230px] 2xl:w-[280px]"
            />

            {/* Corporate */}
            <CorporateLinks />
          </div>

          <div className="flex flex-col justify-between gap-[1.5em]">
            {/* Pages */}
            <PageLinks />

            {/* Legal */}
            <LegalLinks />
          </div>
        </div>

        {/* Seperator */}
        <div className="hidden sm:block lg:hidden"></div>

        {/* Wrapper for boiler and product links */}
        <div className="flex flex-col gap-[1.5em] lg:col-span-2 lg:grid lg:grid-cols-2">
          {/* Boilers */}
          <BoilerLinks />

          <div className="flex flex-col justify-between gap-[1.5em]">
            {/* Products */}
            <ProductLinks />

            {/* Social Links */}
            <SocialLinks className="hidden lg:col-start-2 lg:block" />
          </div>
        </div>

        {/* Social Links */}
        <SocialLinks className="col-span-full mx-auto mt-[0.4em] w-fit text-center lg:hidden" />

        <hr className="col-span-full border-t-black lg:mb-[0.7em] lg:mt-[2em]" />

        <div className="col-span-full mb-[2em] mt-[1.2em] flex flex-col gap-[0.8em]">
          <p>© 2025 Copyright All rights Reserved Saint Roch Srl</p>
          <p>Sede legale: Via Ritonda 79, 37047 San Bonifacio (VR) Italy</p>
          <p>Email: info@saintrochsrl.com - Centralino: +39 045 445 0067</p>
          <p>Capitale Sociale € 40.000.000,00 i.v.</p>
          <p>
            Rea Verona n° 271706 – Codice fiscale e numero d’iscrizione del
            Registro delle
          </p>
          <p>Imprese di Verona 11589530158</p>
          <p>P. IVA n. 04737240246 Codice SDI: M5UXCR1</p>
        </div>
      </div>

      <div className="bg-black py-[0.5em] text-center font-medium text-white">
        <p>Copyright {new Date().getFullYear()} | @ Saint_Roch</p>
      </div>
    </section>
  );
};

export default Footer;
