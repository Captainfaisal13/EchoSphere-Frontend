"use client";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";
import ReplyIcon from "../../../public/_assets/svgComponents/replyIcon";
import { useRouter } from "next/navigation";

const ReplyButton = ({ replies, echo }) => {
  const { setShowCreateModal, setReplyEchoData, user, isLoading } =
    useGlobalContext();
  const router = useRouter();

  const [repliesCount, setRepliesCount] = useState(replies);

  useEffect(() => {
    setRepliesCount(replies);
  }, [replies]);

  const handleReplyButton = (e) => {
    e.stopPropagation();

    if (!isLoading && !user) {
      router.push("/login");
      return;
    }

    setReplyEchoData({
      ...echo,
    });
    setShowCreateModal(true);
  };

  return (
    <button className="flex gap-1" onClick={handleReplyButton}>
      <div className="stroke-text-3">
        <ReplyIcon height="16px" width="16px" />
      </div>
      {/* <div className="relative w-4 h-4">
        <Image src="/_assets/comment-icon.svg" fill alt="reply-icon" />
      </div> */}
      <p className="text-xs font-thin my-auto text-text-3">{repliesCount}</p>
    </button>
  );
};

export default ReplyButton;
