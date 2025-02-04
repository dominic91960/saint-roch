import React from "react";
import Image, { StaticImageData } from "next/image";

import { Button } from "../ui/button";

interface MainSectionProps {
  subtitle: string;
  desc: string;
  title: string;
  image: StaticImageData;
  secondDesc: string;
}

const MainSection: React.FC<MainSectionProps> = ({
  subtitle,
  desc,
  title,
  image,
  secondDesc,
}) => {
  return (
    <section className="relative text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[19px]">
      <div className="absolute left-0 top-0 -z-[1] h-[21em] w-4/5 rounded-ee-[0.5em] bg-[#F2F2F2] sm:h-[24em] sm:w-[70%] md:h-[27em] lg:h-[29em] xl:h-[30em] xl:w-1/2 2xl:h-[32em]"></div>
      <div className="container relative mx-auto px-[15px]">
        <h2 className="pt-[2em] text-[18px] font-bold sm:text-[22px] md:text-[26px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px]">
          {subtitle}
        </h2>
        <p className="w-[32ch] font-medium sm:w-[44ch]">{desc}</p>
        <h1 className="title-text-stroke mb-[1em] text-[44px] leading-none sm:text-[72px] md:text-[100px] lg:text-[120px] xl:text-[140px] 2xl:text-[160px]">
          {title.toUpperCase()}
        </h1>
        <Button
          variant="secondary"
          className="px-[1.5em] text-[12px] sm:px-[2em] sm:py-[0.55em] sm:text-[13px] md:px-[2.5em] md:py-[0.6em] md:text-[14px] lg:px-[3em] lg:py-[0.65em] lg:text-[15px] xl:px-[4em] xl:py-[0.68em] xl:text-[16px] 2xl:px-[5em] 2xl:py-[0.7em] 2xl:text-[17px]"
        >
          Purchase Now
        </Button>
        <Image
          src={image}
          alt={title}
          className="absolute bottom-0 left-1/2 w-[185px] -translate-x-[25%] translate-y-[53%] object-contain sm:w-[250px] md:w-[350px] lg:w-[435px] xl:w-[523px] xl:-translate-x-[50%] xl:translate-y-[56%] 2xl:w-[600px]"
        />
      </div>
      <p className="mx-auto mt-[8.5em] w-[32ch] text-center text-[14px] sm:text-[20px] md:text-[30px] lg:text-[40px] xl:text-[48px] 2xl:text-[50px]">
        {secondDesc}
      </p>
    </section>
  );
};

export default MainSection;
