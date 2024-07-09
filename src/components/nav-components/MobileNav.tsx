import logoLight from "@/assets/logo-dark.svg";
import { MenuBar, ShoppingBag } from "@/icons/icons";
import { Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MobileNavSidebar from "./MobileNavSidebar";

const MobileNav = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="fixed left-0 top-0 z-[999] w-full bg-white bg-opacity-25 py-5 backdrop-blur-md lg:hidden">
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
            <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white">
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
