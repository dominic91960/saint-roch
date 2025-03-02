import React from "react";

import Navbar from "@/components/Navbar";
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/footer/Footer";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <section className="mt-[100px] text-[12px] leading-none sm:text-[12.75px] md:text-[13.5px] lg:text-[14.25px] xl:text-[15px] 2xl:text-[15.75px]">
        <div className="section-padding container mx-auto mb-[50px]">
          {/* Title */}
          <p className="text-[14px] font-semibold text-primary sm:text-[17px] md:text-[20px] lg:text-[26px] xl:text-[32px] 2xl:text-[38px]">
            We&apos;re here to help
          </p>
          <h1 className="title-text-stroke text-[44px] uppercase sm:text-[56px] md:text-[68px] lg:text-[86px] xl:text-[104px] 2xl:text-[122px]">
            Let&apos;s talk
          </h1>

          {/* Form grid */}
          <div className="grid gap-[2em] sm:grid-cols-10">
            <div className="sm:col-span-6">
              <p className="my-[1em] text-justify font-semibold">
                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
                leo molestie vel, ornare non id blandit netus.
              </p>
              <ContactForm />
            </div>
            <div className="hidden bg-orange-400/40 sm:col-span-4 sm:block"></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
