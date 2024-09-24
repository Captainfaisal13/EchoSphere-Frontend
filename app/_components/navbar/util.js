import ExploreIcon from "../../../public/_assets/svgComponents/exploreIcon";
import HomeIcon from "../../../public/_assets/svgComponents/homeIcon";
import NotificationIcon from "../../../public/_assets/svgComponents/notificationIcon";
import ProfileIcon from "../../../public/_assets/svgComponents/profileIcon";
import SearchIcon from "../../../public/_assets/svgComponents/searchIcon";
import SettingIcon from "../../../public/_assets/svgComponents/settingIcon";

const getIcons = (pathName, title) => {
  switch (title) {
    case "/":
      return (
        <HomeIcon colour={`${pathName !== title ? "#505050" : "#000000"}`} />
      );

    case "/explore":
      return (
        <ExploreIcon colour={`${pathName !== title ? "#505050" : "#000000"}`} />
      );

    case "/search":
      return (
        <SearchIcon colour={`${pathName !== title ? "#505050" : "#000000"}`} />
      );

    case "/notifications":
      return (
        <NotificationIcon
          colour={`${pathName !== title ? "#505050" : "#000000"}`}
        />
      );

    case "/profile":
      return (
        <ProfileIcon colour={`${pathName !== title ? "#505050" : "#000000"}`} />
      );

    case "/settings":
      return (
        <SettingIcon colour={`${pathName !== title ? "#505050" : "#000000"}`} />
      );

    default:
  }
};

const handleNavClick = (idx, setCurrrentSelectedIcon) => {
  setCurrrentSelectedIcon(idx);
};

export { getIcons, handleNavClick };
