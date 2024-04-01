"use client";
import ExploreIcon from "@/public/_assets/svgComponents/exploreIcon";
import HomeIcon from "@/public/_assets/svgComponents/homeIcon";
import NotificationIcon from "@/public/_assets/svgComponents/notificationIcon";
import ProfileIcon from "@/public/_assets/svgComponents/profileIcon";
import SearchIcon from "@/public/_assets/svgComponents/searchIcon";
import SettingIcon from "@/public/_assets/svgComponents/settingIcon";
import React, { useState } from "react";
import NavButtons from "./navButtons";

const Navbar = () => {
  const [currentSelectIcon, setCurrrentSelectedIcon] = useState(0);

  const getIcons = (index) => {
    switch (index) {
      case 0:
        return (
          <HomeIcon
            colour={`${currentSelectIcon !== 0 ? "#505050" : "#000000"}`}
          />
        );
        break;
      case 1:
        return (
          <ExploreIcon
            colour={`${currentSelectIcon !== 1 ? "#505050" : "#000000"}`}
          />
        );

        break;
      case 2:
        return (
          <SearchIcon
            colour={`${currentSelectIcon !== 2 ? "#505050" : "#000000"}`}
          />
        );

        break;
      case 3:
        return (
          <NotificationIcon
            colour={`${currentSelectIcon !== 3 ? "#505050" : "#000000"}`}
          />
        );

        break;
      case 4:
        return (
          <ProfileIcon
            colour={`${currentSelectIcon !== 4 ? "#505050" : "#000000"}`}
          />
        );

        break;
      case 5:
        return (
          <SettingIcon
            colour={`${currentSelectIcon !== 5 ? "#505050" : "#000000"}`}
          />
        );

        break;

      default:
        break;
    }
  };

  const handleNavClick = (idx) => {
    setCurrrentSelectedIcon(idx);
  };

  return (
    <nav className="w-[22vw] flex-col gap-8">
      <div className="py-4">
        <h3 className="text-center text-[1.65rem] font-extrabold">echospere</h3>
      </div>
      <NavButtons
        currentSelectIcon={currentSelectIcon}
        getIcons={getIcons}
        handleNavClick={handleNavClick}
      />
    </nav>
  );
};

export default Navbar;

// "#292D32"
