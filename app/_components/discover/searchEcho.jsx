"use client";
import { useState, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";
import axios from "axios";
import Link from "next/link";
import SearchIcon from "../../../public/_assets/svgComponents/searchIcon";
import { useGetSearchUsers } from "../../../network/customHooks";
import Loader from "../reusables/loader";
import { useRouter } from "next/navigation";

const fetchUsers = async (query) => {
  const { data } = await axios.get(`/api/users/search?query=${query}`);
  return data;
};

const HeaderSearch = () => {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [debouncedQuery] = useDebounce(input, 300);
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef();

  const {
    data: results = { pages: [[]] },
    isLoading,
    isError,
    error,
  } = useGetSearchUsers({
    query: debouncedQuery,
  });

  const handleUserClick = (username) => {
    setIsFocused(false);
    setInput("");
    router.push(`/profile/${username}`);
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative">
        <span
          className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors duration-500 ${
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
          placeholder="Search users"
          className={`w-full pl-10 pr-4 py-2 rounded-md text-sm shadow-sm focus:outline-none transition-all duration-500 text-text-1 placeholder:text-text-6 ${
            isFocused
              ? "bg-bg-4 ring-2 ring-bg-5 border-transparent"
              : "bg-bg-4"
          }`}
        />
      </div>
      {isFocused && debouncedQuery && (
        <div className="absolute top-12 left-0 w-full bg-bg-1 rounded-md shadow-2xl z-50 max-h-80 overflow-y-auto">
          {isLoading && <Loader />}
          {isError && (
            <p className="p-4 text-red-500 text-sm">Failed to fetch users</p>
          )}

          {!isLoading && results.pages[0].length === 0 && (
            <p className="p-4 text-text-3 text-sm">
              No results found for &quot;{debouncedQuery}&quot;
            </p>
          )}

          <ul>
            {results.pages[0].map((user) => (
              <li
                key={user._id}
                className="hover:bg-bg-4 cursor-pointer"
                onMouseDown={() => handleUserClick(user.username)}
              >
                <div className="flex items-center gap-3 p-3">
                  <img
                    src={user.avatar || "/default-avatar.png"}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-sm text-text-1">
                      {user.name}
                    </p>
                    <p className="text-text-3 text-xs">@{user.username}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeaderSearch;
