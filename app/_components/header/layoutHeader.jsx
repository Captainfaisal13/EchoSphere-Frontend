"use client";
import React, { useState } from "react";
import Header from "./header";
import Navbar from "../navbar/navbar";
import CreateEchoModal from "../main/createEchoModal";
import EchoButton from "../navbar/echoButton";

const LayoutHeader = ({ children }) => {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <>
      <Navbar
        setShowCreateModal={setShowCreateModal}
        expandNavbar={expandNavbar}
        setExpandNavbar={setExpandNavbar}
      />
      <div className="w-[600px] border border-t-0 border-[#D7D7D7] h-screen overflow-scroll scrollbar-hide pt-12 md:pt-0">
        <Header expandNavbar={expandNavbar} setExpandNavbar={setExpandNavbar} />
        {children}
      </div>
      <div className="block md:hidden fixed bottom-8 right-8">
        <EchoButton setShowCreateModal={setShowCreateModal} />
      </div>
      {showCreateModal && (
        <CreateEchoModal setShowCreateModal={setShowCreateModal} />
      )}
    </>
  );
};

export default LayoutHeader;
