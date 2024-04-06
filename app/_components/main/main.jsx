import React from "react";
import HomeTab from "./homeTab";
import EchoList from "./echoList";

const MainContent = () => {
  return (
    <div className="w-[50vw] border border-[#D7D7D7] max-h-screen overflow-scroll scrollbar-hide">
      <HomeTab />
      <EchoList />
    </div>
  );
};

export default MainContent;
