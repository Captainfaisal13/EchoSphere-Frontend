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
    return <EchoSkeleton count={5} />;
  }

  if (status === "error") {
    return <p>{error}</p>;
  }

  return (
    <div className="min-h-[calc(100vh-96px)] md:min-h-[calc(100vh-50px)]">
      <Echos
        echos={data.pages}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </div>
  );
};

export default LikeEchoList;
