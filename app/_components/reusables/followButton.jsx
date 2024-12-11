import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useFollowUnfollowUser } from "../../../network/customHooks";
import { useQueryClient } from "@tanstack/react-query";
import PlusIcon from "../../../public/_assets/svgComponents/plusIcon";
import TickIcon from "../../../public/_assets/svgComponents/tickIcon";

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
        queryClient.invalidateQueries({
          queryKey: ["echo-query"],
        });
      },
    });
  };

  return (
    <div className="my-auto" onClick={handleFollow}>
      <button
        className={`flex gap-1 text-xs py-2 px-4 rounded-3xl font-bold ${
          isFollowed
            ? "bg-bg-4 text-text-1 stroke-text-1"
            : "bg-bg-5 text-text-0 fill-text-0"
        }`}
      >
        {isFollowed ? (
          <TickIcon height="16px" width="16px" />
        ) : (
          <PlusIcon height="16px" width="16px" />
        )}
        {isFollowed ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default FollowButton;
