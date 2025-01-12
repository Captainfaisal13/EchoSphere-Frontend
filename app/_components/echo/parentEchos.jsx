import Image from "next/image";
import Link from "next/link";
import React from "react";
import EchoOptions from "../reusables/echoOptions";
import MediaLayout from "../reusables/mediaLayout";
import ReplyButton from "../reusables/replyButton";
import LikeButton from "../reusables/likeButton";
import ReEchoButton from "../reusables/reEchoButton";
import { formatFullDate, getFormattedContent } from "../navbar/util";
import ShareButton from "../reusables/shareButton";
import BookmarkButton from "../reusables/bookmarkButton";
import CrownIcon from "../../../public/_assets/svgComponents/crownIcon";

const ParentEchos = ({ parentTweets }) => {
  return (
    <>
      {parentTweets.map((echo) => {
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
                    parentTweet && "bg-border-3"
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
                  <div className="flex">
                    <h2 className="text-base font-semibold text-text-2">
                      {name}
                    </h2>
                    {username === "captainfaisal" && (
                      <div className="ml-1 fill-text-1 my-auto">
                        <CrownIcon />
                        {/* <Image src="/_assets/crown-icon.svg" fill alt="crown-icon" /> */}
                      </div>
                    )}
                  </div>
                  <h3 className="text-sm text-text-3">@{username}</h3>
                </Link>
              </div>
              <div className="my-auto">
                <EchoOptions echo={echo} />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-14 pt-[2px]">
                <div className="w-[2px] h-full bg-border-3 mx-auto"></div>
              </div>
              <div className="w-full">
                <p className="text-lg text-text-4 word-container">
                  {getFormattedContent(content)}
                </p>
                <div className="pt-1">
                  <MediaLayout media={media} />
                </div>
                <div className="py-2 text-xs text-text-3 mt-4 flex gap-2 font-light">
                  {formatFullDate(new Date(createdAt))}
                </div>
                <div
                  className={`flex justify-between md:grid grid-cols-5 pt-3 border-t border-border-3 ${
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
                  <ShareButton echoId={id} shares={shares} />
                  <BookmarkButton echoId={id} isEchoBookmarked={isBookmarked} />
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
