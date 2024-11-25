"use client";
import Echos from "../reusables/Echos";
import { useGetUserReplies } from "../../../network/customHooks";

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

export default ReplyEchoList;
