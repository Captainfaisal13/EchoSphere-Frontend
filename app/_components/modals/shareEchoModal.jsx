import React from "react";
import Modal from "../reusables/modal";
import Image from "next/image";
import CloseIcon from "../../../public/_assets/svgComponents/closeIcon";
import { useGlobalContext } from "../../context";
import { useShareEcho } from "../../../network/customHooks";
import { useQueryClient } from "@tanstack/react-query";

const ShareButtons = [
  {
    id: 0,
    name: "copy",
  },

  { id: 1, name: "twitter" },
  { id: 2, name: "whatsapp" },
  { id: 3, name: "facebook" },
  { id: 4, name: "linkedin" },
];

const ShareEchoModal = ({ isOpen, setIsOpen }) => {
  const queryClient = useQueryClient();
  const { shareEchoData, setShareEchoData } = useGlobalContext();
  const { mutate: shareEcho } = useShareEcho();

  const onClose = () => {
    setIsOpen(false);
    setShareEchoData(null);
  };

  const tweetUrl =
    "https://www.youtube.com/watch?v=_OCVnHdvV2E&ab_channel=Mythpat";
  const handleShare = (platform) => {
    if (platform === "copy") {
      navigator.clipboard.writeText(tweetUrl);
      alert("Link copied to clipboard!");
    } else {
      const shareLinks = {
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          "Check out this tweet!"
        )}&url=${encodeURIComponent(tweetUrl)}`,
        whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(
          `Check out this tweet! ${tweetUrl}`
        )}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          tweetUrl
        )}`,
        linkedin: `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
          tweetUrl
        )}`,
      };
      shareEcho(shareEchoData, {
        onSettled: () => {
          if (!shareEchoData) return;

          // updating the reply count on the query cache for each tweets/echos
          const previousEchos = queryClient.getQueriesData({
            queryKey: ["echo-list-query"],
          });

          previousEchos.forEach(([queryKey, queryData]) => {
            // Check if the tweet exists in the current query's data
            if (queryData?.pages) {
              const updatedPages = queryData.pages.map((page) => {
                return page.map((echo) => {
                  if (echo?._id === shareEchoData) {
                    return {
                      ...echo,
                      shareCount: echo?.shareCount + 1,
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
            shareEchoData,
          ]);

          if (previousEcho) {
            console.log("found previous", { previousEcho });

            const updatedEcho = {
              ...previousEcho,
              detailedTweet: {
                ...previousEcho?.detailedTweet,
                shareCount: previousEcho?.detailedTweet?.shareCount + 1,
              },
            };
            queryClient.setQueryData(
              ["get-single-echo", shareEchoData],
              updatedEcho
            );
          }
        },
        onSuccess: (data) => {
          console.log(data);
          queryClient.invalidateQueries({
            queryKey: ["echo-query"],
          });
        },
      });
      window.open(shareLinks[platform], "_blank");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} postion="center" size="small">
      <div className="relative bg-bg-4 rounded-md p-4 text-text-1">
        <div className="flex justify-between">
          <h1 className="text-base font-semibold text-left w-full">
            Share echo through ...
          </h1>
          <div className="my-auto cursor-pointer fill-text-1" onClick={onClose}>
            <CloseIcon width="16" height="16" />
          </div>
        </div>
        {isOpen && (
          <div className="flex justify-between gap-4 overflow-x-scroll">
            {ShareButtons.map(({ id, name }) => {
              return (
                <button
                  key={id}
                  className="space-y-1 mt-4 mb-2"
                  onClick={() => handleShare(name)}
                >
                  <div className="size-[58px] p-4 bg-white rounded-full mx-auto">
                    <div className="size-[22px] relative m-auto">
                      <Image
                        src={`/_assets/${name}-icon.svg`}
                        fill
                        alt={`${name}-icon`}
                      />
                    </div>
                  </div>
                  <p className="text-xs">{name}</p>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ShareEchoModal;
