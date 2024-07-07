import slugify from "slugify";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { RiVerifiedBadgeFill } from "react-icons/ri";

type CardProps = {
  data: any;
};

const slug = (value: string) => slugify(value, { lower: true });

const ProductCard: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="">
      <div className="relative w-full">
        <img
          src={data?.images[0]}
          height="100%"
          width="100%"
          className="h-[200px] w-full rounded-2xl object-cover object-[top_center]"
        />

        <span className="inline- absolute bottom-0 left-0 rounded-lg border-2 border-main-100 bg-white px-2.5 py-1 font-circular text-main-100 ring-8 ring-white">
          ${data?.price}
        </span>

        <Link
          to={`/products/${slug(data?.name)}`}
          className="absolute right-0 top-0 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-[12px] rounded-bl-[15px] border-2 border-main-100 bg-transparent bg-white text-main-100 ring-8 ring-white hover:bg-main-100 hover:text-white"
        >
          <GoArrowUpRight size={24} />
        </Link>
      </div>

      <div className="relative mt-2">
        <h3 className="font-circular text-main-100">{data?.name}</h3>
        <div className="flex items-center gap-2">
          <span className="inline-block h-5 w-5 rounded-full border-2 border-main-100"></span>
          <span className="font-circular text-main-100">{data?.brand}</span>
          <span>
            <RiVerifiedBadgeFill color="#00D566" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

{
  /* <div className="relative w-min">
        <svg
          width="160"
          height="170"
          xmlns="http://www.w3.org/2000/svg"
          fill="#948775"
        >
          <defs>
            <clipPath id="mask">
              <path d="M26.6622 2.03809C14.1462 2.03809 4 12.1843 4 24.7003V108.634C4 121.15 14.1462 131.297 26.6622 131.297H56.6147C61.2529 131.297 65.0129 135.057 65.0129 139.695V139.695C65.0129 152.211 75.1592 162.357 87.6752 162.357H135.338C147.854 162.357 158 152.211 158 139.695V62.3556C158 49.8396 147.854 39.6934 135.338 39.6934H131.105C122.825 39.6934 116.112 32.9807 116.112 24.7003V24.7003C116.112 12.1843 105.966 2.03809 93.4498 2.03809H26.6622Z" />
            </clipPath>
          </defs>

          <image
            clipPath="url(#mask)"
            href={data?.images[0]}
            x="0"
            y="-25"
            height="100%"
            width="100%"
            className="scale- h-[350px] w-[200px]"
          />
        </svg>
        <span className="font-circular absolute bottom-0 left-0 inline-block rounded-lg border-2 border-main-100 px-2.5 py-1 text-main-100">
          ${data?.price}
        </span>

        <Link
          to={`/products/${slug(data?.name)}`}
          className="absolute right-0 top-0 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-[12px] rounded-bl-[15px] border-2 border-main-100 bg-transparent text-main-100 hover:bg-main-100 hover:text-white"
        >
          <GoArrowUpRight size={24} />
        </Link>
      </div> */
}
