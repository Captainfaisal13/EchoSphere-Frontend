import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const EchoStats = ({ echoLikedCount, reEchoedCount, echoReplyCount }) => {
  const [likeCount, setLikeCount] = useState(echoLikedCount);
  const [reEchoCount, setReEchoCount] = useState(reEchoedCount);
  const [replyEchoCount, setReplyEchoCount] = useState(echoReplyCount);

  useEffect(() => {
    setLikeCount(echoLikedCount);
    setReEchoCount(reEchoedCount);
    setReplyEchoCount(echoReplyCount);
  }, [echoLikedCount, reEchoedCount, echoReplyCount]);

  return (
    (likeCount > 0 || reEchoCount > 0 || replyEchoCount > 0) && (
      <div className="py-2 border-t border-border-1 flex gap-2 text-sm text-text-3">
        {likeCount > 0 && (
          <p>
            {likeCount} <span className="text-xs text-text-3">likes</span>
          </p>
        )}
        {reEchoCount > 0 && (
          <p>
            {reEchoCount} <span className="text-xs text-text-3">reposts</span>
          </p>
        )}
        {replyEchoCount > 0 && (
          <p>
            {replyEchoCount}{" "}
            <span className="text-xs text-text-3">replies</span>
          </p>
        )}
      </div>
    )
  );
};

export default EchoStats;
