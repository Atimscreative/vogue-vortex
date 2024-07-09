import SectionHeading from "./SectionHeading";
import for1 from "@/assets/foryou1.png";
import for2 from "@/assets/foryou2.png";
import for3 from "@/assets/foryou3.png";
import for4 from "@/assets/foryou4.png";
import for5 from "@/assets/foryou5.png";
import for6 from "@/assets/foryou6.png";
import EachElement from "@/utils/EachElement";
import { useNavigate } from "react-router-dom";

const foryoulist = [
  {
    image: for1,
    name: "21WN reversible angora",
    price: 149,
  },
  {
    image: for2,
    name: "21WN reversible angora",
    price: 149,
  },
  {
    image: for3,
    name: "21WN reversible angora",
    price: 149,
  },
  {
    image: for4,
    name: "21WN reversible angora",
    price: 149,
  },
  {
    image: for5,
    name: "21WN reversible angora",
    price: 149,
  },
  {
    image: for6,
    name: "21WN reversible angora",
    price: 149,
  },
];

const ForYou = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10">
      <div className="wrapper">
        <SectionHeading
          title="For you"
          shapeClassName="w-[100px] bottom-0"
          titleClassName="text-2xl"
        />

        <div className="hide-scrollbar w-full overflow-x-auto">
          <div className="mt-12 flex w-min space-x-5">
            <EachElement
              of={foryoulist}
              render={(item: any, i: number) => (
                <div key={i} className="w-[300px] overflow-hidden">
                  <figure className="mb-2 h-[350px] w-full">
                    <img
                      src={item?.image}
                      alt={item?.name + i}
                      className="h-full w-full object-cover object-center"
                    />
                  </figure>
                  <h3
                    onClick={() => navigate("/products")}
                    className="cursor-pointer font-bodoni text-lg text-main-100"
                  >
                    {item?.name}
                  </h3>
                  <span className="font-bodoni text-main-100">
                    ${item?.price}
                  </span>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForYou;
