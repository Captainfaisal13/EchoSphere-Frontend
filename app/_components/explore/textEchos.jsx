"use client";
import { useGetTextEchos } from "../../../network/customHooks";
import { useGlobalContext } from "../../context";
import Echos from "../reusables/Echos";

const TextEchoList = () => {
  const { data, isLoading, isError, error } = useGetTextEchos();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <p>{error}</p>;
  }

  return <Echos echos={data.AllTweets} />;
};

export default TextEchoList;
