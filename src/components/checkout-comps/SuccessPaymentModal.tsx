import Icon from "@/assets/check-success.svg";
import { cn } from "@/lib/utils";
import { TfiClose } from "react-icons/tfi";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

type ModalProps = {
  open: boolean;
  close: any;
};

const SuccessPaymentModal: React.FC<ModalProps> = ({ open, close }) => {
  const navigate = useNavigate();
  const handleclose = () => {
    close(false);
    navigate("/");
  };

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-[1000] flex h-full w-full items-center justify-center bg-black bg-opacity-50 p-4 duration-300",
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0",
      )}
    >
      <div className="relative max-w-[400px] flex-grow bg-white p-6 md:max-w-[500px]">
        <span
          className="absolute right-5 top-5 cursor-pointer"
          onClick={handleclose}
        >
          <TfiClose size={24} />
        </span>
        <h3 className="mt-16 text-center font-tenorsan text-lg uppercase tracking-[4px] text-neutral-950">
          Payment successful
        </h3>

        <span className="mt-6 flex justify-center">
          <img
            src={Icon}
            alt="Success Circle check icon with stars"
            className="w-[150px]"
          />
        </span>

        <div className="mt-5">
          <h3 className="text-center font-tenorsan text-lg font-medium">
            Your payment was success
          </h3>
          <p className="text-center font-tenorsan text-neutral-500">
            Payment ID 15263541
          </p>
        </div>

        {/* BORDER DIVIDER */}
        <div className="relative mx-auto my-8 mb-10 w-[30%] border-t-2 border-zinc-100">
          <span className="absolute -top-1 inline-block h-1.5 w-1.5 rotate-45 bg-zinc-100"></span>
          <span className="absolute -top-1 right-0 inline-block h-1.5 w-1.5 rotate-45 bg-zinc-100"></span>
        </div>

        <div className="flex flex-col items-center gap-20">
          <Button
            variant="link"
            className="w-full border-0 bg-transparent font-tenorsan text-2xl font-medium text-[#FF5E00] shadow-none hover:bg-transparent hover:no-underline"
          >
            Download Receipt
          </Button>

          <Button
            onClick={handleclose}
            variant="outline"
            className="h-auto rounded-none bg-transparent px-4 py-3 font-tenorsan text-xl font-medium uppercase text-main-400 shadow-none hover:bg-transparent"
          >
            Back To Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPaymentModal;
