import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { productsLists } from "@/utils/data";
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
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import slugify from "slugify";

const ProductPage = () => {
  const [view, setView] = useState<string>("grid");
  return (
    <>
      <div className="mt-20" />
      <section>
        <div className="wrapper">
          <div className="flex items-center justify-between">
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

          <div className="my-6 flex items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-500 px-4 py-1.5">
              <span className="font-circular text-sm">Women</span>
              <span className="cursor-pointer">
                <CgClose size={20} />
              </span>
            </div>
            <div className="inline-flex items-center gap-3 rounded-full border border-neutral-500 px-4 py-1.5">
              <span className="font-circular text-sm">All apparel</span>
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

          {view === "grid" && (
            <div className="grid grid-cols-2 gap-4">
              <EachElement
                of={productsLists}
                render={(data: any, index: number) => (
                  <div key={index} className="w-full">
                    <figure className="relative mb-2 h-[200px] w-full overflow-hidden rounded-2xl shadow">
                      <span className="absolute right-3 top-3 inline-block text-main-100 hover:fill-main-100">
                        <BsHeart size={24} />
                      </span>
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
                    </figure>
                    <h3 className="font-circular text-main-100">
                      <Link to={`/products/${slugify(data?.name)}`}>
                        21WN reversible angora
                      </Link>
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="inline-block h-5 w-5 rounded-full border-2 border-main-100"></span>
                      <span className="font-circular text-main-100">
                        {data?.brand}
                      </span>
                      <span>
                        <RiVerifiedBadgeFill color="#00D566" />
                      </span>
                    </div>
                  </div>
                )}
              />
            </div>
          )}
          {view === "list" && (
            <div className="grid grid-cols-1 gap-4">
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

          <div className="my-10 flex items-center justify-center gap-1">
            <span className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border-2 border-main-500 font-circular font-medium text-main-100">
              <BsChevronLeft />
            </span>
            {Array.from({ length: 8 }, (_: any, index: number) => {
              if (index === 0 || index === 4) {
                return;
              }

              if (index === 5) {
                return (
                  <span
                    className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border-2 border-main-500 font-circular font-medium text-main-100"
                    key={index}
                  >
                    <BsThreeDots />
                  </span>
                );
              }

              return (
                <span
                  className={cn(
                    "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border-2 border-main-500 font-circular font-medium text-main-100",
                    index + 1 === 2 && "border-main-100 bg-main-100 text-white",
                  )}
                  key={index}
                >
                  {index + 1}
                </span>
              );
            })}
            <span className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border-2 border-main-500 font-circular font-medium text-main-100">
              <BsChevronRight />
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
