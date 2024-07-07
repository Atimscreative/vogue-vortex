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
    <div>
      <div className="wrapper">
        <h2 className="font-tenorsan text-lg tracking-wider">@Trending</h2>

        <div>
          <EachElement
            of={hashtags}
            render={(hash: string, index: number) => (
              <span
                key={index}
                className="text-main-500 inline-block rounded-full bg-[#F9F9F9] px-2.5 py-2 font-tenorsan"
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
