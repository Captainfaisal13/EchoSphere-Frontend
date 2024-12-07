"use client";
import React from "react";
import BackIcon from "../../../public/_assets/svgComponents/backIcon";
import { useRouter } from "next/navigation";
const SectionHeader = ({ heading }) => {
  const router = useRouter();

  return (
    <div className="py-2 border-b-[1px] border-b-[#D7D7D7] px-4 relative">
      <button
        onClick={() => router.back()}
        className="my-auto p-[6px] absolute"
      >
        <BackIcon />
      </button>
      <h3 className="text-center text-xl font-semibold text-[#000000]">
        {heading}
      </h3>
    </div>
  );
};

export default SectionHeader;
