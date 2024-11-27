"use client";
import React, { useEffect, useState } from "react";
import { useReEcho } from "../../../network/customHooks";
import ReEchoIcon from "../../../public/_assets/svgComponents/reEchoIcon";
import { useQueryClient } from "@tanstack/react-query";

const ReEchoButton = ({ isReEcho, reEchoedCount, echoId }) => {
  const queryClient = useQueryClient();
  const { mutate: reEcho } = useReEcho();
  const [isReEchoed, setIsReEchoed] = useState(isReEcho);
  const [reEchoCount, setReEchoCount] = useState(reEchoedCount);

  const handleReEcho = async (e) => {
    e.preventDefault();

    // Optimistic UI update
    setReEchoCount(isReEchoed ? reEchoCount - 1 : reEchoCount + 1);
    setIsReEchoed(!isReEchoed);
    reEcho(echoId, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["echo-query"],
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
      <div className={`${isReEchoed ? "fill-green-500" : "fill-[#5B5B5B]"}`}>
        <ReEchoIcon />
      </div>
      <p className="text-xs font-thin my-auto text-[#5B5B5B]">{reEchoCount}</p>
    </button>
  );
};

export default ReEchoButton;
