import { Link } from "react-router-dom";
import logoLight from "@/assets/logo-light.svg";

import MobileNav from "./MobileNav";
import { Search } from "lucide-react";
import { ShoppingBag } from "@/icons/icons";
import { Heart } from "iconsax-react";
import Cart from "@/components/Cart";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClose = () => {
      setOpen(false);
    };

    document.addEventListener("click", handleClose);

    return document.removeEventListener("click", handleClose);
  }, []);
  return (
    <>
      <header className="fixed left-0 top-0 z-[999] hidden w-full bg-[#948775] py-6 lg:block">
        <div className="wrapper grid grid-cols-[1fr_120px_1fr] items-center justify-between">
          <nav className="space-x-3">
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

          <Link to="/" aria-label="logo-image">
            <img src={logoLight} alt="vogue-vortex" className="w-[120px]" />
          </Link>

          <div className="inline-flex gap-4 justify-self-end">
            <span className="cursor-pointer">
              <Search size={24} className="text-white" />
            </span>
            <span className="cursor-pointer">
              <Heart size={24} className="text-white" />
            </span>
            <span className="cursor-pointer">
              <ShoppingBag className="text-white" />
            </span>
          </div>
        </div>
      </header>
      <MobileNav showCart={setOpen} />
      <Cart showCart={open} setShowCart={setOpen} />
    </>
  );
};

export default Navbar;
