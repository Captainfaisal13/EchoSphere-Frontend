import Image from "next/image";
import React from "react";
import FollowButton from "./followButton";

const FollowersUser = ({
  userAvatar,
  username,
  name,
  isFollowed,
  userId,
  currentUserId,
}) => {
  return (
    <div className="flex justify-between p-4">
      <div className="flex gap-2">
        <div className="relative size-10 md:size-12 rounded-full overflow-hidden">
          <Image src={userAvatar} fill alt="user-avatar" />
        </div>
        <div className="my-auto">
          <p className="text-sm font-bold text-text-2 pr-1">{name}</p>
          <p className="font text-xs text-text-3">@{username}</p>
        </div>
      </div>
      {userId !== currentUserId && (
        <FollowButton isUserFollowed={isFollowed} userId={userId} />
      )}
    </div>
  );
};

export default FollowersUser;
