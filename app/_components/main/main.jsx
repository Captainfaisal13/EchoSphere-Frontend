import React from "react";
import ForYouEchoList from "./forYouEchoList";
import FollowingEchoList from "./followingEchoList";
import Tabs from "../reusables/tabs";
import RecentEchoList from "./recentEchoList";

const homeTabs = [
  // { id: 0, name: "For you", component: <ForYouEchoList /> },
  { id: 0, name: "Following", component: <FollowingEchoList /> },
  { id: 1, name: "Recents", component: <RecentEchoList /> },
];

const MainContent = () => {
  return <Tabs tabList={homeTabs} storageKey="home-tab" />;
};

export default MainContent;
