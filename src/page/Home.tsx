import MobileNav from "@/components/MobileNav";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Home = () => {
  return (
    <>
      <MobileNav />
      <section className="dark:bg-zinc-900 h-screen bg-[url(./src/assets/hero-light.png)] bg-cover bg-center dark:bg-[url(./src/assets/hero-dark.png)]">
        <div className="wrapper justify-center items-center flex flex-col h-full">
          <h1 className="font-bodoni uppercase leading-[130%] -translate-y-6 font-bold text-5xl italic text-stone-700 dark:bg-gradient-to-b dark:from-white bg-clip-text dark:text-transparent relative z-20 dark:to-neutral-400">
            vogue
            <br /> <span className="ml-3">luxury</span> <br /> & Accessories
          </h1>

          <Button className="rounded-full border-2 py-7 absolute bottom-16 left-1/2 -translate-x-1/2 uppercase tracking-wider hover:bg-neutral-900  hover:bg-opacity-20 text-xl px-14 font-tenorsan border-white bg-neutral-900 bg-opacity-20 backdrop-blur-lg dark:text-white">
            Collection
          </Button>

          <div className="vertical-lr absolute left-0 bottom-5 rotate-180">
            <span className="text-orange-600 text-xs font-bold">NEW PICK</span>
            <p className="text-stone-700 text-xs uppercase tracking-wider dark:text-white -mr-1">
              <strong>Black point</strong> ACCOUNT Collection
            </p>
          </div>

          <div className="inline-flex gap-2 absolute bottom-5 left-1/2 -translate-x-1/2">
            <span className="inline-block w-12 bg-white h-2.5 rounded-full"></span>
            <span className="inline-block w-2.5 border-2 border-white h-2.5 rounded-full"></span>
            <span className="inline-block w-2.5 border-2 border-white h-2.5 rounded-full"></span>{" "}
            <span className="inline-block w-2.5 border-2 border-white h-2.5 rounded-full"></span>{" "}
            <span className="inline-block w-2.5 border-2 border-white h-2.5 rounded-full"></span>
          </div>
        </div>
      </section>

      {/* ========= NEW ARRIVALS ========== */}
      <section className="py-10">
        <div className="wrapper">
          {/* SECTION HEADING */}
          <div className="relative">
            <h2 className="text-2xl pl-4 dark:text-white font-tenorsan uppercase tracking-[4px] z-[1] relative text-stone-600">
              New Arrival
            </h2>
            <hr className="inline-block absolute bottom-1 left-0 bg-orange-600 w-[75%] h-3 border-0" />
          </div>

          {/* BORDER DIVIDER */}
          <div className="border-t-2 border-zinc-100 w-full my-5 mx-auto relative">
            <span className="w-1.5 h-1.5 inline-block bg-zinc-100 absolute -top-1 rotate-45"></span>
            <span className="w-1.5 h-1.5 inline-block bg-zinc-100 absolute right-0 -top-1 rotate-45"></span>
          </div>
          <div></div>
        </div>

        <div className="relative mt-3 z-0 bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url(./src/assets/new-arrivals.jpg)] bg-cover bg-center py-20">
          <div className="wrapper">
            <h3 className="text-white text-[32px] translate-x-[10%]">
              New Arrival
            </h3>
            <p className="text-sm text-white translate-x-[40%]">
              10% off Designer brands
            </p>
          </div>

          <div className="inline-flex gap-1 absolute right-5 bottom-5">
            {Array.from({ length: 3 }, (_: any, index: number) => (
              <span
                key={index}
                className={cn(
                  "inline-block w-2.5 bg-white h-2.5 rounded-full",
                  index > 0 && "bg-opacity-35"
                )}
              ></span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
