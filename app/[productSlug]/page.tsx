import React from "react";

import Navbar from "@/components/Navbar";
import MainSection from "@/components/product-page/MainSection";
import ProductImportance from "@/components/product-page/ProductImportance";

import commodoreMainImg from "@/assets/images/product-page/commodore/main-img.png";
import commodoreCardImageOne from "@/assets/images/product-page/commodore/card-img-one.png";
import commodoreCardImageTwo from "@/assets/images/product-page/commodore/card-img-two.png";
import commodoreCardImageThree from "@/assets/images/product-page/commodore/card-img-three.png";

const data = [
  {
    subtitle: "Residential boilers",
    desc: "The SAINT ROCH Ultra is a medium power boiler that can be equipped with a forced draught oil or gas burner.",
    title: "Commodore",
    mainImage: commodoreMainImg,
    secondDesc:
      "Car engine png images. Automobile Engineering, Car Mechanical Engineering, Electrical engineering,",
    cardData: [
      {
        id: "cd001",
        cardImage: commodoreCardImageOne,
        cardDesc:
          "The SAINT ROCH Ultra is a medium power boiler that can be equipped with a forced draught oil or gas burner.",
      },
      {
        id: "cd002",
        cardImage: commodoreCardImageTwo,
        cardDesc:
          "It has a cast iron body and an anti-corrosion combustion chamber.",
      },
      {
        id: "cd003",
        cardImage: commodoreCardImageThree,
        cardDesc:
          "The SAINT ROCH Ultra satisfies all individual and collective domestic heating needs.",
      },
    ],
  },
];

type Params = Promise<{ productSlug: string }>;

const ProductDetailsPage = async (props: { params: Params }) => {
  const params = await props.params;
  const product =
    data.find((prod) => prod.title === params.productSlug) || data[0];

  return (
    <>
      <Navbar />
      <MainSection
        subtitle={product.subtitle}
        desc={product.desc}
        title={product.title}
        image={product.mainImage}
        secondDesc={product.secondDesc}
      />
      <ProductImportance title={product.title} cardData={product.cardData} />
    </>
  );
};

export default ProductDetailsPage;
