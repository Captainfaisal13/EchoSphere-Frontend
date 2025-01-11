"use client";
import Link from "next/link";
import { useGetUsers } from "../../../network/customHooks";
import { useGlobalContext } from "../../context";
import FollowerUser from "../reusables/followersUser";
import Loader from "../reusables/loader";
import FollowButton from "../reusables/followButton";
import Image from "next/image";
import SectionHeader from "../reusables/sectionHeader";

const DiscoverSection = () => {
  const { user } = useGlobalContext();
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
              currentUserId={user.userId}
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
