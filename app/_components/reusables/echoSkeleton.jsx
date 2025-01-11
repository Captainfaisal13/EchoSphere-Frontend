import React from "react";
import ReplyIcon from "../../../public/_assets/svgComponents/replyIcon";
import ReEchoIcon from "../../../public/_assets/svgComponents/reEchoIcon";
import LikeIcon from "../../../public/_assets/svgComponents/likeIcon";
import ShareIcon from "../../../public/_assets/svgComponents/shareIcon";
import BookmarkIcon from "../../../public/_assets/svgComponents/bookmarkIcon";

const EchoSkeleton = ({ count = 1 }) => {
  return (
    <div className="py-2">
      {Array(count)
        .fill(",")
        .map((item, index) => (
          <div
            key={index}
            className="px-2 md:px-5 py-2 md:py-2 flex flex-col gap-2 md:gap-4 animate-pulse"
          >
            <div className="flex p-4 gap-2 bg-bg-4 rounded-md">
              <div className="shrink-0 relative size-10 md:size-12 rounded-full overflow-hidden bg-bg-1"></div>
              <div className="shrink w-full flex flex-col gap-[2px]">
                <div className="flex gap-1 items-center text-text-2 ">
                  <div className="cursor-pointer flex items-center">
                    <div className="w-20 max-w-full rounded-lg bg-bg-1 h-5"></div>
                  </div>
                  <div className="w-10 rounded-lg bg-bg-1 h-5"></div>
                </div>
                <div className="w-full rounded-lg bg-bg-1 h-8"></div>

                <div className="pt-1 pb-3 border-b border-border-3"></div>
                <div className="flex justify-between md:grid grid-cols-5 pt-3">
                  <button className="flex gap-1">
                    <div className="stroke-text-3">
                      <ReplyIcon height="16px" width="16px" />
                    </div>
                  </button>
                  <button className="flex gap-1">
                    <div className="fill-text-3">
                      <ReEchoIcon />
                    </div>
                  </button>
                  <button className="flex gap-1">
                    <div className="fill-transparent stroke-text-3">
                      <LikeIcon />
                    </div>
                  </button>
                  <button className="flex gap-1">
                    <div className="fill-text-3">
                      <ShareIcon height="16px" width="16px" />
                    </div>
                  </button>
                  <button className="my-auto justify-self-end">
                    <div className="text-transparent stroke-text-3">
                      <BookmarkIcon />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default EchoSkeleton;
