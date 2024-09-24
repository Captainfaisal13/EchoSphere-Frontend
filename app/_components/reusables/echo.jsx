import React from "react";
import Image from "next/image";
import MediaLayout from "./mediaLayout";

const Echo = ({ echo }) => {
  const {
    id,
    username,
    userDisplayName,
    userAvatar,
    time,
    text,
    replies,
    retweets_count: reposts,
    likes_count: likes,
    shares,
    media,
  } = echo;
  return (
    <div key={id} className="flex p-4 gap-2 bg-[#E9E9E9] rounded-md">
      <div className="shrink-0 relative w-12 h-12 rounded-full overflow-hidden">
        <Image src={userAvatar} fill alt="user-avatar" />
      </div>
      <div className="shrink w-full flex flex-col gap-[2px]">
        <div className="flex gap-1 items-center">
          <div className="flex gap-1 items-center hover:underline cursor-pointer">
            <h3 className="text-sm font-bold text-[#1B1B1B]">
              {userDisplayName}
            </h3>
            <p className="font text-xs text-[#5B5B5B]">@{username}</p>
          </div>
          <div className="flex items-center text-[4px]">&#8226;</div>
          <p className="text-sm font-light">{time}</p>
        </div>
        <p className="text-sm text-[#2B2B2B]">{text}</p>
        <div className="pt-1 pb-3 border-b border-[#D7D7D7]">
          <MediaLayout media={media} />
        </div>
        <div className="flex justify-between md:grid grid-cols-5 pt-3">
          <button className="flex gap-1">
            <div className="relative w-4 h-4">
              <Image src="/_assets/comment-icon.svg" fill alt="comment-icon" />
            </div>
            <p className="text-xs font-thin my-auto text-[#5B5B5B]">
              {replies}
            </p>
          </button>
          <button className="flex gap-1">
            <div className="relative w-4 h-4">
              <Image src="/_assets/repost-icon.svg" fill alt="repost-icon" />
            </div>
            <p className="text-xs font-thin my-auto text-[#5B5B5B]">
              {reposts}
            </p>
          </button>
          <button className="flex gap-1">
            <div className="relative w-4 h-4">
              <Image src="/_assets/like-icon.svg" fill alt="like-icon" />
            </div>
            <p className="text-xs font-thin my-auto text-[#5B5B5B]">{likes}</p>
          </button>
          <button className="flex gap-1">
            <div className="relative w-4 h-4">
              <Image src="/_assets/share-icon.svg" fill alt="share-icon" />
            </div>
            <p className="text-xs font-thin my-auto text-[#5B5B5B]">{shares}</p>
          </button>

          <button className="relative w-4 h-4 justify-self-end">
            <Image src="/_assets/bookmark-icon.svg" fill alt="bookmark-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Echo;
