import React from "react";
import { getIcons } from "../../../utils/util";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

const bottomNavbarList = [
  {
    id: 0,
    title: "",
  },
  {
    id: 1,
    title: "Explore",
  },
  {
    id: 2,
    title: "Search",
  },
  {
    id: 3,
    title: "Notifications",
  },
  {
    title: "Profile",
  },
];

const BottomNavbar = () => {
  const pathName = usePathname();
  const { user } = useSelector((state) => state.user);

  return (
    <div className="fixed md:hidden bottom-0 left-0 right-0 bg-bg-0 shadow-md border-t border-t-border-1 z-50">
      <div className="grid grid-cols-5">
        {/* Render the navbar items */}
        {bottomNavbarList.map(({ id, title }) => (
          <a
            key={id}
            href={`/${title.toLowerCase()}`}
            className="text-gray-600 hover:text-blue-500 p-4"
          >
            <div
              className={`w-5 h-5 text-text-8 m-auto relative ${
                pathName === "/" + title.toLowerCase() ||
                (title === "Profile" &&
                  pathName.startsWith("/" + title.toLowerCase()))
                  ? "fill-text-1 stroke-text-1"
                  : "fill-text-8 stroke-text-8"
              }`}
            >
              {getIcons("/" + title.toLowerCase())}
              {title.toLowerCase() === "notifications" &&
                user?.unreadNotificationsCount > 0 && (
                  <span className="bg-bg-7 px-1 absolute rounded-full -top-2 left-[50%] text-[10px] font-bold text-white">
                    {user?.unreadNotificationsCount}
                  </span>
                )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BottomNavbar;
