import React from "react";
import ForYouEchoList from "./forYouEchoList";
import FollowingEchoList from "./followingEchoList";
import ClientTabsServerContent from "../reusables/clientTabsServerContent";
import RecentEchoList from "./recentEchoList";
const homeTabs = ["For you", "Following", "Recents"];

const MainContent = () => {
  return (
    <div className="w-[50vw] border border-[#D7D7D7] max-h-screen overflow-scroll scrollbar-hide">
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
