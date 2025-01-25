import React from "react";

import qCOne from "@/assets/images/landing-page/qc-standards/qc-one.png";
import qCTwo from "@/assets/images/landing-page/qc-standards/qc-two.png";

const QCStandards = () => {
  return (
    <section className="container mx-auto px-[15px] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
      <h1 className="mb-[0.4em] text-right text-[46px] font-semibold leading-none sm:text-[70px] md:text-[94px] lg:text-[114px] xl:text-[125px] 2xl:text-[133px]">
        Quality & <br /> Compliance
        <span className="block text-[0.4em] text-primary">Standards</span>
      </h1>

      {/* Main image */}
      <div
        className="h-[116px] bg-cover bg-center sm:h-[160px] md:h-[210px] lg:h-[270px] xl:h-[350px] 2xl:h-[402px]"
        style={{ backgroundImage: `url(${qCOne.src})` }}
      ></div>

      {/* Grid */}
      <div className="mt-[1em] grid gap-[2em] sm:mt-[2em] sm:grid sm:grid-cols-12 sm:items-center">
        <p className="relative mb-[1em] max-w-[41ch] ps-[1em] font-semibold before:absolute before:left-0 before:top-1/4 before:h-full before:w-[0.5em] before:bg-primary before:content-[''] sm:col-span-6 md:col-span-7 xl:col-span-8">
          At Saint Roch Devs, quality and safety are at the core of everything
          we create. Our products meet and exceed internatinal standards,
          ensuring reliability, efficiency, and long-lasting performance for our
          customers.
        </p>
        <div
          className="h-[262px] bg-cover bg-center sm:col-span-6 sm:h-[280px] md:col-span-5 md:h-[300px] lg:h-[318px] xl:col-span-4 xl:h-[336px] 2xl:h-[350px]"
          style={{ backgroundImage: `url(${qCTwo.src})` }}
        ></div>
      </div>
    </section>
  );
};

export default QCStandards;
