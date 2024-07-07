import MobileNav from "@/components/nav-components/MobileNav";
import HeroBanner from "@/components/HeroBanner";
import NewArrivalSlider from "@/components/NewArrivalSlider";
import ProductListing from "@/components/ProductListing";

const Home = () => {
  return (
    <>
      <MobileNav />
      <HeroBanner />
      <NewArrivalSlider />
      <ProductListing />
    </>
  );
};

export default Home;
