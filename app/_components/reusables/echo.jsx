import React from "react";
import Image from "next/image";
import MediaLayout from "./mediaLayout";
import LikeButton from "./likeButton";
import ReEchoButton from "./reEchoButton";
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
    replies,
    retweets_count: reposts,
    likes_count: likes,
    isLiked,
    isRepost,
    shares,
    media,
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
      <div className="shrink-0 relative w-12 h-12 rounded-full overflow-hidden">
        <Image src={userAvatar} fill alt="user-avatar" />
      </div>
      <div className="shrink w-full flex flex-col gap-[2px]">
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <Link
              href={`/profile/${username}`}
              className="flex gap-1 items-center hover:underline cursor-pointer"
            >
              <h3 className="text-sm font-bold text-[#1B1B1B]">{name}</h3>
              <p className="font text-xs text-[#5B5B5B]">@{username}</p>
            </Link>
            <div className="flex items-center text-[4px]">&#8226;</div>
            <p className="text-xs font-light">{time}</p>
          </div>
          <EchoOptions echo={echo} />
        </div>
        <p className="text-sm text-[#2B2B2B]">{formattedContent}</p>
        <div className="pt-1 pb-3 border-b border-[#D7D7D7]">
          <MediaLayout media={media} />
        </div>
        <div className="flex justify-between md:grid grid-cols-5 pt-3">
          <button className="flex gap-1">
            <div className="relative w-4 h-4">
              <Image src="/_assets/comment-icon.svg" fill alt="comment-icon" />
            </div>
            <p className="text-xs font-thin my-auto text-[#5B5B5B]">
              {replies ? replies : "2.5k"}
            </p>
          </button>
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
              {shares ? shares : "569"}
            </p>
          </button>

          <button className="relative w-4 h-4 justify-self-end">
            <Image src="/_assets/bookmark-icon.svg" fill alt="bookmark-icon" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Echo;
