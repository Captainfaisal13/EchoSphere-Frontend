import ExploreIcon from "../../../public/_assets/svgComponents/exploreIcon";
import HomeIcon from "../../../public/_assets/svgComponents/homeIcon";
import NotificationIcon from "../../../public/_assets/svgComponents/notificationIcon";
import ProfileIcon from "../../../public/_assets/svgComponents/profileIcon";
import SearchIcon from "../../../public/_assets/svgComponents/searchIcon";
import SettingIcon from "../../../public/_assets/svgComponents/settingIcon";
import {
  differenceInSeconds,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  format,
} from "date-fns";

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
        <ProfileIcon
          colour={`${!pathName.startsWith(title) ? "#505050" : "#000000"}`}
        />
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

const formatTimeAgo = (date) => {
  const now = new Date();
  const diffInSeconds = differenceInSeconds(now, date);

  if (diffInSeconds < 60) {
    return `${diffInSeconds}s`; // Seconds
  }

  const diffInMinutes = differenceInMinutes(now, date);
  if (diffInMinutes < 60) {
    return `${diffInMinutes}m`; // Minutes
  }

  const diffInHours = differenceInHours(now, date);
  if (diffInHours < 24) {
    return `${diffInHours}h`; // Hours
  }

  const diffInDays = differenceInDays(now, date);
  if (diffInDays < 30) {
    return `${diffInDays}d`; // Days
  }

  const diffInMonths = differenceInMonths(now, date);
  if (diffInMonths < 12) {
    return `${diffInMonths}mo`; // Months
  }

  const diffInYears = differenceInYears(now, date);
  return `${diffInYears}y`; // Years
};

const formatFullDate = (date) => {
  return format(date, "MMMM d, yyyy 'at' hh:mm a");
};

export { getIcons, handleNavClick, formatTimeAgo, formatFullDate };
