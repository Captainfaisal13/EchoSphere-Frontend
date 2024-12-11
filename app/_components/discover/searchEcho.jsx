"use client";
import SearchIcon from "../../../public/_assets/svgComponents/searchIcon";
import React, { useState } from "react";

const SearchEcho = () => {
  const [searchFocused, setSearchFocused] = useState(false);
  const handleFocus = () => {
    setSearchFocused(true);
  };
  const handleFocusOut = () => {
    setSearchFocused(false);
  };

  return (
    <div
      className={`flex ${
        searchFocused ? "bg-bg-4" : "bg-bg-2"
      } items-center gap-2 pl-2 duration-[200ms] py-1 rounded-[4px]`}
    >
      <div className="stroke-text-6">
        <SearchIcon width="18px" height="18px" strokeWidth="2.5" />
      </div>
      <input
        type="text"
        name="searchEcho"
        id="searchEcho"
        className={`${
          searchFocused
            ? "bg-bg-4 placeholder:text-text-6"
            : "bg-bg-2 placeholder:text-text-7"
        } placeholder:text-[14px] placeholder:font-light outline-none pr-2 w-full duration-[200ms] text-text-1`}
        placeholder="Search Echoes"
        onFocus={handleFocus}
        onBlur={handleFocusOut}
      />
    </div>
  );
};

export default SearchEcho;
