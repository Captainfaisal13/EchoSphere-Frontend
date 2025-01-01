"use client";
import Echos from "../reusables/Echos";
import { useGetUserPosts } from "../../../network/customHooks";
import EchoSkeleton from "../reusables/echoSkeleton";

const PostEchoList = ({ username }) => {
  const {
    data,
    status,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetUserPosts({ username });

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

export default PostEchoList;
