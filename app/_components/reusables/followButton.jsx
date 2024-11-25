import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useFollowUnfollowUser } from "../../../network/customHooks";
import { useQueryClient } from "@tanstack/react-query";

const FollowButton = ({ isUserFollowed, userId }) => {
  const queryClient = useQueryClient();
  const { mutate: followUnfollowUser } = useFollowUnfollowUser();

  const [isFollowed, setIsFollowed] = useState(isUserFollowed);
  useEffect(() => {
    setIsFollowed(isUserFollowed);
  }, [isUserFollowed]);

  const handleFollow = () => {
    setIsFollowed(!isFollowed);
    followUnfollowUser(userId, {
      onSuccess: () => {
        queryClient.invalidateQueries(["get-user-profile"]);
      },
    });
  };

  return (
    <div className="my-auto" onClick={handleFollow}>
      <button
        className={`flex gap-1 text-xs py-2 px-4 rounded-3xl font-bold ${
          isFollowed ? "bg-[#E9E9E9] text-black" : "bg-black text-white"
        }`}
      >
        <div className="relative size-4">
          <Image
            src={
              isFollowed ? "/_assets/tick-icon.svg" : "/_assets/plus-icon.svg"
            }
            fill
            alt="add-icon"
          />
        </div>
        {isFollowed ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default FollowButton;