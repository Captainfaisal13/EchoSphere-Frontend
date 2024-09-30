import React from "react";
import { getEchos } from "../../../network/apiCalls";
import Echos from "../reusables/Echos";

const PostEchoList = async ({ userId }) => {
  const data = await getEchos({ userId });
  const echos = data.detailedTweets.map((echo) => {
    return {
      ...echo,
      text: echo.content,
      time: "5hr",
      replies: "2.5k",
      shares: "569",
      // media: [
      //   "/_assets/images/sample-profile.jpg",
      //   "/_assets/images/dp.jpg",
      //   "/_assets/images/avatar1.png",
      //   // "/_assets/images/avatar2.png",
      // ],
    };
  });
  return <Echos echos={echos} />;
};

export default PostEchoList;
