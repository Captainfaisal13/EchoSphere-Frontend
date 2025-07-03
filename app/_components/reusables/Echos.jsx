"use client";
import React, { useEffect, useRef, useState } from "react";
import Echo from "./echo";
import Loader from "./../reusables/loader";

const Echos = ({ echos, fetchNextPage, hasNextPage, isFetchingNextPage }) => {
  const observerRef = useRef();
  const [fetchFlag, setFetchFlag] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (observerRef.current) {
        const rect = observerRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && hasNextPage && !fetchFlag) {
          console.log("scrolling");
          setFetchFlag(true);
          fetchNextPage();
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [fetchNextPage, hasNextPage, fetchFlag]);

  useEffect(() => {
    if (!isFetchingNextPage) {
      setFetchFlag(false);
    }
  }, [isFetchingNextPage]);

  return (
    <div className="px-2 md:px-5 pt-2 pb-16 md:pt-4 md:pb-4 flex flex-col gap-2 md:gap-4">
      {echos.map((currentPage) => {
        return currentPage.map((echo) => <Echo key={echo._id} echo={echo} />);
      })}
      <div ref={observerRef}>{hasNextPage && <Loader />}</div>
    </div>
  );
};

export default Echos;
