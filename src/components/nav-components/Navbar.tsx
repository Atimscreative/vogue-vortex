import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <>
      <header className="hidden lg:block">
        <div className="wrapper"></div>
      </header>
      <MobileNav />
    </>
  );
};

export default Navbar;
