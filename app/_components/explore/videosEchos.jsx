import React from "react";
import { getVideosEchos } from "../../../network/apiCalls";
import Echos from "../reusables/Echos";

const VideosEchoList = async () => {
  const data = await getVideosEchos();
  const echos = data.AllTweets.map((echo) => {
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

export default VideosEchoList;
