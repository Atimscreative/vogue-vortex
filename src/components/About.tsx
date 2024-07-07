import Img1 from "@/assets/Shipping-4--Streamline-Milano.svg";
import Img3 from "@/assets/Sharing-Ideas--Streamline-Milano.svg";
import Img2 from "@/assets/Design-Thinking-1--Streamline-Milano.svg";
import Img4 from "@/assets/International-Shipping--Streamline-Milano.svg";
import Img5 from "@/assets/curves.svg";
import EachElement from "@/utils/EachElement";
import logo from "@/assets/logo-dark.svg";
import { Link } from "react-router-dom";

const post = [
  { img: Img1, content: "Fast shipping. Free on orders over $25." },
  { img: Img2, content: "Sustainable process from start to finish." },
  { img: Img3, content: "Unique designs and high-quality materials." },
  { img: Img4, content: "Fast shipping. Free on orders over $25." },
];

const About = () => {
  return (
    <section className="bg-[#F2F2F2] py-10">
      <div className="wrapper">
        <Link to="/">
          <img
            src={logo}
            alt={"logo"}
            width={100}
            height={100}
            className="mx-auto block w-[100px]"
          />
        </Link>

        <p className="my-5 text-center">
          At our core, we strive to make a luxurious lifestyle attainable for a
          diverse community of women every day.
        </p>

        <div className="grid grid-cols-2 gap-y-5">
          <EachElement
            of={post}
            render={(item: any, i: number) => (
              <div className="flex flex-col items-center gap-3">
                <img
                  src={item?.img}
                  alt={"illustration" + i}
                  width={100}
                  height={100}
                  className="w-[80px]"
                />
                <p className="text-center">{item?.content}</p>
              </div>
            )}
          />
        </div>

        <div className="mt-10 flex items-center justify-center">
          <img
            src={Img5}
            alt={"illustration" + 5}
            width={100}
            height={100}
            className="w-[100px]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
