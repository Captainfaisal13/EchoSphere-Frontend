"use client";
import Echos from "../reusables/Echos";
import { useGetFollowingEchos } from "../../../network/customHooks";
import EchoSkeleton from "../reusables/echoSkeleton";
import Link from "next/link";

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
    return <EchoSkeleton count={5} />;
  }

  if (status === "error") {
    return <p>{error}</p>;
  }
  console.log(data);

  if (data.pages[0]?.length === 0) {
    return (
      <div className="text-center mt-[50%] -translate-y-[50%] mx-4">
        <h1 className="text-text-1">
          This feed is empty! You may need to{" "}
          <Link href="/discover" className="text-text-9">
            follow
          </Link>{" "}
          more users
        </h1>
      </div>
    );
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

export default FollowingEchoList;
