import React from "react";
import SectionHeader from "./sectionHeader";

const profilePageLoader = () => {
  return (
    <div className="">
      <SectionHeader heading="-------" />
      <div className="min-h-[24vh] relative bg-bg-4"></div>
      <div>
        <div className="flex justify-between px-4">
          <div className="h-28 w-28 rounded-full relative overflow-hidden mt-[-62px] bg-bg-1"></div>
          <div className="my-auto">
            <button
              className={`flex gap-1 text-xs py-2 px-4 rounded-3xl font-bold bg-bg-4 text-text-1 stroke-text-1`}
            >
              <div className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profilePageLoader;
