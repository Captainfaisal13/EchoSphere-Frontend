"use client";
import React, { useState } from "react";
import HomeTab from "./homeTab";
import EchoList from "./echoList";

const MainContent = () => {
  const [currentHomeTab, setCurrentHomeTab] = useState(0);

  const handleHomeTabClick = (index) => {
    setCurrentHomeTab(index);
  };

  return (
    <div className="w-[50vw] border border-[#D7D7D7] max-h-screen overflow-scroll scrollbar-hide">
      <HomeTab
        currentHomeTab={currentHomeTab}
        handleHomeTabClick={handleHomeTabClick}
      />
      <EchoList />
    </div>
  );
};

export default MainContent;
