"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "@/assets/styles/swiper-custom-pagination.css";

interface ProductCarouselProps {
  carouselData: {
    id: string;
    image: StaticImageData;
    desc: string;
  }[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ carouselData }) => {
  return (
    <section className="section-padding container mx-auto my-[3em] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[15.5px] xl:text-[16px] 2xl:text-[17px]">
      <Swiper
        modules={[Autoplay, Pagination]}
        grabCursor
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
        {carouselData.map(({ id, image, desc }, index) => {
          const getFlexDirection = (i: number) => {
            if (i === 1 || i % 4 === 1) return "flex-col";
            else if (i === 2 || i % 4 === 2) return "flex-col-reverse";
            else if (i === 3 || i % 4 === 3) return "flex-col-reverse";
            else return "flex-col";
          };

          const getImageAlignment = (i: number) => {
            if (i === 1 || i % 4 === 1) return "ms-auto";
            else if (i === 2 || i % 4 === 2) return "mx-auto";
            else if (i === 3 || i % 4 === 3) return "ms-auto";
            else return "me-auto";
          };

          const getTextAlignment = (i: number) => {
            if (i === 1 || i % 4 === 1) return "me-auto text-left";
            else if (i === 2 || i % 4 === 2) return "mx-auto text-center";
            else if (i === 3 || i % 4 === 3) return "me-auto text-left";
            else return "ms-auto text-right";
          };

          return (
            <SwiperSlide key={id}>
              <div className="flex items-center justify-center pb-[50px]">
                <article
                  key={id}
                  className={`flex h-[24em] w-[90%] rounded-[1em] bg-[#F1F1F1] sm:w-[20em] md:h-[20em] ${getFlexDirection(index + 1)}`}
                >
                  <div
                    className={`w-[85%] shrink-0 ${getImageAlignment(index + 1)} rounded-[1em]`}
                  >
                    <Image
                      src={image}
                      alt={id}
                      className="rounded-[1em] object-contain"
                    />
                  </div>
                  <p
                    className={`flex w-[18em] grow items-center px-[2em] ${getTextAlignment(index + 1)} font-bold`}
                  >
                    {desc}
                  </p>
                </article>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default ProductCarousel;
