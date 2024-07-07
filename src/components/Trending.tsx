import EachElement from "@/utils/EachElement";

const hashtags = [
  "2024",
  "summer",
  "collection",
  "fall",
  "dress",
  "autumncollection",
  "openfashion",
];

const Trending = () => {
  return (
    <div className="py-10">
      <div className="wrapper">
        <h2 className="mb-5 text-center font-tenorsan text-lg uppercase tracking-widest text-main-100">
          @Trending
        </h2>

        <div className="flex flex-wrap items-center gap-3">
          <EachElement
            of={hashtags}
            render={(hash: string, index: number) => (
              <span
                key={index}
                className="inline-block cursor-pointer rounded-full bg-[#F9F9F9] px-4 py-2 font-tenorsan text-sm text-main-500"
              >
                #{hash}
              </span>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Trending;
