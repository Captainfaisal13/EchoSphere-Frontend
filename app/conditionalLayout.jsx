"use client";
import React, { useState } from "react";
import Header from "./_components/header/header";
import Navbar from "./_components/navbar/navbar";
import CreateEchoModal from "./_components/modals/createEchoModal";
import ShareEchoModal from "./_components/modals/shareEchoModal";
import ImageModal from "./_components/modals/imageModal";
import EchoButton from "./_components/navbar/echoButton";
import Discover from "./_components/discover/discover";
import { usePathname } from "next/navigation";
import BottomNavbar from "./_components/bottomNavbar/bottomNavbar";

const ConditionalLayout = ({ children }) => {
  const pathname = usePathname();
  const [expandNavbar, setExpandNavbar] = useState(false);

  const NO_LAYOUT_ROUTES = ["/signup", "/login"];
  const isLayoutVisible = !NO_LAYOUT_ROUTES.includes(pathname);
  console.log(pathname, isLayoutVisible);

  return isLayoutVisible ? (
    <>
      <Navbar expandNavbar={expandNavbar} setExpandNavbar={setExpandNavbar} />
      <div className="w-[600px] border border-t-0 border-border-1 min-h-screen scrollbar-hide pt-12 md:pt-0">
        <Header expandNavbar={expandNavbar} setExpandNavbar={setExpandNavbar} />
        {children}
      </div>
      <Discover />
      <BottomNavbar />

      <div className="block md:hidden fixed bottom-14 right-6">
        <EchoButton />
      </div>
      <CreateEchoModal />
      <ShareEchoModal />
      <ImageModal />
    </>
  ) : (
    <>{children}</>
  );
};

export default ConditionalLayout;
