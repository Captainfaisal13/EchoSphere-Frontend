"use client";
import React from "react";
import { useGetBookmarkPosts } from "../../../network/customHooks";
import Echos from "../reusables/Echos";
import SectionHeader from "../reusables/sectionHeader";

const Bookmark = () => {
  const {
    data,
    status,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetBookmarkPosts();

  if (status === "pending") {
    return <h1>Loading...</h1>;
  }

  if (status === "error") {
    return <p>{error}</p>;
  }

  console.log({ data });

  return (
    <>
      <SectionHeader heading="Bookmark" />
      <Echos
        echos={data.pages}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </>
  );
};

export default Bookmark;
