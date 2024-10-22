import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const EchoStats = ({ echoLikedCount, reEchoedCount }) => {
  const [likeCount, setLikeCount] = useState(echoLikedCount);
  const [reEchoCount, setReEchoCount] = useState(reEchoedCount);

  useEffect(() => {
    setLikeCount(echoLikedCount);
    setReEchoCount(reEchoedCount);
  }, [echoLikedCount, reEchoedCount]);

  return (
    (likeCount > 0 || reEchoCount > 0) && (
      <div className="py-2 border-t border-[#D7D7D7] flex gap-2 text-sm">
        {likeCount > 0 && (
          <p>
            {likeCount} <span className="text-xs text-[#5B5B5B]">likes</span>
          </p>
        )}
        {reEchoCount > 0 && (
          <p>
            {reEchoCount}{" "}
            <span className="text-xs text-[#5B5B5B]">reposts</span>
          </p>
        )}
      </div>
    )
  );
};

export default EchoStats;
