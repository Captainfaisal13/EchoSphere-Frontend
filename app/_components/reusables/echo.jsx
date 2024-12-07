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

  return (
    <Link
      scroll={true}
      href={`/${username}/echo/${id}`}
      key={id}
      className="flex p-4 gap-2 bg-[#E9E9E9] rounded-md"
    >
      <div className="shrink-0 relative size-10 md:size-12 rounded-full overflow-hidden">
        <Image src={userAvatar} fill alt="user-avatar" />
      </div>
      <div className="shrink w-full flex flex-col gap-[2px]">
        <div className="flex gap-1 items-center">
          <Link
            href={`/profile/${username}`}
            className="cursor-pointer flex items-center"
          >
            <span className="text-sm font-bold text-[#1B1B1B] flex items-center pr-1 hover:underline">
              <span className="line-clamp-1">{name}</span>
              {username === "shaikhfaisal" && (
                <div className="ml-1 relative size-[18px] my-auto">
                  <Image src="/_assets/crown-icon.svg" fill alt="crown-icon" />
                </div>
              )}
            </span>
            <span className="font text-xs text-[#5B5B5B] ml-2 line-clamp-1">
              @{username}
            </span>
          </Link>

          <div className="flex items-center text-[4px]">&#8226;</div>
          <p className="text-xs font-light">{time}</p>
        </div>
        {parentTweet && (
          <Link
            href={`/${username}/echo/${parentTweet}`}
            className="text-[10px] text-[#5B5B5B] font-thin"
          >
            Replied to an <span className="text-blue-600 underline">Echo</span>
          </Link>
        )}
        <p className="text-sm text-[#2B2B2B]">{formattedContent}</p>
        <div className="pt-1 pb-3 border-b border-[#D7D7D7]">
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
    </Link>
  );
};

export default Echo;
