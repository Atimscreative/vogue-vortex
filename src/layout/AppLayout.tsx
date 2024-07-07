import Footer from "@/components/Footer";
import Navbar from "@/components/nav-components/Navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      {/* <div className="mt-20" /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
