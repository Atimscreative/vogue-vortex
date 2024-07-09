import EachElement from "@/utils/EachElement";
import { BiLogoPlayStore } from "react-icons/bi";
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTiktok,
  BsTwitterX,
} from "react-icons/bs";
import { GrAppleAppStore } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const links = ["Support", "Dealers", "Company", "Products", "Blogs"];

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="wrapper">
        <div className="mb-16 hidden grid-cols-[1fr_2fr] gap-10 lg:grid">
          <div className="">
            <div className="flex justify-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-main-100 text-main-100">
                <BsInstagram size={20} />
              </span>{" "}
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-main-100 text-main-100">
                <BsFacebook size={20} />
              </span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-main-100 text-main-100">
                <BsTwitterX size={20} />
              </span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-main-100 text-main-100">
                <BsPinterest size={20} />
              </span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-main-100 text-main-100">
                <BsTiktok size={20} />
              </span>
            </div>

            <div className="mt-6">
              <h3 className="text-center font-tenorsan uppercase text-main-100">
                Download our app
              </h3>

              <div className="mt-3 flex items-center justify-center gap-3">
                <Link to="/" className="text-main-100">
                  <BiLogoPlayStore size={36} />
                </Link>
                <Link to="/" className="text-main-100">
                  <GrAppleAppStore size={36} />
                </Link>
              </div>
            </div>

            <div className="mx-auto mt-4 flex w-[80%] max-w-sm items-center">
              <Input
                type="email"
                placeholder="Enter email address"
                className="rounded-e-none border-0 placeholder:text-neutral-400 focus:border-main-100 "
              />
              <Button
                type="submit"
                className="rounded-s-none bg-main-100 hover:bg-main-200"
              >
                Subscribe
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-4 justify-between">
            <div className="inline-grid space-y-3">
              <h3 className="font-tenorsan text-main-100">SUPPORT</h3>
              <Link to="/" className="inline-block font-tenorsan text-main-100">
                About Us
              </Link>
              <Link to="/" className="inline-block font-tenorsan text-main-100">
                Shipping
              </Link>
              <Link to="/" className="inline-block font-tenorsan text-main-100">
                FAQ
              </Link>
              <Link to="/" className="inline-block font-tenorsan text-main-100">
                Recall
              </Link>
            </div>
            <div className="inline-grid space-y-3">
              <h3 className="font-tenorsan uppercase text-main-100">Company</h3>
              <Link to="/" className="inline-block font-tenorsan text-main-100">
                About Us
              </Link>
              <Link to="/" className="inline-block font-tenorsan text-main-100">
                Careets
              </Link>
              <Link to="/" className="inline-block font-tenorsan text-main-100">
                Security
              </Link>
              <Link to="/" className="inline-block font-tenorsan text-main-100">
                Brand
              </Link>
            </div>{" "}
            <div className="inline-grid space-y-3">
              <h3 className="font-tenorsan uppercase text-main-100">
                Products
              </h3>
              <Link to="/" className="inline-block font-tenorsan text-main-100">
                Features
              </Link>
              <Link to="/" className="inline-block font-tenorsan text-main-100">
                Customization
              </Link>
              <Link to="/" className="inline-block font-tenorsan text-main-100">
                Collaboration
              </Link>
              <Link to="/" className="inline-block font-tenorsan text-main-100">
                Solutions
              </Link>
            </div>{" "}
            <div className="inline-grid space-y-3">
              <h3 className="font-tenorsan uppercase text-main-100">Blog</h3>
              <Link to="/" className="inline-block font-tenorsan text-main-100">
                Discounts
              </Link>
              <Link to="/" className="inline-block font-tenorsan text-main-100">
                Fashion week
              </Link>
              <Link to="/" className="inline-block font-tenorsan text-main-100">
                Promotions
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <div className="mx-auto flex w-[200px] flex-col items-center space-y-2 divide-y-2">
            <EachElement
              of={links}
              render={(link: string, index: number) => (
                <Link
                  to="/"
                  key={index}
                  className="block w-full pt-2 text-center font-tenorsan uppercase text-main-100"
                >
                  {link}
                </Link>
              )}
            />
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-main-100 text-main-100">
              <BsInstagram size={20} />
            </span>{" "}
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-main-100 text-main-100">
              <BsFacebook size={20} />
            </span>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-main-100 text-main-100">
              <BsTwitterX size={20} />
            </span>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-main-100 text-main-100">
              <BsPinterest size={20} />
            </span>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-main-100 text-main-100">
              <BsTiktok size={20} />
            </span>
          </div>

          <div className="mt-6">
            <h3 className="text-center font-tenorsan uppercase text-main-100">
              Download our app
            </h3>

            <div className="mt-3 flex items-center justify-center gap-3">
              <Link to="/" className="text-main-100">
                <BiLogoPlayStore size={36} />
              </Link>
              <Link to="/" className="text-main-100">
                <GrAppleAppStore size={36} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-7">
          <div className="mt-3 flex items-center justify-center gap-3 divide-x-2 divide-main-100">
            <Link to="/" className="text-main-100 underline">
              Privacy Policy
            </Link>
            <Link to="/" className="pl-3 text-main-100 underline">
              Unsubscribe
            </Link>
          </div>
          <div className="mt-3 space-y-2 text-center">
            <p className="text-main-100">
              All prices and products are subjects to availability.
            </p>
            <p className="text-main-100">
              To ensure our emails get to you add nestshop@mail.nestshop.com to
              your address book.
            </p>
          </div>
          <div className="mt-3 space-y-2 text-center">
            <p className="text-main-100">&copy; 2024 nestfashion.com</p>
            <p className="text-main-100">
              Designed and programmed by SamsteveJR
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
