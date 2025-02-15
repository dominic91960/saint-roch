import React from "react";
import Image from "next/image";

import flagOfItaly from "@/assets/images/landing-page/origin-country/italy.svg";
import flagOfGermany from "@/assets/images/landing-page/origin-country/germany.svg";

const originData = [
  { flag: flagOfItaly, madeIn: "Italy", range: "92kW to 203kW" },
  { flag: flagOfGermany, madeIn: "Germany", range: "92kW to 203kW" },
];
const OriginCountry = () => {
  return (
    <section className="section-padding container mx-auto text-[36px] sm:text-[65px] md:text-[75px] lg:text-[85px] xl:text-[125px] 2xl:text-[155px]">
      <div className="mb-[1.4em] ms-auto w-fit text-right text-[0.8em] font-semibold leading-none">
        <h2 className="">Saint Roch</h2>
        <hr className="ms-auto mt-[0.1em] w-1/2 border-t-[0.15em] border-t-black text-[0.5em]" />
        <h4 className="mt-[0.3em] text-[0.5em] text-primary">
          Production Plants
        </h4>
      </div>

      {originData.map(({ flag, madeIn, range }, i) => (
        <React.Fragment key={madeIn}>
          <div className="mb-[2em] grid grid-cols-10 items-center gap-[0.4em] uppercase leading-[0.9em]">
            {/* Flag of Italy */}
            {i === 0 && (
              <Image src={flag} alt={madeIn} className="col-span-4 w-full" />
            )}

            {/* Made in */}
            <h1
              className={`${i === 1 ? "text-right" : ""} col-span-6 font-semibold`}
            >
              Made in <br /> {madeIn} <br />
              <span className="block text-[0.4em]">{range}</span>
            </h1>

            {/* Flag of Germany */}
            {i === 1 && (
              <Image src={flag} alt={madeIn} className="col-span-4 w-full" />
            )}
          </div>
        </React.Fragment>
      ))}
    </section>
  );
};

export default OriginCountry;
