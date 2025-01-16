"use client";
import React, { useEffect } from "react";
import { redirect } from "next/navigation";
import Loader from "./_components/reusables/loader";
import { useSelector } from "react-redux";

const CheckAuth = ({ children }) => {
  const { user, isLoading } = useSelector((state) => state.user);
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
