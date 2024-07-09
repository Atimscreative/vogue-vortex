import logoLight from "@/assets/logo-dark.svg";
import { MenuBar, ShoppingBag } from "@/icons/icons";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MobileNavSidebar from "./MobileNavSidebar";
import { cn } from "@/lib/utils";

const MobileNav = ({ showCart }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const pos = () => {
      setIsSticky(window?.scrollY > 200);
    };

    document.addEventListener("scroll", pos);
    return () => document.removeEventListener("scroll", pos);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed left-0 top-0 z-[999] w-full bg-white py-5 backdrop-blur-md lg:hidden",
          isSticky && "shadow-lg",
        )}
      >
        <div className="wrapper flex items-center justify-between">
          <span
            onClick={() => setShowModal(true)}
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white"
          >
            <MenuBar className="text-main-100" />
          </span>

          <Link to="/" aria-label="logo-image">
            <img src={logoLight} alt="vogue-vortex" />
          </Link>

          <div className="inline-flex gap-2">
            <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white">
              <Search size={24} className="text-main-100" />
            </span>
            <span
              onClick={() => showCart(true)}
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white"
            >
              <ShoppingBag className="text-main-100" />
            </span>
          </div>
        </div>
      </nav>

      <MobileNavSidebar showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default MobileNav;
