import Image from "next/image";
import React from "react";
import FollowButton from "./followButton";
import { useRouter } from "next/navigation";
import CrownIcon from "../../../public/_assets/svgComponents/crownIcon";

const FollowersUser = ({
  userAvatar,
  username,
  name,
  isFollowed,
  userId,
  currentUserId,
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/profile/${username}`);
      }}
      className="flex justify-between p-4 cursor-pointer"
    >
      <div className="flex gap-2">
        <div className="relative size-10 md:size-12 rounded-full overflow-hidden">
          <Image src={userAvatar} fill alt="user-avatar" />
        </div>
        <div className="my-auto">
          <div className="flex">
            <p className="text-sm font-bold text-text-2 pr-1">{name}</p>
            {username === "captainfaisal" && (
              <div className="ml-1 fill-text-1 mb-auto">
                <CrownIcon />
                {/* <Image src="/_assets/crown-icon.svg" fill alt="crown-icon" /> */}
              </div>
            )}
          </div>
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
