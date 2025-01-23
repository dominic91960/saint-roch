import Image from "next/image";
import { Lato } from "next/font/google";

import heroImg from "@/public/home/hero.png";


import Inven from "@/components/landingpage/inven";
// Noto Sans, Kanit
// const x = Work_Sans({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

const x = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function Home() {
  return (
<div>
    {/* <div className="flex h-[calc(100vh-60px)] flex-col items-center justify-center">
      <h1
        className={`${x.className} text-[100px] font-semibold leading-none text-transparent`}
        style={{ WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "black" }}
      >
        Exceptional
      </h1>
      <h1
        className={`${x.className} text-[100px] font-semibold leading-none text-transparent`}
        style={{ WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "black" }}
      >
        Quality
      </h1>
      <Image src={heroImg} alt="A diagram" className="object-contain" />
      
    </div> */}
  
    <Inven />
    
    </div> 
  );
}
