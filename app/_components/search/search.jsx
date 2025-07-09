"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";
import Link from "next/link";
import { useGetSearchUsers } from "../../../network/customHooks";
import Image from "next/image";
import SearchIcon from "../../../public/_assets/svgComponents/searchIcon";
import Loader from "../reusables/loader";
import FollowersUser from "../reusables/followersUser";

const SearchPage = () => {
  const [input, setInput] = useState("");
  const [debouncedQuery] = useDebounce(input, 500);
  const [isFocused, setIsFocused] = useState(false);

  const {
    data: results = { pages: [[]] },
    isLoading,
    isError,
    error,
  } = useGetSearchUsers({
    query: debouncedQuery,
  });

  return (
    <div className="py-4 mx-auto">
      <div className="relative px-2 md:px-4">
        <span
          className={`absolute inset-y-0 left-0 pl-5 md:pl-7 flex items-center pointer-events-none transition-colors duration-500 ${
            isFocused ? "stroke-bg-5" : " stroke-text-6"
          }`}
        >
          <SearchIcon width="18px" height="18px" strokeWidth="2.5" />
        </span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search users by name or username..."
          className={`w-full pl-9 md:pl-10 pr-4 py-2 rounded-md text-sm shadow-sm focus:outline-none transition-all duration-500 text-text-1 placeholder:text-text-6 ${
            isFocused
              ? "bg-bg-4 ring-2 ring-bg-5 border-transparent"
              : "bg-bg-4"
          }`}
        />
      </div>

      {isLoading && <Loader />}
      {isError && (
        <p className="text-red-500 mt-4 px-2 md:px-4 text-sm">
          {error?.message || "Something went wrong."}
        </p>
      )}

      <div className="mt-4">
        {results.pages[0].length === 0 && debouncedQuery && !isLoading && (
          <p className="text-gray-500 px-2 md:px-4 text-sm">
            No users found for &quot;{debouncedQuery}&quot;
          </p>
        )}

        {results.pages[0].map((currentUser) => (
          <FollowersUser
            key={currentUser._id}
            currentUserId={currentUser._id}
            // isFollowed={false}
            name={currentUser.name}
            userId={currentUser._id}
            userAvatar={currentUser.avatar}
            username={currentUser.username}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
