"use client";
import Echos from "../reusables/Echos";
import { useGetVideosEchos } from "../../../network/customHooks";

const VideosEchoList = () => {
  const {
    data,
    status,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetVideosEchos();

  if (status === "pending") {
    return <h1>Loading...</h1>;
  }

  if (status === "error") {
    return <p>{error}</p>;
  }

  return (
    <Echos
      echos={data.pages}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
    />
  );
};

export default VideosEchoList;
