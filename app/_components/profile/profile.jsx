import ClientTabsServerContent from "../reusables/clientTabsServerContent";
import PostEchoList from "./postEchoList";
import ReplyEchoList from "./replyEchoList";
import MediaEchoList from "./mediaEchoList";
import LikeEchoList from "./likeEchoList";
import ProfileInfo from "./profileInfo";

const getProfile = async ({ username }) => {
  try {
    const data = await fetch(
      `http://localhost:3000/api/v1/feed/user/${username}`,
      { cache: "no-store" }
    );

    if (!data.ok) {
      throw new Error("404 Not found");
    }

    const result = await data.json();
    return { result, isUserExist: true };
  } catch (error) {
    if (error.message === "404 Not found") {
      return {
        isUserExist: false,
        result: {},
      };
    }
    throw new Error(`Internal Server Error`);
  }
};

const tabs = ["Posts", "Replies", "Media", "Likes"];

const ProfilePage = async ({ username }) => {
  const { result, isUserExist } = await getProfile({ username });

  if (!isUserExist) {
    return (
      <div className="w-[50vw] border border-t-0 border-[#D7D7D7] max-h-screen overflow-scroll scrollbar-hide">
        <h1>User Doesn't Exists...........</h1>;
      </div>
    );
  }

  return (
    <div className="w-[50vw] border border-t-0 border-[#D7D7D7] max-h-screen overflow-scroll scrollbar-hide">
      <div className="flex flex-col gap-4">
        <ProfileInfo user={result.user} isUserExist={isUserExist} />
        <ClientTabsServerContent
          tabs={tabs}
          PostEchoList={<PostEchoList userId={result.user.id} />}
          ReplyEchoList={<ReplyEchoList />}
          MediaEchoList={<MediaEchoList />}
          LikeEchoList={<LikeEchoList />}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
