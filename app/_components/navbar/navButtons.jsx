"use client";
import navbarList from "../../data/navbarList.json";
import { getIcons } from "../../../utils/util";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSelector } from "react-redux";

const NavButtons = ({ setExpandNavbar }) => {
  const { user } = useSelector((state) => state.user);
  const pathName = usePathname();
  // console.log(pathName);

  return (
    <ul className="">
      {navbarList.map(({ title }, idx) => {
        return (
          <li
            key={idx}
            onClick={() => {
              setExpandNavbar(false);
            }}
          >
            <Link
              href={
                !user || title.toLowerCase() !== "profile"
                  ? `/${title.toLowerCase()}`
                  : `/${title.toLowerCase()}/${user?.username}`
              }
            >
              <div className="py-3 px-4 md:px-0 lg:px-4 hover:bg-bg-2">
                <button className="flex flex-row md:flex-col lg:flex-row gap-2 mx-0 md:mx-auto lg:mx-0">
                  <div
                    className={`w-5 h-5 text-text-8 m-auto relative ${
                      pathName === "/" + title.toLowerCase() ||
                      (title === "Profile" &&
                        pathName.startsWith("/" + title.toLowerCase()))
                        ? "fill-text-1 stroke-text-1"
                        : "fill-text-8 stroke-text-8"
                    }`}
                  >
                    {getIcons(pathName, "/" + title.toLowerCase())}
                    {title.toLowerCase() === "notifications" &&
                      user?.unreadNotificationsCount > 0 && (
                        <span className="bg-bg-7 px-1 absolute rounded-full -top-2 left-[50%] text-[10px] font-bold text-white">
                          {user?.unreadNotificationsCount}
                        </span>
                      )}
                  </div>
                  <p
                    className={`text-sm md:text-[10px] lg:text-sm ${
                      pathName === "/" + title.toLowerCase() ||
                      (title === "Profile" &&
                        pathName.startsWith("/" + title.toLowerCase()))
                        ? "text-text-1"
                        : "text-text-8"
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
