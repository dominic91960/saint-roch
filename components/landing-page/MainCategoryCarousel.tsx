"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

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
          <div className="relative flex items-center justify-center pb-[50px] pt-[0.7em]">
            <Image
              src={image}
              alt={alt}
              className="relative z-[1] w-full object-contain"
            />
            <h2
              className={`light-text-stroke absolute left-0 uppercase leading-none ${title === "Optimajor" || title === "Commodore" ? "top-[4%] text-[0.94em]" : "top-0 text-[1.75em]"}`}
            >
              {title}
            </h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainCategoryCarousel;
