"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Innoimgae from "@/assets/images/landing-page/innovation/product.png";
import '../about/aboutstyle.css'
import Since1903 from '../../assets/images/about/since1903.png'
import TheRokor from '../../assets/images/about/therokor.png'
import Footerimage from '../../assets/images/about/footerimage.png'
import HeriImage from '../../assets/images/about/HeroAbout.jpg'
import Navbar from "../Navbar";

import { SlideLeft, SlideRight, SlideUp } from "@/lib/utils";



function Hero() {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <div className="grid grid-cols-2 gap-11">
          <div>
          <motion.div 
  variants={SlideRight(0.5)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
              <Image
                className="aboutUs sm:h-[300px] lg:h-[400px] xl:h-[420px] 2xl:h-[600px] w-full "
                src={HeriImage}
                alt="product"
          />
      </motion.div>
      </div>
      <div></div>
     </div>

     <div className="container mx-auto   absolute inset-0 mt-[5px] sm:mt-[40px] md:mt-[50px] lg:mt-[50px] xl:mt-[80px]  justify-end pr-5 pl-5 sm:pr-5 sm:pl-5 md:pr-10 md:pl-10 lg:pr-10 lg:pl-10 xl:pl-10 xl:pr-10 2xl:pl-0 2xl:pr-0">
      <div>
      <motion.div 
  variants={SlideLeft(0.5)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
     <h1 className="text-right title-text-stroke  font-semibold leading-none text-[40px] sm:text-[70px] md:text-[80px] lg:text-[100px] xl:text-[150px] 2xl:text-[200px]">
    ABOUT <br /> US
    </h1>
    </motion.div>

    <motion.div 
  variants={SlideLeft(0.5)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
    <p className="text-right font-semibold text-[8px] sm:text-[14px] md:text-[15px] xl:text-[23px] 2xl:text-[30px] mb-1 sm:mb-3">
                Learn More About Our Team and Vision
              </p>
    <div className="container mx-auto flex justify-end">
      
  <div className="bg-red-600 w-[100px] sm:w-[200px] h-[2px] sm:h-[5px]"></div>
</div>
</motion.div>
  
  </div>

     </div>

     <div className="container mx-auto 
        pr-5 pl-5 sm:pr-5 sm:pl-5 md:pr-10 md:pl-10 lg:pr-10 lg:pl-10 xl:pl-10 xl:pr-10 2xl:pl-0 2xl:pr-0
        pt-10  md:pt-20 
        ">
         <motion.div 
  variants={SlideRight(0.5)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <div className="text-[30px] sm:text-[60px] lg:text-[80px] xl:text-[110px] 2xl:text-[140px] leading-tight font-semibold">
    A Legacy of
  </div>
</motion.div>

<motion.div 
  variants={SlideRight(0.7)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <div className="text-[30px] sm:text-[60px] lg:text-[80px] xl:text-[110px] 2xl:text-[140px] leading-tight font-semibold">
  Innovation and
  </div>
  </motion.div> 

  <motion.div 
  variants={SlideRight(0.9)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <div className="text-[30px] sm:text-[60px] lg:text-[80px] xl:text-[110px] 2xl:text-[140px] leading-tight font-semibold">
  Excellence in
  </div>
  </motion.div>

  <motion.div 
  variants={SlideRight(1.1)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <div className="text-[30px] sm:text-[60px] lg:text-[80px] xl:text-[110px] 2xl:text-[140px] leading-tight font-semibold">
  Heating Solutions
  </div>
  </motion.div>  
  
   
     
      <div className="text-[16px] sm:text-[22px] md:text-[26px] lg:text-[23px] xl:text-[30px] 2xl:text-[40px] text-red-600 leading-tight font-semibold mt-2 2xl:mt-6">
      Pioneering Sustainable and High-Performance Heating Systems
      </div>
     </div>

{/* Section 2 */}
     <div className="grid grid-cols-4 mt-[40px] sm:mt-[40px] md:mt-[50px] lg:mt-[70px] xl:mt-[100px] 2xl:mt-[200px]">
      <div className="col col-span-3 bg-gray-200 rounded-tr-[10px] sm:rounded-tr-[20px] md:rounded-tr-[30px] lg:rounded-tr-[30px] xl:rounded-tr-[50px]
                                                   rounded-br-[10px]  sm:rounded-br-[20px] md:rounded-br-[30px] lg:rounded-br-[30px] xl:rounded-br-[50px] ">
        <div className="mr-[10px] sm:mr-[100px] md:mr-[100px] mt-[30px]  sm:mt-[50px] md:mt-[60px] lg:mt-[60px] xl:mt-[100px]">
        <div className=" flex justify-end">
        <motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
>
  <Image
    className="aboutUs h-[140px] sm:h-[200px] md:h-[220px] lg:h-[300px] xl:h-[450px] 2xl:h-[500px] w-auto"
    src={Innoimgae}
    alt="product"
  />
</motion.div>

        </div>
        <div className="flex justify-end text-right text-[23px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[70px] 2xl:text-[100px]  leading-tight font-semibold mt-2 2xl:mt-6 mb-[30px]  sm:mb-[50px] md:mb-[60px] lg:mb-[60px] xl:mb-[100px]">
        Since 1903, Saint <br/> Roch has been a <br/>leader ininnovative<br/> heating solutions.
      </div>
      
      </div>
      </div>

      <div className="col col-span-1 ">
      <div className=" flex justify-end ">
      
        <Image
            className="absolute w-[90px] sm:w-[180px] md:w-[230px] lg:w-[230px] xl:w-[350px] 2xl:w-[400px] h-auto mt-[180px] sm:mt-[220px] md:mt-[250px] lg:mt-[300px] xl:mt-[500px] 2xl:mt-[700px]"
            src={Since1903}
            alt="product"
          /> 
          
        </div>
      </div>
     </div>

     {/* section 03 */}
     <div className="container mx-auto p-[15px] sm:pl-[80px] sm:pr-[80px] mt-[40px] sm:mt-[70px] md:mt-[70px] lg:mt-[100px] xl:mt-[150px] 2xl:mt-[200px] mb-[30px] sm:mb-[50px] md:mb-[60px] lg:mb-[50px] xl:mb-[80px] 2xl:mb-[100px]">
     <motion.div 
  variants={SlideLeft(0.5)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
      <p className="text-[20px] sm:text-[40px]  md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[50px] leading-none lg:ml-[300px] xl:ml-[500px]">
      We won the 1984 Energy Grand Prize for our eco-grouping concept and introduced low-emission boilers in the 1990s.
      </p>
      </motion.div>
      <div className="bg-red-600 w-[100px] sm:w-[200px] h-[2px] sm:h-[5px] lg:ml-[300px] xl:ml-[500px] mt-[10px] sm:mt-[20px]"></div>
     </div>
     <div className="container mx-auto p-[15px] sm:pl-[80px] sm:pr-[80px] ">
     <motion.div 
  variants={SlideRight(0.5)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <p className="text-[20px] sm:text-[40px]  md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[50px] text-right leading-none md:mr-[100px] lg:mr-[200px] xl:mr-[500px]">
    We won the 1984 Energy Grand Prize for our eco-grouping concept and introduced low-emission boilers in the 1990s.
  </p>
  </motion.div>
  <div className="flex justify-end mb-[100px]">
    <div className="bg-red-600 w-[100px] sm:w-[200px] h-[2px] sm:h-[5px] mt-[10px] sm:mt-[20px] md:mr-[100px] lg:mr-[200px] xl:mr-[500px]"></div>
  </div>
</div>


{/* section 04 */}
<div className="flex section04 mt-[10px] sm:mt-[50px] xl:mt-[100px] gap-3 sm:gap-8 lg:gap-16 pr-[20px] sm:pr-[30px] lg:pr-[50px] items-start">
  <div className="flex-none w-[200px] sm:w-[250px] md:w-[300px] lg:w-[300px] xl:w-[500px]">
  <motion.div 
  variants={SlideRight(0.5)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
    <Image
      className="w-full h-auto"
      src={TheRokor}
      alt="product"
    />
    </motion.div>
  </div>
  <div className="flex-1 overflow-hidden">
    <p className="font-semibold leading-none  text-[25px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[90px] 2xl:text-[130px] overflow-hidden">
      The Rokor oil range, launched in 2000, set new standards for efficiency and eco-friendliness.
    </p>
    <div className="bg-red-600 w-[70px] sm:w-[100px] md:w-[150px] lg:w-[200px] xl:w-[400px] h-[5px] sm:h-[10px] mt-[10px] sm:mt-[20px] md:mr-[100px] lg:mr-[200px] xl:mr-[500px]"></div>
  </div>
</div>

{/* section 04 */}
<div className="container pl-[15px] pr-[30px] sm:pl-[30px] sm:pr-[50px] md:pl-[50px] md:pr-[80px] lg:pl-[60px] lg:pr-[120px] xl:pl-[100px]   2xl:pl-[300px]  mt-[80px] md:mt-[150px] xl:mt-[150px] 2xl:mt-[200px]">
  <p className="text-[20px] sm:text-[50px] md:text-[60px] lg:text-[50px] xl:text-[70px] 2xl:text-[80px]">
  As part of Enertech Ltd since 1991, we’ve earned global recognition for quality.
  </p>
  <div className="bg-red-600 w-[70px] sm:w-[100px] md:w-[150px] lg:w-[200px] xl:w-[400px] h-[5px] sm:h-[10px] mt-[10px] sm:mt-[20px]"></div>
  <h1 className="title-text-stroke  font-semibold text-[40px] sm:text-[70px] md:text-[80px] lg:text-[100px] xl:text-[150px] 2xl:text-[200px] mt-[50px] sm:mt-[100px] md:mt-[130px] 2xl:mt-[150px]">
    ABOUT
    </h1>
    <p className="text-[8px] sm:text-[10px] md:text-[13px] lg:text-[18px] xl:text-[20px] 2xl:text-[25px]">
    <span className="font-semibold text-[12px] sm:text-[13px] md:text-[16px] lg:text-[22px] xl:text-[25px] 2xl:text-[35px]">At Saint Roch,</span> we are committed to shaping the future of heating with unmatched quality and innovative solutions. Building on over a century of expertise since 1903, our mission is to provide reliable, energy-efficient heating systems that meet the needs of both our customers and the environment. We blend our rich heritage with cutting-edge technology to deliver precision-engineered boilers that offer exceptional performance and sustainability. Guided by a dedication to excellence, we strive to ensure lasting comfort and warmth while upholding our responsibility to the planet.
    </p>
</div>

{/* section 05 */}
<div className="container mx-auto flex justify-center mt-[100px]">
  <div className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[300px] xl:w-[500px]">
  <motion.div 
  variants={SlideUp(0.3)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
    <Image
      className="w-full h-auto"
      src={Footerimage}
      alt="product"
    />
    </motion.div>
  </div>
</div>
<div className="w-full absolute">
 <div className="h-[300px] bg-black"></div>
</div>
    </div>
    </div>
  );
}

export default Hero;
