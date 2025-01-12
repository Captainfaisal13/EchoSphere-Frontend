import React from "react";
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
import BookmarkIconNav from "../../../public/_assets/svgComponents/bookmarkIconNav";

const getIcons = (pathName, title) => {
  switch (title) {
    case "/":
      return <HomeIcon />;

    case "/explore":
      return <ExploreIcon />;

    case "/search":
      return <SearchIcon />;

    case "/notifications":
      return <NotificationIcon />;

    case "/bookmark":
      return <BookmarkIconNav />;

    case "/profile":
      return (
        <ProfileIcon
        // colour={`${!pathName.startsWith(title) ? "#505050" : "#000000"}`}
        />
      );

    case "/settings":
      return <SettingIcon />;

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

const getFormattedContent = (content) => {
  return content.split("\n").map((line, index) => {
    return (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    );
  });
};
export const createImage = (url) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "anonymous"; // Enable CORS if the image is from a different domain
    image.onload = () => resolve(image);
    image.onerror = (error) => reject(error);
    image.src = url;
  });
};

const getCroppedImg = async (imageSrc, crop) => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = crop.width;
  canvas.height = crop.height;

  ctx.drawImage(
    image,
    crop.x,
    crop.y,
    crop.width,
    crop.height,
    0,
    0,
    crop.width,
    crop.height
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error("Canvas is empty"));
        return;
      }
      blob.name = "cropped.jpeg";
      resolve(blob);
    }, "image/jpeg");
  });
};

export {
  getIcons,
  handleNavClick,
  formatTimeAgo,
  formatFullDate,
  getFormattedContent,
  getCroppedImg,
};
