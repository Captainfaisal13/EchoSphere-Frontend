"use client";
import Echos from "../reusables/Echos";
import { useGetUserLikedPosts } from "../../../network/customHooks";
import EchoSkeleton from "../reusables/echoSkeleton";

const LikeEchoList = ({ username }) => {
  const {
    data,
    status,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetUserLikedPosts({
    username,
  });

  if (status === "pending") {
    return <EchoSkeleton count={3} />;
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

export default LikeEchoList;
