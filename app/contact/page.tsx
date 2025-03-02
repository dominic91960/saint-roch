"use client";
import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/footer/Footer";

import { SlideRight, SlideUp } from "@/lib/utils";
import formImg from "@/assets/images/contact/contact-form-img.png";
import ContactDetails from "@/components/contact/ContactDetails";
import OtherLocations from "@/components/contact/OtherLocations";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <section className="text-[12px] leading-none sm:text-[12.75px] md:text-[13.5px] lg:text-[14.25px] xl:text-[15px] 2xl:text-[15.75px]">
        {/* Form area with gray bg */}
        <div className="relative pt-[100px]">
          {/* Gray bg */}
          <div className="absolute bottom-0 right-0 top-0 w-2/5 bg-[#EEEEEE] sm:w-1/4"></div>

          <div className="section-padding container relative mx-auto">
            {/* Title */}
            <motion.div
              variants={SlideRight(0)}
              initial="hidden"
              animate="visible"
            >
              <p className="text-[14px] font-semibold text-primary sm:text-[17px] md:text-[20px] lg:text-[26px] xl:text-[32px] 2xl:text-[38px]">
                We&apos;re here to help
              </p>
              <h1 className="title-text-stroke text-[44px] uppercase sm:mb-[0.4em] sm:text-[56px] md:text-[68px] lg:text-[86px] xl:text-[104px] 2xl:text-[122px]">
                Let&apos;s talk
              </h1>
            </motion.div>

            {/* Form grid */}
            <motion.div
              variants={SlideUp(1)}
              initial="hidden"
              animate="visible"
              className="grid gap-[2em] pb-[6em] sm:grid-cols-11"
            >
              <div className="sm:col-span-6 lg:col-span-5">
                <p className="my-[1em] text-justify font-semibold sm:mb-[2em] sm:mt-0 sm:text-left">
                  Enim tempor eget pharetra facilisis sed maecenas adipiscing.
                  Eu leo molestie vel, ornare non id blandit netus.
                </p>

                <ContactForm />

                <ContactDetails />
              </div>

              <div className="hidden xl:block"></div>

              <div className="hidden sm:col-span-4 sm:block lg:col-span-5 xl:col-span-5">
                <Image
                  src={formImg}
                  alt="A factory"
                  className="size-full rounded-[0.5em] object-cover object-center lg:h-[96%] lg:w-[80%] lg:translate-y-[8%] xl:h-full xl:w-[90%] xl:translate-y-[5%]"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="section-padding container relative mx-auto mb-[6em]">
          <h1 className="relative mb-[1em] mt-[0.8em] w-fit text-[36px] font-semibold after:absolute after:bottom-0 after:left-0 after:h-[0.05em] after:w-[5.5ch] after:bg-primary after:content-[''] sm:text-[50px] md:text-[64px] lg:text-[80px] xl:text-[96px] 2xl:text-[112px]">
            Other <br /> Locations
          </h1>

          <OtherLocations />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
