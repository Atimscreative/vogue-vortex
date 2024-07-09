import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { fashion, productsLists } from "@/utils/data";
import EachElement from "@/utils/EachElement";
import { Check } from "iconsax-react";
import { useState } from "react";
import {
  BsChevronLeft,
  BsChevronRight,
  BsHeart,
  BsStarFill,
  BsThreeDots,
} from "react-icons/bs";
import { CgClose, CgDisplayGrid } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuSettings2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import slugify from "slugify";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowRight } from "lucide-react";
import ForYou from "@/components/ForYou";
import win1 from "@/assets/win-1.png";
import win2 from "@/assets/win-2.png";
import win3 from "@/assets/win-3.png";
import win4 from "@/assets/win-4.png";
import win5 from "@/assets/win-5.png";
import Img1 from "@/assets/Shipping-4--Streamline-Milano.svg";
import Img3 from "@/assets/Sharing-Ideas--Streamline-Milano.svg";
import Img2 from "@/assets/Design-Thinking-1--Streamline-Milano.svg";
import Img4 from "@/assets/International-Shipping--Streamline-Milano.svg";
import logo from "@/assets/logo-dark.svg";
import { VscChevronDown } from "react-icons/vsc";
import { ShoppingBag } from "@/icons/icons";

const post = [
  { img: Img1, content: "Fast shipping. Free on orders over $25." },
  { img: Img2, content: "Sustainable process from start to finish." },
  { img: Img3, content: "Unique designs and high-quality materials." },
  { img: Img4, content: "Fast shipping. Free on orders over $25." },
];

const category = [
  "All",
  "Outer",
  "Dress",
  "Blouse",
  "T-Shirt",
  "Nightwears",
  "Skirt",
  "Pants",
  "Denim",
];

const ProductPage = () => {
  const [view, setView] = useState<string>("grid");
  return (
    <>
      <div className="mt-20" />

      <section className="py-10 pt-5">
        <div className="hidden items-center justify-center gap-4 lg:flex">
          <EachElement
            of={fashion["women"]}
            render={(fas: any, index: any) => (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger className="inline-flex items-center gap-2 font-circular hover:text-main-100 focus-visible:border-0 focus-visible:outline-0">
                  {fas?.category}
                  <span className="text-[#333] text-opacity-70">
                    <VscChevronDown />
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <EachElement
                    of={fas?.subcategories}
                    render={(sub: any, subIndex: number) => (
                      <DropdownMenuItem key={subIndex}>{sub}</DropdownMenuItem>
                    )}
                  />
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          />
        </div>
        <div className="wrapper">
          <div className="flex items-center justify-between lg:hidden">
            <h2 className="font-tenorsan uppercase text-main-500">Apparel</h2>
            <div className="flex items-center gap-3">
              <Button
                size="lg"
                className="cursor-pointer items-center gap-2 rounded-full bg-neutral-100 px-3 py-2.5 text-main-500 shadow-none hover:bg-main-100 hover:text-white"
              >
                New
                <span>
                  <IoMdArrowDropdown size={20} />
                </span>
              </Button>
              <div className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-neutral-100 text-main-500">
                <LuSettings2 size={24} />
              </div>
              <div
                onClick={() =>
                  setView((prev: any) => (prev === "grid" ? "list" : "grid"))
                }
                className={cn(
                  "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-neutral-100 duration-300",
                  view === "grid" ? "text-orange-700" : "text-main-500",
                )}
              >
                <CgDisplayGrid size={24} />
              </div>
            </div>
          </div>

          <div className="hide-scrollbar w-full overflow-x-auto lg:hidden">
            <div className="my-6 flex w-full items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-500 px-4 py-1.5">
                <span className="font-circular text-sm">Women</span>
                <span className="cursor-pointer">
                  <CgClose size={20} />
                </span>
              </div>
              <div className="inline-flex items-center gap-3 rounded-full border border-neutral-500 px-4 py-1.5">
                <span className="whitespace-nowrap font-circular text-sm">
                  All apparel
                </span>
                <span className="cursor-pointer">
                  <CgClose size={20} />
                </span>
              </div>
              <div className="inline-flex items-center gap-3 rounded-full border border-neutral-500 px-4 py-1.5">
                <span className="font-circular text-sm">Blouse</span>
                <span className="cursor-pointer">
                  <CgClose size={20} />
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 grid lg:grid-cols-[200px_1fr]">
            <div className="hidden lg:block">
              <h3 className="mb-4 font-tenorsan text-2xl text-main-400">
                Category
              </h3>
              <ul className="space-y-4">
                <EachElement
                  of={category}
                  render={(cat: string, index: number) => (
                    <li key={index}>
                      <Link
                        to="/"
                        className="font-tenorsan capitalize text-main-100"
                      >
                        {cat}
                      </Link>
                    </li>
                  )}
                />
              </ul>
            </div>
            <div className="w-full">
              {/* PRODUCT GRID VIEW */}
              {view === "grid" && (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
                  <EachElement
                    of={productsLists}
                    render={(data: any, index: number) => (
                      <ProductCard data={data} key={index} />
                    )}
                  />
                </div>
              )}

              {/* PRODUCT LIST VIEW */}
              {view === "list" && (
                <div className="grid grid-cols-1 gap-4 sm:max-w-[400px]">
                  <EachElement
                    of={productsLists}
                    render={(data: any, index: number) => (
                      <div
                        key={index}
                        className="grid w-full grid-cols-[150px_1fr] gap-2"
                      >
                        <figure className="relative mb-2 h-[150px] w-[150px] overflow-hidden rounded-2xl shadow">
                          <img
                            src={data?.images[0]}
                            alt={data?.name}
                            width={150}
                            height={160}
                            className="h-full w-full object-cover object-center"
                          />
                          <span className="inline- absolute bottom-2 left-2 rounded-xl bg-white px-2.5 py-1 font-circular text-lg text-main-100 shadow">
                            ${data?.price}
                          </span>
                          <span className="absolute right-3 top-3 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white bg-opacity-60 shadow-md">
                            <ShoppingBag size={20} className="text-[#DD8560]" />
                          </span>
                        </figure>

                        <div className="flex flex-col gap-2 pt-3">
                          <h3 className="font-circular text-main-100">
                            <span className="font-tenorsan uppercase text-black">
                              {data?.brand}
                            </span>{" "}
                            <br />
                            <Link
                              to={`/products/${slugify(data?.name)}`}
                              className="text-main-500"
                            >
                              {data?.name}
                            </Link>
                          </h3>
                          <div className="inline-flex items-center gap-2">
                            <span className="inline-block text-main-100">
                              <BsStarFill size={20} />
                            </span>
                            <span className="font-tenorsan">4.8</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="inline-flex items-center gap-3">
                              <h4 className="font-tenorsan">Size</h4>
                              <div className="flex items-center gap-2">
                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-500 font-tenorsan uppercase text-main-400">
                                  s
                                </span>
                                <span
                                  key={index}
                                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-500 font-tenorsan uppercase text-main-400"
                                >
                                  m
                                </span>
                                <span
                                  key={index}
                                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-500 font-tenorsan uppercase text-main-400"
                                >
                                  l
                                </span>
                              </div>
                            </div>
                            <div className="inline-flex gap-2">
                              <span className="text-neutral-600">
                                <Check
                                  size={24}
                                  variant="TwoTone"
                                  className="-rotate-180"
                                />
                              </span>
                              <span className="inline-block text-main-100">
                                <BsHeart size={24} />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  />
                </div>
              )}
            </div>

            {/* SHOW ALL PRODUCTS */}
            <div className="col-span-2 mt-6 hidden w-full justify-end lg:flex">
              <Link
                to="/products"
                className="inline-flex items-center font-circular text-xl font-semibold"
              >
                Show all{" "}
                <span>
                  <ArrowRight />
                </span>
              </Link>
            </div>
          </div>

          {/* FOR YOU */}
          <div className="hidden lg:block">
            <ForYou />
          </div>

          {/*  */}

          <div className="hidden grid-cols-[400px_1fr] lg:grid">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-center font-tenorsan text-4xl uppercase tracking-widest text-main-100">
                winter
              </h3>
              <p className="mt-3 text-center font-tenorsan capitalize text-main-100">
                must have fits for this season
              </p>
              <Button className="mt-6 inline-block h-auto rounded-md bg-main-100 px-5 py-3 font-circular font-light text-white hover:bg-main-200">
                Shop now
              </Button>
            </div>
            <div className="grid h-[400px] grid-cols-3 overflow-hidden">
              <img
                src={win1}
                alt="winter-products"
                className="h-full w-full object-cover"
              />
              <img
                src={win2}
                alt="winter-products"
                className="h-full w-full object-cover"
              />
              <img
                src={win1}
                alt="winter-products"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="mt-3 hidden grid-cols-[1fr_400px] lg:grid">
            <div className="grid h-[400px] grid-cols-3 overflow-hidden">
              <img
                src={win3}
                alt="winter-products"
                className="h-full w-full object-cover"
              />
              <img
                src={win4}
                alt="winter-products"
                className="h-full w-full object-cover"
              />
              <img
                src={win5}
                alt="winter-products"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="relative flex flex-col items-center justify-center">
              <span className="absolute right-10 top-1 font-circular text-xl uppercase tracking-wider text-main-100">
                {" "}
                vogue vortex
              </span>
              <h3 className="text-center font-tenorsan text-4xl uppercase tracking-widest text-main-100">
                the weekend
              </h3>
              <p className="mt-3 text-center font-tenorsan capitalize text-main-100">
                Effortless style for those relaxed days
              </p>
              <Button className="mt-6 inline-block h-auto rounded-md bg-main-100 px-5 py-3 font-circular font-light text-white hover:bg-main-200">
                Shop now
              </Button>
            </div>
          </div>

          {/* ABOUT */}
          <div className="mx-auto hidden flex-col items-center pt-16 lg:flex lg:w-[80%] xl:w-[65%]">
            <Link to="/">
              <img
                src={logo}
                alt={"logo"}
                width={100}
                height={100}
                className="mx-auto block w-[100px]"
              />
            </Link>

            <p className="my-5 w-[60%] text-balance text-center font-tenorsan font-medium text-neutral-500 xl:w-1/2">
              At our core, we strive to make a luxurious lifestyle attainable
              for a diverse community of women every day.
            </p>
            {/* BORDER DIVIDER */}
            <div className="relative mx-auto my-0 mb-10 w-1/2 border-t-2 border-zinc-100">
              <span className="absolute -top-1 inline-block h-1.5 w-1.5 rotate-45 bg-zinc-100"></span>
              <span className="absolute -top-1 right-0 inline-block h-1.5 w-1.5 rotate-45 bg-zinc-100"></span>
            </div>

            <div className="grid grid-cols-4 gap-5">
              <EachElement
                of={post}
                render={(item: any, i: number) => (
                  <div className="flex flex-col items-center gap-3">
                    <img
                      src={item?.img}
                      alt={"illustration" + i}
                      width={100}
                      height={100}
                      className="w-[60px]"
                    />
                    <p className="text-center font-tenorsan text-neutral-500">
                      {item?.content}
                    </p>
                  </div>
                )}
              />
            </div>
          </div>

          {/* PAGINATION */}
          <div className="my-10 flex items-center justify-center gap-1 lg:hidden">
            <span className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border-2 border-main-100 font-circular font-medium text-main-100">
              <BsChevronLeft />
            </span>
            {Array.from({ length: 8 }, (_: any, index: number) => {
              if (index === 0 || index === 4) {
                return;
              }

              if (index === 5) {
                return (
                  <span
                    className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border-2 border-main-100 font-circular font-medium text-main-100"
                    key={index}
                  >
                    <BsThreeDots />
                  </span>
                );
              }

              return (
                <span
                  className={cn(
                    "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border-2 border-main-100 font-circular font-medium text-main-100",
                    index + 1 === 2 && "border-main-100 bg-main-100 text-white",
                  )}
                  key={index}
                >
                  {index + 1}
                </span>
              );
            })}
            <span className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border-2 border-main-100 font-circular font-medium text-main-100">
              <BsChevronRight />
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
