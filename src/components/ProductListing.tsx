import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductCategoryTabs from "./ProductCategoryTabs";
import { productsLists } from "@/utils/data";
import EachElement from "@/utils/EachElement";

const ProductListing = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    setProducts(productsLists);
  });
  return (
    <>
      <section className="">
        <div className="wrapper">
          <ProductCategoryTabs />

          <div className="mt-6 grid grid-cols-2 gap-2">
            <EachElement
              of={products}
              render={(item: any, index: number) => (
                <ProductCard key={index} data={item} />
              )}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductListing;
