"use client";
import React from "react";
import EditIcon from "../../../public/_assets/svgComponents/editIcon";

const EchoButton = ({ setShowCreateModal }) => {
  return (
    <div className="align-middle pb-4 flex justify-center">
      <button
        onClick={() => setShowCreateModal(true)}
        className="flex gap-2 px-6 lg:px-16 py-6 md:py-2 lg:py-3 justify-center items-center bg-bg-7 rounded-full md:rounded-[32px] text-text-5 fill-text-5 font-bold"
      >
        <EditIcon />
        <span className="hidden lg:inline text-sm">Echo</span>
      </button>
    </div>
  );
};

export default EchoButton;
