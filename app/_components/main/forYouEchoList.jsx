"use client";
import { useGlobalContext } from "../../context";
import Echos from "../reusables/Echos";
import { useGetUserEchos } from "../../../network/customHooks";

const ForYouEchoList = () => {
  const { user } = useGlobalContext();

  const { data, isLoading, isError, error } = useGetUserEchos({
    userId: user.userId,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <p>{error}</p>;
  }

  console.log({ echos: data.detailedTweets });

  return <Echos echos={data.detailedTweets} />;
};

export default ForYouEchoList;
