import Image, { StaticImageData } from "next/image";
import React from "react";

const TechnicalData: React.FC<{ title: string; data: StaticImageData }> = ({
  title,
  data,
}) => {
  return (
    <section className="section-padding container mx-auto pb-[2em] text-[24px] sm:text-[32px] md:text-[40px] lg:text-[46px] xl:text-[51px] 2xl:text-[56px]">
      <h1 className="mb-[0.7em] text-center font-semibold">Technical Data</h1>
      <Image
        src={data}
        alt={`Technical data for the ${title}`}
        className="mx-auto object-contain object-center"
      />
    </section>
  );
};

export default TechnicalData;
