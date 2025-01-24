import React from "react";
import Image from "next/image";

import { TbPointFilled } from "react-icons/tb";

import Innoimgae from "@/assets/images/product.png";
import "@/assets/styles/inven.css";

function inven() {
  return (
    <div className="h-[100vh] overflow-auto bg-white">
      <div className="container mx-auto sm:p-[2rem]">
        <div className="h-[200vh] bg-white">
          <Image
            className="innoImag mx-auto h-auto w-[140px] sm:w-[170px] md:w-[200px] lg:w-[300px] xl:w-[350px] 2xl:w-[450px]"
            src={Innoimgae}
            alt="product"
          />
          <Image
            className="innoImag mx-auto h-auto w-[140px] sm:w-[170px] md:w-[200px] lg:w-[300px] xl:w-[350px] 2xl:w-[450px]"
            src={Innoimgae}
            alt="product"
          />
        </div>
        <div className="prograss relative w-[100%] bg-white">
          <div className="relative">
            <h1 className="relative mt-[-180px] overflow-hidden text-[100px] font-bold text-[#cccccc] sm:mt-[-230px] sm:text-[120px] md:mt-[-270px] md:text-[200px] lg:mt-[-450px] lg:text-[300px] xl:mt-[-550px] xl:text-[400px] 2xl:mt-[-700px] 2xl:text-[600px]">
              INNOVATION
            </h1>
            <Image
              className="innoImage absolute z-10 h-auto w-[140px] sm:w-[170px] md:w-[200px] lg:w-[300px] xl:w-[350px] 2xl:w-[450px]"
              src={Innoimgae}
              alt="product"
            />
            <div className="text relative mt-[100px] grid grid-cols-2 sm:gap-4">
              <div className="mt-[-200px]"></div>
              <div className="mt-[-130px] h-[300px] sm:mt-[-140px] md:mt-[-160px] lg:mt-[-200px] xl:mt-[-240px] 2xl:mt-[-300px]">
                <h1 className="text-[20px] font-bold sm:text-[25px] md:text-[35px] lg:text-[50px] xl:text-[60px] 2xl:text-[80px]">
                  INNOVATION
                </h1>
                <h1 className="text-[12px] text-[#9C9C9C] sm:mt-[-10px] sm:text-[13px] md:mt-[-10px] md:text-[16px] lg:text-[20px] xl:mt-[-20px] xl:text-[25px] 2xl:mt-[-30px] 2xl:text-[30px]">
                  Texhnology Highlight
                </h1>
                <h1 className="mt-[2px] text-[9px] sm:mt-[5px] sm:text-[10px] md:text-[10px] lg:text-[12px] xl:text-[16px]">
                  At Saint Roch Devs, innovation drives everything we do. Our
                  products feature cutting-edge technologies designed to deliver
                  exceptional performance and efficiency. Highlights include:
                </h1>
              </div>
            </div>

            <div className="innovation relative z-10 mt-[20px] h-[280px] w-full bg-[#eeeeee] sm:mt-[50px] sm:h-[290px] md:mt-[100px] md:h-[270px] lg:mt-[250px] lg:h-[250px] xl:mt-[300px] xl:h-[350px] 2xl:mt-[350px] 2xl:h-[350px]">
              <div className="absolute ml-[50%] h-[280px] w-[1px] overflow-hidden bg-black sm:h-[290px] md:h-[270px] md:w-[2px] lg:h-[250px] xl:h-[350px] 2xl:h-[350px]"></div>
              <div className="m-[10px] grid grid-cols-2 gap-[20px] sm:m-[20px] sm:gap-[150px] md:m-[30px] xl:m-[100px]">
                <div className="mt-[50px] h-[400px] w-full">
                  <h2 className="text-[15px] font-bold md:text-[18px] lg:text-[20px] xl:text-[40px] 2xl:text-[40px]">
                    Advanced Heat Exchangers:
                  </h2>
                  <p className="ml-[20px] mt-[20px] text-[10px] sm:ml-[40px] md:ml-[70px] md:text-[12px] lg:text-[15px] xl:text-[20px]">
                    Engineered for maximum durability and efficiency, ensuring
                    consistent heat distribution.
                  </p>
                  <div className="mt-[20px] h-[5px] w-[50px] bg-red-500 sm:w-[100px]"></div>
                </div>
                <div className="mt-[50px] h-[400px] w-full">
                  <h2 className="text-[15px] font-bold md:text-[18px] lg:text-[20px] xl:text-[40px] 2xl:text-[40px]">
                    Advanced Heat Exchangers:
                  </h2>
                  <p className="ml-[20px] mt-[20px] text-[10px] sm:ml-[40px] md:ml-[70px] md:text-[12px] lg:text-[15px] xl:text-[20px]">
                    Engineered for maximum durability and efficiency, ensuring
                    consistent heat distribution.
                  </p>
                  <div className="mt-[20px] h-[5px] w-[50px] bg-red-500 sm:w-[100px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[15vh] bg-white"></div>
        <div className="m-[15px] h-[200vh] sm:m-0">
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
                      Smart Controls: Allowing precise management to avoid
                      energy wastage.
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
                    Our boilers are engineered for superior performance,
                    reducing energy consumption without compromising on warmth.
                    Whether you’re heating a cozy home or a large-scale facility
                    like a military base, our solutions are optimized to lower
                    utility bills and carbon footprints.
                  </p>
                  <p className="text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:lg:text-[20px]">
                    Our boilers are engineered for superior performance,
                    reducing energy consumption without compromising on warmth.
                    Whether you’re heating a cozy home or a large-scale facility
                    like a military base.
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
                    processes prioritize eco-friendly materials and reduced
                    waste, ensuring that our products leave a smaller
                    environmental footprint.
                  </p>
                </div>
                <div className="z-10 row-span-3 mx-auto h-full rounded-xl bg-[#F1F1F1] p-[15px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px]">
                  <p className="mb-[8px] text-[17px] font-semibold sm:mb-[10px] sm:text-[18px] md:mb-[7px] md:text-[20px] lg:mb-[10px] lg:text-[20px] xl:mb-[30px] xl:text-[30px]">
                    Energy-Efficient Heating Solutions
                  </p>
                  <p className="text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:lg:text-[20px]">
                    Our boilers are engineered for superior performance,
                    reducing energy consumption without compromising on warmth.
                    Whether you’re heating a cozy home or a large-scale facility
                    like a military base, our solutions are optimized to lower
                    utility bills and carbon footprints Whether you’re heating a
                    cozy home or a large-scale facility like a military base,
                    our solutions are optimized to lower utility bills and
                    carbon footprints.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-[-650px] sm:mt-[-1000px] md:mt-[-950px] lg:mt-[-900px] xl:mt-[-600px] 2xl:mt-[-800px]">
          <Image
            className="relative mx-auto h-auto w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] xl:w-[350px] 2xl:w-[450px]"
            src={Innoimgae}
            alt="product"
          />
        </div>
      </div>
    </div>
  );
}

export default inven;
