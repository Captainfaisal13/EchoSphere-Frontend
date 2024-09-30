"use client";
import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
import { redirect } from "next/navigation";

const CheckAuth = ({ children }) => {
  const { user, isLoading } = useGlobalContext();
  useEffect(() => {
    if (!isLoading && !user) {
      redirect("/login");
    }
  }, [isLoading, user]);

  if (isLoading || !user) return <p>loading..</p>;
  return <div>{children}</div>;
};

export default CheckAuth;
