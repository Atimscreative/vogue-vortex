import { cn } from "@/lib/utils";
import EachElement from "@/utils/EachElement";
import { useState } from "react";

const tabs = ["Everything", "Jackets", "Blazers", "Dresses", "T-Shirts"];

const ProductCategoryTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="w-full overflow-x-auto">
        <div className="flex items-center space-x-4">
          <EachElement
            of={tabs}
            render={(tab: string, index: number) => (
              <span
                onClick={() => setActiveTab(index)}
                key={index}
                className={cn(
                  "font-circular inline-block cursor-pointer whitespace-nowrap rounded-full bg-transparent px-5 py-2 capitalize duration-300",
                  activeTab === index && "bg-main-100 text-white",
                )}
              >
                {tab}
              </span>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default ProductCategoryTabs;
