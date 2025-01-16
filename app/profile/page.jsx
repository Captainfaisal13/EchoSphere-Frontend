"use client";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ProfilePageRedirect = () => {
  const { user, isLoading } = useSelector((state) => state.user);
  console.log({ profileUser: user });

  useEffect(() => {
    if (!isLoading) {
      if (user) {
        redirect(`profile/${user.username}`);
      } else {
        redirect("/login");
      }
    }
  }, [user, isLoading]);

  return <div>ProfilePageRedirect</div>;
};

export default ProfilePageRedirect;
