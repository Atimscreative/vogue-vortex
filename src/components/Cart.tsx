import { cn } from "@/lib/utils";
import { cartItems } from "@/utils/data";
import EachElement from "@/utils/EachElement";
import { BsStarFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import slugify from "slugify";
import { TfiClose } from "react-icons/tfi";
import { Button } from "./ui/button";
import { Add, Minus } from "iconsax-react";
import { useState } from "react";
import { ShoppingBag } from "@/icons/icons";

type Props = {
  showCart: boolean;
  setShowCart: any;
};

const Cart: React.FC<Props> = ({ showCart, setShowCart }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    setShowCart(false);
  };

  return (
    <section
      onClick={(e) => e.stopPropagation()}
      className={cn(
        "fixed top-0 z-[9999] h-full w-full bg-white py-5 duration-300 lg:hidden",
        showCart ? "left-0" : "-left-full",
      )}
    >
      <div className="wrapper">
        <span className="cursor-pointer text-main-500" onClick={handleClose}>
          <TfiClose size={24} />
        </span>
        <div className="mt-8 space-y-5">
          <EachElement
            of={cartItems}
            render={(data: any, index: number) => {
              return <CartItem data={data} key={index} />;
            }}
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="mx-4 mb-4 flex justify-between border-t border-neutral-300 pt-3">
          <span className="font-tenorsan text-xl text-main-400">Sub Total</span>
          <span className="font-tenorsan text-xl text-[#DD8560]">$240</span>
        </div>
        <Button
          onClick={() => {
            navigate(`/checkout?tab=${encodeURIComponent("information")}`);
            setShowCart(false);
          }}
          size="lg"
          className="h-16 w-full cursor-pointer gap-5 rounded-none"
        >
          <span>
            <ShoppingBag className="text-white" />
          </span>
          <span className="font-tenorsan uppercase text-white">Buy Now</span>
        </Button>
      </div>
    </section>
  );
};

export default Cart;

type CartItemProp = {
  data: any;
};
const CartItem: React.FC<CartItemProp> = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  const Increment = () => {
    setQuantity((prev: number) => prev + 1);
  };

  const Decrement = () => {
    setQuantity((prev: number) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="grid w-full grid-cols-[150px_1fr] gap-2">
      <figure className="relative h-[150px] w-[150px] overflow-hidden rounded-2xl shadow">
        <img
          src={data?.images[0]}
          alt={data?.name}
          width={150}
          height={160}
          className="h-full w-full object-cover object-center"
        />
        <span className="inline- absolute bottom-2 left-2 rounded-xl bg-white px-2.5 py-1 font-circular text-lg text-main-100 shadow">
          ${data?.price}
        </span>
      </figure>

      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-2">
          <EachElement
            of={data?.colors}
            render={(col: string, index: number) => (
              <div
                key={index}
                style={{
                  border: index === 0 ? `1px solid #333` : "none",
                  backgroundColor: index >= 1 ? col : "transparent",
                }}
                className={cn(
                  "flex h-5 w-5 cursor-pointer items-center justify-center rounded-full",
                )}
              >
                <span
                  className="inline-block h-3 w-3 rounded-full"
                  style={{
                    backgroundColor: col,
                  }}
                ></span>
              </div>
            )}
          />
        </div>
        <div>
          <h3 className="font-circular text-main-100">
            <span className="font-tenorsan uppercase text-black">
              {data?.brand}
            </span>{" "}
            <br />
            <Link
              to={`#/products/${slugify(data?.name)}`}
              className="text-main-500"
            >
              {data?.name}
            </Link>
          </h3>
          <div className="inline-flex items-center gap-2">
            <span className="inline-block text-main-100">
              <BsStarFill size={20} />
            </span>
            <span className="font-tenorsan">4.8</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-3">
              <h4 className="font-tenorsan">Size</h4>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-neutral-300 font-tenorsan text-sm uppercase text-white">
                  s
                </span>
                <span className="inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 border-neutral-300 font-tenorsan text-sm uppercase text-main-400">
                  m
                </span>
                <span className="inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 border-neutral-300 font-tenorsan text-sm uppercase text-main-400">
                  l
                </span>
              </div>
            </div>
          </div>
          <div className="mt-1.5 flex items-center gap-2">
            <div
              onClick={Decrement}
              className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-neutral-300"
            >
              <Minus />
            </div>
            <span className="font-tenorsan">{quantity}</span>
            <div
              onClickCapture={Increment}
              className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-neutral-300"
            >
              <Add />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
