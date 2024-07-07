import About from "@/components/About";
import Collections from "@/components/Collections";
import ForYou from "@/components/ForYou";
import HeroBanner from "@/components/HeroBanner";
import NewArrivalSlider from "@/components/NewArrivalSlider";
import ProductListing from "@/components/ProductListing";
import Trending from "@/components/Trending";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <NewArrivalSlider />
      <ProductListing />
      <Collections />
      <ForYou />
      <Trending />
      <About />
    </>
  );
};

export default Home;
