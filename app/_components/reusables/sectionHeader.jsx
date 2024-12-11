"use client";
import React from "react";
import BackIcon from "../../../public/_assets/svgComponents/backIcon";
import { useRouter } from "next/navigation";
const SectionHeader = ({ heading }) => {
  const router = useRouter();

  return (
    <div className="py-2 border-b-[1px] border-border-1 px-4 relative">
      <button
        onClick={() => router.back()}
        className="my-auto p-[6px] absolute fill-text-1"
      >
        <BackIcon />
      </button>
      <h3 className="text-center text-xl font-semibold text-text-1">
        {heading}
      </h3>
    </div>
  );
};

export default SectionHeader;
