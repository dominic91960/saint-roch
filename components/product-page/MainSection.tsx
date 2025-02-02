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
    <section className="text-[12px]">
      <div className="relative w-[36ch] overflow-visible rounded-[0.4em] bg-[#F2F2F2] pb-[0.8em] pl-[1em] pt-[2em]">
        <h2 className="text-[1.5em] font-bold">{subtitle}</h2>
        <p className="w-[32ch] font-medium">{desc}</p>
        <h1 className="title-text-stroke mb-[0.6em] text-[3.4em] uppercase leading-tight">
          {title}
        </h1>
        <Button variant="secondary"> Purchase Now</Button>
        <Image
          src={image}
          alt={title}
          className="absolute left-1/2 top-1/2 w-[185px] -translate-x-[12%] translate-y-[5%] object-contain"
        />
      </div>
      <p className="mx-auto mt-[120px] w-[32ch] text-center text-[1.2em]">
        {secondDesc}
      </p>
    </section>
  );
};

export default MainSection;
