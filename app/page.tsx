import Image from "next/image";

import Navbar from "@/components/Navbar";
import Hero from "@/components/landing-page/Hero";
import FeaturedProducts from "@/components/landing-page/FeaturedProducts";
import MainCategories from "@/components/landing-page/MainCategories";
import Innovation from "@/components/landing-page/Innovation";
import Sustainability from "@/components/landing-page/Sustainability";
import OriginCountry from "@/components/landing-page/OriginCountry";
import ContactButton from "@/components/ContactButton";
import QCStandards from "@/components/landing-page/QCStandards";
import Certifications from "@/components/landing-page/Certifications";

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
      <div className="h-[20vh]"></div>
      <OriginCountry />
      <QCStandards />
      <Certifications />
      <ContactButton />
      <div className="h-[200vh]"></div>
    </div>
  );
}
