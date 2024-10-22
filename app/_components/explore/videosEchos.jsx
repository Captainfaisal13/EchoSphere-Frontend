import React from "react";
import { getVideosEchos } from "../../../network/apiCalls";
import Echos from "../reusables/Echos";

const VideosEchoList = async () => {
  const data = await getVideosEchos();
  const echos = data.AllTweets;

  return <Echos echos={echos} />;
};

export default VideosEchoList;
