"use client";
import PostEchoList from "./postEchoList";
import ReplyEchoList from "./replyEchoList";
import MediaEchoList from "./mediaEchoList";
import LikeEchoList from "./likeEchoList";
import ProfileInfo from "./profileInfo";
import Tabs from "../reusables/tabs";
import { useGetUserProfile } from "../../../network/customHooks";
import SectionHeader from "../reusables/sectionHeader";
import ProfilePageLoader from "../reusables/profilePageLoader";
import { useEffect, useRef } from "react";

const ProfilePage = ({ username }) => {
  const { data, isLoading, isError, error, isRefetching } = useGetUserProfile({
    username,
  });

  useEffect(() => {
    if (isLoading || isRefetching) {
      sessionStorage.setItem("profile-tab", 0);
      sessionStorage.setItem("profile-tab-0", 0);
      sessionStorage.setItem("profile-tab-1", 0);
      sessionStorage.setItem("profile-tab-2", 0);
      sessionStorage.setItem("profile-tab-3", 0);
    }
  }, [isLoading, isRefetching]);

  if (isLoading) {
    return <ProfilePageLoader />;
  }

  if (isError) {
    console.log({ error });

    return (
      <div className="w-[50vw] border border-t-0 border-border-1 max-h-screen overflow-scroll scrollbar-hide">
        <h1>{error.message}</h1>
      </div>
    );
  }

  const profileTabs = [
    { id: 0, name: "Posts", component: <PostEchoList username={username} /> },
    {
      id: 1,
      name: "Replies",
      component: <ReplyEchoList username={username} />,
    },
    { id: 2, name: "Media", component: <MediaEchoList username={username} /> },
    { id: 3, name: "Likes", component: <LikeEchoList username={username} /> },
  ];

  return (
    <div>
      <SectionHeader heading={`${data?.name}`} />
      <div className="flex flex-col gap-4">
        <ProfileInfo user={data} />
        <Tabs
          tabList={profileTabs}
          storageKey="profile-tab"
          translateOnScroll={false}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
