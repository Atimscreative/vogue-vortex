import Product1 from "@/assets/product-1.jpg";
import Product2 from "@/assets/product-2.jpg";
import Product21 from "@/assets/product-2-1.png";
import Product22 from "@/assets/product-2-2.png";
import Product3 from "@/assets/product-3.jpg";
import Product4 from "@/assets/product-4.jpg";
import Product5 from "@/assets/product-5.jpg";
import Product6 from "@/assets/hero-light.png";
// import Product2 from "@/assets/product-2.jpg";

export const fashion: any = {
  women: [
    {
      category: "New",
      subcategories: ["Latest Trends", "Just In", "New Arrivals"],
    },
    {
      category: "Apparel",
      subcategories: [
        "Outer",
        "Dress",
        "Blouse",
        "T-Shirt",
        "Nightwears",
        "Skirt",
        "Pants",
        "Denim",
      ],
    },
    {
      category: "Bag",
      subcategories: ["Handbags", "Backpacks", "Totes", "Clutches"],
    },
    {
      category: "Shoes",
      subcategories: ["Heels", "Flats", "Sneakers", "Boots", "Sandals"],
    },
    {
      category: "Beauty",
      subcategories: ["Skincare", "Makeup", "Haircare", "Fragrances"],
    },
    {
      category: "Accessories",
      subcategories: ["Jewelry", "Watches", "Scarves", "Belts", "Hats"],
    },
  ],
  men: [
    {
      category: "New",
      subcategories: ["Latest Trends", "Just In", "New Arrivals"],
    },
    {
      category: "Apparel",
      subcategories: [
        "Outer",
        "Shirt",
        "T-Shirt",
        "Pants",
        "Denim",
        "Suits",
        "Shorts",
      ],
    },
    {
      category: "Bag",
      subcategories: [
        "Briefcases",
        "Backpacks",
        "Messenger Bags",
        "Duffle Bags",
      ],
    },
    {
      category: "Shoes",
      subcategories: [
        "Dress Shoes",
        "Casual Shoes",
        "Sneakers",
        "Boots",
        "Sandals",
      ],
    },
    {
      category: "Grooming",
      subcategories: ["Skincare", "Shaving", "Haircare", "Fragrances"],
    },
    {
      category: "Accessories",
      subcategories: ["Watches", "Belts", "Hats", "Sunglasses", "Ties"],
    },
  ],
  native: [
    {
      category: "New",
      subcategories: ["Latest Trends", "Just In", "New Arrivals"],
    },
    {
      category: "Men",
      subcategories: [
        "Traditional Attire",
        "Footwear",
        "Headgear",
        "Accessories",
      ],
    },
    {
      category: "Women",
      subcategories: [
        "Traditional Attire",
        "Footwear",
        "Headgear",
        "Accessories",
      ],
    },
    {
      category: "Kids",
      subcategories: [
        "Traditional Attire",
        "Footwear",
        "Headgear",
        "Accessories",
      ],
    },
  ],
  kids: [
    {
      category: "New",
      subcategories: ["Latest Trends", "Just In", "New Arrivals"],
    },
    {
      category: "Apparel",
      subcategories: ["Tops", "Bottoms", "Dresses", "Outerwear", "Sleepwear"],
    },
    {
      category: "Bag",
      subcategories: ["Backpacks", "Lunch Bags", "Totes"],
    },
    {
      category: "Shoes",
      subcategories: ["Sneakers", "Sandals", "Boots", "Dress Shoes"],
    },
    {
      category: "Accessories",
      subcategories: ["Hats", "Belts", "Sunglasses", "Jewelry"],
    },
  ],
};

export const productsLists = [
  {
    id: "VO55000",
    name: "Oak leather suit ",
    brand: "Dior",
    verified: true,
    price: 120,

    sizes: ["s", "m", "l"],
    images: [Product1, Product21, Product22],
    material:
      "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.",
    care: {
      description:
        "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
      info: [""],
    },
  },
  {
    id: "VO55001",
    name: "21WN reversible angora ",
    brand: "Zara Official",
    verified: true,
    price: 149,

    sizes: ["s", "m", "l"],
    images: [Product2],
  },

  {
    id: "VO55002",

    name: "21WN reversible angora ",
    brand: "Zara Official",
    verified: true,
    price: 149,

    sizes: ["s", "m", "l"],
    images: [Product3],
  },
  {
    id: "VO55003",

    name: "21WN reversible angora ",
    brand: "Zara Official",
    verified: true,
    price: 149,

    sizes: ["s", "m", "l"],
    images: [Product4],
  },
  {
    id: "VO55004",

    name: "21WN reversible angora ",
    brand: "Zara Official",
    verified: true,
    price: 149,

    sizes: ["s", "m", "l"],
    images: [Product5],
  },
  {
    id: "VO55005",

    name: "21WN reversible angora ",
    brand: "Zara Official",
    verified: true,
    price: 149,

    sizes: ["s", "m", "l"],
    images: [Product6],
  },
  {
    id: "VO55006",

    name: "21WN reversible angora ",
    brand: "Zara Official",
    verified: true,
    price: 149,

    sizes: ["s", "m", "l"],
    images: [Product4],
  },
  {
    id: "VO55007",

    name: "21WN reversible angora ",
    brand: "Zara Official",
    verified: true,
    price: 149,

    sizes: ["s", "m", "l"],
    images: [Product3],
  },
];

type CartProps = {
  id: string;
  name: string;
  brand: string;
  verified: boolean;
  price: number;
  colors: string[];
  sizes: string[];
  images: string[];
}[];

export const cartItems: CartProps = [
  {
    id: "VO55008",

    name: "21WN reversible angora ",
    brand: "Zara Official",
    verified: true,
    price: 149,

    sizes: ["s", "m", "l"],
    images: [Product1],
    colors: ["#ffffff", "#0027B3", "#00B300", "#B39600"],
  },
  {
    id: "VO55009",
    name: "21WN reversible angora ",
    brand: "Zara Official",
    verified: true,
    price: 149,
    colors: ["#483E25", "#B30015", "#B39600", "#0027B3"],
    sizes: ["s", "m", "l"],
    images: [Product2],
  },
  {
    id: "VO55010",
    name: "21WN reversible angora ",
    brand: "Zara Official",
    verified: true,
    price: 149,
    colors: ["#131217", "#00B300", "#0093B3", "#0027B3"],
    sizes: ["s", "m", "l"],
    images: [Product4],
  },
];
