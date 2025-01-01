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
      onSettled: () => {
        // updating the likes on the query cache for each tweets/echos
        const previousEchos = queryClient.getQueriesData({
          queryKey: ["echo-list-query"],
        });

        previousEchos.forEach(([queryKey, queryData]) => {
          // Check if the tweet exists in the current query's data
          if (queryData?.pages) {
            const updatedPages = queryData.pages.map((page) => {
              return page.map((echo) => {
                if (echo?._id === echoId) {
                  console.log("true", echo?._id);

                  return {
                    ...echo,
                    likes_count: echo?.isLiked
                      ? echo?.likes_count - 1
                      : echo?.likes_count + 1,
                    isLiked: !echo?.isLiked,
                  };
                }
                return echo;
              });
            });

            // Update the cache for this query
            queryClient.setQueryData(queryKey, {
              ...queryData,
              pages: updatedPages,
            });
            console.log({ queryKey, queryData });
            console.log({ updatedPages });
          }
        });
        // console.log({ previousEchos });

        const previousEcho = queryClient.getQueryData([
          "get-single-echo",
          echoId,
        ]);

        console.log({ previousEcho });

        if (previousEcho) {
          const updatedEcho = {
            ...previousEcho,
            detailedTweet: {
              ...previousEcho?.detailedTweet,
              likes_count: previousEcho?.detailedTweet?.isLiked
                ? previousEcho?.detailedTweet?.likes_count - 1
                : previousEcho?.detailedTweet?.likes_count + 1,
              isLiked: !previousEcho?.detailedTweet?.isLiked,
            },
          };

          console.log({ updatedEcho });
          queryClient.setQueryData(["get-single-echo", echoId], updatedEcho);
        }
      },
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["echo-list-query"],
        });
        queryClient.invalidateQueries({
          queryKey: ["get-single-echo", echoId],
        });
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
            : "fill-transparent stroke-text-3"
        }`}
      >
        <LikeIcon />
      </div>
      <p className="text-xs font-thin my-auto text-text-3">{likeCount}</p>
    </button>
  );
};

export default LikeButton;
