"use client";
import { useGetRecentEchos } from "../../../network/customHooks";
import { useGlobalContext } from "../../context";
import Echos from "../reusables/Echos";

const RecentEchoList = () => {
  const { user } = useGlobalContext();

  const { data, isLoading, isError, error } = useGetRecentEchos({
    userId: user.userId,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <p>{error}</p>;
  }

  return <Echos echos={data.AllTweets} />;
};

export default RecentEchoList;
