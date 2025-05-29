"use client";
import React, { useEffect, useState } from "react";
import SectionHeader from "../reusables/sectionHeader";
import { useGlobalContext } from "../../context";
import { useLogout } from "../../../network/customHooks";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../../redux/slices/userSlice";

export const themes = ["light", "dark", "blue"];

const Settings = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { theme, toggleTheme, systemTheme } = useGlobalContext();
  const { user } = useSelector((state) => state.user);
  // console.log({ themeFromSetting: { theme, systemTheme } });

  const [currentTheme, setCurrentTheme] = useState("");

  const { mutate: logout } = useLogout();

  const handleLogout = () => {
    logout("", {
      onSuccess: (data) => {
        console.log({ logoutResp: data });
        dispatch(removeUser());
        router.push("/login");
      },
    });
  };

  useEffect(() => {
    if (theme === "system") {
      setCurrentTheme(systemTheme);
    } else {
      setCurrentTheme(theme);
    }
  }, [theme, systemTheme]);

  return (
    <div>
      <SectionHeader heading={"Settings"} />
      <div className="p-4 space-y-2">
        <div className="space-y-1">
          <h1 className="text-text-7">Themes</h1>
          <div className="flex space-x-2">
            {themes.map((themeName) => (
              <button
                key={themeName}
                className={`px-4 py-2 rounded ${
                  themeName === currentTheme
                    ? "bg-bg-2 text-text-1 border-2 border-border-1"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => toggleTheme(themeName)}
              >
                {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
      {user && (
        <div className="p-4 border-t border-border-1">
          <button
            className=" text-red-600 px-4 py-2 bg-bg-2 rounded-md border-2 border-border-1"
            onClick={handleLogout}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Settings;
