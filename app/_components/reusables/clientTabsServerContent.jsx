"use client";
import React, { useState } from "react";
const ClientTabsServerContent = (prop) => {
  const [currentHomeTab, setCurrentHomeTab] = useState(0);

  const handleHomeTabClick = (index) => {
    setCurrentHomeTab(index);
  };

  const props = Object.keys(prop).map((key) => {
    return prop[key];
  });

  return (
    <div className="relative">
      <div className="sticky top-0 left-0 z-20 flex bg-white border-b border-[#D7D7D7]">
        {prop.tabs.map((tab, index) => {
          return (
            <div
              key={index}
              className={`px-4 py-3 ${
                (currentHomeTab === index && "border-b-2") ||
                "hover:bg-[#E6E6E6] text-[#505050]"
              } border-[#7F7F7F] cursor-pointer text-base`}
              onClick={() => handleHomeTabClick(index)}
            >
              {tab}
            </div>
          );
        })}
      </div>
      {props[currentHomeTab + 1]}
    </div>
  );
};

export default ClientTabsServerContent;
