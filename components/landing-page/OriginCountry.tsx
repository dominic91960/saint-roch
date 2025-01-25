import React from "react";

const originData = [
  { madeIn: "Italy", range: "92kW to 203kW" },
  { madeIn: "Germany", range: "92kW to 203kW" },
];
const OriginCountry = () => {
  return (
    <section>
      {originData.map(({ madeIn, range }, i) => (
        <React.Fragment key={madeIn}>
          <div className="container mx-auto px-[15px]">
            <div
              className={`${i === 0 ? "text-right" : ""} text-[54px] uppercase leading-[0.9em] sm:text-[88px] md:text-[122px] lg:text-[156px] xl:text-[180px] 2xl:text-[200px]`}
            >
              {/* Made in */}
              <h1 className="title-text-stroke">Made in</h1>

              {/* Country and power rating */}
              <div
                className={`flex ${i === 0 ? "" : "flex-row-reverse"} flex-wrap-reverse items-baseline justify-end gap-[0.2em]`}
              >
                <p className="-translate-y-[0.1em] text-[13px] font-semibold leading-none sm:text-[18px] md:text-[23px] lg:text-[30px] xl:text-[36px] 2xl:text-[40px]">
                  {range}
                </p>
                <h1 className="title-text-stroke">{madeIn}</h1>
              </div>
            </div>

            <div
              className={`flex items-center ${i === 0 ? "" : "justify-end"} gap-[0.2em] text-[30px] font-bold sm:text-[46px] md:text-[62px] lg:text-[80px] xl:text-[94px] 2xl:text-[102px]`}
            >
              <p className="bg-black px-[1em] py-[0.3em] text-[10px] text-white sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[30px]">
                Exceptional quality
              </p>
              <p className="text-primary">Efficient</p>
            </div>
          </div>

          <div className="mb-[30px] h-[30px] bg-[#D9D9D9] sm:h-[40px] md:h-[55px] lg:h-[70px] xl:h-[85px] 2xl:h-[93px]"></div>
        </React.Fragment>
      ))}
    </section>
  );
};

export default OriginCountry;
