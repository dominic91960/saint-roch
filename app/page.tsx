import Image from "next/image";
import { Lato } from "next/font/google";

import heroImg from "@/public/home/hero.png";

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
    <div className="h-screen flex flex-col items-center justify-center">
      <h1
        className={`${x.className} font-semibold leading-none text-[100px] text-transparent`}
        style={{ WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "black" }}
      >
        Exceptional
      </h1>
      <h1
        className={`${x.className} font-semibold leading-none text-[100px] text-transparent`}
        style={{ WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "black" }}
      >
        Quality
      </h1>
      <Image src={heroImg} alt="A diagram" className="object-contain" />
    </div>
  );
}
