"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

const Tabs = ({ tabList, storageKey, translateOnScroll = true }) => {
  const [currentHomeTab, setCurrentHomeTab] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const lastScrollY = useRef(0);

  // Load saved tab index on initial render
  useEffect(() => {
    const savedTab = sessionStorage.getItem(storageKey);
    if (savedTab !== null) {
      setCurrentHomeTab(Number(savedTab));
    }
  }, []);

  // Scroll to saved position on tab change
  useEffect(() => {
    const savedTabScroll = sessionStorage.getItem(
      `${storageKey}-${currentHomeTab}`
    );
    if (savedTabScroll) {
      window.scrollTo(0, parseInt(savedTabScroll));
    } else {
      window.scrollTo(0, 0);
    }
  }, [currentHomeTab]);

  // Save scroll position on scroll
  const onScroll = () => {
    const currentScrollY = window.scrollY;

    // Check scroll direction
    if (currentScrollY > lastScrollY.current) {
      setIsScrollingUp(false); // Scrolling down
    } else if (currentScrollY < lastScrollY.current) {
      setIsScrollingUp(true); // Scrolling up
    }

    // Update the last scroll position
    lastScrollY.current = currentScrollY;

    // handle scroll for the profile tabs
    if (storageKey === "profile-tab") {
      Array(4)
        .fill(",")
        .map((ele, index) =>
          sessionStorage.setItem(`${storageKey}-${index}`, currentScrollY)
        );
      return;
    }

    // Save scroll position in session storage
    sessionStorage.setItem(`${storageKey}-${currentHomeTab}`, currentScrollY);
  };

  useEffect(() => {
    // Add event listener for scroll
    window.addEventListener("scroll", onScroll, { passive: true });

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [currentHomeTab]);

  const handleHomeTabClick = (index) => {
    setCurrentHomeTab(index);
    sessionStorage.setItem(storageKey, index);
  };

  return (
    <div className="relative">
      <div
        className={`sticky top-12 md:top-0 left-0 right-0 z-10 flex bg-bg-0 border-b border-border-1 transition-all duration-300 ${
          !isScrollingUp && translateOnScroll ? "-translate-y-full" : ""
        }`}
      >
        {tabList.map(({ id, name }, index) => (
          <div
            key={id}
            className={`px-4 py-3 ${
              currentHomeTab === index
                ? "border-b-2 text-text-1"
                : "hover:bg-bg-2 text-text-8"
            } border-border-2 cursor-pointer text-base`}
            onClick={() => handleHomeTabClick(index)}
          >
            {name}
          </div>
        ))}
      </div>
      <div>{tabList[currentHomeTab].component}</div>
    </div>
  );
};

export default Tabs;
