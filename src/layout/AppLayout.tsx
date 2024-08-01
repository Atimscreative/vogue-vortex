import Footer from "@/components/Footer";
import Navbar from "@/components/nav-components/Navbar";
import { Outlet, useLocation } from "react-router-dom";


const AppLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
      <Navbar />
      {/* <div className="mt-20" /> */}
      <Outlet />
      {!currentPath.includes("/checkout") && <Footer />}
    </>
  );
};

export default AppLayout;
