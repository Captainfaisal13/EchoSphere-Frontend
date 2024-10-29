"use client";
import React from "react";
import Echos from "../reusables/Echos";
import { useGetVideosEchos } from "../../../network/customHooks";

const PostEchoList = ({ userId }) => {
  const { data, isLoading, isError, error } = useGetVideosEchos();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <p>{error}</p>;
  }

  return <Echos echos={data.AllTweets} />;
};

export default PostEchoList;
