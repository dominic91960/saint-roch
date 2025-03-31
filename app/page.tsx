import Image from "next/image";

import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/landing-page/Hero";
import FeaturedProducts from "@/components/landing-page/FeaturedProducts";
import MainCategories from "@/components/landing-page/MainCategories";
import Innovation from "@/components/landing-page/Innovation";
import Sustainability from "@/components/landing-page/Sustainability";
import OriginCountry from "@/components/landing-page/OriginCountry";
import ContactButton from "@/components/ContactButton";
import QCStandards from "@/components/landing-page/QCStandards";
import Certifications from "@/components/landing-page/Certifications";
import Footer from "@/components/footer/Footer";

import Innoimgae from "@/assets/images/landing-page/innovation/product.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <MainCategories />
      <Innovation />
      <Sustainability />
      <div className="mt-[100px] sm:mt-0">
        <Image
          className="relative mx-auto h-auto w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] xl:w-[350px] 2xl:w-[450px]"
          src={Innoimgae}
          alt="product"
        />
      </div>
      <div className="h-[6vh] sm:h-[10vh] md:h-[13vh] lg:h-[15vh] xl:h-[18vh] 2xl:h-[20vh]"></div>
      <OriginCountry />
      <QCStandards />
      <Certifications />
      <ContactButton />
      <Footer />
    </>
  );
}
