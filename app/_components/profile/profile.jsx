"use client";
import PostEchoList from "./postEchoList";
import ReplyEchoList from "./replyEchoList";
import MediaEchoList from "./mediaEchoList";
import LikeEchoList from "./likeEchoList";
import ProfileInfo from "./profileInfo";
import Tabs from "../reusables/tabs";
import { useGetUserProfile } from "../../../network/customHooks";

const ProfilePage = ({ username }) => {
  const { data, isLoading, isError, error } = useGetUserProfile({ username });

  if (isLoading) {
    return <h1>Loading Hai....</h1>;
  }

  if (isError) {
    console.log({ error });

    return (
      <div className="w-[50vw] border border-t-0 border-[#D7D7D7] max-h-screen overflow-scroll scrollbar-hide">
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
