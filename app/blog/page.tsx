import React from "react";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

function BlogPage() {
  return (
    <>
      <Navbar />
      <div className="section-padding container mx-auto h-dvh">
        <h1 className="title-text-stroke mt-[0.5em] text-[40px] leading-none sm:text-[70px] md:text-[80px] lg:text-[100px] xl:text-[150px] 2xl:text-[200px]">
          OUR <br />
          BLOG
        </h1>
      </div>
      <Footer />
    </>
  );
}

export default BlogPage;
