"use client";
import React from "react";
import SectionHeader from "../reusables/sectionHeader";
import { useGlobalContext } from "../../context";

const Settings = () => {
  const { theme, toggleTheme } = useGlobalContext();
  const themes = ["light", "dark", "blue"];

  console.log(theme);

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
                  theme === themeName
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
      <div className="p-4 border-t border-border-1">
        <button className=" text-red-600 px-4 py-2 bg-bg-2 rounded-md border-2 border-border-1">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Settings;
