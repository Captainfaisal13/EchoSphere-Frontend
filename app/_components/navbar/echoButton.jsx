"use client";
import Image from "next/image";
import React, { useState } from "react";
import CreateEchoModal from "../main/createEchoModal";

const EchoButton = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <>
      <div className="align-middle pb-4 flex justify-center">
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex gap-2 px-16 py-3 justify-center items-center bg-[rgb(127,127,127)] rounded-[32px] text-white font-bold"
        >
          <div className="w-5 h-5 relative">
            <Image src="/_assets/edit.svg" fill />
          </div>
          <span className="text-sm">Echo</span>
        </button>
      </div>
      {showCreateModal && (
        <CreateEchoModal setShowCreateModal={setShowCreateModal} />
      )}
    </>
  );
};

export default EchoButton;
