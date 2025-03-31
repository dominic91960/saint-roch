// FEATURED PRODUCTS IMAGES
import s5001 from "@/assets/images/landing-page/featured-products/burners/s5-001.png";
import s5002 from "@/assets/images/landing-page/featured-products/burners/s5-002.png";
import s5003 from "@/assets/images/landing-page/featured-products/burners/s5-003.png";
import quico3001 from "@/assets/images/landing-page/featured-products/aluminium-radiators/quico-3-001.png";
import quico3002 from "@/assets/images/landing-page/featured-products/aluminium-radiators/quico-3-002.png";
import quico3003 from "@/assets/images/landing-page/featured-products/aluminium-radiators/quico-3-003.png";
import fpCombi from "@/assets/images/landing-page/featured-products/boilers/combi.png";
import fpUltra from "@/assets/images/landing-page/featured-products/boilers/ultra.png";
import fpOptimajor from "@/assets/images/landing-page/featured-products/boilers/optimajor.png";
import fpCommodore from "@/assets/images/landing-page/featured-products/boilers/commodore.png";

// MAIN CATEGORIES IMAGES
import mcCombi from "@/assets/images/landing-page/main-categories/residential-boilers/combi.png";
import mcUltra from "@/assets/images/landing-page/main-categories/residential-boilers/ultra.png";
import mcOptimajor from "@/assets/images/landing-page/main-categories/commercial-boilers/optimajor.png";
import mcCommodore from "@/assets/images/landing-page/main-categories/commercial-boilers/commodore.png";

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
        image: fpCombi,
        title: "Combi",
        desc: "certifications (e.g., ISO 9001, Energy Star, CE Marking) as clickable icons",
      },
      {
        id: "Bo02",
        image: fpUltra,
        title: "Ultra",
        desc: "certifications (e.g., ISO 9001, Energy Star, CE Marking) as clickable icons",
      },
      {
        id: "Bo03",
        image: fpOptimajor,
        title: "Optimajor",
        desc: "certifications (e.g., ISO 9001, Energy Star, CE Marking) as clickable icons",
      },
      {
        id: "Bo04",
        image: fpCommodore,
        title: "Commodore",
        desc: "certifications (e.g., ISO 9001, Energy Star, CE Marking) as clickable icons",
      },
    ],
  },
  {
    id: "04",
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
];

// -------- -------- MAIN CATEGORIES DATA -------- --------
export const homepageCategoriesData = [
  {
    name: "Residential boilers",
    wattage: "92kW to 203kW",
    slogan: "Effortless Warmth for Every Home",
    boilerImages: [
      { id: "image1.1.1", title: "Combi", image: mcCombi, alt: "combi" },
      { id: "image1.1.2", title: "Ultra", image: mcUltra, alt: "ultra" },
    ],
    desc: "When users hover over the main categories, the subcategories should appear along with their respective category images.",
    boilerNames: ["Combi", "Ultra"],
  },
  {
    name: "Commercial boilers",
    wattage: "102kW to 243kW",
    slogan: "Effortless Warmth for Every Home",
    boilerImages: [
      {
        id: "image2.1.1",
        title: "Optimajor",
        image: mcOptimajor,
        alt: "Optimajor",
      },
      {
        id: "image2.1.2",
        title: "Commodore",
        image: mcCommodore,
        alt: "Commodore",
      },
    ],
    desc: "When users hover over the main categories, the subcategories should appear along with their respective category images.",
    boilerNames: ["Optimajor", "Commodore"],
  },
  {
    name: "Industrial boilers",
    wattage: "102kW to 243kW",
    slogan: "Effortless Warmth for Every Home",
    boilerImages: [
      {
        id: "image2.1.1",
        title: "Optimajor",
        image: mcOptimajor,
        alt: "Optimajor",
      },
      {
        id: "image2.1.2",
        title: "Commodore",
        image: mcCommodore,
        alt: "Commodore",
      },
    ],
    desc: "When users hover over the main categories, the subcategories should appear along with their respective category images.",
    boilerNames: ["Optimajor", "Commodore"],
  },
];
