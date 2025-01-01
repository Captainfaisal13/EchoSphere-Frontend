"use client";
import { useGetRecentEchos } from "../../../network/customHooks";
import Echos from "../reusables/Echos";
import EchoSkeleton from "../reusables/echoSkeleton";

const RecentEchoList = () => {
  const {
    data,
    status,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetRecentEchos();

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

export default RecentEchoList;
