"use client";
import React, { useState } from "react";
import navbarList from "../../data/navbarList.json";
import { getIcons, handleNavClick, icon } from "./util";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavButtons = () => {
  const [currentSelectIcon, setCurrrentSelectedIcon] = useState(0);
  const pathName = usePathname();
  // console.log(pathName);
  return (
    <ul className="">
      {navbarList.map(({ title }, idx) => {
        return (
          <li
            key={idx}
            onClick={() => handleNavClick(idx, setCurrrentSelectedIcon)}
          >
            <Link href={"/" + title.toLowerCase()}>
              <div className="py-3 px-4 md:px-0 lg:px-4 hover:bg-[#E6E6E6]">
                <button className="flex flex-row md:flex-col lg:flex-row gap-2 mx-0 md:mx-auto lg:mx-0">
                  <div className="w-5 h-5 text-[#505050] m-auto">
                    {getIcons(pathName, "/" + title.toLowerCase())}
                  </div>
                  <p
                    className={`text-sm md:text-[10px] lg:text-sm ${
                      pathName === "/" + title.toLowerCase()
                        ? "text-[#000000]"
                        : "text-[#505050]"
                    }`}
                  >
                    {title === "" ? "Home" : title}
                  </p>
                </button>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavButtons;
