import React from "react";

import Navbar from "@/components/Navbar";
import MainSection from "@/components/product-page/MainSection";
import ProductImportance from "@/components/product-page/ProductImportance";
import BoilerDesign from "@/components/product-page/BoilerDesign";
import ProductDescription from "@/components/product-page/ProductDescription";

import commodoreMainImg from "@/assets/images/product-page/commodore/main-img.png";
import commodoreCardImageOne from "@/assets/images/product-page/commodore/card-img-one.png";
import commodoreCardImageTwo from "@/assets/images/product-page/commodore/card-img-two.png";
import commodoreCardImageThree from "@/assets/images/product-page/commodore/card-img-three.png";
import commodoreProdDescImg from "@/assets/images/product-page/commodore/prod-desc-img.png";

const data = [
  {
    subtitle: "Residential boilers",
    mainDescOne:
      "The SAINT ROCH Ultra is a medium power boiler that can be equipped with a forced draught oil or gas burner.",
    title: "Commodore",
    mainImage: commodoreMainImg,
    mainDescTwo:
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
    prodDescOne:
      "The SAINT ROCH ULTRA cast iron boilers can be supplied complete with burners that are for forced draught oil or gas.",
    prodDescImg: commodoreProdDescImg,
    prodDescTwo:
      "It is highly recommended to supply the package boiler+burner, as the SAINT ROCH burners are specifically adapted and tested for optimal operation with SAINT ROCH boilers.",
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
      <div className="h-screen"></div>
    </>
  );
};

export default ProductDetailsPage;
