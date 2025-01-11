import React from "react";
import Image from "next/image";
import MediaLayout from "./mediaLayout";
import LikeButton from "./likeButton";
import ReEchoButton from "./reEchoButton";
import ReplyButton from "./replyButton";
import ShareButton from "./shareButton";
import BookmarkButton from "./bookmarkButton";
import Link from "next/link";
import EchoOptions from "./echoOptions";
import { formatTimeAgo } from "../navbar/util";
import { useRouter } from "next/navigation";

const Echo = ({ echo }) => {
  const {
    _id: id,
    username,
    name,
    userAvatar,
    createdAt,
    content,
    retweets_count: reposts,
    likes_count: likes,
    replies_count: replies,
    shareCount: shares,
    isLiked,
    isRepost,
    isBookmarked,
    media,
    parentTweet,
  } = echo;

  const time = formatTimeAgo(new Date(createdAt));

  const formattedContent = content.split("\n").map((line, index) => {
    return (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    );
  });
  const router = useRouter();

  return (
    <div
      scroll={true}
      onClick={() => router.push(`/${username}/echo/${id}`)}
      key={id}
      className="flex p-4 gap-2 bg-bg-4 rounded-md cursor-pointer"
    >
      <div className="shrink-0 relative size-10 md:size-12 rounded-full overflow-hidden">
        <Image src={userAvatar} fill alt="user-avatar" />
      </div>
      <div className="shrink w-full flex flex-col gap-[2px]">
        <div className="flex gap-1 items-center text-text-2 ">
          <Link
            href={`/profile/${username}`}
            className="cursor-pointer flex items-center"
          >
            <span className="text-sm font-bold flex items-center pr-1 hover:underline">
              <span className="line-clamp-1">{name}</span>
              {username === "shaikhfaisal" && (
                <div className="ml-1 relative size-[18px] my-auto">
                  <Image src="/_assets/crown-icon.svg" fill alt="crown-icon" />
                </div>
              )}
            </span>
            <span className="font text-xs text-text-3 ml-2 line-clamp-1">
              @{username}
            </span>
          </Link>

          <div className="flex items-center text-[4px]">&#8226;</div>
          <p className="text-xs font-light">{time}</p>
        </div>
        {parentTweet && (
          <Link
            href={`/${username}/echo/${parentTweet}`}
            className="text-[10px] text-text-3 font-thin"
          >
            Replied to an <span className="text-blue-600 underline">Echo</span>
          </Link>
        )}
        <p
          onClick={(e) => {
            const selection = window.getSelection();
            if (selection && selection.toString().length > 0) {
              e.stopPropagation();
            }
          }}
          className="text-sm text-text-4"
        >
          {formattedContent}
        </p>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="pt-1 pb-3 border-b border-border-3"
        >
          <MediaLayout media={media} />
        </div>
        <div className="flex justify-between md:grid grid-cols-5 pt-3">
          <ReplyButton replies={replies} echo={echo} />
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
          <ShareButton echoId={id} shares={shares} />
          <BookmarkButton echoId={id} isEchoBookmarked={isBookmarked} />
        </div>
      </div>
    </div>
  );
};

export default Echo;
