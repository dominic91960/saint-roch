"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface MainCategoryCarouselProps {
  images: { id: string; title: string; image: StaticImageData; alt: string }[];
}

const MainCategoryCarousel: React.FC<MainCategoryCarouselProps> = ({
  images,
}) => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      grabCursor
      speed={1000}
      loop={true}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{ pauseOnMouseEnter: true }}
      className="mySwiper"
    >
      {images.map(({ id, title, image, alt }) => (
        <SwiperSlide key={id}>
          <div className="relative flex flex-col items-center justify-center overflow-hidden pb-[50px] pt-[0.7em]">
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.8 }}
              transition={{ duration: 1 }}
              className={`light-text-stroke uppercase leading-none ${title === "Optimajor" || title === "Commodore" ? "top-[4%] text-[0.85em] sm:text-[0.83em] md:text-[0.8em] 2xl:text-[0.94em]" : "top-0 text-[1.75em]"}`}
            >
              {title}
            </motion.h2>
            <Image
              src={image}
              alt={alt}
              className="relative z-[1] w-full object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainCategoryCarousel;
