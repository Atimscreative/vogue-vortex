import { cn } from "@/lib/utils";
import SectionHeading from "./SectionHeading";

const NewArrivalSlider = () => {
  return (
    <>
      {/* ========= NEW ARRIVALS ========== */}
      <section className="py-10">
        <div className="wrapper">
          {/* SECTION HEADING */}
          <SectionHeading title="New Arrivals" />

       
          <div></div>
        </div>

        <div className="relative z-0 mt-3 bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url(./src/assets/new-arrivals.jpg)] bg-cover bg-center py-20">
          <div className="wrapper">
            <h3 className="translate-x-[20%] text-[32px] text-white">
              New Arrival
            </h3>
            <p className="translate-x-[40%] text-sm text-white">
              10% off Designer brands
            </p>
          </div>

          <div className="absolute bottom-5 right-5 inline-flex gap-1">
            {Array.from({ length: 3 }, (_: any, index: number) => (
              <span
                key={index}
                className={cn(
                  "inline-block h-2 w-2 cursor-pointer rounded-full bg-white",
                  index > 0 && "bg-opacity-35",
                )}
              ></span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewArrivalSlider;
