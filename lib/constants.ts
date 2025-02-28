import boiler from "@/assets/images/landing-page/main-categories/boiler.png";

import commodoreMainImg from "@/assets/images/product-page/commodore/main-img.png";
import commodoreCardImageOne from "@/assets/images/product-page/commodore/card-img-one.png";
import commodoreCardImageTwo from "@/assets/images/product-page/commodore/card-img-two.png";
import commodoreCardImageThree from "@/assets/images/product-page/commodore/card-img-three.png";
import commodoreProdDescImg from "@/assets/images/product-page/commodore/prod-desc-img.png";
import commodoreSlideImgOne from "@/assets/images/product-page/commodore/slider-image-one.png";
import commodoreSlideImgTwo from "@/assets/images/product-page/commodore/slider-image-two.png";
import commodoreSlideImgThree from "@/assets/images/product-page/commodore/slider-image-three.png";
import commodoreSlideImgFour from "@/assets/images/product-page/commodore/slider-image-four.png";
import commodoreTechnicalData from "@/assets/images/product-page/commodore/technical-data.png";

// -------- -------- CATEGORIES DATA -------- --------
export const homepageCategoriesData = [
  {
    name: "Residential boilers",
    wattage: "92kW to 203kW",
    slogan: "Effortless Warmth for Every Home",
    products: {
      id: "prod1.1",
      boilerImages: [
        { id: "image1.1.1", title: "Combi", image: boiler, alt: "Boiler" },
        { id: "image1.1.2", title: "Combi", image: boiler, alt: "Boiler" },
        { id: "image1.1.3", title: "Combi", image: boiler, alt: "Boiler" },
      ],
      desc: "When users hover over the main categories, the subcategories should appear along with their respective category images.",
      boilerNames: ["Combi", "Ultra"],
    },
  },
  {
    name: "Commercial boilers",
    wattage: "102kW to 243kW",
    slogan: "Effortless Warmth for Every Home",
    products: {
      id: "prod2.1",
      boilerImages: [
        { id: "image2.1.1", title: "Ultra", image: boiler, alt: "Boiler" },
        { id: "image2.1.2", title: "Ultra", image: boiler, alt: "Boiler" },
        { id: "image2.1.3", title: "Ultra", image: boiler, alt: "Boiler" },
      ],
      desc: "When users hover over the main categories, the subcategories should appear along with their respective category images.",
      boilerNames: ["Optimajor", "Commodore"],
    },
  },
  {
    name: "Industrial boilers",
    wattage: "102kW to 243kW",
    slogan: "Effortless Warmth for Every Home",
    products: {
      boilerImages: [
        { id: "image2.1.1", title: "Optimajor", image: boiler, alt: "Boiler" },
        { id: "image2.1.2", title: "Commodore", image: boiler, alt: "Boiler" },
        {
          id: "image2.1.3",
          title: "Optimajor",
          image: boiler,
          alt: "Boiler",
        },
      ],
      desc: "When users hover over the main categories, the subcategories should appear along with their respective category images.",
      boilerNames: ["Optimajor", "Commodore"],
    },
  },
];

// -------- -------- PRODUCT DATA -------- --------
export const productData = [
  {
    path: "combi",
    subtitle: "Residential boilers",
    mainDescOne:
      "The SAINT ROCH Ultra is a medium power boiler that can be equipped with a forced draught oil or gas burner.",
    title: "Combi",
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
    carouselData: [
      {
        id: "slider001",
        image: commodoreSlideImgOne,
        desc: "SAINT ROCH Hypoeutectic grey cast iron",
      },
      {
        id: "slider002",
        image: commodoreSlideImgTwo,
        desc: "6 model range from: 27 kw - 83 kw.",
      },
      {
        id: "slider003",
        image: commodoreSlideImgThree,
        desc: "Efficiency: at 30% charge 90-91.1% at 100% charge 89.9-90.5%",
      },
      {
        id: "slider004",
        image: commodoreSlideImgFour,
        desc: "Operates with forced draught oil or gas burners",
      },
      {
        id: "slider005",
        image: commodoreSlideImgOne,
        desc: "SAINT ROCH Hypoeutectic grey cast iron",
      },
      {
        id: "slider006",
        image: commodoreSlideImgTwo,
        desc: "6 model range from: 27 kw - 83 kw.",
      },
      {
        id: "slider007",
        image: commodoreSlideImgThree,
        desc: "Efficiency: at 30% charge 90-91.1% at 100% charge 89.9-90.5%",
      },
      {
        id: "slider008",
        image: commodoreSlideImgFour,
        desc: "Operates with forced draught oil or gas burners",
      },
      {
        id: "slider009",
        image: commodoreSlideImgOne,
        desc: "SAINT ROCH Hypoeutectic grey cast iron",
      },
      {
        id: "slider010",
        image: commodoreSlideImgTwo,
        desc: "6 model range from: 27 kw - 83 kw.",
      },
      {
        id: "slider011",
        image: commodoreSlideImgThree,
        desc: "Efficiency: at 30% charge 90-91.1% at 100% charge 89.9-90.5%",
      },
      {
        id: "slider012",
        image: commodoreSlideImgFour,
        desc: "Operates with forced draught oil or gas burners",
      },
    ],
    technicalData: commodoreTechnicalData,
  },
  {
    path: "ultra",
    subtitle: "Residential boilers",
    mainDescOne:
      "The SAINT ROCH Ultra is a medium power boiler that can be equipped with a forced draught oil or gas burner.",
    title: "Ultra",
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
    carouselData: [
      {
        id: "slider001",
        image: commodoreSlideImgOne,
        desc: "SAINT ROCH Hypoeutectic grey cast iron",
      },
      {
        id: "slider002",
        image: commodoreSlideImgTwo,
        desc: "6 model range from: 27 kw - 83 kw.",
      },
      {
        id: "slider003",
        image: commodoreSlideImgThree,
        desc: "Efficiency: at 30% charge 90-91.1% at 100% charge 89.9-90.5%",
      },
      {
        id: "slider004",
        image: commodoreSlideImgFour,
        desc: "Operates with forced draught oil or gas burners",
      },
      {
        id: "slider005",
        image: commodoreSlideImgOne,
        desc: "SAINT ROCH Hypoeutectic grey cast iron",
      },
      {
        id: "slider006",
        image: commodoreSlideImgTwo,
        desc: "6 model range from: 27 kw - 83 kw.",
      },
      {
        id: "slider007",
        image: commodoreSlideImgThree,
        desc: "Efficiency: at 30% charge 90-91.1% at 100% charge 89.9-90.5%",
      },
      {
        id: "slider008",
        image: commodoreSlideImgFour,
        desc: "Operates with forced draught oil or gas burners",
      },
      {
        id: "slider009",
        image: commodoreSlideImgOne,
        desc: "SAINT ROCH Hypoeutectic grey cast iron",
      },
      {
        id: "slider010",
        image: commodoreSlideImgTwo,
        desc: "6 model range from: 27 kw - 83 kw.",
      },
      {
        id: "slider011",
        image: commodoreSlideImgThree,
        desc: "Efficiency: at 30% charge 90-91.1% at 100% charge 89.9-90.5%",
      },
      {
        id: "slider012",
        image: commodoreSlideImgFour,
        desc: "Operates with forced draught oil or gas burners",
      },
    ],
    technicalData: commodoreTechnicalData,
  },
  {
    path: "commodore",
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
    carouselData: [
      {
        id: "slider001",
        image: commodoreSlideImgOne,
        desc: "SAINT ROCH Hypoeutectic grey cast iron",
      },
      {
        id: "slider002",
        image: commodoreSlideImgTwo,
        desc: "6 model range from: 27 kw - 83 kw.",
      },
      {
        id: "slider003",
        image: commodoreSlideImgThree,
        desc: "Efficiency: at 30% charge 90-91.1% at 100% charge 89.9-90.5%",
      },
      {
        id: "slider004",
        image: commodoreSlideImgFour,
        desc: "Operates with forced draught oil or gas burners",
      },
      {
        id: "slider005",
        image: commodoreSlideImgOne,
        desc: "SAINT ROCH Hypoeutectic grey cast iron",
      },
      {
        id: "slider006",
        image: commodoreSlideImgTwo,
        desc: "6 model range from: 27 kw - 83 kw.",
      },
      {
        id: "slider007",
        image: commodoreSlideImgThree,
        desc: "Efficiency: at 30% charge 90-91.1% at 100% charge 89.9-90.5%",
      },
      {
        id: "slider008",
        image: commodoreSlideImgFour,
        desc: "Operates with forced draught oil or gas burners",
      },
      {
        id: "slider009",
        image: commodoreSlideImgOne,
        desc: "SAINT ROCH Hypoeutectic grey cast iron",
      },
      {
        id: "slider010",
        image: commodoreSlideImgTwo,
        desc: "6 model range from: 27 kw - 83 kw.",
      },
      {
        id: "slider011",
        image: commodoreSlideImgThree,
        desc: "Efficiency: at 30% charge 90-91.1% at 100% charge 89.9-90.5%",
      },
      {
        id: "slider012",
        image: commodoreSlideImgFour,
        desc: "Operates with forced draught oil or gas burners",
      },
    ],
    technicalData: commodoreTechnicalData,
  },
  {
    path: "optimajor",
    subtitle: "Residential boilers",
    mainDescOne:
      "The SAINT ROCH Ultra is a medium power boiler that can be equipped with a forced draught oil or gas burner.",
    title: "Optimajor",
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
    carouselData: [
      {
        id: "slider001",
        image: commodoreSlideImgOne,
        desc: "SAINT ROCH Hypoeutectic grey cast iron",
      },
      {
        id: "slider002",
        image: commodoreSlideImgTwo,
        desc: "6 model range from: 27 kw - 83 kw.",
      },
      {
        id: "slider003",
        image: commodoreSlideImgThree,
        desc: "Efficiency: at 30% charge 90-91.1% at 100% charge 89.9-90.5%",
      },
      {
        id: "slider004",
        image: commodoreSlideImgFour,
        desc: "Operates with forced draught oil or gas burners",
      },
      {
        id: "slider005",
        image: commodoreSlideImgOne,
        desc: "SAINT ROCH Hypoeutectic grey cast iron",
      },
      {
        id: "slider006",
        image: commodoreSlideImgTwo,
        desc: "6 model range from: 27 kw - 83 kw.",
      },
      {
        id: "slider007",
        image: commodoreSlideImgThree,
        desc: "Efficiency: at 30% charge 90-91.1% at 100% charge 89.9-90.5%",
      },
      {
        id: "slider008",
        image: commodoreSlideImgFour,
        desc: "Operates with forced draught oil or gas burners",
      },
      {
        id: "slider009",
        image: commodoreSlideImgOne,
        desc: "SAINT ROCH Hypoeutectic grey cast iron",
      },
      {
        id: "slider010",
        image: commodoreSlideImgTwo,
        desc: "6 model range from: 27 kw - 83 kw.",
      },
      {
        id: "slider011",
        image: commodoreSlideImgThree,
        desc: "Efficiency: at 30% charge 90-91.1% at 100% charge 89.9-90.5%",
      },
      {
        id: "slider012",
        image: commodoreSlideImgFour,
        desc: "Operates with forced draught oil or gas burners",
      },
    ],
    technicalData: commodoreTechnicalData,
  },
];
