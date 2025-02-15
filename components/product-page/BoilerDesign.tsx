"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import { SlideRight } from "@/lib/utils";
import boilerDesign from "@/assets/images/product-page/commodore/boiler-design.png";

const BoilerDesign = () => {
  return (
    <section className="section-padding container mx-auto mb-[3em] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[21px] xl:text-[24px] 2xl:text-[26px]">
      <motion.h1
        variants={SlideRight(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="title-text-stroke mb-[0.25em] mt-[0.8em] text-[50px] leading-none sm:text-[80px] md:text-[105px] lg:text-[130px] xl:text-[146px] 2xl:text-[160px]"
      >
        3 Pass Boiler <br /> Design
      </motion.h1>
      <p className="mb-[2em] bg-[#D9D9D9] ps-[1em] font-semibold">
        Effortless Warmth for Every Home
      </p>
      <div className="flex items-center justify-center">
        <Image
          src={boilerDesign}
          alt="Three pass boiler"
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default BoilerDesign;
