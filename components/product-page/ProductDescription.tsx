"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

import { motion } from "framer-motion";

import { SlideLeft } from "@/lib/utils";
import logo from "@/assets/images/product-page/logo.png";

interface ProductDescriptionProps {
  title: string;
  descOne: string;
  prodImage: StaticImageData;
  descTwo: string;
}
const ProductDescription: React.FC<ProductDescriptionProps> = ({
  title,
  descOne,
  prodImage,
  descTwo,
}) => {
  return (
    <section className="section-padding container mx-auto text-[14px] sm:text-[20px] md:text-[26px] lg:text-[32px] xl:text-[36px] 2xl:px-[4em] 2xl:text-[38px]">
      {/* Division with logo and descOne */}
      <div className="flex flex-col gap-[2em] sm:flex-row sm:justify-between">
        <div className="w-[185px] sm:w-[250px] md:w-[325px] lg:w-[400px] xl:w-[466px] 2xl:w-[520px]">
          <Image
            src={logo}
            alt="Saint roch logo"
            className="w-full object-contain"
          />
        </div>
        <div>
          <motion.h1
            variants={SlideLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-right text-[42px] font-bold leading-none sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[110px] 2xl:text-[120px]"
          >
            Saint Roch <br /> <span className="text-primary">Burners</span>
          </motion.h1>
          <p className="ms-auto mt-[2em] w-[20ch] text-right font-semibold">
            {descOne}
          </p>
        </div>
      </div>

      {/* Division with image and descTwo */}
      <div className="mt-[2em] flex h-fit flex-col gap-[2em] sm:mt-0 sm:flex-row-reverse sm:items-center sm:justify-between">
        <Image
          src={prodImage}
          alt={`A model of Sain Roch ${title} boiler.`}
          className="object-contain sm:hidden"
        />
        <div
          className="hidden h-[16em] w-full overflow-hidden bg-[length:auto_100%] sm:block"
          style={{ backgroundImage: `url(${prodImage.src})` }}
        ></div>
        <p className="w-[24ch] shrink-0 font-semibold">{descTwo}</p>
      </div>
    </section>
  );
};

export default ProductDescription;
