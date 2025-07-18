"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { useSwiper, Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCreative,
  Pagination,
  Navigation,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

import { SlideLeft } from "@/lib/utils";
import { featuredProductsData } from "@/lib/constants/home";
import "@/assets/styles/swiper-custom-pagination.css";

const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <>
      <button
        className="absolute bottom-0 left-[2%] top-0 z-[1] my-auto hidden h-fit translate-y-[1.2em] text-[2em] text-[#D9D9D9] transition-colors duration-300 hover:text-black/60 sm:block lg:translate-y-1/2"
        onClick={() => swiper.slidePrev()}
      >
        <SlArrowLeft />
      </button>
      <button
        className="absolute bottom-0 right-[2%] top-0 z-[1] my-auto hidden h-fit translate-y-[1.2em] text-[2em] text-[#D9D9D9] transition-colors duration-300 hover:text-black/60 sm:block lg:translate-y-1/2"
        onClick={() => swiper.slideNext()}
      >
        <SlArrowRight />
      </button>
    </>
  );
};

const FeaturedProducts = () => {
  return (
    <section className="mb-[4em] bg-[rgb(240,240,240)] text-[12px] sm:text-[15px] md:text-[18px] lg:text-[21px] xl:text-[24px] 2xl:text-[24px]">
      <motion.div
        variants={SlideLeft(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="section-padding container mx-auto pb-[2em] pt-[2em]"
      >
        <h1 className="mb-[0.4em] text-center text-[22px] font-semibold capitalize leading-tight sm:mb-[0.5em] sm:text-[29px] md:mb-[0.6em] md:text-[36px] lg:mb-[0.7em] lg:text-[44px] xl:mb-[0.8em] xl:text-[52px] 2xl:mb-[0.8em] 2xl:text-[60px]">
          Our featured products
          <hr className="mx-auto w-[8ch] border-t-black" />
        </h1>

        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          speed={2000}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ pauseOnMouseEnter: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          className="mySwiper"
        >
          {featuredProductsData.map(({ id, category, products }) => (
            <SwiperSlide key={id}>
              <div className="m-[10px] pb-[60px]">
                <article
                  key={id}
                  className="relative w-full rounded-lg bg-white pb-[1.4em] pt-[2em] shadow-[1px_1px_5px_rgba(0,0,0,0.3)] md:pt-[1em] xl:pt-0 2xl:pt-[0.8em]"
                >
                  {/* Title */}
                  <div className="relative min-h-[5.5em] w-3/5">
                    <h2 className="absolute bottom-0 left-0 top-0 my-auto h-fit bg-[#D9D9D9] py-[0.5em] pe-[1.7em] ps-[0.7em] text-[20px] font-bold capitalize leading-none sm:text-[23px] md:text-[26px] lg:text-[30px] xl:text-[26px] 2xl:text-[32px]">
                      {category}
                    </h2>
                  </div>

                  {/* Image with number*/}
                  <Swiper
                    modules={[Autoplay, EffectCreative, Navigation]}
                    grabCursor
                    effect={"creative"}
                    creativeEffect={{
                      prev: {
                        translate: [0, 0, -400],
                        opacity: 0,
                      },
                      next: {
                        translate: ["100%", 0, 0],
                      },
                    }}
                    speed={2000}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={1}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: false,
                    }}
                    className="mySwiper -mt-[12%]"
                  >
                    {products.map(({ id, image, title, desc }) => (
                      <SwiperSlide key={id}>
                        {/* <div className="relative mx-auto mt-[8%] w-[232px] sm:w-[288px] md:w-[344px] lg:w-[400px] xl:w-[455px] 2xl:w-[512px]"> */}
                        <div className="relative mx-auto mt-[8%] w-3/4">
                          <Image
                            src={image}
                            alt={category}
                            className="relative z-[1] object-contain"
                          />
                        </div>
                        {/* Desc */}
                        <p className="relative -mt-[2em] me-[1.2em] ms-auto max-w-[38ch] border-e-[0.4em] border-e-primary pe-[0.4em] pt-[2em] text-right text-[11px] leading-tight sm:me-[1.4em] sm:max-w-[30ch] sm:text-[12px] md:me-[1.6em] md:text-[12.5px] lg:me-[1.8em] lg:max-w-[28ch] lg:text-[13px] xl:me-[2em] xl:max-w-[24ch] xl:text-[13.5px] 2xl:me-[2em] 2xl:max-w-[30ch] 2xl:border-e-[0.6em] 2xl:text-[14px]">
                          {/* <span className="absolute bottom-[60%] right-[20%] text-[60px] font-bold leading-none text-black/20 sm:text-[78px] md:text-[96px] lg:text-[114px] xl:text-[132px] 2xl:text-[150px]">
                            {id.slice(-2)}
                          </span> */}
                          <span className="text-[1.8em] font-semibold">
                            {title}
                          </span>{" "}
                          <br />
                          {desc}
                        </p>
                      </SwiperSlide>
                    ))}
                    <SwiperNavButtons />
                  </Swiper>
                </article>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default FeaturedProducts;
