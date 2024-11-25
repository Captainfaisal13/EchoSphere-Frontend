"use client";
import Echos from "../reusables/Echos";
import { useGetFollowingEchos } from "../../../network/customHooks";

const FollowingEchoList = () => {
  const {
    data,
    status,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetFollowingEchos();

  if (status === "pending") {
    return <h1>Loading...</h1>;
  }

  if (status === "error") {
    return <p>{error}</p>;
  }
  console.log(data);

  return (
    <Echos
      echos={data.pages}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
    />
  );
};

export default FollowingEchoList;
