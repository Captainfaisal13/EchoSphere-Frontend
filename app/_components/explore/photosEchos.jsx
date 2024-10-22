"use client";
import React from "react";
import Echos from "../reusables/Echos";
import { useGetPhotosEchos } from "../../../network/customHooks";

const PhotosEchoList = () => {
  const { data, isLoading, isError, error } = useGetPhotosEchos();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <p>{error}</p>;
  }

  return <Echos echos={data.AllTweets} />;
};

export default PhotosEchoList;
