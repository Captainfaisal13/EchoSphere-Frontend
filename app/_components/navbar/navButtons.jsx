import React from "react";
import navbarList from "../../data/navbarList.json";
const NavButtons = ({ currentSelectIcon, getIcons, handleNavClick }) => {
  return (
    <ul className="">
      {navbarList.map(({ title }, idx) => {
        return (
          <li
            className="py-3 px-4 hover:bg-[#E6E6E6]"
            key={idx}
            onClick={() => handleNavClick(idx)}
          >
            <button className="flex gap-2">
              <div className="w-5 h-5 text-[#505050]">{getIcons(idx)}</div>
              <p
                className={`text-sm ${
                  currentSelectIcon === idx
                    ? "text-[#000000]"
                    : "text-[#505050]"
                }`}
              >
                {title}
              </p>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default NavButtons;
