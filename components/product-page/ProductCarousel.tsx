import { StaticImageData } from "next/image";
import React from "react";

interface ProductCarouselProps {
  carouselData: {
    id: string;
    image: StaticImageData;
    desc: string;
  }[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ carouselData }) => {
  return (
    <section className="section-padding container mx-auto text-[13px] sm:text-[14px] md:text-[15px] lg:text-[15.5px] xl:text-[16px] 2xl:text-[17px]">
      {carouselData.map(({ id, image, desc }) => {
        return (
          <article
            key={id}
            className="h-[200px] w-[90%] rounded-[1em] bg-[#F1F1F1] sm:w-[20em]"
          >
            <div className="h-[100px] w-[85%] bg-slate-700"></div>
          </article>
        );
      })}
    </section>
  );
};

export default ProductCarousel;
