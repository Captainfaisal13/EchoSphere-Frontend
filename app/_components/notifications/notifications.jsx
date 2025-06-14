"use client";
import React from "react";
import SectionHeader from "../reusables/sectionHeader";
import { useGetNotifications } from "../../../network/customHooks";
import Echo from "../reusables/echo";
import SingleNotification from "./singleNotification";

const Notifications = () => {
  const { data: notifications, isLoading } = useGetNotifications();
  return (
    <>
      <SectionHeader heading="Notifications" />
      {isLoading ? (
        "Loading..."
      ) : (
        <div className="px-2 md:px-5 py-2 md:py-4 flex flex-col gap-2 md:gap-4">
          {notifications.map(
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
          )}
        </div>
      )}
    </>
  );
};

export default Notifications;
