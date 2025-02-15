"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

import { motion } from "framer-motion";

import { SlideLeft, Grow } from "@/lib/utils";
import "@/assets/styles/product-importance.css";

interface ProductImportanceProps {
  title: string;
  cardData: { id: string; cardImage: StaticImageData; cardDesc: string }[];
}

const ProductImportance: React.FC<ProductImportanceProps> = ({
  title,
  cardData,
}) => {
  return (
    <section className="bg-[#EEEEEE] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[26px]">
      <div className="product-importance-grid section-padding container mx-auto py-[3em]">
        <div className="title">
          <motion.h1
            variants={SlideLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-right text-[32px] font-bold leading-none sm:text-[38px] md:text-[46px] lg:text-[54px] xl:text-[58px] 2xl:text-[64px]"
          >
            The <br /> Importance of <br />
            <span className="text-primary">
              {title.toUpperCase()}
            </span> <br /> in Today&apos;s <br /> World
          </motion.h1>
          <motion.div
            variants={Grow(1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="ms-auto mt-[1.5em] h-[6em] w-[0.3em] bg-primary"
          ></motion.div>
        </div>
        {cardData.map(({ id, cardImage, cardDesc }, i) => {
          const gridClass = ["card-one, card-two, card-three"];
          const reverse = i === 2;
          const imageAlignment = ["ms-auto", "mx-auto", "me-auto"];
          const textAlignment = ["text-left", "text-center", "text-right"];
          const textPadding = reverse
            ? "pt-[3em] pb-[1em] sm:pt-[2em]"
            : "pt-[1em] pb-[3em] sm:pb-[2em]";

          return (
            <article
              key={id}
              className={`${gridClass} mx-auto flex w-[90%] rounded-[1em] bg-white ${reverse ? "flex-col-reverse" : "flex-col"} group sm:w-full`}
            >
              <div
                className={`${imageAlignment[i]} w-4/5 overflow-hidden rounded-[1em]`}
              >
                <Image
                  src={cardImage}
                  alt={id}
                  className="ease-[cubic-bezier(0.25, 1, 0.5, 1)] rounded-[1em] object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p
                className={`px-[2em] ${textPadding} ${textAlignment[i]} font-medium`}
              >
                {cardDesc}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ProductImportance;
