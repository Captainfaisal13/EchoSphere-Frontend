"use client";
import React, { useEffect, useState } from "react";
import { useBookmarkEcho } from "../../../network/customHooks";
import { useQueryClient } from "@tanstack/react-query";
import BookmarkIcon from "../../../public/_assets/svgComponents/bookmarkIcon";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const BookmarkButton = ({ isEchoBookmarked, echoId }) => {
  const queryClient = useQueryClient();
  const { user, isLoading } = useSelector((state) => state.user);
  const router = useRouter();

  const { mutate: bookmarkEcho } = useBookmarkEcho();
  const [isBookmarked, setIsBookmarked] = useState(isEchoBookmarked);

  const handleBookmark = async (e) => {
    e.stopPropagation();

    if (!isLoading && !user) {
      router.push("/login");
      return;
    }

    // Optimistic UI update
    setIsBookmarked(!isBookmarked);
    bookmarkEcho(echoId, {
      onSettled: () => {
        // updating the reply count on the query cache for each tweets/echos
        const previousEchos = queryClient.getQueriesData({
          queryKey: ["echo-list-query"],
        });

        previousEchos.forEach(([queryKey, queryData]) => {
          // Check if the tweet exists in the current query's data
          if (queryData?.pages) {
            const updatedPages = queryData.pages.map((page) => {
              return page.map((echo) => {
                if (echo?._id === echoId) {
                  return {
                    ...echo,
                    isBookmarked: !echo?.isBookmarked,
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

        const previousEcho = queryClient.getQueryData([
          "get-single-echo",
          echoId,
        ]);

        if (previousEcho) {
          console.log("found previous", { previousEcho });

          const updatedEcho = {
            ...previousEcho,
            detailedTweet: {
              ...previousEcho?.detailedTweet,
              isBookmarked: !previousEcho?.detailedTweet?.isBookmarked,
            },
          };
          queryClient.setQueryData(["get-single-echo", echoId], updatedEcho);
        }
      },
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["echo-list-query"],
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
