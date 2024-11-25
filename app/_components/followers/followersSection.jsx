"use client";
import { useParams } from "next/navigation";
import { useGetUserFollowers } from "../../../network/customHooks";
import { useGlobalContext } from "../../context";
import FollowersUser from "../reusables/followersUser";

const FollowersSection = () => {
  const { user } = useGlobalContext();
  const params = useParams();
  const { data, isLoading } = useGetUserFollowers({ username: params.slug });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="">
      {data?.map(({ userAvatar, username, name, isFollowed, userId }) => {
        return (
          <FollowersUser
            key={userId}
            currentUserId={user.userId}
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
