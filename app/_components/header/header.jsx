import Link from "next/link";
import BurgerIcon from "../../../public/_assets/svgComponents/burgerIcon";
import SearchIcon from "../../../public/_assets/svgComponents/searchIcon";
import React from "react";

const Header = ({ expandNavbar, setExpandNavbar }) => {
  return (
    <div className="fixed top-0 left-0 z-20 w-full flex md:hidden justify-between py-2 px-4 bg-bg-0">
      <button
        className="my-auto fill-text-1"
        onClick={() => setExpandNavbar(true)}
      >
        <BurgerIcon height="22px" width="22px" />
      </button>
      <Link href="/" className="text-3xl font-extrabold text-text-1">
        eO
      </Link>
      <Link href="/search" className="my-auto stroke-text-1">
        <SearchIcon height="22px" width="22px" strokeWidth="2.5" />
      </Link>
    </div>
  );
};

export default Header;
