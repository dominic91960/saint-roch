"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Innoimgae from "@/assets/images/landing-page/innovation/product.png";
import "../about/aboutstyle.css";
import Since1903 from "../../assets/images/about/since1903.png";
import TheRokor from "../../assets/images/about/therokor.png";
import Footerimage from "../../assets/images/about/footerimage.png";
import HeriImage from "../../assets/images/about/HeroAbout.jpg";
import Navbar from "../Navbar";

import { SlideLeft, SlideRight, SlideUp } from "@/lib/utils";

function Hero() {
  return (
    <div>
      <Navbar />
      <div className="relative mt-[60px]">
        <div className="grid grid-cols-2 gap-11">
          <div>
            <motion.div
              variants={SlideRight(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image
                className="aboutUs w-full sm:h-[300px] lg:h-[400px] xl:h-[420px] 2xl:h-[600px]"
                src={HeriImage}
                alt="product"
              />
            </motion.div>
          </div>
          <div></div>
        </div>

        <div className="container absolute inset-0 mx-auto mt-[5px] justify-end pl-5 pr-5 sm:mt-[40px] sm:pl-5 sm:pr-5 md:mt-[50px] md:pl-10 md:pr-10 lg:mt-[50px] lg:pl-10 lg:pr-10 xl:mt-[80px] xl:pl-10 xl:pr-10 2xl:pl-0 2xl:pr-0">
          <div>
            <motion.div
              variants={SlideLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h1 className="title-text-stroke text-right text-[40px] font-semibold leading-none sm:text-[70px] md:text-[80px] lg:text-[100px] xl:text-[150px] 2xl:text-[200px]">
                ABOUT <br /> US
              </h1>
            </motion.div>

            <motion.div
              variants={SlideLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="mb-1 text-right text-[8px] font-semibold sm:mb-3 sm:text-[14px] md:text-[15px] xl:text-[23px] 2xl:text-[30px]">
                Learn More About Our Team and Vision
              </p>
              <div className="container mx-auto flex justify-end">
                <div className="h-[2px] w-[100px] bg-red-600 sm:h-[5px] sm:w-[200px]"></div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto pl-5 pr-5 pt-10 sm:pl-5 sm:pr-5 md:pl-10 md:pr-10 md:pt-20 lg:pl-10 lg:pr-10 xl:pl-10 xl:pr-10 2xl:pl-0 2xl:pr-0">
          <motion.div
            variants={SlideRight(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-[30px] font-semibold leading-tight sm:text-[60px] lg:text-[80px] xl:text-[110px] 2xl:text-[140px]">
              A Legacy of
            </div>
          </motion.div>

          <motion.div
            variants={SlideRight(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-[30px] font-semibold leading-tight sm:text-[60px] lg:text-[80px] xl:text-[110px] 2xl:text-[140px]">
              Innovation and
            </div>
          </motion.div>

          <motion.div
            variants={SlideRight(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-[30px] font-semibold leading-tight sm:text-[60px] lg:text-[80px] xl:text-[110px] 2xl:text-[140px]">
              Excellence in
            </div>
          </motion.div>

          <motion.div
            variants={SlideRight(1.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-[30px] font-semibold leading-tight sm:text-[60px] lg:text-[80px] xl:text-[110px] 2xl:text-[140px]">
              Heating Solutions
            </div>
          </motion.div>

          <div className="mt-2 text-[16px] font-semibold leading-tight text-red-600 sm:text-[22px] md:text-[26px] lg:text-[23px] xl:text-[30px] 2xl:mt-6 2xl:text-[40px]">
            Pioneering Sustainable and High-Performance Heating Systems
          </div>
        </div>

        {/* Section 2 */}
        <div className="mt-[40px] grid grid-cols-4 sm:mt-[40px] md:mt-[50px] lg:mt-[70px] xl:mt-[100px] 2xl:mt-[200px]">
          <div className="col col-span-3 rounded-br-[10px] rounded-tr-[10px] bg-gray-200 sm:rounded-br-[20px] sm:rounded-tr-[20px] md:rounded-br-[30px] md:rounded-tr-[30px] lg:rounded-br-[30px] lg:rounded-tr-[30px] xl:rounded-br-[50px] xl:rounded-tr-[50px]">
            <div className="mr-[10px] mt-[30px] sm:mr-[100px] sm:mt-[50px] md:mr-[100px] md:mt-[60px] lg:mt-[60px] xl:mt-[100px]">
              <div className="flex justify-end">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                >
                  <Image
                    className="aboutUs h-[140px] w-auto sm:h-[200px] md:h-[220px] lg:h-[300px] xl:h-[450px] 2xl:h-[500px]"
                    src={Innoimgae}
                    alt="product"
                  />
                </motion.div>
              </div>
              <div className="mb-[30px] mt-2 flex justify-end text-right text-[23px] font-semibold leading-tight sm:mb-[50px] sm:text-[30px] md:mb-[60px] md:text-[40px] lg:mb-[60px] lg:text-[50px] xl:mb-[100px] xl:text-[70px] 2xl:mt-6 2xl:text-[100px]">
                Since 1903, Saint <br /> Roch has been a <br />
                leader ininnovative
                <br /> heating solutions.
              </div>
            </div>
          </div>

          <div className="col col-span-1">
            <div className="flex justify-end">
              <Image
                className="absolute mt-[180px] h-auto w-[90px] sm:mt-[220px] sm:w-[180px] md:mt-[250px] md:w-[230px] lg:mt-[300px] lg:w-[230px] xl:mt-[500px] xl:w-[350px] 2xl:mt-[700px] 2xl:w-[400px]"
                src={Since1903}
                alt="product"
              />
            </div>
          </div>
        </div>

        {/* section 03 */}
        <div className="container mx-auto mb-[30px] mt-[40px] p-[15px] sm:mb-[50px] sm:mt-[70px] sm:pl-[80px] sm:pr-[80px] md:mb-[60px] md:mt-[70px] lg:mb-[50px] lg:mt-[100px] xl:mb-[80px] xl:mt-[150px] 2xl:mb-[100px] 2xl:mt-[200px]">
          <motion.div
            variants={SlideLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-[20px] leading-none sm:text-[40px] md:text-[40px] lg:ml-[300px] lg:text-[40px] xl:ml-[500px] xl:text-[40px] 2xl:text-[50px]">
              We won the 1984 Energy Grand Prize for our eco-grouping concept
              and introduced low-emission boilers in the 1990s.
            </p>
          </motion.div>
          <div className="mt-[10px] h-[2px] w-[100px] bg-red-600 sm:mt-[20px] sm:h-[5px] sm:w-[200px] lg:ml-[300px] xl:ml-[500px]"></div>
        </div>
        <div className="container mx-auto p-[15px] sm:pl-[80px] sm:pr-[80px]">
          <motion.div
            variants={SlideRight(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-right text-[20px] leading-none sm:text-[40px] md:mr-[100px] md:text-[40px] lg:mr-[200px] lg:text-[40px] xl:mr-[500px] xl:text-[40px] 2xl:text-[50px]">
              We won the 1984 Energy Grand Prize for our eco-grouping concept
              and introduced low-emission boilers in the 1990s.
            </p>
          </motion.div>
          <div className="mb-[100px] flex justify-end">
            <div className="mt-[10px] h-[2px] w-[100px] bg-red-600 sm:mt-[20px] sm:h-[5px] sm:w-[200px] md:mr-[100px] lg:mr-[200px] xl:mr-[500px]"></div>
          </div>
        </div>

        {/* section 04 */}
        <div className="section04 mt-[10px] flex items-start gap-3 pr-[20px] sm:mt-[50px] sm:gap-8 sm:pr-[30px] lg:gap-16 lg:pr-[50px] xl:mt-[100px]">
          <div className="w-[200px] flex-none sm:w-[250px] md:w-[300px] lg:w-[300px] xl:w-[500px]">
            <motion.div
              variants={SlideRight(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image className="h-auto w-full" src={TheRokor} alt="product" />
            </motion.div>
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="overflow-hidden text-[25px] font-semibold leading-none sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[90px] 2xl:text-[130px]">
              The Rokor oil range, launched in 2000, set new standards for
              efficiency and eco-friendliness.
            </p>
            <div className="mt-[10px] h-[5px] w-[70px] bg-red-600 sm:mt-[20px] sm:h-[10px] sm:w-[100px] md:mr-[100px] md:w-[150px] lg:mr-[200px] lg:w-[200px] xl:mr-[500px] xl:w-[400px]"></div>
          </div>
        </div>

        {/* section 04 */}
        <div className="container mt-[80px] pl-[15px] pr-[30px] sm:pl-[30px] sm:pr-[50px] md:mt-[150px] md:pl-[50px] md:pr-[80px] lg:pl-[60px] lg:pr-[120px] xl:mt-[150px] xl:pl-[100px] 2xl:mt-[200px] 2xl:pl-[300px]">
          <p className="text-[20px] sm:text-[50px] md:text-[60px] lg:text-[50px] xl:text-[70px] 2xl:text-[80px]">
            As part of Enertech Ltd since 1991, we’ve earned global recognition
            for quality.
          </p>
          <div className="mt-[10px] h-[5px] w-[70px] bg-red-600 sm:mt-[20px] sm:h-[10px] sm:w-[100px] md:w-[150px] lg:w-[200px] xl:w-[400px]"></div>
          <h1 className="title-text-stroke mt-[50px] text-[40px] font-semibold sm:mt-[100px] sm:text-[70px] md:mt-[130px] md:text-[80px] lg:text-[100px] xl:text-[150px] 2xl:mt-[150px] 2xl:text-[200px]">
            ABOUT
          </h1>
          <p className="text-[8px] sm:text-[10px] md:text-[13px] lg:text-[18px] xl:text-[20px] 2xl:text-[25px]">
            <span className="text-[12px] font-semibold sm:text-[13px] md:text-[16px] lg:text-[22px] xl:text-[25px] 2xl:text-[35px]">
              At Saint Roch,
            </span>{" "}
            we are committed to shaping the future of heating with unmatched
            quality and innovative solutions. Building on over a century of
            expertise since 1903, our mission is to provide reliable,
            energy-efficient heating systems that meet the needs of both our
            customers and the environment. We blend our rich heritage with
            cutting-edge technology to deliver precision-engineered boilers that
            offer exceptional performance and sustainability. Guided by a
            dedication to excellence, we strive to ensure lasting comfort and
            warmth while upholding our responsibility to the planet.
          </p>
        </div>

        {/* section 05 */}
        <div className="container mx-auto mt-[100px] flex justify-center">
          <div className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[300px] xl:w-[500px]">
            <motion.div
              variants={SlideUp(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image
                className="h-auto w-full"
                src={Footerimage}
                alt="product"
              />
            </motion.div>
          </div>
        </div>
        <div className="absolute w-full">
          <div className="h-[300px] bg-black"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
