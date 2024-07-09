import { cn } from "@/lib/utils";
import EachElement from "@/utils/EachElement";
import { Add } from "iconsax-react";
import { Minus } from "lucide-react";
import { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

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
    <div className="grid w-full grid-cols-[150px_1fr] gap-2 lg:grid-cols-[200px_1fr] lg:gap-6">
      <figure className="relative h-[150px] w-[150px] overflow-hidden rounded-2xl shadow lg:h-[200px] lg:w-[200px]">
        <img
          src={data?.images[0]}
          alt={data?.name}
          width={150}
          height={160}
          className="h-full w-full object-cover object-center"
        />
        <span className="absolute bottom-2 left-2 inline rounded-xl bg-white px-2.5 py-1 font-circular text-lg text-main-100 shadow lg:hidden">
          ${data?.price}
        </span>
      </figure>

      <div className="flex items-center gap-4 lg:gap-6">
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
        <div className="lg:space-y-3">
          <h3 className="font-circular text-main-100">
            <span className="font-tenorsan uppercase text-black lg:text-2xl">
              {data?.brand}
            </span>{" "}
            <br className="lg:hidden" />
            <Link
              // to={`#/products/${slugify(data?.name)}`}
              to="/#"
              className="text-main-500 lg:text-neutral-500"
            >
              {data?.name}
            </Link>
          </h3>
          <p className="hidden font-tenorsan text-neutral-500 lg:block">
            The Adien weather Blouse is designed by Zara for Vogue Vortex, comes
            from the combination of simple elements of fine leather.{" "}
          </p>
          <div className="items-center justify-between lg:flex">
            {/* REVIEWS */}
            <div className="inline-flex items-center gap-2">
              <span className="inline-block text-main-100">
                <BsStarFill size={20} />
              </span>
              <span className="font-tenorsan text-lg text-neutral-500">
                4.8{" "}
                <span className="hidden text-neutral-500 lg:inline">
                  (25 reviews)
                </span>
              </span>
            </div>
            {/* SIZES */}
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
          </div>

          <div className="justify-between lg:flex">
            <span className="hidden font-tenorsan text-3xl lg:inline-block">
              ${data.price}.00
            </span>
            {/* QUANTITY */}
            <div className="mt-1.5 flex items-center gap-2">
              <div
                onClick={Decrement}
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-neutral-300"
              >
                <Minus />
              </div>
              <span className="inline-block font-tenorsan tabular-nums nums">
                {quantity}
              </span>
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
    </div>
  );
};

export default CartItem;
