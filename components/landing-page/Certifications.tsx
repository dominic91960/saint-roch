"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { GrCertificate } from "react-icons/gr";
import "swiper/css";
import "swiper/css/pagination";

import "@/assets/styles/swiper-custom-pagination.css";

const certifications = [
  {
    id: "001",
    title: "ASME Certification",
    desc: "At Saint Roch Devs, quality and safety are at the core of everything  we create. Our products meet and",
  },
  {
    id: "002",
    title: "ISO Certification",
    desc: "At Saint Roch Devs, quality and safety are at the core of everything  we create. Our products meet and",
  },
  {
    id: "003",
    title: "CE Marking",
    desc: "At Saint Roch Devs, quality and safety are at the core of everything  we create. Our products meet and",
  },
  {
    id: "004",
    title: "ASME Certification",
    desc: "At Saint Roch Devs, quality and safety are at the core of everything  we create. Our products meet and",
  },
  {
    id: "005",
    title: "ISO Certification",
    desc: "At Saint Roch Devs, quality and safety are at the core of everything  we create. Our products meet and",
  },
  {
    id: "006",
    title: "CE Marking",
    desc: "At Saint Roch Devs, quality and safety are at the core of everything  we create. Our products meet and",
  },
  {
    id: "007",
    title: "ASME Certification",
    desc: "At Saint Roch Devs, quality and safety are at the core of everything  we create. Our products meet and",
  },
  {
    id: "008",
    title: "ISO Certification",
    desc: "At Saint Roch Devs, quality and safety are at the core of everything  we create. Our products meet and",
  },
  {
    id: "009",
    title: "CE Marking",
    desc: "At Saint Roch Devs, quality and safety are at the core of everything  we create. Our products meet and",
  },
];

const Certifications = () => {
  return (
    <section className="section-padding container mx-auto pb-[3em] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15.5px] 2xl:text-[16px]">
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true, dynamicBullets: true }}
        speed={1000}
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ pauseOnMouseEnter: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1536: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {certifications.map(({ id, title, desc }) => (
          <SwiperSlide key={id}>
            <div className="w-full pb-[40px]">
              <article className="space-y-[1em] rounded-[1em] bg-[#F1F1F1] p-[2em] sm:mx-auto sm:w-fit">
                <GrCertificate className="text-[4em] text-primary" />
                <h1 className="text-[2em] font-semibold leading-none">
                  {title.split(" ")[0]} <br className="hidden sm:inline" />
                  {title.split(" ")[1]}
                </h1>
                <p className="font-medium sm:max-w-[27ch]">{desc}</p>
                <button className="text-primary hover:opacity-80">
                  See more...
                </button>
              </article>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Certifications;
