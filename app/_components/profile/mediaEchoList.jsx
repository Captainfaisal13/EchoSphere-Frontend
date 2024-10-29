"use client";
import React from "react";
import Echos from "../reusables/Echos";
import { useGetVideosEchos } from "../../../network/customHooks";

const MediaEchoList = ({ userId }) => {
  const { data, isLoading, isError, error } = useGetVideosEchos();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <p>{error}</p>;
  }

  return <Echos echos={data.AllTweets} />;
  // const data = await getEchos({ userId });
  // const echos = data.detailedTweets.map((echo) => {
  //   return {
  //     ...echo,
  //     text: echo.content,
  //     time: "5hr",
  //     replies: "2.5k",
  //     shares: "569",
  //   };
  // });
  // return <Echos echos={echos} />;
};

export default MediaEchoList;
