import React from "react";
import Image from "next/image";

import { Button } from "../ui/button";
import { HiArrowLongRight } from "react-icons/hi2";

import bg from "@/assets/images/landing-page/hero/bg.png";
import hero from "@/assets/images/landing-page/hero/hero.png";

const Hero = () => {
  return (
    <section
      className="relative flex min-h-[calc(100dvh-60px)] items-center bg-cover bg-bottom pb-[3em] pt-[2em] text-[12px] sm:pb-[3.25em] sm:text-[13px] md:pb-[3.5em] md:text-[14px] lg:pb-[3.75em] lg:text-[15px] xl:pb-[4em] xl:text-[16px] 2xl:pb-[4em] 2xl:text-[16px]"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/80 to-white/70 sm:bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.8),rgba(255,255,255,0.8),transparent)]"></div>
      <div className="container relative z-[1] mx-auto px-[15px] text-center">
        {/* Title */}
        <h1 className="title-text-stroke text-[40px] font-semibold leading-none text-transparent sm:text-[50px] md:text-[60px] lg:text-[80px] xl:text-[95px] 2xl:text-[108px]">
          Exceptional <br /> Quality
        </h1>

        {/* Image */}
        <div className="mx-auto w-[290px] sm:-mt-[5px] sm:w-[350px] md:-mt-[10px] md:w-[410px] lg:-mt-[15px] lg:w-[480px] xl:-mt-[18px] xl:w-[550px] 2xl:-mt-[20px] 2xl:w-[592px]">
          <Image src={hero} alt="Hero" className="object-contain" />
        </div>

        {/* Hero text */}
        <p className="mx-auto max-w-[52ch] font-bold">
          Car engine png images, Automobile Engineering, Car Mechanical
          Engineering, Electrical Engineering.
        </p>

        {/* CTA */}
        <div className="mt-[1.8em] flex flex-col items-center justify-center gap-[1em] sm:flex-row">
          <Button variant="primary">Explore Our boilers</Button>
          <Button size="none">
            Learn more about sustainability <HiArrowLongRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
