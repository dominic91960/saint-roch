import React from "react";

import { productData } from "@/lib/constants/product";

import Navbar from "@/components/Navbar";
import MainSection from "@/components/product-page/MainSection";
import ProductImportance from "@/components/product-page/ProductImportance";
import BoilerDesign from "@/components/product-page/BoilerDesign";
import ProductDescription from "@/components/product-page/ProductDescription";
import ProductCarousel from "@/components/product-page/ProductCarousel";
import TechnicalData from "@/components/product-page/TechnicalData";
import Footer from "@/components/footer/Footer";

type Params = Promise<{ productSlug: string }>;

const ProductDetailsPage = async (props: { params: Params }) => {
  const params = await props.params;
  const product =
    productData.find((prod) => prod.path === params.productSlug) ||
    productData[0];

  return (
    <>
      <Navbar />
      <MainSection
        subtitle={product.subtitle}
        desc={product.mainDescOne}
        title={product.title}
        image={product.mainImage}
        secondDesc={product.mainDescTwo}
      />
      <ProductImportance title={product.title} cardData={product.cardData} />
      <BoilerDesign />
      <ProductDescription
        title={product.title}
        descOne={product.prodDescOne}
        prodImage={product.prodDescImg}
        descTwo={product.prodDescTwo}
      />
      <ProductCarousel carouselData={product.carouselData} />
      <TechnicalData title={product.title} data={product.technicalData} />
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
