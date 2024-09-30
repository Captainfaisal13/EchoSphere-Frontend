import React from "react";
import Echo from "../reusables/echo";
import { getPhotosEchos } from "../../../network/apiCalls";
import Echos from "../reusables/Echos";

const PhotosEchoList = async () => {
  const data = await getPhotosEchos();
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

export default PhotosEchoList;
