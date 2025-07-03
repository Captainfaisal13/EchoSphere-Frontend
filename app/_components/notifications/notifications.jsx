"use client";
import React, { useEffect, useRef, useState } from "react";
import SectionHeader from "../reusables/sectionHeader";
import { useGetNotifications } from "../../../network/customHooks";
import Echo from "../reusables/echo";
import SingleNotification from "./singleNotification";
import NotificationToast from "./notificationToast";
import { useSelector } from "react-redux";
import EchoSkeleton from "../reusables/echoSkeleton";
import Loader from "../reusables/loader";

const Notifications = () => {
  const {
    data: notifications,
    status,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetNotifications();
  const showNotificationsToast = useSelector(
    (state) => state.user.showNotificationsToast
  );

  const observerRef = useRef();

  useEffect(() => {
    const onScroll = () => {
      if (observerRef.current) {
        const rect = observerRef.current.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight &&
          hasNextPage &&
          !isFetchingNextPage
        ) {
          console.log("scrolling");
          fetchNextPage();
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <>
      <SectionHeader heading="Notifications" />
      <div className="relative">
        {showNotificationsToast && <NotificationToast />}
        {status === "pending" ? (
          <EchoSkeleton count={6} />
        ) : status === "error" ? (
          <p>{error}</p>
        ) : (
          <div className="px-2 md:px-5 py-2 md:py-4 flex flex-col gap-2 md:gap-4">
            {notifications.pages.map((currentPage) => {
              return currentPage.map(
                ({ _id, type, sender, tweet, repliedTweet, createdAt }) => {
                  return type !== "reply" ? (
                    <SingleNotification
                      key={_id}
                      type={type}
                      sender={sender}
                      tweet={tweet}
                      createdAt={createdAt}
                    />
                  ) : (
                    <Echo key={_id} echo={repliedTweet} />
                  );
                }
              );
            })}
            <div ref={observerRef}>{hasNextPage && <Loader />}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Notifications;
