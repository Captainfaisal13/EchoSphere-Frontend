import React from "react";

const homeTabs = ["For you", "Following", "Recents"];

const HomeTab = ({ currentHomeTab, handleHomeTabClick }) => {
  return (
    <div className="flex border-b border-[#D7D7D7]">
      {homeTabs.map((tab, index) => {
        return (
          <div
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
  );
};

export default HomeTab;
