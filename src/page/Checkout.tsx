import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { ShoppingBag } from "@/icons/icons";
import { useLocation, useNavigate } from "react-router-dom";
import MasterCard from "@/assets/mastercard.svg";
import Visa from "@/assets/visa.svg";
import Product1 from "@/assets/product-1.jpg";
import Product2 from "@/assets/product-2.jpg";
import Product4 from "@/assets/product-4.jpg";
import SuccessPaymentModal from "@/components/checkout-comps/SuccessPaymentModal";
import EachElement from "@/utils/EachElement";
import { cartItems } from "@/utils/data";
import CartItem from "@/components/checkout-comps/CartItem";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Add } from "iconsax-react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import formatCreditCardNumber, { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";


const steps = ["information", "payment", "summary"];

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tab = queryParams.get("tab");
  const [activeTab, setActiveTab] = useState("");

  const handleSteps = (val: string) => {
    navigate(`/checkout?tab=${val?.toLowerCase()}`);
    setActiveTab(val?.toLowerCase());
    window.scrollTo(0, 0);
  };

  function displaySteps(tab: any) {
    switch (tab?.toLowerCase()) {
      case "information":
        return <Information handleSteps={handleSteps} />;
      case "payment":
        return <Payment handleSteps={handleSteps} />;
      case "summary":
        return <Summary />;

      default:
        return <Information />;
    }
  }

  useEffect(() => {
    setActiveTab(tab ? tab : "");
  }, [tab]);

  return (
    <div>
      <div className="mt-[80px] lg:mt-[87px]" />
      <div className="mb-8 hidden items-center justify-evenly gap-8 border-b py-4 lg:flex">
        <EachElement
          of={steps}
          render={(item: string, index: number) => (
            <div
              className="inline-flex cursor-pointer items-center gap-3"
              onClick={() => handleSteps(item)}
              key={index}
            >
              <span
                className={cn(
                  "inline-flex h-8 w-8 items-center justify-center rounded-full border bg-transparent font-tenorsan text-neutral-400 duration-300",
                  activeTab === item && "bg-neutral-950",
                )}
              >
                {index + 1}
              </span>
              <span
                className={cn(
                  "font-tenorsan text-lg uppercase text-neutral-400 duration-300",
                  activeTab === item && "text-neutral-950",
                )}
              >
                {item}
              </span>
            </div>
          )}
        />
      </div>
      <div className="wrapper py-6 pb-36 lg:pb-44">
        <div className="md:mx-auto md:w-[80%]">{displaySteps(tab)}</div>
      </div>
    </div>
  );
};

export default Checkout;

const Information = ({ handleSteps }: { handleSteps?: any }) => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>();

  return (
    <>
      <div className="relative lg:hidden">
        <div className="flex flex-col items-center justify-center">
          <h2 className="inline-flex font-tenorsan text-lg uppercase tracking-[4px] text-neutral-950">
            Checkout
          </h2>
          {/* BORDER DIVIDER */}
          {
            <div className="relative mx-auto mb-10 mt-2 w-[180px] border-t-2 border-zinc-100">
              <span className="absolute -top-1 inline-block h-1.5 w-1.5 rotate-45 bg-zinc-100"></span>
              <span className="absolute -top-1 right-0 inline-block h-1.5 w-1.5 rotate-45 bg-zinc-100"></span>
            </div>
          }
        </div>
        <div>
          <h3 className="font-tenorsan text-lg">
            Select from saved or add new.
          </h3>
          <div className="mt-5 space-y-4">
            <div className="flex w-full items-center gap-4 rounded-lg border bg-neutral-50 p-3">
              <span>
                <Checkbox
                  id="address1"
                  name="address"
                  className="h-6 w-6 rounded-full"
                  checked
                />
              </span>
              <div className="flex flex-grow items-center justify-between">
                <div>
                  <h3 className="font-tenorsan font-semibold">SamsteveJR</h3>
                  <p className="font-tenorsan">Lagos, Nigeria</p>
                  <p className="font-tenorsan">123 Main Street, Apt 4B</p>
                </div>
                <span className="cursor-pointer">
                  <MdOutlineModeEditOutline size={24} color="#666" />
                </span>
              </div>
            </div>
            <div className="flex w-full items-center gap-4 rounded-lg border p-3">
              <span>
                <Checkbox
                  id="address2"
                  name="address"
                  className="h-6 w-6 rounded-full"
                />
              </span>
              <div className="flex flex-grow items-center justify-between">
                <div>
                  <h3 className="font-tenorsan font-semibold">
                    Abraham Joseph
                  </h3>
                  <p className="font-tenorsan">Cali, U.S.A.</p>
                  <p className="font-tenorsan">123 Main Street, Apt 4B</p>
                </div>
                <span>
                  <MdOutlineModeEditOutline size={24} color="#666" />
                </span>
              </div>
            </div>
            <Button
              size="lg"
              variant="outline"
              className="h-auto w-full gap-4 py-3 text-main-400 hover:bg-main-400 hover:text-white"
            >
              <span>
                <Add size={24} />
              </span>
              <span className="font-tenorsan text-lg capitalize">Add new</span>
            </Button>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center space-x-2">
            <Label htmlFor="airplane-mode" className="font-tenorsan text-xl">
              Schedule Delivery
            </Label>
            <Switch className="origin-left scale-110" id="airplane-mode" />
          </div>

          <div className="grid gap-3">
            <h3 className="font-tenorsan text-lg">
              Schedule a convenient delivery date{" "}
            </h3>

            <div>
              <Label htmlFor="date" className="mb-2 inline-block font-tenorsan">
                Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "h-auto w-full justify-start py-3 text-left font-tenorsan font-normal",
                      !date && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label htmlFor="note" className="mb-2 inline-block font-tenorsan">
                Note
              </Label>
              <Input
                placeholder="Type a note"
                className="h-auto py-3 font-tenorsan placeholder:text-neutral-500"
              />
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 w-full bg-white shadow-[0_0_30px_-10px_rgba(0,0,0,0.2)]">
          <div className="mx-4 mb-4 flex justify-between pt-3">
            <span className="font-tenorsan text-xl text-main-400">Total</span>
            <span className="font-tenorsan text-xl text-[#DD8560]">$240</span>
          </div>
          <Button
            onClick={() => {
              navigate(`/checkout?tab=${encodeURIComponent("payment")}`);
            }}
            size="lg"
            className="h-16 w-full cursor-pointer gap-5 rounded-none py-3"
          >
            <span>
              <ShoppingBag className="text-white" />
            </span>
            <span className="font-tenorsan uppercase text-white">
              Place order
            </span>
          </Button>
        </div>
      </div>

      <div className="hidden gap-7 lg:grid">
        <EachElement
          of={cartItems}
          render={(data: any, index: number) => {
            return <CartItem data={data} key={index} />;
          }}
        />

        <div className="grid grid-cols-[200px_1fr]">
          <div className="col-[2] mt-4 flex w-[90%] flex-wrap items-center justify-between justify-self-end border-t pt-4">
            <span className="font-tenorsan text-xl uppercase tracking-[4px]">
              Sub Total{" "}
            </span>
            <span className="font-tenorsan text-xl uppercase tracking-[4px] text-main-100">
              $749
            </span>

            <Button
              onClick={() => handleSteps("payment")}
              size="lg"
              className="mt-4 h-14 w-full cursor-pointer gap-5 rounded-none"
            >
              <span>
                <ShoppingBag className="text-white" />
              </span>
              <span className="font-tenorsan text-xl uppercase text-white">
                Buy Now
              </span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const Payment = ({ handleSteps }: { handleSteps?: any }) => {
  const [cardNumber, setCardNumber] = useState("");
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>();

  const handleInputChange = (e: any) => {
    let value = formatCreditCardNumber(e.target.value);

    setCardNumber(value);
  };

  return (
    <>
      <div className="lg:hidden">
        <div className="flex flex-col items-center justify-center">
          <h2 className="inline-flex font-tenorsan text-lg uppercase tracking-[4px] text-neutral-950">
            Payment
          </h2>
          {/* BORDER DIVIDER */}
          {
            <div className="relative mx-auto mb-10 mt-2 w-[180px] border-t-2 border-zinc-100">
              <span className="absolute -top-1 inline-block h-1.5 w-1.5 rotate-45 bg-zinc-100"></span>
              <span className="absolute -top-1 right-0 inline-block h-1.5 w-1.5 rotate-45 bg-zinc-100"></span>
            </div>
          }
        </div>

        {/* PAYMENT TYPES */}
        <div>
          <h3 className="font-tenorsan text-lg"> Payment Options</h3>
          <p className="font-tenorsan">
            Choose any of the payment method to complete your purchase.
          </p>
          <div className="mt-5 space-y-4">
            <div className="flex w-full items-center gap-4 rounded-lg border bg-neutral-50 p-3 py-5">
              <span>
                <Checkbox
                  id="address1"
                  name="address"
                  className="h-6 w-6 rounded-full border-neutral-500"
                  checked
                />
              </span>
              <div className="flex flex-grow items-center justify-between">
                <div>
                  <h3 className="font-tenorsan font-semibold">Credit Card</h3>
                  <p className="font-tenorsan text-sm">
                    We accept mastercard, Visa and American Express
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center gap-4 rounded-lg border p-3 py-5">
              <span>
                <Checkbox
                  id="address1"
                  name="address"
                  className="h-6 w-6 rounded-full border border-neutral-500"
                />
              </span>
              <div className="flex flex-grow items-center justify-between">
                <div>
                  <h3 className="font-tenorsan font-semibold">PayPal </h3>
                  <p className="font-tenorsan text-sm">
                    securely complete your purchase with paypal.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center gap-4 rounded-lg border p-3 py-5">
              <span>
                <Checkbox
                  id="address1"
                  name="address"
                  className="h-6 w-6 rounded-full border-neutral-500"
                />
              </span>
              <div className="flex flex-grow items-center justify-between">
                <div>
                  <h3 className="font-tenorsan font-semibold">ApplePay</h3>
                  <p className="font-tenorsan text-sm">
                    securely complete your purchase with Applepay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARDS */}
        <div className="mt-4">
          <h3 className="font-tenorsan text-lg">Saved Cards</h3>

          <div className="mt-5 space-y-4">
            <div className="flex w-full items-center gap-4 rounded-lg border bg-neutral-50 p-3 py-5">
              <span>
                <Checkbox
                  id="address1"
                  name="address"
                  className="h-6 w-6 rounded-full border-neutral-500"
                  checked
                />
              </span>
              <div className="flex flex-grow items-center justify-between">
                <div>
                  <h3 className="font-tenorsan text-2xl font-medium">
                    **** **** 8937
                  </h3>
                  <p className="font-tenorsan">Samuel Stepenson</p>
                </div>
                <div className="mr-2 h-11 w-[72px] overflow-hidden rounded-lg border p-2 px-4">
                  <img src={MasterCard} alt="mastercard-icon" />
                </div>
              </div>
            </div>
            <div className="flex w-full items-center gap-4 rounded-lg border p-3 py-5">
              <span>
                <Checkbox
                  id="address1"
                  name="address"
                  className="h-6 w-6 rounded-full border border-neutral-500"
                />
              </span>
              <div className="flex flex-grow items-center justify-between">
                <div>
                  <h3 className="font-tenorsan text-2xl font-medium">
                    **** **** 5263
                  </h3>
                  <p className="font-tenorsan">Ikay Joshua</p>
                </div>
                <div className="mr-2 h-11 w-[72px] overflow-hidden rounded-lg border p-2 px-4">
                  <img
                    src={Visa}
                    alt="mastercard-icon"
                    className="h-full w-full scale-150 object-cover"
                  />
                </div>
              </div>
            </div>

            <Button
              size="lg"
              variant="outline"
              className="h-auto w-full gap-4 py-3 text-main-400 hover:bg-main-400 hover:text-white"
            >
              <span>
                <Add size={24} />
              </span>
              <span className="font-tenorsan text-lg capitalize">Add new</span>
            </Button>
          </div>
        </div>

        {/* CARD DETAILS */}
        <div className="mt-4">
          <h3 className="mb-3 font-tenorsan text-lg">Card details</h3>

          <div className="space-y-3">
            <Input
              type="text"
              placeholder="Cardholder name"
              className="h-14 border py-3 text-neutral-500 placeholder:font-tenorsan"
            />

            <div className="relative">
              <Input
                type="text"
                pattern="[0-9]*"
                inputMode="numeric"
                maxLength={19}
                value={cardNumber}
                onChange={handleInputChange}
                placeholder="Card number"
                className="h-14 border py-3 text-neutral-500 placeholder:font-tenorsan"
              />
              <div className="absolute right-0 top-1/2 mr-2 inline-flex h-9 w-[62px] -translate-y-1/2 items-center justify-center overflow-hidden rounded-lg border p-1 px-0">
                <img
                  src={MasterCard}
                  alt="mastercard-icon"
                  className="w-[30px]"
                />
              </div>
            </div>

            <div className="flex w-1/2 gap-4">
              <Input
                type="number"
                maxLength={3}
                placeholder="CVV"
                className="h-14 border py-3 text-neutral-500 placeholder:font-tenorsan"
              />
              <Input
                type="text"
                maxLength={5}
                placeholder="dd/mm"
                pattern=""
                onChange={(e) => e.target.value.replace(/^(\d{2})/, "$1/")}
                className="h-14 border py-3 text-neutral-500 placeholder:font-tenorsan"
              />
            </div>
          </div>
        </div>

        {/* FOOTER BUTTON */}
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-[0_0_30px_-10px_rgba(0,0,0,0.2)]">
          <div className="mx-4 mb-4 flex justify-between pt-3">
            <span className="font-tenorsan text-xl text-main-400">Total</span>
            <span className="font-tenorsan text-xl text-[#DD8560]">$240</span>
          </div>
          <Button
            onClick={() => {
              navigate(`/checkout?tab=${encodeURIComponent("summary")}`);
            }}
            size="lg"
            className="h-16 w-full cursor-pointer gap-5 rounded-none py-3"
          >
            <span>
              <ShoppingBag className="text-white" />
            </span>
            <span className="font-tenorsan uppercase text-white">
              Place order
            </span>
          </Button>
        </div>
      </div>
      <div className="hidden gap-5 lg:grid lg:grid-cols-2">
        <div className="relative">
          <div className="rounded-lg border p-4">
            <h3 className="font-tenorsan text-lg">
              Select from saved or add new.
            </h3>
            <div className="mt-5 space-y-4">
              <div className="flex w-full items-center gap-4 rounded-lg border bg-neutral-50 p-3">
                <span>
                  <Checkbox
                    id="address1"
                    name="address"
                    className="h-6 w-6 rounded-full"
                    checked
                  />
                </span>
                <div className="flex flex-grow items-center justify-between">
                  <div>
                    <h3 className="font-tenorsan font-semibold">SamsteveJR</h3>
                    <p className="font-tenorsan">Lagos, Nigeria</p>
                    <p className="font-tenorsan">123 Main Street, Apt 4B</p>
                  </div>
                  <span className="cursor-pointer">
                    <MdOutlineModeEditOutline size={24} color="#666" />
                  </span>
                </div>
              </div>
              <div className="flex w-full items-center gap-4 rounded-lg border p-3">
                <span>
                  <Checkbox
                    id="address2"
                    name="address"
                    className="h-6 w-6 rounded-full"
                  />
                </span>
                <div className="flex flex-grow items-center justify-between">
                  <div>
                    <h3 className="font-tenorsan font-semibold">
                      Abraham Joseph
                    </h3>
                    <p className="font-tenorsan">Cali, U.S.A.</p>
                    <p className="font-tenorsan">123 Main Street, Apt 4B</p>
                  </div>
                  <span>
                    <MdOutlineModeEditOutline size={24} color="#666" />
                  </span>
                </div>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="h-auto w-full gap-4 py-3 text-main-400 hover:bg-main-400 hover:text-white"
              >
                <span>
                  <Add size={24} />
                </span>
                <span className="font-tenorsan text-lg capitalize">
                  Add new
                </span>
              </Button>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center space-x-2">
              <Label htmlFor="airplane-mode" className="font-tenorsan text-xl">
                Schedule Delivery
              </Label>
              <Switch className="origin-left scale-110" id="airplane-mode" />
            </div>

            <div className="grid gap-3 rounded-lg border p-4 lg:mt-4">
              <h3 className="font-tenorsan text-lg">
                Schedule a convenient delivery date{" "}
              </h3>

              <div>
                <Label
                  htmlFor="date"
                  className="mb-2 inline-block font-tenorsan lg:text-lg lg:text-neutral-700"
                >
                  Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "h-auto w-full justify-start py-3 text-left font-tenorsan font-normal",
                        !date && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label
                  htmlFor="note"
                  className="mb-2 inline-block font-tenorsan lg:text-lg lg:text-neutral-700"
                >
                  Note
                </Label>
                <Textarea
                  id="note"
                  name="note"
                  placeholder="Type a note"
                  className="h-[155px] py-3 font-tenorsan placeholder:text-neutral-500"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          {/* PAYMENT TYPES */}
          <div className="rounded-lg border p-4">
            <h3 className="font-tenorsan text-lg lg:hidden">
              {" "}
              Payment Options
            </h3>
            <p className="font-tenorsan">
              Choose any of the payment method to complete your purchase.
            </p>
            <div className="mt-5 space-y-4">
              <div className="flex w-full items-center gap-4 rounded-lg border bg-neutral-50 p-3 py-5">
                <span>
                  <Checkbox
                    id="address1"
                    name="address"
                    className="h-6 w-6 rounded-full border-neutral-500"
                    checked
                  />
                </span>
                <div className="flex flex-grow items-center justify-between">
                  <div>
                    <h3 className="font-tenorsan font-semibold">Credit Card</h3>
                    <p className="font-tenorsan text-sm">
                      We accept mastercard, Visa and American Express
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center gap-4 rounded-lg border p-3 py-5">
                <span>
                  <Checkbox
                    id="address1"
                    name="address"
                    className="h-6 w-6 rounded-full border border-neutral-500"
                  />
                </span>
                <div className="flex flex-grow items-center justify-between">
                  <div>
                    <h3 className="font-tenorsan font-semibold">PayPal </h3>
                    <p className="font-tenorsan text-sm">
                      securely complete your purchase with paypal.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center gap-4 rounded-lg border p-3 py-5">
                <span>
                  <Checkbox
                    id="address1"
                    name="address"
                    className="h-6 w-6 rounded-full border-neutral-500"
                  />
                </span>
                <div className="flex flex-grow items-center justify-between">
                  <div>
                    <h3 className="font-tenorsan font-semibold">ApplePay</h3>
                    <p className="font-tenorsan text-sm">
                      securely complete your purchase with Applepay.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARDS */}
          <h3 className="mt-4 font-tenorsan text-xl">Payment Option</h3>
          <div className="mt-4 rounded-lg border p-4">
            <h3 className="font-tenorsan text-lg">Saved Cards</h3>

            <div className="mt-5 space-y-4">
              <div className="flex w-full items-center gap-4 rounded-lg border bg-neutral-50 p-3 py-5">
                <span>
                  <Checkbox
                    id="address1"
                    name="address"
                    className="h-6 w-6 rounded-full border-neutral-500"
                  />
                </span>
                <div className="flex flex-grow items-center justify-between">
                  <div>
                    <h3 className="font-tenorsan text-2xl font-medium">
                      **** **** 8937
                    </h3>
                    <p className="font-tenorsan">Samuel Stepenson</p>
                  </div>
                  <div className="mr-2 h-11 w-[72px] overflow-hidden rounded-lg border p-2 px-4">
                    <img src={MasterCard} alt="mastercard-icon" />
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center gap-4 rounded-lg border p-3 py-5">
                <span>
                  <Checkbox
                    id="address1"
                    name="address"
                    className="h-6 w-6 rounded-full border border-neutral-500"
                  />
                </span>
                <div className="flex flex-grow items-center justify-between">
                  <div>
                    <h3 className="font-tenorsan text-2xl font-medium">
                      **** **** 5263
                    </h3>
                    <p className="font-tenorsan">Ikay Joshua</p>
                  </div>
                  <div className="mr-2 h-11 w-[72px] overflow-hidden rounded-lg border p-2 px-4">
                    <img
                      src={Visa}
                      alt="mastercard-icon"
                      className="h-full w-full scale-150 object-cover"
                    />
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                variant="outline"
                className="h-auto w-full gap-4 py-3 text-main-400 hover:bg-main-400 hover:text-white"
              >
                <span>
                  <Add size={24} />
                </span>
                <span className="font-tenorsan text-lg capitalize">
                  Add new
                </span>
              </Button>
            </div>
          </div>

          {/* CARD DETAILS */}
          <div className="mt-4 hidden rounded-lg border p-4">
            <h3 className="mb-3 font-tenorsan text-lg">Card details</h3>

            <div className="space-y-3">
              <Input
                type="text"
                placeholder="Cardholder name"
                className="h-14 border py-3 text-neutral-500 placeholder:font-tenorsan"
              />

              <div className="relative">
                <Input
                  type="text"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  maxLength={19}
                  value={cardNumber}
                  onChange={handleInputChange}
                  placeholder="Card number"
                  className="h-14 border py-3 text-neutral-500 placeholder:font-tenorsan"
                />
                <div className="absolute right-0 top-1/2 mr-2 inline-flex h-9 w-[62px] -translate-y-1/2 items-center justify-center overflow-hidden rounded-lg border p-1 px-0">
                  <img
                    src={MasterCard}
                    alt="mastercard-icon"
                    className="w-[30px]"
                  />
                </div>
              </div>

              <div className="flex w-1/2 gap-4">
                <Input
                  type="number"
                  maxLength={3}
                  placeholder="CVV"
                  className="h-14 border py-3 text-neutral-500 placeholder:font-tenorsan"
                />
                <Input
                  type="text"
                  maxLength={5}
                  placeholder="dd/mm"
                  pattern=""
                  onChange={(e) => e.target.value.replace(/^(\d{2})/, "$1/")}
                  className="h-14 border py-3 text-neutral-500 placeholder:font-tenorsan"
                />
              </div>
            </div>
          </div>

          {/* FOOTER BUTTON */}
          <div className="fixed bottom-0 left-0 flex w-full items-center justify-center bg-white py-5 shadow-[0_0_30px_-10px_rgba(0,0,0,0.2)]">
            <div className="mt-4 flex w-[60%] flex-wrap items-center justify-between justify-self-end border-t pt-4">
              <span className="font-tenorsan text-xl uppercase tracking-[4px]">
                Sub Total{" "}
              </span>
              <span className="font-tenorsan text-xl uppercase tracking-[4px] text-main-100">
                $749
              </span>

              <Button
                onClick={() => handleSteps("summary")}
                size="lg"
                className="mt-4 h-14 w-full cursor-pointer gap-5 rounded-none"
              >
                <span>
                  <ShoppingBag className="text-white" />
                </span>
                <span className="font-tenorsan text-xl uppercase text-white">
                  Buy Now
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Summary = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <>
      <div className="">
        <div className="flex flex-col items-center justify-center lg:hidden">
          <h2 className="inline-flex font-tenorsan text-lg uppercase tracking-[4px] text-neutral-950">
            Summary
          </h2>
          {/* BORDER DIVIDER */}
          {
            <div className="relative mx-auto mb-10 mt-2 w-[180px] border-t-2 border-zinc-100">
              <span className="absolute -top-1 inline-block h-1.5 w-1.5 rotate-45 bg-zinc-100"></span>
              <span className="absolute -top-1 right-0 inline-block h-1.5 w-1.5 rotate-45 bg-zinc-100"></span>
            </div>
          }
        </div>

        <div>
          <h3 className="font-tenorsan text-lg">Your order ID is #2394020.</h3>
          <p className="font-tenorsan text-sm">
            We will send an email to Usmansamuel9939@gmail.com with your order
            confirmation and receipt.
          </p>
        </div>
        <div className="lg:mt-8 lg:grid lg:grid-cols-2 lg:gap-5">
          <div className="mt-6 space-y-3 lg:mt-0">
            <h3 className="font-tenorsan text-lg">Order Information</h3>
            <div className="flex w-full flex-wrap items-center justify-between gap-x-2 gap-y-4 rounded-lg border bg-neutral-50 p-3">
              <h4 className="w-full flex-grow font-tenorsan">Order</h4>
              <div className="relative inline-flex">
                <img
                  src={Product1}
                  alt="product image"
                  className="absolute left-1/2 z-10 h-[40px] w-[40px] -translate-x-1/2 rounded-md object-cover object-center shadow-md"
                />
                <img
                  src={Product2}
                  alt="product image"
                  className="h-[40px] w-[40px] -rotate-45 rounded-md object-cover object-center shadow-md"
                />
                <img
                  src={Product4}
                  alt="product image"
                  className="h-[40px] w-[40px] rotate-45 rounded-md object-cover object-center shadow-md"
                />
              </div>
              <div className="space-y-3">
                <h3 className="font-tenorsan">21WN& 2 Others </h3>
                <div className="inline-flex gap-8 font-tenorsan">
                  <span>Items:</span> <span>3</span>
                </div>
              </div>
              <span className="font-tenorsan">$789.00</span>
            </div>

            <div className="flex w-full items-center gap-4 rounded-lg border bg-neutral-50 p-3">
              <span>
                <Checkbox
                  id="address1"
                  name="address"
                  className="h-6 w-6 rounded-full"
                  checked
                />
              </span>
              <div className="flex flex-grow items-center justify-between">
                <div>
                  <h3 className="font-tenorsan font-semibold">SamsteveJR</h3>
                  <p className="font-tenorsan">Lagos, Nigeria</p>
                  <p className="font-tenorsan">123 Main Street, Apt 4B</p>
                </div>
                <span className="cursor-pointer">
                  <MdOutlineModeEditOutline size={24} color="#666" />
                </span>
              </div>
            </div>

            <div className="space-y-3 rounded-lg border p-4">
              <h3>Payment Summary</h3>

              <div className="flex w-full items-center gap-4">
                <div className="mr-2 h-11 w-[72px] overflow-hidden rounded-lg border p-2 px-4">
                  <img src={MasterCard} alt="mastercard-icon" />
                </div>
                <div className="flex flex-grow items-center justify-between">
                  <div>
                    <h3 className="font-tenorsan text-xl font-medium">
                      **** **** 8937
                    </h3>
                    <p className="font-tenorsan text-sm">Samuel Stepenson</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <ul className="space-y-3 font-tenorsan">
                  <li>Subtotal</li>
                  <li>Shipping</li>
                  <li>Tax</li>
                </ul>
                <ul className="space-y-3 justify-self-end text-right font-tenorsan">
                  <li>$749.00</li>
                  <li>$25.00</li>
                  <li>$5.00</li>
                </ul>
              </div>
              <hr className="my-4 border-0 border-t" />
              <div className="flex justify-between">
                <span className="font-tenorsan">Total</span>
                <span className="font-tenorsan">$779.00</span>
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="mb-3 font-tenorsan text-lg">Recipient Details</h3>

            <div className="space-y-3 rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <span className="font-tenorsan text-neutral-500">Receiver</span>
                <span className="font-tenorsan text-lg">Samuel Stephenson</span>
              </div>

              <h3 className="font-tenorsan text-lg text-neutral-500">
                Contact Info
              </h3>
              <div className="flex items-center justify-between">
                <span className="font-tenorsan text-neutral-500">Email</span>
                <span className="font-tenorsan text-lg">
                  usmansamuel9939@gmail.com
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-tenorsan text-neutral-500">Phone</span>
                <span className="font-tenorsan text-lg">+234 9039518033</span>
              </div>

              <div>
                <h3 className="mb-4 font-tenorsan text-lg text-neutral-500">
                  Shipping Address
                </h3>
                <div className="flex justify-between">
                  <ul className="space-y-3">
                    <li className="font-tenorsan text-neutral-500">City</li>
                    <li className="font-tenorsan text-neutral-500">State</li>
                    <li className="font-tenorsan text-neutral-500">Zip</li>
                    <li className="font-tenorsan text-neutral-500">Country</li>
                  </ul>
                  <ul className="space-y-3 text-right">
                    <li className="font-tenorsan text-lg">Lekki</li>
                    <li className="font-tenorsan text-lg">Lagos</li>
                    <li className="font-tenorsan text-lg">902873</li>
                    <li className="font-tenorsan text-lg">Nigeria</li>
                  </ul>
                </div>

                <div className="mt-5 flex justify-between">
                  <ul className="space-y-3">
                    <li className="font-tenorsan text-neutral-500">Subtotal</li>
                    <li className="font-tenorsan text-neutral-500">Shipping</li>
                    <li className="font-tenorsan text-neutral-500">Tax</li>
                  </ul>
                  <ul className="space-y-3 text-right">
                    <li className="font-tenorsan text-lg">$749.00 </li>
                    <li className="font-tenorsan text-lg">$25.00</li>
                    <li className="font-tenorsan text-lg"> $5.00</li>
                  </ul>
                </div>

                <div className="mt-4 flex items-center justify-between border-t pt-3">
                  <span className="font-tenorsan text-neutral-500">Total</span>
                  <span className="font-tenorsan text-lg">$779.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BUTTON */}
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-[0_0_30px_-10px_rgba(0,0,0,0.2)] lg:hidden">
          <Button
            onClick={() => setIsSuccess(true)}
            size="lg"
            className="h-16 w-full cursor-pointer gap-5 rounded-none py-3"
          >
            <span>
              <ShoppingBag className="text-white" />
            </span>
            <span className="font-tenorsan uppercase text-white">
              Confirm Payment
            </span>
          </Button>
        </div>

        <div className="fixed bottom-0 left-0 flex w-full items-center justify-center bg-white py-5 shadow-[0_0_30px_-10px_rgba(0,0,0,0.2)]">
          <div className="mt-4 flex w-[60%] flex-wrap items-center justify-between justify-self-end border-t pt-4">
            <span className="font-tenorsan text-xl uppercase tracking-[4px]">
              Sub Total{" "}
            </span>
            <span className="font-tenorsan text-xl uppercase tracking-[4px] text-main-100">
              $749
            </span>

            <Button
              onClick={() => setIsSuccess(true)}
              size="lg"
              className="mt-4 h-14 w-full cursor-pointer gap-5 rounded-none"
            >
              <span>
                <ShoppingBag className="text-white" />
              </span>
              <span className="font-tenorsan text-xl uppercase text-white">
                Confirm Order
              </span>
            </Button>
          </div>
        </div>
      </div>

      <SuccessPaymentModal open={isSuccess} close={setIsSuccess} />
    </>
  );
};
