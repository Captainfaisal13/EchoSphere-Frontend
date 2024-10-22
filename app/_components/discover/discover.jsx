import React from "react";
import SearchEcho from "./searchEcho";
import DiscoverPeople from "./discoverPeople";

const Discover = () => {
  return (
    <div className="w-80 hidden md:block sticky top-0 space-y-4 px-2 pt-4 h-full">
      <SearchEcho />
      <DiscoverPeople />
    </div>
  );
};

export default Discover;
