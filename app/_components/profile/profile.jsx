import ClientTabsServerContent from "../reusables/clientTabsServerContent";
import PostEchoList from "./postEchoList";
import ReplyEchoList from "./replyEchoList";
import MediaEchoList from "./mediaEchoList";
import LikeEchoList from "./likeEchoList";
import ProfileInfo from "./profileInfo";
import { useGetProfile } from "../../../network/customHooks";
import { getProfile } from "../../../network/apiCalls";

const tabs = ["Posts", "Replies", "Media", "Likes"];

const ProfilePage = async ({ username }) => {
  const { result, isUserExist } = await getProfile({ username });
  // const {
  //   data: { result, isUserExist },
  //   isError,
  //   isLoading,
  //   error,
  // } = useGetProfile({ username });

  // if (isError) {
  //   return <h2>{error.message}</h2>;
  // }

  if (!isUserExist) {
    return (
      <div className="w-[50vw] border border-t-0 border-[#D7D7D7] max-h-screen overflow-scroll scrollbar-hide">
        <h1>User Doesn&apos;t Exists...........</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col gap-4">
        <ProfileInfo user={result.user} isUserExist={isUserExist} />
        <ClientTabsServerContent
          tabs={tabs}
          PostEchoList={<PostEchoList userId={result.user.id} />}
          ReplyEchoList={<ReplyEchoList userId={result.user.id} />}
          MediaEchoList={<MediaEchoList userId={result.user.id} />}
          LikeEchoList={<LikeEchoList userId={result.user.id} />}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
