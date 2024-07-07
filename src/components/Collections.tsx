import Collection from "@/assets/collections.svg";
import Autumn from "@/assets/Autumn.svg";
import SectionHeading from "./SectionHeading";
import { BsPlayFill } from "react-icons/bs";

const Collections = () => {
  return (
    <section className="py-10">
      <div className="wrapper">
        <SectionHeading
          title="Collections"
          shapeClassName="w-[190px] bottom-0"
        />
        {/* IMAGE GRIDS */}
        <div className="mt-12 space-y-12">
          <img src={Collection} alt="Grid images" className="w-full" />
          <img src={Autumn} alt="Grid images" className="mx-auto w-[90%]" />
        </div>

        {/* VIDEOPLAY BACK */}
        <div className="mt-12 w-full bg-[url(./assets/video.png)] bg-cover bg-fixed bg-center">
          <div className="wrapper flex h-[200px] items-center justify-center">
            <span className="inline-flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-white bg-opacity-80 text-main-100 backdrop-blur-md">
              <BsPlayFill size={32} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
