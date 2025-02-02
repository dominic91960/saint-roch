import React from "react";

import Navbar from "@/components/Navbar";
import MainSection from "@/components/product-page/MainSection";

import mainImg from "@/assets/images/products/commodore/main-img.png";

const data = [
  {
    subtitle: "Residential boilers",
    desc: "The SAINT ROCH Ultra is a medium power boiler that can be equipped with a forced draught oil or gas burner.",
    title: "Commodore",
    image: mainImg,
    secondDesc:
      "Car engine png images. Automobile Engineering, Car Mechanical Engineering, Electrical engineering,",
  },
];

interface ProductDetailsPageProps {
  params: {
    productSlug: string;
  };
}

const ProductDetailsPage: React.FC<ProductDetailsPageProps> = ({ params }) => {
  const product =
    data.find((prod) => prod.title === params.productSlug) || data[0];

  return (
    <>
      <Navbar />
      <MainSection {...product} />
    </>
  );
};

export default ProductDetailsPage;
