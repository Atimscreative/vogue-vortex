import { cn } from "@/lib/utils";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <div className="mt-20" />

      <section className="h-[70vh] w-full bg-[url(./assets/hero-light.png)] bg-cover bg-center">
        <div className="wrapper"></div>
      </section>
      <div className="mt-6 flex items-center justify-center gap-2">
        {Array.from({ length: 5 }, (_: any, index: number) => (
          <span
            className={cn(
              "inline-block h-2 w-2 rotate-45 border-2 border-main-100",
              index === 0 && "bg-main-100",
            )}
          ></span>
        ))}
      </div>
    </>
  );
};

export default ProductDetails;
