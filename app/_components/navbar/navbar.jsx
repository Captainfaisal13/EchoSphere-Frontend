import React from "react";
import NavButtons from "./navButtons";

const Navbar = () => {
  return (
    <nav className="w-[22vw] flex-col gap-8">
      <div className="py-4">
        <h3 className="text-center text-[1.65rem] font-extrabold">
          echosphere
        </h3>
      </div>
      <NavButtons />
    </nav>
  );
};

export default Navbar;

// "#292D32"
