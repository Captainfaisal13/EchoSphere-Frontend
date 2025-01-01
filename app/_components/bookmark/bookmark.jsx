"use client";
import React from "react";
import { useGetBookmarkPosts } from "../../../network/customHooks";
import Echos from "../reusables/Echos";
import SectionHeader from "../reusables/sectionHeader";
import EchoSkeleton from "../reusables/echoSkeleton";

const Bookmark = () => {
  const {
    data,
    status,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetBookmarkPosts();

  console.log({ data });

  return (
    <>
      <SectionHeader heading="Bookmark" />

      {status === "pending" ? (
        <EchoSkeleton count={10} />
      ) : status === "error" ? (
        <p>{error}</p>
      ) : (
        <Echos
          echos={data.pages}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      )}
    </>
  );
};

export default Bookmark;
