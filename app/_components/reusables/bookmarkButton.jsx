"use client";
import React, { useEffect, useState } from "react";
import { useBookmarkEcho } from "../../../network/customHooks";
import { useQueryClient } from "@tanstack/react-query";
import BookmarkIcon from "../../../public/_assets/svgComponents/bookmarkIcon";

const BookmarkButton = ({ isEchoBookmarked, echoId }) => {
  const queryClient = useQueryClient();
  const { mutate: bookmarkEcho } = useBookmarkEcho();
  const [isBookmarked, setIsBookmarked] = useState(isEchoBookmarked);

  const handleBookmark = async (e) => {
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
        isBookmarked
          ? "text-text-1 stroke-none"
          : `text-transparent stroke-text-3`
      }`}
      onClick={handleBookmark}
    >
      <BookmarkIcon />
    </button>
  );
};

export default BookmarkButton;
