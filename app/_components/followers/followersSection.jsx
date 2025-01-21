"use client";
import { useParams } from "next/navigation";
import { useGetUserFollowers } from "../../../network/customHooks";
import FollowersUser from "../reusables/followersUser";
import Loader from "../reusables/loader";
import { useSelector } from "react-redux";

const FollowersSection = () => {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  const { data, isLoading, isRefetching } = useGetUserFollowers({
    username: params.slug,
  });

  if (isLoading || isRefetching)
    return (
      <div className="mt-20">
        <Loader />
      </div>
    );

  return (
    <div className="">
      {data?.map(({ userAvatar, username, name, isFollowed, userId }) => {
        return (
          <FollowersUser
            key={userId}
            currentUserId={user?.userId}
            isFollowed={isFollowed}
            name={name}
            userAvatar={userAvatar}
            userId={userId}
            username={username}
          />
        );
      })}
    </div>
  );
};

export default FollowersSection;
