import boiler from "@/assets/images/landing-page/main-categories/boiler.png";

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
