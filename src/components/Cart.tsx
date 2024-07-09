import { cn } from "@/lib/utils";
// import { cartItems } from "@/utils/data";
import EachElement from "@/utils/EachElement";
import { TfiClose } from "react-icons/tfi";
import { Button } from "./ui/button";
import { ShoppingBag } from "@/icons/icons";
import { useNavigate } from "react-router-dom";
import CartItem from "./checkout-comps/CartItem";
import useCartStore from "@/store/cartStore";

type Props = {
  showCart: boolean;
  setShowCart: any;
};

const Cart: React.FC<Props> = ({ showCart, setShowCart }) => {
  const navigate = useNavigate();
  const { cartItems } = useCartStore();
  const handleClose = () => {
    setShowCart(false);
  };

  console.log(cartItems);

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
          {cartItems?.length && <EachElement
            of={cartItems}
            render={(data: any, index: number) => {
              return <CartItem data={data} key={index} />;
            }}
          />}
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
