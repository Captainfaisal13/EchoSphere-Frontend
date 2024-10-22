"use client";
import React, { useState } from "react";
import { useGetSingleEcho } from "../../../../network/customHooks";
import BackIcon from "../../../../public/_assets/svgComponents/backIcon";
import Link from "next/link";
import Image from "next/image";
import MediaLayout from "../../../_components/reusables/mediaLayout";
import ReEchoButton from "../../../_components/reusables/reEchoButton";
import LikeButton from "../../../_components/reusables/likeButton";
import EchoOptions from "../../../_components/reusables/echoOptions";
import EchoStats from "../../../_components/reusables/echoStats";
import { formatFullDate } from "../../../_components/navbar/util";

const EchoPage = ({ params }) => {
  const { data, isLoading, isError } = useGetSingleEcho({
    echoId: params.postId,
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const echo = data.detailedTweet;
  console.log({ echo });

  const {
    _id: id,
    name,
    username,
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

  const formattedContent = content.split("\n").map((line, index) => {
    return (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    );
  });

  const time = formatFullDate(new Date(createdAt));
  return (
    <div>
      <div className="py-2 border-b-[1px] border-b-[#D7D7D7] px-4 relative">
        <Link href="/" className="my-auto p-[6px] absolute">
          <BackIcon />
        </Link>
        <h3 className="text-center text-xl font-semibold">Echo</h3>
      </div>
      <div className="p-4">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div className="size-12 relative rounded-full overflow-hidden">
              <Image src={userAvatar} fill alt={`${username}-profile-image`} />
            </div>
            <div className="my-auto">
              <h2 className="text-base font-semibold text-[#1B1B1B]">{name}</h2>
              <h3 className="text-sm text-[#5B5B5B]">@{username}</h3>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <button className="text-xs bg-black text-white py-2 px-4 rounded-3xl font-bold">
              Follow
            </button>
            <EchoOptions echo={echo} />
          </div>
        </div>
        <div className="p-2">
          <p className="text-lg text-[#2B2B2B]">{formattedContent}</p>
          <div className="pt-1">
            <MediaLayout media={media} />
          </div>
          <div className="py-2 text-xs text-[#5B5B5B] mt-4 flex gap-2 font-light">
            {time}
          </div>
          <EchoStats echoLikedCount={likes} reEchoedCount={reposts} />
          <div
            className={`flex justify-between md:grid grid-cols-5 pt-3 border-t border-[#D7D7D7] ${
              likes === 0 && reposts === 0 && "mt-5"
            }`}
          >
            <button className="flex gap-1">
              <div className="relative w-4 h-4">
                <Image
                  src="/_assets/comment-icon.svg"
                  fill
                  alt="comment-icon"
                />
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
              <Image
                src="/_assets/bookmark-icon.svg"
                fill
                alt="bookmark-icon"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EchoPage;
