import React from "react";
import Image from "next/image";

import boilerDesign from "@/assets/images/product-page/commodore/boiler-design.png";

const BoilerDesign = () => {
  return (
    <section className="container mx-auto mb-[3em] px-[15px] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[21px] xl:text-[24px] 2xl:text-[26px]">
      <h1 className="title-text-stroke mb-[0.25em] mt-[0.8em] text-[50px] leading-none sm:text-[80px] md:text-[110px] lg:text-[130px] xl:text-[146px] 2xl:text-[160px]">
        3 Pass Boiler <br /> Design
      </h1>
      <p className="mb-[2em] bg-[#D9D9D9] font-semibold">
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
