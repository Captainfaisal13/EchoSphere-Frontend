import React from "react";
import { useClearUnreadNotificationsCount } from "../../../network/customHooks";
import {
  clearUserUnreadNotificationsCount,
  setShouldNotificationClear,
  setShowNotificationsToast,
} from "../../../redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";

const NotificationToast = () => {
  const dispatch = useDispatch();
  const { mutate: clearNotificationsOnServer } =
    useClearUnreadNotificationsCount();

  const queryClient = useQueryClient();

  const handleRefreshNotifications = () => {
    clearNotificationsOnServer();
    dispatch(clearUserUnreadNotificationsCount());
    queryClient.invalidateQueries({
      queryKey: ["get-notifications"],
    });
    dispatch(setShowNotificationsToast(false));
    dispatch(setShouldNotificationClear(true));
  };

  return (
    <div className="fixed top-32 md:top-20 left-1/2 transform -translate-x-1/2 z-50 text-xs min-w-max">
      <button
        className="bg-bg-2 border border-border-2 text-text-1 px-4 py-2 rounded-2xl shadow-lg animate-bounce"
        onClick={handleRefreshNotifications}
      >
        ↑ New notifications. Click to refresh
      </button>
    </div>
  );
};

export default NotificationToast;
