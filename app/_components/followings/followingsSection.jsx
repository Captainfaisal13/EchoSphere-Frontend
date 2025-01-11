"use client";
import { useParams } from "next/navigation";
import { useGetUserFollowings } from "../../../network/customHooks";
import { useGlobalContext } from "../../context";
import FollowerUser from "../reusables/followersUser";
import Loader from "../reusables/loader";

const FollowingsSection = () => {
  const { user } = useGlobalContext();
  const params = useParams();
  const { data, isLoading, isRefetching } = useGetUserFollowings({
    username: params.slug,
  });

  if (isLoading || isRefetching)
    return (
      <div className="mt-20">
        <Loader />
      </div>
    );
  console.log({ data });

  return (
    <div className="">
      {data?.map(({ userAvatar, username, name, isFollowed, followerId }) => {
        return (
          <FollowerUser
            key={followerId}
            currentUserId={user.userId}
            isFollowed={isFollowed}
            name={name}
            userAvatar={userAvatar}
            userId={followerId}
            username={username}
          />
        );
      })}
    </div>
  );
};

export default FollowingsSection;
