import React from "react";
import { useGlobalContext } from "../../context";
import EditProfileButton from "./editProfileButton";
import FollowButton from "../reusables/followButton";

const ConditionalButtons = ({ user }) => {
  const { user: loggedUser, isLoading } = useGlobalContext();
  if (isLoading) return null;

  return user.username === loggedUser.username ? (
    <EditProfileButton user={user} />
  ) : (
    <FollowButton isUserFollowed={user?.isFollowed} userId={user?._id} />
  );
};

export default ConditionalButtons;
