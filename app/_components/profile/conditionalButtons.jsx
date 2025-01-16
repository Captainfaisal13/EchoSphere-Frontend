import React from "react";
import EditProfileButton from "./editProfileButton";
import FollowButton from "../reusables/followButton";
import { useSelector } from "react-redux";

const ConditionalButtons = ({ user }) => {
  const { user: loggedUser, isLoading } = useSelector((state) => state.user);
  if (isLoading) return null;

  return user.username === loggedUser?.username ? (
    <EditProfileButton user={user} />
  ) : (
    <FollowButton isUserFollowed={user?.isFollowed} userId={user?._id} />
  );
};

export default ConditionalButtons;
