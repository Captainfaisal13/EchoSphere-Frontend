import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useFollowUnfollowUser } from "../../../network/customHooks";
import { useQueryClient } from "@tanstack/react-query";
import PlusIcon from "../../../public/_assets/svgComponents/plusIcon";
import TickIcon from "../../../public/_assets/svgComponents/tickIcon";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const FollowButton = ({ isUserFollowed, userId }) => {
  const { user, isLoading } = useSelector((state) => state.user);
  const router = useRouter();

  const queryClient = useQueryClient();
  const { mutate: followUnfollowUser } = useFollowUnfollowUser();

  const [isFollowed, setIsFollowed] = useState(isUserFollowed);
  useEffect(() => {
    setIsFollowed(isUserFollowed);
  }, [isUserFollowed]);

  const handleFollow = (e) => {
    e.stopPropagation();
    if (!isLoading && !user) {
      router.push("/login");
      return;
    }
    setIsFollowed(!isFollowed);
    followUnfollowUser(userId, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["get-user-profile"],
        });
        queryClient.invalidateQueries({
          queryKey: ["echo-list-query"],
        });
        queryClient.invalidateQueries({
          queryKey: ["get-users"],
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
