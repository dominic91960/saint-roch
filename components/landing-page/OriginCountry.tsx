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
    <section>
      {originData.map(({ flag, madeIn, range }, i) => (
        <React.Fragment key={madeIn}>
          <div className="section-padding container mx-auto">
            <div className="mb-[2em] grid grid-cols-10 gap-[0.4em] text-[54px] uppercase leading-[0.9em] sm:text-[88px] md:text-[122px] lg:text-[156px] xl:text-[180px] 2xl:text-[155px]">
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
          </div>
        </React.Fragment>
      ))}
    </section>
  );
};

export default OriginCountry;
