import React from "react";
import LikeIcon from "../../../public/_assets/svgComponents/likeIcon";
import ReEchoIcon from "../../../public/_assets/svgComponents/reEchoIcon";
import ProfileIcon from "../../../public/_assets/svgComponents/profileIcon";
import { format } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/navigation";

const getNotificationTypeUtils = {
  like: {
    icon: (
      <div className="fill-red-600 stroke-red-600 pt-1">
        <LikeIcon height="24px" width="24px" />
      </div>
    ),
    text: "liked your post",
  },
  retweet: {
    icon: (
      <div className="fill-green-500 pt-1">
        <ReEchoIcon height="24px" width="24px" />
      </div>
    ),
    text: "reEchoed your post",
  },
  follow: {
    icon: (
      <div className="fill-bg-5 pt-1">
        <ProfileIcon height="24px" width="24px" />
      </div>
    ),
    text: "followed you",
  },
};

const SingleNotification = ({ _id, type, sender, tweet, createdAt }) => {
  const router = useRouter();

  return (
    <div
      key={_id}
      onClick={() =>
        router.push(
          type !== "follow"
            ? `/${tweet.username}/echo/${tweet._id}`
            : `/profile/${sender.username}`
        )
      }
      className="p-4 bg-bg-4 rounded-md flex gap-2  cursor-pointer"
    >
      {getNotificationTypeUtils[type]?.icon}
      <div className="space-y-2">
        <div
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/profile/${sender.username}`);
          }}
          className="shrink-0 relative size-8 rounded-full overflow-hidden"
        >
          <Image src={sender.avatar} fill alt="sender-avatar" />
        </div>
        <div className="text-sm text-text-2">
          <span
            onClick={(e) => {
              e.stopPropagation();
              router.push(`/profile/${sender.username}`);
            }}
            className="font-bold hover:underline"
          >
            {sender.name}
          </span>{" "}
          {getNotificationTypeUtils[type]?.text}
          <span className="text-xs text-text-3 mx-1 my-auto">·</span>
          <span className="text-text-3 text-xs my-auto">
            {format(new Date(createdAt), "M/d/yyyy")}
          </span>
        </div>
        <p className="text-xs text-text-3 line-clamp-2">{tweet?.content}</p>
      </div>
    </div>
  );
};

export default SingleNotification;
