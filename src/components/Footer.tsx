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

const links = ["Support", "Dealers", "Company", "Products", "Blogs"];

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="wrapper">
        <div className="mx-auto flex w-[200px] flex-col items-center space-y-2 divide-y-2">
          <EachElement
            of={links}
            render={(link: string, index: number) => (
              <Link
                to="/"
                key={index}
                className="text-main-100 block w-full pt-2 text-center font-tenorsan uppercase"
              >
                {link}
              </Link>
            )}
          />
        </div>

        <div className="mt-6 flex justify-center gap-3">
          <span className="border-main-100 text-main-100 inline-flex h-10 w-10 items-center justify-center rounded-full border-2">
            <BsInstagram size={20} />
          </span>{" "}
          <span className="border-main-100 text-main-100 inline-flex h-10 w-10 items-center justify-center rounded-full border-2">
            <BsFacebook size={20} />
          </span>
          <span className="border-main-100 text-main-100 inline-flex h-10 w-10 items-center justify-center rounded-full border-2">
            <BsTwitterX size={20} />
          </span>
          <span className="border-main-100 text-main-100 inline-flex h-10 w-10 items-center justify-center rounded-full border-2">
            <BsPinterest size={20} />
          </span>
          <span className="border-main-100 text-main-100 inline-flex h-10 w-10 items-center justify-center rounded-full border-2">
            <BsTiktok size={20} />
          </span>
        </div>

        <div className="mt-6">
          <h3 className="text-main-100 text-center font-tenorsan uppercase">
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

        <div className="mt-7">
          <div className="divide-main-100 mt-3 flex items-center justify-center gap-3 divide-x-2">
            <Link to="/" className="text-main-100 underline">
              Privacy Policy
            </Link>
            <Link to="/" className="text-main-100 pl-3 underline">
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
