import Product1 from "@/assets/product-1.jpg";
import Product2 from "@/assets/product-2.jpg";
import Product21 from "@/assets/product-2-1.png";
import Product22 from "@/assets/product-2-2.png";

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
    name: "21WN reversible angora ",
    brand: "Zara Official",
    verified: true,
    price: 149,
    colors: ["", "", ""],
    sizes: ["s", "m", "l"],
    images: [Product1],
  },
  {
    name: "Oak leather suit ",
    brand: "Dior",
    verified: true,
    price: 120,
    colors: ["", "", ""],
    sizes: ["s", "m", "l"],
    images: [Product2, Product21, Product22],
    material:
      "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.",
    care: {
      description:
        "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
      info: [""],
    },
  },
];
