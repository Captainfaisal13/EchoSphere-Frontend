"use client";
import React, { useState } from "react";
import SearchIcon from "@/public/_assets/svgComponents/searchIcon";

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
        searchFocused ? "bg-[#E9E9E9]" : "bg-[#B9B9B9]"
      } items-center gap-2 pl-2 duration-[200ms] py-1 rounded-[4px]`}
    >
      <div className="relative w-6 h-6">
        <SearchIcon colour="#414141" strokeWidth="2.5" />
      </div>
      <input
        type="text"
        name="searchEcho"
        id="searchEcho"
        className={`${
          searchFocused
            ? "bg-[#E9E9E9] placeholder:text-[#8C8C8C]"
            : "bg-[#B9B9B9] placeholder:text-[#414141]"
        } placeholder:text-[14px] placeholder:font-light outline-none pr-2 w-full duration-[200ms]`}
        placeholder="Search Echoes"
        onFocus={handleFocus}
        onBlur={handleFocusOut}
      />
    </div>
  );
};

export default SearchEcho;
