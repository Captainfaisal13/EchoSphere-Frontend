import React from "react";
import NavButtons from "./navButtons";
import EchoButton from "./echoButton";
import CloseIcon from "../../../public/_assets/svgComponents/closeIcon";

const Navbar = ({ expandNavbar, setExpandNavbar }) => {
  return (
    <nav
      className={`bg-bg-0 fixed md:sticky z-30 h-full top-0 left-0 md:block w-64 md:w-24 lg:w-60 flex-col gap-8 transition-transform md:translate-x-0 ${
        expandNavbar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col min-h-screen justify-between">
        <div>
          <div className="py-4 px-4 md:px-0">
            <div className="flex justify-between text-center text-2xl font-extrabold">
              <h2 className="block md:hidden lg:block md:mx-auto text-text-1">
                echosphere
              </h2>
              <h2 className="hidden md:block lg:hidden mx-auto">E</h2>
              <button
                className="text-xs font-thin block md:hidden fill-text-1"
                onClick={() => setExpandNavbar(!expandNavbar)}
              >
                <CloseIcon />
              </button>
            </div>
          </div>
          <NavButtons />
        </div>
        <div className="hidden md:block">
          <EchoButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// "#292D32"
