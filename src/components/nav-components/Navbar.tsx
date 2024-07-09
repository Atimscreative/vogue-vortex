import { Link, useLocation } from "react-router-dom";
import logoLight from "@/assets/logo-light.svg";

import MobileNav from "./MobileNav";
import { Search } from "lucide-react";
import { ShoppingBag } from "@/icons/icons";
import { Heart } from "iconsax-react";
import Cart from "@/components/Cart";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [open, setOpen] = useState(false);

  const isCart = pathname.includes("/checkout");

  useEffect(() => {
    const handleClose = () => {
      setOpen(false);
    };

    document.addEventListener("click", handleClose);

    return document.removeEventListener("click", handleClose);
  }, []);

  console.log(pathname);
  return (
    <>
      <header
        className={cn(
          "fixed left-0 top-0 z-[999] hidden w-full bg-[#948775] py-6 lg:block",
          isCart && "border-b lg:bg-white",
        )}
      >
        <div className="wrapper grid grid-cols-[1fr_120px_1fr] items-center justify-between">
          <nav className={cn("space-x-3", isCart && "lg:hidden")}>
            <Link to="/" className="font-tenorsan uppercase text-main-500">
              Women
            </Link>
            <Link to="/" className="font-tenorsan uppercase text-[#FAFAFA]">
              Men
            </Link>{" "}
            <Link to="/" className="font-tenorsan uppercase text-[#FAFAFA]">
              Native
            </Link>{" "}
            <Link to="/" className="font-tenorsan uppercase text-[#FAFAFA]">
              Kids
            </Link>{" "}
          </nav>
          <Link
            to="/checkout?tab=information"
            className={cn(
              "hidden font-tenorsan uppercase tracking-[4px]",
              isCart && "lg:block",
            )}
          >
            Cart
          </Link>

          <Link to="/" aria-label="logo-image">
            <img src={logoLight} alt="vogue-vortex" className="w-[120px]" />
          </Link>

          <div className="inline-flex gap-4 justify-self-end">
            <span className="cursor-pointer">
              <Search
                size={24}
                className={cn("text-white", isCart && "lg:text-main-100")}
              />
            </span>
            <span className={cn("cursor-pointer", isCart && "lg:hidden")}>
              <Heart size={24} className={cn("text-white")} />
            </span>
            <Link to="/checkout?tab=information" className="cursor-pointer">
              <ShoppingBag
                className={cn("text-white", isCart && "lg:text-main-100")}
              />
            </Link>
          </div>
        </div>
      </header>
      <MobileNav showCart={setOpen} />
      <Cart showCart={open} setShowCart={setOpen} />
    </>
  );
};

export default Navbar;
