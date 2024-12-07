"use client";
import React, { useEffect, useState } from "react";
import { useBookmarkEcho } from "../../../network/customHooks";
import { useQueryClient } from "@tanstack/react-query";
import BookmarkIcon from "../../../public/_assets/svgComponents/bookmarkIcon";

const BookmarkButton = ({
  isEchoBookmarked,
  echoId,
  bgColor = "text-[#E9E9E9]",
}) => {
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
    <button
      className={`my-auto justify-self-end ${
        isBookmarked ? "text-black stroke-none" : `${bgColor} stroke-[#5B5B5B]`
      }`}
      onClick={handleLike}
    >
      <BookmarkIcon />
      {/* <Image src="/_assets/bookmark-icon.svg" fill alt="bookmark-icon" /> */}
    </button>
  );
};

export default BookmarkButton;
