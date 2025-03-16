// FEATURED PRODUCTS IMAGES
import s5001 from "@/assets/images/landing-page/featured-products/burners/s5-001.png";
import s5002 from "@/assets/images/landing-page/featured-products/burners/s5-002.png";
import s5003 from "@/assets/images/landing-page/featured-products/burners/s5-003.png";
import quico3001 from "@/assets/images/landing-page/featured-products/aluminium-radiators/quico-3-001.png";
import quico3002 from "@/assets/images/landing-page/featured-products/aluminium-radiators/quico-3-002.png";
import quico3003 from "@/assets/images/landing-page/featured-products/aluminium-radiators/quico-3-003.png";
import combi from "@/assets/images/landing-page/featured-products/boilers/combi.png";
import ultra from "@/assets/images/landing-page/featured-products/boilers/ultra.png";
import optimajor from "@/assets/images/landing-page/featured-products/boilers/optimajor.png";
import commodore from "@/assets/images/landing-page/featured-products/boilers/commodore.png";

import boiler from "@/assets/images/landing-page/main-categories/boiler.png";

// -------- -------- FEATURED PRODUCTS DATA -------- --------
export const featuredProductsData = [
  {
    id: "01",
    category: "Aluminium Radiators",
    products: [
      {
        id: "Ar01",
        image: quico3001,
        title: "Quico 3",
        desc: "certifications (e.g., ISO 9001, Energy Star, CE Marking) as clickable icons",
      },
      {
        id: "Ar02",
        image: quico3002,
        title: "Quico 3",
        desc: "certifications (e.g., ISO 9001, Energy Star, CE Marking) as clickable icons",
      },
      {
        id: "Ar03",
        image: quico3003,
        title: "Quico 3",
        desc: "certifications (e.g., ISO 9001, Energy Star, CE Marking) as clickable icons",
      },
    ],
  },
  {
    id: "02",
    category: "Burners",
    products: [
      {
        id: "Bu01",
        image: s5001,
        title: "S5",
        desc: "certifications (e.g., ISO 9001, Energy Star, CE Marking) as clickable icons",
      },
      {
        id: "Bu02",
        image: s5002,
        title: "S5",
        desc: "certifications (e.g., ISO 9001, Energy Star, CE Marking) as clickable icons",
      },
      {
        id: "Bu03",
        image: s5003,
        title: "S5",
        desc: "certifications (e.g., ISO 9001, Energy Star, CE Marking) as clickable icons",
      },
    ],
  },
  {
    id: "03",
    category: "Boilers",
    products: [
      {
        id: "Bo01",
        image: combi,
        title: "Combi",
        desc: "certifications (e.g., ISO 9001, Energy Star, CE Marking) as clickable icons",
      },
      {
        id: "Bo02",
        image: ultra,
        title: "Ultra",
        desc: "certifications (e.g., ISO 9001, Energy Star, CE Marking) as clickable icons",
      },
      {
        id: "Bo03",
        image: optimajor,
        title: "Optimajor",
        desc: "certifications (e.g., ISO 9001, Energy Star, CE Marking) as clickable icons",
      },
      {
        id: "Bo04",
        image: commodore,
        title: "Commodore",
        desc: "certifications (e.g., ISO 9001, Energy Star, CE Marking) as clickable icons",
      },
    ],
  },
];

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
