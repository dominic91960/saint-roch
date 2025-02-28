"use client";

import React from "react";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { RiFileListLine } from "react-icons/ri";
import { FaSquare } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";

import { SlideUp } from "@/lib/utils";
import MainCategoryCarousel from "./MainCategoryCarousel";

import { homepageCategoriesData } from "@/lib/constants";

const MainCategories = () => {
  return (
    <section className="container mx-auto px-[15px] text-[14px] sm:text-[17px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[27px]">
      {homepageCategoriesData.map(
        ({
          name,
          wattage,
          slogan,
          products: { boilerImages, desc, boilerNames },
        }) => (
          <React.Fragment key={name}>
            {/* Category name */}
            <h1 className="title-text-stroke relative inline-flex w-full flex-col text-[48px] capitalize leading-[0.9em] sm:text-[76px] md:text-[104px] lg:text-[132px] xl:text-[160px] 2xl:text-[196px]">
              {name.split(" ")[0]} <br />
              {name.split(" ")[1]} <br />
              <span className="no-text-stroke absolute bottom-0 right-0 ms-[0.3em] h-fit -translate-y-[10%] text-[0.3em] leading-[0.9em]">
                {wattage}
              </span>
            </h1>

            {/* Slogan */}
            <p className="mt-[0.4em] bg-[#D9D9D9] py-[0.2em] ps-[0.8em] font-semibold">
              {slogan}
            </p>

            {/* Grid */}
            <motion.div
              className="mb-[8em] mt-[4.5em] grid justify-items-center gap-[1.3em] lg:grid-cols-2 lg:items-center lg:gap-0"
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Image area */}
              <div className="relative w-[260px] pt-[0.7em] text-[40px] sm:w-[310px] sm:text-[50px] md:w-[360px] md:text-[60px] lg:w-[420px] lg:text-[68px] xl:w-[481px] xl:text-[72px] 2xl:w-[530px] 2xl:text-[76px]">
                <MainCategoryCarousel images={boilerImages} />
              </div>

              {/* Text area */}
              <div>
                <h4 className="flex items-center gap-[0.3em] text-[0.9em] font-medium capitalize text-black/50 md:text-[0.8em] lg:text-[0.7em] 2xl:text-[0.6em]">
                  <RiFileListLine className="-translate-y-[0.1em] text-[1.2em]" />
                  Main categories
                </h4>
                {/* Category name */}
                <h3 className="mb-[0.2em] mt-[0.1em] text-[46px] font-bold capitalize leading-none sm:text-[54px] md:text-[62px] lg:text-[66px] xl:text-[68px] 2xl:text-[72px]">
                  {name.split(" ")[0]} <br />
                  {name.split(" ")[1]}
                  <hr className="w-[2.65ch] border-t-[6px] border-t-primary" />
                </h3>

                {/* Slogan */}
                <p className="text-[1.2em] font-semibold leading-none">
                  {slogan}
                </p>

                {/* Desc */}
                <p className="my-[0.5em] leading-tight md:text-[0.9em] lg:text-[0.8em] xl:text-[0.7em] 2xl:text-[0.6em]">
                  {desc}
                </p>

                {/* Types */}
                <ul className="list-inside ps-[4ch] font-medium *:flex *:items-center *:gap-[0.35em]">
                  {boilerNames.map((name) => (
                    <li key={name}>
                      <FaSquare className="text-[0.4em]" />
                      {name}
                    </li>
                  ))}
                </ul>

                <div className="mt-[1.4em] flex flex-wrap items-center gap-[0.8em] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[16px]">
                  <Button variant="primary" className="w-fit">
                    Explore Our boilers
                  </Button>
                  <Button size="none" className="ms-[0.5em] w-fit">
                    Learn more <HiArrowLongRight />
                  </Button>
                </div>
              </div>
            </motion.div>
          </React.Fragment>
        ),
      )}
    </section>
  );
};

export default MainCategories;
