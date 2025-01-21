"use client";
import { useSelector } from "react-redux";
import { useGetUsers } from "../../../network/customHooks";
import FollowerUser from "../reusables/followersUser";
import Loader from "../reusables/loader";

const DiscoverSection = () => {
  const { user } = useSelector((state) => state.user);
  const { data: users, isLoading } = useGetUsers();

  if (isLoading)
    return (
      <div className="mt-20">
        <Loader />
      </div>
    );

  return (
    <>
      {users.pages.map((page) => {
        return page.map(({ _id, avatar, name, username, isFollowed }) => {
          return (
            <FollowerUser
              key={_id}
              currentUserId={user?.userId}
              isFollowed={isFollowed}
              name={name}
              userAvatar={avatar}
              userId={_id}
              username={username}
            />
          );
        });
      })}
    </>
  );
};

export default DiscoverSection;
