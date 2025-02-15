"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface MainCategoryCarouselProps {
  images: { id: string; image: StaticImageData; alt: string }[];
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
      {images.map(({ id, image, alt }) => (
        <SwiperSlide key={id}>
          <div className="flex items-center justify-center pb-[50px]">
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
