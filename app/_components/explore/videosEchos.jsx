"use client";
import Echos from "../reusables/Echos";
import { useGetVideosEchos } from "../../../network/customHooks";
import EchoSkeleton from "../reusables/echoSkeleton";

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
    return <EchoSkeleton count={5} />;
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
