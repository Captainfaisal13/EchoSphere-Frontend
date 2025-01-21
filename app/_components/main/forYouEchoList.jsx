"use client";
import Echos from "../reusables/Echos";
import { useGetUserEchos } from "../../../network/customHooks";
import EchoSkeleton from "../reusables/echoSkeleton";
import { useSelector } from "react-redux";

const ForYouEchoList = () => {
  const { user } = useSelector((state) => state.user);

  const { data, isLoading, isError, error } = useGetUserEchos({
    userId: user?.userId,
  });

  if (isLoading) {
    return <EchoSkeleton count={5} />;
  }

  if (isError) {
    return <p>{error}</p>;
  }

  console.log({ echos: data.detailedTweets });

  return <Echos echos={data.detailedTweets} />;
};

export default ForYouEchoList;
