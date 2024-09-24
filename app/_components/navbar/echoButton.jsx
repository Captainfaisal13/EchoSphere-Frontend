"use client";
import Image from "next/image";
import React, { useState } from "react";
import CreateEchoModal from "../main/createEchoModal";

const EchoButton = ({ setShowCreateModal }) => {
  return (
    <div className="align-middle pb-4 flex justify-center">
      <button
        onClick={() => setShowCreateModal(true)}
        className="flex gap-2 px-6 lg:px-16 py-6 md:py-2 lg:py-3 justify-center items-center bg-[rgb(127,127,127)] rounded-full md:rounded-[32px] text-white font-bold"
      >
        <div className="w-5 h-5 relative">
          <Image src="/_assets/edit.svg" fill alt="edit" />
        </div>
        <span className="hidden lg:inline text-sm">Echo</span>
      </button>
    </div>
  );
};

export default EchoButton;
