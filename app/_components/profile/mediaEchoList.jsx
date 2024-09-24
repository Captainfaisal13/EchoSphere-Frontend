import React from "react";
import Echo from "../reusables/echo";
import { getEchos } from "../../../network/apiCalls";

const MediaEchoList = async ({ userId }) => {
  const data = await getEchos({ userId });
  const echos = data.detailedTweets.map((echo) => {
    return {
      ...echo,
      text: echo.content,
      time: "5hr",
      replies: "2.5k",
      shares: "569",
    };
  });
  return (
    <div className="px-2 md:px-5 py-2 md:py-4 flex flex-col gap-2 md:gap-4">
      {echos.map((echo, idx) => {
        return <Echo key={idx} echo={echo} />;
      })}
    </div>
  );
};

export default MediaEchoList;
