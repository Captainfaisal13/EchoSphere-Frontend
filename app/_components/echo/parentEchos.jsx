import Image from "next/image";
import Link from "next/link";
import React from "react";
import EchoOptions from "../reusables/echoOptions";
import MediaLayout from "../reusables/mediaLayout";
import ReplyButton from "../reusables/replyButton";
import LikeButton from "../reusables/likeButton";
import ReEchoButton from "../reusables/reEchoButton";
import { formatFullDate, getFormattedContent } from "../navbar/util";

const ParentEchos = ({ parentTweets }) => {
  return (
    <>
      {parentTweets.map((echo) => {
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
        return (
          <Link
            key={id}
            href={`/${username}/echo/${id}`}
            className="px-4 block"
          >
            <div className="flex gap-2">
              <div className="w-14 pb-[2px]">
                <div
                  className={`w-[2px] h-4 mx-auto ${
                    parentTweet && "bg-[#D7D7D7]"
                  }`}
                ></div>
              </div>
              <div className="w-full"></div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <div className="size-12 relative rounded-full overflow-hidden">
                  <Image
                    src={userAvatar}
                    fill
                    alt={`${username}-profile-image`}
                  />
                </div>
                <Link href={`/profile/${username}`} className="my-auto">
                  <h2 className="text-base font-semibold text-[#1B1B1B]">
                    {name}
                  </h2>
                  <h3 className="text-sm text-[#5B5B5B]">@{username}</h3>
                </Link>
              </div>
              <div className="my-auto">
                <EchoOptions echo={echo} />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-14 pt-[2px]">
                <div className="w-[2px] h-full bg-[#D7D7D7] mx-auto"></div>
              </div>
              <div className="w-full">
                <p className="text-lg text-[#2B2B2B]">
                  {getFormattedContent(content)}
                </p>
                <div className="pt-1">
                  <MediaLayout media={media} />
                </div>
                <div className="py-2 text-xs text-[#5B5B5B] mt-4 flex gap-2 font-light">
                  {formatFullDate(new Date(createdAt))}
                </div>
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
                      <Image
                        src="/_assets/share-icon.svg"
                        fill
                        alt="share-icon"
                      />
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
          </Link>
        );
      })}
    </>
  );
};

export default ParentEchos;
