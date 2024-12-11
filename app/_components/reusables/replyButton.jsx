"use client";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";
import ReplyIcon from "../../../public/_assets/svgComponents/replyIcon";

const ReplyButton = ({ replies, echo }) => {
  const { setShowCreateModal, setReplyEchoData } = useGlobalContext();
  const [repliesCount, setRepliesCount] = useState(replies);

  useEffect(() => {
    setRepliesCount(replies);
  }, [replies]);
  return (
    <button
      className="flex gap-1"
      onClick={(e) => {
        e.preventDefault();
        setReplyEchoData({
          ...echo,
        });
        setShowCreateModal(true);
      }}
    >
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
