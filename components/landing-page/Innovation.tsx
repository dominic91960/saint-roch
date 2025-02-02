import React from "react";
import Image from "next/image";

import Innoimgae from "@/assets/images/landing-page/innovation/product.png";
import "@/assets/styles/innovation.css";

const Innovation = () => {
  return (
    <div className="container mx-auto sm:p-[2rem] mt-[-1100px] sm:mt-[-1300px] md:mt-[-1200px] lg:mt-[-700px] xl:mt-[-500px]">
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
              <h1 className="text-[20px]  font-bold sm:text-[25px] md:text-[35px] lg:text-[50px] xl:text-[60px] 2xl:text-[80px]">
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
    </div>
  );
};

export default Innovation;
