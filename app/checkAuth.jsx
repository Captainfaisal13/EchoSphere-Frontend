"use client";
import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
import { redirect } from "next/navigation";
import Loader from "./_components/reusables/loader";

const CheckAuth = ({ children }) => {
  const { user, isLoading } = useGlobalContext();
  useEffect(() => {
    if (!isLoading && !user) {
      redirect("/login");
    }
  }, [isLoading, user]);

  if (isLoading || !user)
    return (
      <div className="mt-20">
        <Loader />
      </div>
    );
  return <div>{children}</div>;
};

export default CheckAuth;
