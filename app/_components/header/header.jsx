import BurgerIcon from "../../../public/_assets/svgComponents/burgerIcon";
import SearchIcon from "../../../public/_assets/svgComponents/searchIcon";
import React from "react";

const Header = ({ expandNavbar, setExpandNavbar }) => {
  return (
    <div className="fixed top-0 left-0 z-20 w-full flex md:hidden justify-between py-2 px-4 bg-white">
      <button className="my-auto" onClick={() => setExpandNavbar(true)}>
        <BurgerIcon />
      </button>
      <div className="text-2xl font-extrabold">E</div>
      <button className="relative w-6 h-6 my-auto">
        <SearchIcon colour="#414141" strokeWidth="2.5" />
      </button>
    </div>
  );
};

export default Header;
