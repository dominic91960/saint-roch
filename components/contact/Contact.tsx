import React from "react";
import Map from "../../assets/images/contact/map.png";
import Image from "next/image";

function Contact() {
  return (
    <div>
      <div className="mt-[60px] grid grid-cols-1 lg:grid-cols-7">
        {/* Centered Content */}
        <div className="mb-[40px] ml-[20px] flex flex-col justify-center sm:mb-[45px] sm:ml-[50px] md:mb-[50px] md:ml-[80px] lg:col-span-5 lg:mb-0 lg:ml-[80px] xl:ml-[100px] 2xl:ml-[200px]">
          <p className="mt-[50px] font-bold text-red-600 lg:mt-[0px] 2xl:text-[40px]">
            We&apos;re here to help
          </p>
          <h1 className="title-text-stroke text-[50px] font-semibold leading-none sm:text-[80px] md:text-[80px] lg:text-[80px] xl:text-[100px] 2xl:text-[170px]">
            LET&apos;S TALK
          </h1>

          <div className="w-[800px] max-w-full">
            <p className="mt-4 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px]">
              [Your Name]
            </p>
            <div className="my-4 h-[2px] w-[200px] bg-[#BDBDBD] sm:w-[300px] md:w-[400px] lg:w-[400px] xl:w-[500px] 2xl:w-[800px]"></div>

            <p className="mt-4 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px]">
              [Your Name]
            </p>
            <div className="my-4 h-[2px] w-[200px] bg-[#BDBDBD] sm:w-[300px] md:w-[400px] lg:w-[400px] xl:w-[500px] 2xl:w-[800px]"></div>

            <p className="mt-4 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px]">
              [Your Name]
            </p>
            <div className="my-4 h-[2px] w-[200px] bg-[#BDBDBD] sm:w-[300px] md:w-[400px] lg:w-[400px] xl:w-[500px] 2xl:w-[800px]"></div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative h-[200px] sm:h-[300px] md:h-[300px] lg:col-span-2 lg:h-[400px] xl:h-[500px] 2xl:h-[800px]">
          <Image
            className="object-cover"
            src={Map}
            alt="map"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="absolute w-full">
        <div className="h-[300px] bg-black"></div>
      </div>
    </div>
  );
}

export default Contact;
