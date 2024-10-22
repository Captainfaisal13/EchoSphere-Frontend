"use client";
import React, { useEffect, useState } from "react";
import { useLikeDislikeEcho } from "../../../network/customHooks";
import LikeIcon from "../../../public/_assets/svgComponents/likeIcon";
import { useQueryClient } from "@tanstack/react-query";

const LikeButton = ({ isEchoLiked, echoLikedCount, echoId }) => {
  const queryClient = useQueryClient();
  const { mutate: likeDislikeEcho } = useLikeDislikeEcho();
  const [isLiked, setIsLiked] = useState(isEchoLiked);
  const [likeCount, setLikeCount] = useState(echoLikedCount);

  const handleLike = async (e) => {
    e.preventDefault();

    // Optimistic UI update
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    setIsLiked(!isLiked);
    likeDislikeEcho(echoId, {
      onSuccess: () => {
        Promise.all([
          queryClient.invalidateQueries(["get-single-echos", echoId]),
          queryClient.invalidateQueries(["get-user-echos"]),
          queryClient.invalidateQueries(["get-following-echos"]),
          queryClient.invalidateQueries(["get-recent-echos"]),
        ]);
      },
    });
  };

  useEffect(() => {
    setIsLiked(isEchoLiked);
    setLikeCount(echoLikedCount);
  }, [isEchoLiked, echoLikedCount]);

  return (
    <button className="flex gap-1" onClick={handleLike}>
      <div
        className={`${
          isLiked
            ? "fill-red-600 stroke-red-600"
            : "fill-transparent stroke-[#5B5B5B]"
        }`}
      >
        <LikeIcon />
      </div>
      <p className="text-xs font-thin my-auto text-[#5B5B5B]">{likeCount}</p>
    </button>
  );
};

export default LikeButton;
