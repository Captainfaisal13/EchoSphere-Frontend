import React from "react";
import { getEchos } from "../../../network/apiCalls";
import Echos from "../reusables/Echos";

const LikeEchoList = async ({ userId }) => {
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
  return <Echos echos={echos} />;
};

export default LikeEchoList;
