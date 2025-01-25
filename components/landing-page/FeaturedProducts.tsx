import React from "react";

import product from "@/assets/images/landing-page/featured-products/product-one.png";
import Image from "next/image";

const featuredProducts = [
  {
    id: "01",
    category: "Cast iron boilers",
    image: product,
    emphasis: "Display key",
    desc: "certifications (e.g., ISO 9001, Energy Star, CE Marking) as clickable icons. On hover, provide a brief description of what the certification represents and how it",
  },
  {
    id: "02",
    category: "Cast iron boilers",
    image: product,
    emphasis: "Display key",
    desc: "certifications (e.g., ISO 9001, Energy Star, CE Marking) as clickable icons. On hover, provide a brief description of what the certification represents and how it",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="container mx-auto my-[2em] grid gap-[1em] px-[15px] text-[12px] sm:text-[15px] md:grid-cols-2 md:text-[18px] lg:text-[21px] xl:text-[24px] 2xl:text-[24px]">
      <h1 className="col-span-full mb-[0.4em] text-center text-[22px] font-semibold capitalize leading-tight sm:mb-[0.5em] sm:text-[29px] md:mb-[0.6em] md:text-[36px] lg:mb-[0.7em] lg:text-[44px] xl:mb-[0.8em] xl:text-[52px] 2xl:mb-[0.8em] 2xl:text-[60px]">
        Our featured products
        <hr className="mx-auto w-[8ch] border-t-black" />
      </h1>

      {featuredProducts.map(({ id, category, image, emphasis, desc }) => (
        <article
          key={id}
          className="w-full rounded-lg bg-white pb-[1.4em] pt-[2em] shadow-[1px_1px_5px_rgba(0,0,0,0.3)]"
        >
          {/* Title */}
          <h2 className="w-fit bg-[#D9D9D9] pe-[1.7em] ps-[0.7em] text-[20px] font-bold capitalize leading-[2em] sm:text-[23px] md:text-[26px] lg:text-[30px] xl:text-[35px] 2xl:text-[40px]">
            {category}
          </h2>

          {/* Image with number*/}
          <div className="relative mx-auto -mt-[8%] w-[232px] sm:w-[288px] md:w-[344px] lg:w-[400px] xl:w-[455px] 2xl:w-[512px]">
            <Image
              src={image}
              alt={category}
              className="relative z-[1] object-contain"
            />
            <p className="absolute bottom-0 right-[0.2em] text-[60px] font-bold leading-none text-black/20 sm:text-[78px] md:text-[96px] lg:text-[114px] xl:text-[132px] 2xl:text-[150px]">
              {id}
            </p>
          </div>

          {/* Desc */}
          <p className="-mt-[2em] me-[1.2em] ms-auto max-w-[38ch] border-e-[0.4em] border-e-primary pe-[0.4em] pt-[2em] text-right text-[11px] leading-tight sm:me-[1.4em] sm:text-[12px] md:me-[1.6em] md:max-w-[46ch] md:text-[12.5px] lg:me-[1.8em] lg:text-[13px] xl:me-[2em] xl:text-[13.5px] 2xl:me-[2em] 2xl:border-e-[0.6em] 2xl:text-[14px]">
            <span className="font-bold">{emphasis}</span> {desc}
          </p>
        </article>
      ))}
    </section>
  );
};

export default FeaturedProducts;
