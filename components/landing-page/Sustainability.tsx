import React from "react";

import { TbPointFilled } from "react-icons/tb";

const Sustainability = () => {
  return (
    <div className="container mx-auto sm:p-[2rem]">
      <div className="m-[15px]  sm:m-0">
        <div className="mb-4 grid sm:grid-cols-5">
          <div className="col-span-2">
            <p className="text-[50px] font-semibold sm:text-[35px] md:text-[40px] lg:text-[60px] xl:text-[80px]">
              Saint
            </p>
            <p className="text-[50px] font-semibold sm:text-[35px] md:text-[40px] lg:mt-[-20px] lg:text-[60px] xl:mt-[-40px] xl:text-[80px]">
              Roch Devs
            </p>
            <div className="xl;w-[250px] h-[3px] w-[80px] bg-black sm:w-[80px] md:w-[80px] lg:w-[150px]"></div>
            <p className="mb-6 text-[30px] font-semibold text-red-600 sm:mb-0 sm:text-[18px] md:text-[20px] lg:text-[20px] xl:text-[40px]">
              Sustainability at
            </p>
          </div>
          <div className="col-span-3">
            <div className="h-full rounded-xl bg-[#F1F1F1] p-[15px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px]">
              <div className="sustainability_text">
                <h1 className="mb-[8px] text-[17px] font-semibold sm:mb-[10px] sm:text-[18px] md:mb-[7px] md:text-[20px] lg:mb-[10px] lg:text-[20px] xl:mb-[30px] xl:text-[30px]">
                  Green Technology Integration
                </h1>
                <p className="text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:lg:text-[20px]">
                  We incorporate advanced green technologies in our heating
                  systems, including:
                </p>
                <br></br>
                <div className="flex space-x-2">
                  <TbPointFilled className="black mt-1 shrink-0" />
                  <span className="text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:lg:text-[20px]">
                    Condensing Boilers: Utilizing waste heat to improve
                    efficiency.
                  </span>
                </div>
                <div className="flex space-x-2">
                  <TbPointFilled className="mt-1 shrink-0 text-black" />
                  <span className="text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:lg:text-[20px]">
                    Hybrid Systems: Combining traditional and renewable energy
                    sources for a balanced approach.{" "}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <TbPointFilled className="mt-1 shrink-0 text-black" />
                  <span className="text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:lg:text-[20px]">
                    Smart Controls: Allowing precise management to avoid energy
                    wastage.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="z-10 grid h-[500px] grid-cols-2 gap-2 sm:gap-4">
          <div className="">
            <div className="grid h-full grid-rows-5">
              <div className="row-span-3 mx-auto h-full rounded-xl bg-[#F1F1F1] p-[15px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px]">
                <p className="mb-[8px] text-[17px] font-semibold sm:mb-[10px] sm:text-[18px] md:mb-[7px] md:text-[20px] lg:mb-[10px] lg:text-[20px] xl:mb-[30px] xl:text-[30px]">
                  Energy-Efficient Heating Solutions
                </p>
                <p className="text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:lg:text-[20px]">
                  Our boilers are engineered for superior performance, reducing
                  energy consumption without compromising on warmth. Whether
                  you’re heating a cozy home or a large-scale facility like a
                  military base, our solutions are optimized to lower utility
                  bills and carbon footprints.
                </p>
                <p className="text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:lg:text-[20px]">
                  Our boilers are engineered for superior performance, reducing
                  energy consumption without compromising on warmth. Whether
                  you’re heating a cozy home or a large-scale facility like a
                  military base.
                </p>
              </div>
              <div className=""></div>
            </div>
          </div>

          <div className="">
            <div className="grid h-full grid-rows-5 gap-2 sm:gap-4">
              <div className="row-span-2 mx-auto h-full rounded-xl bg-[#F1F1F1] p-[15px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px]">
                <p className="mb-[8px] text-[17px] font-semibold sm:mb-[10px] sm:text-[18px] md:mb-[7px] md:text-[20px] lg:mb-[10px] lg:text-[20px] xl:mb-[30px] xl:text-[30px]">
                  Responsible Manufacturing
                </p>
                <p className="text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:lg:text-[20px]">
                  Sustainability starts from the ground up. Our manufacturing
                  processes prioritize eco-friendly materials and reduced waste,
                  ensuring that our products leave a smaller environmental
                  footprint.
                </p>
              </div>
              <div className="z-10 row-span-3 mx-auto h-full rounded-xl bg-[#F1F1F1] p-[15px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px]">
                <p className="mb-[8px] text-[17px] font-semibold sm:mb-[10px] sm:text-[18px] md:mb-[7px] md:text-[20px] lg:mb-[10px] lg:text-[20px] xl:mb-[30px] xl:text-[30px]">
                  Energy-Efficient Heating Solutions
                </p>
                <p className="text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:lg:text-[20px]">
                  Our boilers are engineered for superior performance, reducing
                  energy consumption without compromising on warmth. Whether
                  you’re heating a cozy home or a large-scale facility like a
                  military base, our solutions are optimized to lower utility
                  bills and carbon footprints Whether you’re heating a cozy home
                  or a large-scale facility like a military base, our solutions
                  are optimized to lower utility bills and carbon footprints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
