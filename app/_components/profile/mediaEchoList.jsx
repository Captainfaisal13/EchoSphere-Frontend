"use client";
import Echos from "../reusables/Echos";
import { useGetUserMediaPosts } from "../../../network/customHooks";
import EchoSkeleton from "../reusables/echoSkeleton";
import Link from "next/link";
import { useSelector } from "react-redux";

const MediaEchoList = ({ username }) => {
  const {
    data,
    status,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetUserMediaPosts({
    username,
  });

  const { user } = useSelector((state) => state.user);

  if (status === "pending") {
    return <EchoSkeleton count={5} />;
  }

  if (status === "error") {
    return <p>{error}</p>;
  }

  return (
    <div className="min-h-[calc(100vh-96px)] md:min-h-[calc(100vh-50px)]">
      {data.pages[0]?.length === 0 ? (
        <div className="text-center pt-10 mx-4">
          {user && user.username === username ? (
            <h1 className="text-text-1">
              This feed is empty! You may need to{" "}
              <Link href="/explore" className="text-text-9">
                explore
              </Link>{" "}
              more
            </h1>
          ) : (
            <h1 className="text-text-1">This feed is empty!</h1>
          )}
        </div>
      ) : (
        <Echos
          echos={data.pages}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      )}
    </div>
  );
};

export default MediaEchoList;
