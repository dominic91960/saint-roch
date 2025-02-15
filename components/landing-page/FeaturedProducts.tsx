"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { SlideLeft } from "@/lib/utils";
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

import product from "@/assets/images/landing-page/featured-products/product-one.png";
import "@/assets/styles/swiper-custom-pagination.css";

const featuredProducts = [
  {
    id: "01",
    category: "Boilers",
    images: [product, product, product, product],
    emphasis: "Display key",
    desc: "certifications (e.g., ISO 9001, Energy Star, CE Marking) as clickable icons. On hover, provide a brief description of what the certification represents and how it",
  },
  {
    id: "02",
    category: "Burners",
    images: [product, product, product, product],
    emphasis: "Display key",
    desc: "certifications (e.g., ISO 9001, Energy Star, CE Marking) as clickable icons. On hover, provide a brief description of what the certification represents and how it",
  },
  {
    id: "03",
    category: "Hot water Tanks",
    images: [product, product, product, product],
    emphasis: "Display key",
    desc: "certifications (e.g., ISO 9001, Energy Star, CE Marking) as clickable icons. On hover, provide a brief description of what the certification represents and how it",
  },
  {
    id: "04",
    category: "Pumps",
    images: [product, product, product, product],
    emphasis: "Display key",
    desc: "certifications (e.g., ISO 9001, Energy Star, CE Marking) as clickable icons. On hover, provide a brief description of what the certification represents and how it",
  },
  {
    id: "05",
    category: "Heat pumps",
    images: [product, product, product, product],
    emphasis: "Display key",
    desc: "certifications (e.g., ISO 9001, Energy Star, CE Marking) as clickable icons. On hover, provide a brief description of what the certification represents and how it",
  },
];

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
    <div className="overflow-hidden">
      <motion.div
        variants={SlideLeft(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <section className="section-padding container mx-auto my-[2em] text-[12px] sm:text-[15px] md:text-[18px] lg:text-[21px] xl:text-[24px] 2xl:text-[24px]">
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
              1024: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
            className="mySwiper"
          >
            {featuredProducts.map(
              ({ id, category, images, emphasis, desc }) => (
                <SwiperSlide key={id}>
                  <div className="m-[10px] pb-[40px]">
                    <article
                      key={id}
                      className="relative w-full rounded-lg bg-white pb-[1.4em] pt-[2em] shadow-[1px_1px_5px_rgba(0,0,0,0.3)]"
                    >
                      {/* Title */}
                      <h2 className="w-fit bg-[#D9D9D9] pe-[1.7em] ps-[0.7em] text-[20px] font-bold capitalize leading-[2em] sm:text-[23px] md:text-[26px] lg:text-[30px] xl:text-[35px] 2xl:text-[40px]">
                        {category}
                      </h2>

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
                          // reverseDirection: true,
                          disableOnInteraction: false,
                          pauseOnMouseEnter: false,
                        }}
                        className="mySwiper -mt-[13%]"
                      >
                        {images.map((image, i) => (
                          <SwiperSlide key={i}>
                            <div className="relative mx-auto mt-[8%] w-[232px] sm:w-[288px] md:w-[344px] lg:w-[400px] xl:w-[455px] 2xl:w-[512px]">
                              <Image
                                src={image}
                                alt={category}
                                className="relative z-[1] object-contain"
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                        <SwiperNavButtons />
                      </Swiper>

                      {/* Desc */}
                      <p className="relative -mt-[2em] me-[1.2em] ms-auto max-w-[38ch] border-e-[0.4em] border-e-primary pe-[0.4em] pt-[2em] text-right text-[11px] leading-tight sm:me-[1.4em] sm:text-[12px] md:me-[1.6em] md:max-w-[46ch] md:text-[12.5px] lg:me-[1.8em] lg:text-[13px] xl:me-[2em] xl:text-[13.5px] 2xl:me-[2em] 2xl:border-e-[0.6em] 2xl:text-[14px]">
                        <span className="absolute bottom-[60%] right-[20%] text-[60px] font-bold leading-none text-black/20 sm:text-[78px] md:text-[96px] lg:text-[114px] xl:text-[132px] 2xl:text-[150px]">
                          {id}
                        </span>
                        <span className="font-bold">{emphasis}</span> {desc}
                      </p>
                    </article>
                  </div>
                </SwiperSlide>
              ),
            )}
          </Swiper>
        </section>
      </motion.div>
    </div>
  );
};

export default FeaturedProducts;
