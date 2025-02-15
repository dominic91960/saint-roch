import React from "react";

import { Button } from "../ui/button";
import { RiFileListLine } from "react-icons/ri";
import { FaSquare } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";

import boiler from "@/assets/images/landing-page/main-categories/boiler.png";
import MainCategoryCarousel from "./MainCategoryCarousel";

const categories = [
  {
    name: "Residential boilers",
    slogan: "Effortless Warmth for Every Home",
    products: [
      {
        id: "prod1.1",
        boilerImages: [
          { id: "image1.1.1", image: boiler, alt: "Boiler" },
          { id: "image1.1.2", image: boiler, alt: "Boiler" },
          { id: "image1.1.3", image: boiler, alt: "Boiler" },
        ],
        desc: "When users hover over the main categories, the subcategories should appear along with their respective category images.",
        boilerNames: ["Combi", "Ultra"],
      },
      {
        id: "prod1.2",
        boilerImages: [
          { id: "image1.2.1", image: boiler, alt: "Boiler" },
          { id: "image1.2.2", image: boiler, alt: "Boiler" },
          { id: "image1.2.3", image: boiler, alt: "Boiler" },
        ],
        desc: "When users hover over the main categories, the subcategories should appear along with their respective category images.",
        boilerNames: ["Combi", "Ultra"],
      },
    ],
  },
  {
    name: "Commercial boilers",
    slogan: "Effortless Warmth for Every Home",
    products: [
      {
        id: "prod2.1",
        boilerImages: [
          { id: "image2.1.1", image: boiler, alt: "Boiler" },
          { id: "image2.1.2", image: boiler, alt: "Boiler" },
          { id: "image2.1.3", image: boiler, alt: "Boiler" },
        ],
        desc: "When users hover over the main categories, the subcategories should appear along with their respective category images.",
        boilerNames: ["Optimajor", "Commodore"],
      },
      {
        id: "prod2.2",
        boilerImages: [
          { id: "image2.2.1", image: boiler, alt: "Boiler" },
          { id: "image2.2.2", image: boiler, alt: "Boiler" },
          { id: "image2.2.3", image: boiler, alt: "Boiler" },
        ],
        desc: "When users hover over the main categories, the subcategories should appear along with their respective category images.",
        boilerNames: ["Optimajor", "Commodore"],
      },
    ],
  },
];

const MainCategories = () => {
  return (
    <section className="container mx-auto px-[15px] text-[14px] sm:text-[17px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[27px]">
      {categories.map(({ name, slogan, products }) => (
        <React.Fragment key={name}>
          {/* Category name */}
          <h1 className="title-text-stroke inline-flex flex-col text-[48px] capitalize leading-[0.9em] sm:text-[76px] md:text-[104px] lg:text-[132px] xl:text-[160px] 2xl:text-[196px]">
            {name.split(" ")[0]} <br />
            {name.split(" ")[1]} <br />
            <span className="no-text-stroke ms-[0.3em] text-[0.3em] leading-[0.9em]">
              92kW to 203kW
            </span>
          </h1>

          {/* Slogan */}
          <p className="mt-[0.4em] bg-[#D9D9D9] py-[0.2em] ps-[0.8em] font-semibold">
            {slogan}
          </p>

          {/* Grid */}
          {products.map(({ id, boilerImages, boilerNames, desc }, i) => (
            <div
              key={id}
              className="mb-[8em] mt-[4.5em] grid justify-items-center gap-[1.3em] lg:grid-cols-2 lg:items-center lg:gap-0"
            >
              {/* Image area */}
              <div className="relative w-[260px] text-[40px] sm:w-[310px] sm:text-[50px] md:w-[360px] md:text-[60px] lg:w-[420px] lg:text-[68px] xl:w-[481px] xl:text-[72px] 2xl:w-[530px] 2xl:text-[76px]">
                <MainCategoryCarousel images={boilerImages} />
                <h2 className="title-text-stroke absolute -top-[6%] left-0 uppercase leading-none">
                  {boilerNames[i]}
                </h2>
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
            </div>
          ))}
        </React.Fragment>
      ))}
    </section>
  );
};

export default MainCategories;
