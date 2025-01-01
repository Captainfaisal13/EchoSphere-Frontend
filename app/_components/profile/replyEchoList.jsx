"use client";
import Echos from "../reusables/Echos";
import { useGetUserReplies } from "../../../network/customHooks";
import EchoSkeleton from "../reusables/echoSkeleton";

const ReplyEchoList = ({ username }) => {
  const {
    data,
    status,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetUserReplies({ username });

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

export default ReplyEchoList;
