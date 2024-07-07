import ProductCard from "./ProductCard";
import ProductCategoryTabs from "./ProductCategoryTabs";

const ProductListing = () => {
  return (
    <>
      <section className="">
        <div className="wrapper">
          <ProductCategoryTabs />

          <div className="mt-6">
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductListing;
