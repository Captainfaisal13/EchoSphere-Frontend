"use client";
import { useGetSingleEcho } from "../../../../network/customHooks";
import Link from "next/link";
import Image from "next/image";
import MediaLayout from "../../../_components/reusables/mediaLayout";
import ReEchoButton from "../../../_components/reusables/reEchoButton";
import LikeButton from "../../../_components/reusables/likeButton";
import EchoOptions from "../../../_components/reusables/echoOptions";
import EchoStats from "../../../_components/reusables/echoStats";
import {
  formatFullDate,
  getFormattedContent,
} from "../../../_components/navbar/util";
import { useRouter } from "next/navigation";
import Echos from "../../../_components/reusables/Echos";
import { useGlobalContext } from "../../../context";
import ReplyButton from "../../../_components/reusables/replyButton";
import SectionHeader from "../../../_components/reusables/sectionHeader";
import ParentEchos from "../../../_components/echo/parentEchos";

const EchoPage = ({ params }) => {
  const {
    user,
    isLoading: isUserLoading,
    setShowCreateModal,
    setReplyEchoData,
  } = useGlobalContext();
  const { data, isLoading, isError } = useGetSingleEcho({
    echoId: params.postId,
  });

  const router = useRouter();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const echo = data.detailedTweet;
  console.log({ data });

  const {
    _id: id,
    name,
    username,
    userAvatar,
    createdAt,
    content,
    retweets_count: reposts,
    likes_count: likes,
    replies_count: replies,
    isLiked,
    isRepost,
    shares,
    media,
    parentTweet,
  } = echo;

  const time = formatFullDate(new Date(createdAt));
  return (
    <div>
      <SectionHeader heading="Echo" />
      <ParentEchos parentTweets={data.parentsDetailedTweet} />
      <div className="px-4">
        <div className="flex gap-2">
          <div className="w-14 pb-[2px]">
            <div
              className={`w-[2px] h-4 mx-auto ${parentTweet && "bg-[#D7D7D7]"}`}
            ></div>
          </div>
          <div className="w-full"></div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div className="size-12 relative rounded-full overflow-hidden">
              <Image src={userAvatar} fill alt={`${username}-profile-image`} />
            </div>
            <Link href={`/profile/${username}`}>
              <h2 className="text-base font-semibold text-[#1B1B1B]">{name}</h2>
              <h3 className="text-sm text-[#5B5B5B]">@{username}</h3>
            </Link>
          </div>
          <div className="my-auto">
            <EchoOptions echo={echo} />
          </div>
        </div>
        <div className="p-2">
          <p className="text-lg text-[#2B2B2B]">
            {getFormattedContent(content)}
          </p>
          <div className="pt-1">
            <MediaLayout media={media} />
          </div>
          <div className="py-2 text-xs text-[#5B5B5B] mt-4 flex gap-2 font-light">
            {time}
          </div>
          <EchoStats
            echoLikedCount={likes}
            reEchoedCount={reposts}
            echoReplyCount={replies}
          />
          <div
            className={`flex justify-between md:grid grid-cols-5 pt-3 border-t border-[#D7D7D7] ${
              likes === 0 && reposts === 0 && replies === 0 && "mt-5"
            }`}
          >
            <ReplyButton echo={echo} replies={replies} />
            <ReEchoButton
              echoId={id}
              isReEcho={isRepost}
              reEchoedCount={reposts}
            />
            <LikeButton
              echoLikedCount={likes}
              isEchoLiked={isLiked}
              echoId={id}
            />
            <button className="flex gap-1">
              <div className="relative w-4 h-4">
                <Image src="/_assets/share-icon.svg" fill alt="share-icon" />
              </div>
              <p className="text-xs font-thin my-auto text-[#5B5B5B]">
                {shares ? shares : "0"}
              </p>
            </button>

            <button className="relative w-4 h-4 justify-self-end">
              <Image
                src="/_assets/bookmark-icon.svg"
                fill
                alt="bookmark-icon"
              />
            </button>
          </div>
        </div>
      </div>
      {user && (
        <button
          className="border-y border-[#D7D7D7] py-1 px-4 w-full mt-1"
          onClick={() => {
            setReplyEchoData({
              ...echo,
            });
            setShowCreateModal(true);
          }}
        >
          <div className="flex gap-2 rounded-3xl hover:bg-black/10 p-2">
            <div className="shrink-0 relative size-6 rounded-full overflow-hidden">
              <Image src={userAvatar} fill alt="user-avatar" />
            </div>
            <p className="text-sm my-auto">
              Write your reply as {user.username}
            </p>
          </div>
        </button>
      )}
      <Echos echos={[data.repliesDetailedTweet]} />
    </div>
  );
};

export default EchoPage;
