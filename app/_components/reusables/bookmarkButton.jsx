"use client";
import React, { useEffect, useState } from "react";
import {
  useBookmarkEcho,
  useLikeDislikeEcho,
} from "../../../network/customHooks";
import LikeIcon from "../../../public/_assets/svgComponents/likeIcon";
import { useQueryClient } from "@tanstack/react-query";
import BookmarkIcon from "../../../public/_assets/svgComponents/bookmarkIcon";

const BookmarkButton = ({ isEchoBookmarked, echoId }) => {
  const queryClient = useQueryClient();
  const { mutate: bookmarkEcho } = useBookmarkEcho();
  const [isBookmarked, setIsBookmarked] = useState(isEchoBookmarked);

  const handleLike = async (e) => {
    e.preventDefault();

    // Optimistic UI update
    setIsBookmarked(!isBookmarked);
    bookmarkEcho(echoId, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["echo-query"],
        });
      },
    });
  };

  useEffect(() => {
    setIsBookmarked(isEchoBookmarked);
  }, [isEchoBookmarked]);

  return (
    // <button className="flex gap-1" onClick={handleLike}>
    //   <div
    //     className={`${
    //       isLiked
    //         ? "fill-red-600 stroke-red-600"
    //         : "fill-transparent stroke-[#5B5B5B]"
    //     }`}
    //   >
    //     <LikeIcon />
    //   </div>
    //   <p className="text-xs font-thin my-auto text-[#5B5B5B]">{likeCount}</p>
    // </button>
    <button
      className={`my-auto justify-self-end ${
        isBookmarked
          ? "text-black stroke-none"
          : "text-[#E9E9E9] stroke-[#5B5B5B]"
      }`}
      onClick={handleLike}
    >
      <BookmarkIcon />
      {/* <Image src="/_assets/bookmark-icon.svg" fill alt="bookmark-icon" /> */}
    </button>
  );
};

export default BookmarkButton;
