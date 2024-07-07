import logoDark from "@/assets/logo-dark.svg";
import logoLight from "@/assets/logo-light.svg";
import { useTheme } from "@/context/theme-provider";
import { MenuBar, ShoppingBag } from "@/icons/icons";
import { Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MobileNavSidebar from "./MobileNavSidebar";

const MobileNav = () => {
  const [showModal, setShowModal] = useState(false);
  const { theme } = useTheme();

  return (
    <>
      <nav className="absolute left-0 top-0 w-full py-5 lg:hidden">
        <div className="wrapper flex items-center justify-between">
          <span
            onClick={() => setShowModal(true)}
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white dark:border-2 dark:border-white dark:bg-transparent"
          >
            <MenuBar className="text-main-100 dark:text-white" />
          </span>

          {theme === "dark" ? (
            <Link to="/" aria-label="logo-image">
              <img src={logoDark} alt="vogue-vortex" />
            </Link>
          ) : (
            <Link to="/" aria-label="logo-image">
              <img src={logoLight} alt="vogue-vortex" />
            </Link>
          )}

          <div className="inline-flex gap-2">
            <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-white">
              <Search size={24} className="text-main-100 dark:text-white" />
            </span>
            <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white dark:border-2 dark:border-white dark:bg-transparent">
              <ShoppingBag className="text-main-100 dark:text-white" />
            </span>
          </div>
        </div>
      </nav>

      <MobileNavSidebar showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default MobileNav;
