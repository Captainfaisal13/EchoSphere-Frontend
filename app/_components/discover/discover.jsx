import React from "react";
import SearchEcho from "./searchEcho";
import DiscoverPeople from "./discoverPeople";

const Discover = () => {
  return (
    <div className="w-80 hidden lg:flex flex-col gap-4 px-2 pt-4">
      <SearchEcho />
      <DiscoverPeople />
    </div>
  );
};

export default Discover;
