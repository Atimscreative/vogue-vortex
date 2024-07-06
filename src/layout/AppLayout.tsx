import { ModeToggle } from "@/components/mode-toggle";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <span className="fixed bottom-3 right-2">
        <ModeToggle />
      </span>{" "}
      <Outlet />
    </>
  );
};

export default AppLayout;
