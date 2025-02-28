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
    <section className="bg-[#F1F1F1] pt-[1em] text-[12px] leading-none sm:text-[12.75px] md:text-[13.5px] lg:text-[14.25px] xl:text-[15px] 2xl:text-[15.75px]">
      <div className="section-padding container mx-auto grid grid-cols-2 gap-[1em]">
        {/* Logo */}
        <Image
          src={logo}
          alt="Logo"
          className="col-span-full mx-auto w-[40%]"
        />

        {/* Wrapper for corporate, page and legal links */}
        <div className="flex flex-col gap-[1.5em]">
          {/* Corporate */}
          <CorporateLinks />

          {/* Pages */}
          <PageLinks />

          {/* Legal */}
          <LegalLinks />
        </div>

        {/* Wrapper for boiler and product links */}
        <div className="flex flex-col gap-[1.5em]">
          {/* Boilers */}
          <BoilerLinks />

          {/* Products */}
          <ProductLinks />
        </div>

        <SocialLinks />

        <hr className="col-span-full border-t-black" />

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
