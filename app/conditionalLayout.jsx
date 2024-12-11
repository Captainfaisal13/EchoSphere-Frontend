"use client";
import React, { useState } from "react";
import Header from "./_components/header/header";
import Navbar from "./_components/navbar/navbar";
import CreateEchoModal from "./_components/modals/createEchoModal";
import ShareEchoModal from "./_components/modals/shareEchoModal";
import EchoButton from "./_components/navbar/echoButton";
import { useGlobalContext } from "./context";
import Discover from "./_components/discover/discover";
import { usePathname } from "next/navigation";

const ConditionalLayout = ({ children }) => {
  const pathname = usePathname();
  const [expandNavbar, setExpandNavbar] = useState(false);
  const {
    showCreateModal,
    setShowCreateModal,
    showShareModal,
    setShowShareModal,
  } = useGlobalContext();

  const NO_LAYOUT_ROUTES = ["/signup", "/login"];
  const isLayoutVisible = !NO_LAYOUT_ROUTES.includes(pathname);
  console.log(pathname, isLayoutVisible);

  return isLayoutVisible ? (
    <>
      <Navbar
        setShowCreateModal={setShowCreateModal}
        expandNavbar={expandNavbar}
        setExpandNavbar={setExpandNavbar}
      />
      <div className="w-[600px] border border-t-0 border-border-1 min-h-screen scrollbar-hide pt-12 md:pt-0">
        <Header expandNavbar={expandNavbar} setExpandNavbar={setExpandNavbar} />
        {children}
      </div>
      <Discover />

      <div className="block md:hidden fixed bottom-8 right-8">
        <EchoButton setShowCreateModal={setShowCreateModal} />
      </div>
      <CreateEchoModal
        isOpen={showCreateModal}
        setIsOpen={setShowCreateModal}
      />
      <ShareEchoModal isOpen={showShareModal} setIsOpen={setShowShareModal} />
    </>
  ) : (
    <>{children}</>
  );
};

export default ConditionalLayout;
