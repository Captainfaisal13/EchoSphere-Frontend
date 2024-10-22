"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

const Tabs = ({ tabList, storageKey }) => {
  const [currentHomeTab, setCurrentHomeTab] = useState(
    sessionStorage.getItem(storageKey) || 0
  );

  useEffect(() => {
    const savedTab = sessionStorage.getItem(storageKey);
    if (savedTab) {
      setCurrentHomeTab(Number(savedTab));
    }
  }, []);

  const handleHomeTabClick = (index) => {
    setCurrentHomeTab(index);
    sessionStorage.setItem(storageKey, index);
  };

  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback((event) => {
    const { pageYOffset, scrollY } = window;
    console.log("yOffset", pageYOffset, "scrollY", window.scrollY);
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  return (
    <div className="relative">
      <div className="sticky top-0 left-0 z-20 flex bg-white border-b border-[#D7D7D7]">
        {tabList.map(({ id, name }, index) => {
          return (
            <div
              key={id}
              className={`px-4 py-3 ${
                (currentHomeTab === index && "border-b-2") ||
                "hover:bg-[#E6E6E6] text-[#505050]"
              } border-[#7F7F7F] cursor-pointer text-base`}
              onClick={() => handleHomeTabClick(id)}
            >
              {name}
            </div>
          );
        })}
      </div>
      <div>{tabList[currentHomeTab].component}</div>
    </div>
  );
};

export default Tabs;
