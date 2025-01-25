import Image from "next/image";

import { IoCall } from "react-icons/io5";

import Navbar from "@/components/Navbar";
import Hero from "@/components/landing-page/Hero";
import FeaturedProducts from "@/components/landing-page/FeaturedProducts";
import MainCategories from "@/components/landing-page/MainCategories";
import Innovation from "@/components/landing-page/Innovation";
import Sustainability from "@/components/landing-page/Sustainability";

import Innoimgae from "@/assets/images/landing-page/innovation/product.png";

export default function Home() {
  return (
    <div className="h-[100vh] overflow-auto bg-white">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <MainCategories />
      <div className="h-[150vh]"></div>
      <Innovation />
      <div className="h-[15vh]"></div>
      <Sustainability />
      <div className="relative mt-[-650px] sm:mt-[-1000px] md:mt-[-950px] lg:mt-[-900px] xl:mt-[-600px] 2xl:mt-[-800px]">
        <Image
          className="relative mx-auto h-auto w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] xl:w-[350px] 2xl:w-[450px]"
          src={Innoimgae}
          alt="product"
        />
      </div>
      <button className="fixed bottom-[5%] right-0 z-40 inline-flex translate-x-[1em] items-center justify-center gap-[0.5em] rounded-s-full bg-white p-[0.3em] pe-[2.2em] font-semibold shadow-md transition-transform ease-in hover:translate-x-0">
        <span className="rounded-full bg-primary p-[0.5em] text-white">
          <IoCall />
        </span>
        Contact Us
      </button>
    </div>
  );
}
