"use client";
import React, { useEffect, useState } from "react";
import { useReEcho } from "../../../network/customHooks";
import ReEchoIcon from "../../../public/_assets/svgComponents/reEchoIcon";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const ReEchoButton = ({ isReEcho, reEchoedCount, echoId }) => {
  const queryClient = useQueryClient();
  const { user, isLoading } = useSelector((state) => state.user);
  const router = useRouter();

  const { mutate: reEcho } = useReEcho();
  const [isReEchoed, setIsReEchoed] = useState(isReEcho);
  const [reEchoCount, setReEchoCount] = useState(reEchoedCount);

  const handleReEcho = async (e) => {
    e.stopPropagation();

    if (!isLoading && !user) {
      router.push("/login");
      return;
    }

    // Optimistic UI update
    setReEchoCount(isReEchoed ? reEchoCount - 1 : reEchoCount + 1);
    setIsReEchoed(!isReEchoed);
    reEcho(echoId, {
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
                    retweets_count: echo?.isRepost
                      ? echo?.retweets_count - 1
                      : echo?.retweets_count + 1,
                    isRepost: !echo?.isRepost,
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
              retweets_count: previousEcho?.detailedTweet?.isRepost
                ? previousEcho?.detailedTweet?.retweets_count - 1
                : previousEcho?.detailedTweet?.retweets_count + 1,
              isRepost: !previousEcho?.detailedTweet?.isRepost,
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
    setIsReEchoed(isReEcho);
    setReEchoCount(reEchoedCount);
  }, [isReEcho, reEchoedCount]);

  return (
    <button className="flex gap-1" onClick={handleReEcho}>
      <div className={`${isReEchoed ? "fill-green-500" : "fill-text-3"}`}>
        <ReEchoIcon />
      </div>
      <p className="text-xs font-thin my-auto text-text-3">{reEchoCount}</p>
    </button>
  );
};

export default ReEchoButton;
