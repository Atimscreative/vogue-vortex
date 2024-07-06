import { CgMenuLeft } from "react-icons/cg";
import logoDark from "@/assets/logo-dark.svg";
import logoLight from "@/assets/logo-light.svg";
import { useTheme } from "@/context/theme-provider";
import { MenuBar, ShoppingBag } from "@/icons/icons";
import { Search } from "lucide-react";

const MobileNav = () => {
  const { theme } = useTheme();
  return (
    <header className="py-5 absolute top-0 left-0 w-full">
      <div className="wrapper flex items-center justify-between">
        <span className="inline-flex justify-center items-center bg-white rounded-full w-10 h-10 dark:border-2 dark:bg-transparent dark:border-white">
          <MenuBar className="text-stone-500 dark:text-white" />
        </span>

        {theme === "dark" ? (
          <img src={logoDark} alt="vogue-vortex" />
        ) : (
          <img src={logoLight} alt="vogue-vortex" />
        )}

        <div className="inline-flex gap-2">
          <span className="inline-flex justify-center items-center border-2  border-white rounded-full w-10 h-10 ">
            <Search size={24} className="text-white" />
          </span>
          <span className="inline-flex justify-center items-center bg-white dark:bg-transparent rounded-full w-10 h-10 dark:border-2  dark:border-white">
            <ShoppingBag className="text-stone-500 dark:text-white" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default MobileNav;
