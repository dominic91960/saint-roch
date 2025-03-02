import React from "react";
import Link from "next/link";

import { IoCall } from "react-icons/io5";
import { FaFax } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import Navbar from "@/components/Navbar";
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/footer/Footer";

import formImg from "@/assets/images/contact/contact-form-img.png";
import Image from "next/image";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <section className="text-[12px] leading-none sm:text-[12.75px] md:text-[13.5px] lg:text-[14.25px] xl:text-[15px] 2xl:text-[15.75px]">
        {/* Form area with gray bg */}
        <div className="relative pb-[2em] pt-[100px]">
          {/* Gray bg */}
          <div className="absolute bottom-0 right-0 top-0 w-2/5 bg-[#EEEEEE] sm:w-1/4"></div>

          <div className="section-padding container relative mx-auto">
            {/* Title */}
            <p className="text-[14px] font-semibold text-primary sm:text-[17px] md:text-[20px] lg:text-[26px] xl:text-[32px] 2xl:text-[38px]">
              We&apos;re here to help
            </p>
            <h1 className="title-text-stroke text-[44px] uppercase sm:mb-[0.4em] sm:text-[56px] md:text-[68px] lg:text-[86px] xl:text-[104px] 2xl:text-[122px]">
              Let&apos;s talk
            </h1>

            {/* Form grid */}
            <div className="grid gap-[2em] sm:grid-cols-11">
              <div className="sm:col-span-6 lg:col-span-5">
                <p className="my-[1em] text-justify font-semibold sm:mb-[2em] sm:mt-0 sm:text-left">
                  Enim tempor eget pharetra facilisis sed maecenas adipiscing.
                  Eu leo molestie vel, ornare non id blandit netus.
                </p>

                <ContactForm />

                <div className="mt-[1.5em] flex justify-between sm:mt-[4em]">
                  <div className="flex flex-col items-center gap-[0.7em] xl:flex-row">
                    <IoCall className="text-[1.3em] sm:text-[1.9em]" />
                    <div className="flex flex-col items-center gap-[0.3em] xl:items-start">
                      <p className="font-semibold">PHONE</p>
                      <Link href="tel:03 5432 1234" className="text-primary">
                        03 5432 1234
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-[0.7em] xl:flex-row">
                    <FaFax className="text-[1.3em] sm:text-[1.9em]" />
                    <div className="flex flex-col items-center gap-[0.3em] xl:items-start">
                      <p className="font-semibold">FAX</p>
                      <Link href="tel:03 5432 1234" className="text-primary">
                        03 5432 1234
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-[0.7em] xl:flex-row">
                    <IoMdMail className="text-[1.3em] sm:text-[1.9em]" />
                    <div className="flex flex-col items-center gap-[0.3em] xl:items-start">
                      <p className="font-semibold">EMAIL</p>
                      <Link
                        href="mailto:info@marcc.com.au"
                        className="text-primary"
                      >
                        info@marcc.com.au
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden xl:block"></div>

              <div className="hidden sm:col-span-4 sm:block lg:col-span-5 xl:col-span-5">
                <Image
                  src={formImg}
                  alt="A factory"
                  className="size-full rounded-[0.5em] object-cover object-center lg:h-[96%] lg:w-[80%] lg:translate-y-[8%] xl:h-full xl:w-[90%] xl:translate-y-[5%]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="section-padding container relative mx-auto">other</div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
