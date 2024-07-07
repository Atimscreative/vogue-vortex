// import Product1 from "@/assets/product-1.jpg";
import uni from "@/assets/Union.svg";

const ProductCard = () => {
  return (
    <>
      <div className="relative">
        <svg width="300" height="200">
          <rect
            x="0"
            y="0"
            width="116"
            rx="30"
            ry="30"
            height="132"
            fill="blue"
          />
          <rect
            x="70"
            y="40"
            width="92.99"
            rx="30"
            ry="30"
            height="122.66"
            fill="blue"
          />
        </svg>
        <img src={uni} alt="" className="absolute top-0 -z-10" />
      </div>
    </>
  );
};

export default ProductCard;
