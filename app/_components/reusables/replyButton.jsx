"use client";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";
import Image from "next/image";

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
      <div className="relative w-4 h-4">
        <Image src="/_assets/comment-icon.svg" fill alt="reply-icon" />
      </div>
      <p className="text-xs font-thin my-auto text-[#5B5B5B]">{repliesCount}</p>
    </button>
  );
};

export default ReplyButton;
