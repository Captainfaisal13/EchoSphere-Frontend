import React from "react";
import ForYouEchoList from "./forYouEchoList";
import FollowingEchoList from "./followingEchoList";
import ClientTabsServerContent from "../reusables/clientTabsServerContent";
import RecentEchoList from "./recentEchoList";
const homeTabs = ["For you", "Following", "Recents"];

const MainContent = () => {
  return (
    <div>
      <ClientTabsServerContent
        tabs={homeTabs}
        ForYouEchoList={<ForYouEchoList />}
        FollowingEchoList={<FollowingEchoList />}
        RecentEchoList={<RecentEchoList />}
      />
    </div>
  );
};

export default MainContent;
