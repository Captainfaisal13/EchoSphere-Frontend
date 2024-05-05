import React from "react";
import NavButtons from "./navButtons";
import Image from "next/image";
import EchoButton from "./echoButton";

const Navbar = () => {
  return (
    <nav className="w-[20vw] flex-col gap-8">
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="py-4">
            <h3 className="text-center text-[1.65rem] font-extrabold">
              echosphere
            </h3>
          </div>
          <NavButtons />
        </div>
        <EchoButton />
      </div>
    </nav>
  );
};

export default Navbar;

// "#292D32"
