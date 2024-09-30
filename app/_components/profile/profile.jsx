import PostEchoList from "./postEchoList";
import ReplyEchoList from "./replyEchoList";
import MediaEchoList from "./mediaEchoList";
import LikeEchoList from "./likeEchoList";
import ProfileInfo from "./profileInfo";
import { getProfile } from "../../../network/apiCalls";
import Tabs from "../reusables/tabs";

const ProfilePage = async ({ username }) => {
  const { result, isUserExist } = await getProfile({ username });

  if (!isUserExist) {
    return (
      <div className="w-[50vw] border border-t-0 border-[#D7D7D7] max-h-screen overflow-scroll scrollbar-hide">
        <h1>User Doesn&apos;t Exists...........</h1>
      </div>
    );
  }

  const profileTabs = [
    {
      id: 0,
      name: "Posts",
      component: <PostEchoList userId={result.user.id} />,
    },
    {
      id: 1,
      name: "Replies",
      component: <ReplyEchoList userId={result.user.id} />,
    },
    {
      id: 2,
      name: "Media",
      component: <MediaEchoList userId={result.user.id} />,
    },
    {
      id: 3,
      name: "Likes",
      component: <LikeEchoList userId={result.user.id} />,
    },
  ];

  return (
    <div>
      <div className="flex flex-col gap-4">
        <ProfileInfo user={result.user} isUserExist={isUserExist} />
        <Tabs tabList={profileTabs} />
      </div>
    </div>
  );
};

export default ProfilePage;
