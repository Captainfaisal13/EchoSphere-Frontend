"use client";
import { useParams } from "next/navigation";
import { useGetUserFollowings } from "../../../network/customHooks";
import { useGlobalContext } from "../../context";
import FollowerUser from "../reusables/followersUser";

const FollowingsSection = () => {
  const { user } = useGlobalContext();
  const params = useParams();
  const { data, isLoading } = useGetUserFollowings({ username: params.slug });

  if (isLoading) return <p>Loading...</p>;
  console.log({ data });

  return (
    <div className="">
      {data?.detailedFollowings?.map(
        ({ userAvatar, username, name, isFollowed, followerId }) => {
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
        }
      )}
    </div>
  );
};

export default FollowingsSection;
