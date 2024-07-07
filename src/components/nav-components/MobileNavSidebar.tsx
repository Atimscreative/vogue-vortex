import { cn } from "@/lib/utils";
import EachElement from "@/utils/EachElement";
import { useState } from "react";
import { BsX } from "react-icons/bs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Link } from "react-router-dom";
import { fashion } from "@/utils/data";
import {
  CallIcon,
  Location01Icon,
  Sun02Icon,
  Moon02Icon,MultiplicationSignIcon
} from "hugeicons-react";
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTiktok,
  BsTwitterX,
} from "react-icons/bs";
import { useTheme } from "@/context/theme-provider";

type Props = {
  showModal: boolean;
  setShowModal: any;
};

const tabs = ["women", "men", "native", "kids"];

const MobileNavSidebar: React.FC<Props> = ({ showModal, setShowModal }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [choosenTab, setChoosenTab] = useState(tabs[0]);
  const { theme, setTheme } = useTheme();

  console.log(activeTab);

  return (
    <aside
      className={cn(
        "fixed -left-full top-0 z-50 h-full w-full bg-white p-4 duration-500 dark:bg-zinc-900",
        showModal && "left-0",
      )}
    >
      <span
        className="text-main-500 inline-block cursor-pointer"
        onClick={() => setShowModal(false)}
      >
        <MultiplicationSignIcon size={32} />
      </span>

      <div></div>

      <Tabs defaultValue="women" className="mt-6 w-full">
        <TabsList className="relative grid h-10 w-full grid-cols-4 justify-between gap-y-3 rounded-none border-b bg-transparent pb-2">
          <EachElement
            of={tabs}
            render={(tab: string, index: number) => (
              <TabsTrigger
                key={index}
                value={tab}
                style={{ boxShadow: "none" }}
                onClick={() => {
                  setActiveTab(tab);
                  setChoosenTab(tab);
                }}
                className={cn(
                  "text-main-500 font-tenorsan text-base uppercase tracking-wide text-opacity-50 shadow-none ring-0 duration-300",
                  activeTab === tab && "text-opacity-100",
                )}
              >
                {tab}
              </TabsTrigger>
            )}
          />
          <span
            className={cn(
              "border-main-100 absolute bottom-0 left-0 inline-block w-[100px] border-t-2 duration-300",
              activeTab === choosenTab &&
                `left-[${tabs.indexOf(choosenTab) * 25}%]`,
            )}
          >
            <span className="bg-main-100 absolute -top-1.5 left-1/2 inline-block h-2 w-2 -translate-x-1/2 rotate-45"></span>
          </span>
        </TabsList>
        {tabs?.map((tab: string, index: number) => (
          <TabsContent key={index} value={tab}>
            {fashion[tab]?.map((fas: any, fasIndex: number) => (
              <Accordion
                type="single"
                collapsible
                key={fasIndex}
                className="w-full divide-y-0"
              >
                <AccordionItem value="item-1" className="border-0">
                  <AccordionTrigger className="text-main-400 font-tenorsan text-base capitalize hover:no-underline">
                    {fas?.category}
                  </AccordionTrigger>
                  <EachElement
                    of={fas?.subcategories}
                    render={(sub: any, subIndex: number) => (
                      <AccordionContent key={subIndex}>
                        <Link to="/" className="pl-6 font-tenorsan text-base">
                          {sub}
                        </Link>
                      </AccordionContent>
                    )}
                  />
                </AccordionItem>
              </Accordion>
            ))}
          </TabsContent>
        ))}
      </Tabs>
      <div className="flex flex-col gap-y-3">
        <div className="text-main-500 inline-flex items-center gap-2">
          <span>
            <CallIcon className="-rotate-90" />
          </span>
          <span className="font-tenorsan">(903) 951-8033</span>
        </div>
        <div className="text-main-500 inline-flex items-center gap-2">
          <span>
            <Location01Icon />
          </span>
          <span className="font-tenorsan">Our store near you</span>
        </div>
      </div>
      <div className="relative mx-auto my-8 w-full border-t-2 border-zinc-100">
        <span className="absolute -top-1 inline-block h-1.5 w-1.5 rotate-45 bg-zinc-100"></span>
        <span className="absolute -top-1 right-0 inline-block h-1.5 w-1.5 rotate-45 bg-zinc-100"></span>
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

      <div className="absolute bottom-5 right-5 inline-flex h-auto gap-2 rounded-full bg-[#DBCEC7] p-1">
        <span
          onClick={() => setTheme("light")}
          className="dark:text-main-400 relative z-10 inline-flex cursor-pointer items-center gap-2 rounded-full px-3 py-2"
        >
          Light <Sun02Icon size={24} />
        </span>
        <span
          onClick={() => setTheme("dark")}
          className="dark:text-main-400 relative z-10 inline-flex cursor-pointer items-center gap-2 rounded-full px-3 py-2"
        >
          Dark <Moon02Icon size={24} />
        </span>

        <span
          className={cn(
            "pointer-events-none absolute top-1/2 inline-block h-10 w-[99px] -translate-y-1/2 cursor-pointer rounded-full bg-white duration-500",
            theme === "dark" ? "left-[92px]" : "left-1",
          )}
        ></span>
      </div>
    </aside>
  );
};

export default MobileNavSidebar;
