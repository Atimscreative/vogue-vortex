import { Button } from "./ui/button";

const HeroBanner = () => {
  return (
    <section className="h-screen bg-[url(./src/assets/hero-light.png)] bg-cover bg-center dark:bg-zinc-900 dark:bg-[url(./src/assets/hero-dark.png)]">
      <div className="wrapper flex h-full flex-col items-center justify-center">
        <h1 className="text-main-200 relative z-20 -translate-y-6 bg-clip-text font-bodoni text-5xl font-bold uppercase italic leading-[130%] dark:bg-gradient-to-b dark:from-white dark:to-neutral-400 dark:text-transparent">
          vogue
          <br /> <span className="ml-3">luxury</span> <br /> & Accessories
        </h1>

        <Button className="absolute bottom-16 left-1/2 -translate-x-1/2 rounded-full border-2 border-white bg-neutral-900 bg-opacity-20 px-14 py-7 font-tenorsan text-xl uppercase tracking-wider backdrop-blur-lg hover:bg-neutral-900 hover:bg-opacity-20 dark:text-white">
          Collection
        </Button>

        <div className="vertical-lr absolute bottom-5 left-0 rotate-180">
          <span className="text-xs font-bold text-orange-600">NEW PICK</span>
          <p className="text-main-200 -mr-1 text-xs uppercase tracking-wider dark:text-white">
            <strong>Black point</strong> ACCOUNT Collection
          </p>
        </div>

        <div className="absolute bottom-5 left-1/2 inline-flex -translate-x-1/2 gap-2">
          <span className="inline-block h-2.5 w-12 rounded-full bg-white"></span>
          <span className="inline-block h-2.5 w-2.5 rounded-full border-2 border-white"></span>
          <span className="inline-block h-2.5 w-2.5 rounded-full border-2 border-white"></span>{" "}
          <span className="inline-block h-2.5 w-2.5 rounded-full border-2 border-white"></span>{" "}
          <span className="inline-block h-2.5 w-2.5 rounded-full border-2 border-white"></span>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
