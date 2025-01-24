import Image from "next/image";

import Innovation from "@/components/landing-page/Innovation";
import Sustainability from "@/components/landing-page/Sustainability";

import Innoimgae from "@/assets/images/product.png";

export default function Home() {
  return (
    <div className="h-[100vh] overflow-auto bg-white">
      <div className="h-[200vh]"></div>
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
    </div>
  );
}
