import React from "react";
import Image from "next/image";
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
  } = echo;
  return (
    <div
      key={id}
      className="grid grid-cols-9 p-4 gap-2 bg-[#E9E9E9] rounded-md"
    >
      <div className="col-span-1">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image src={userAvatar} fill />
        </div>
      </div>
      <div className="flex flex-col gap-[2px] col-span-8">
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
        <p className="text-sm text-[#2B2B2B] pb-3 border-b border-[#D7D7D7]">
          {text}
        </p>
        <div className="grid grid-cols-5 pt-3">
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
              <Image src="/_assets/repost-icon.svg" fill alt="comment-icon" />
            </div>
            <p className="text-xs font-thin my-auto text-[#5B5B5B]">
              {reposts}
            </p>
          </button>
          <button className="flex gap-1">
            <div className="relative w-4 h-4">
              <Image src="/_assets/like-icon.svg" fill alt="comment-icon" />
            </div>
            <p className="text-xs font-thin my-auto text-[#5B5B5B]">{likes}</p>
          </button>
          <button className="flex gap-1">
            <div className="relative w-4 h-4">
              <Image src="/_assets/share-icon.svg" fill alt="comment-icon" />
            </div>
            <p className="text-xs font-thin my-auto text-[#5B5B5B]">{shares}</p>
          </button>

          <button className="relative w-4 h-4 justify-self-end">
            <Image src="/_assets/bookmark-icon.svg" fill alt="comment-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Echo;
