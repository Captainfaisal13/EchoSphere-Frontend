import React from "react";
import Notifications from "../_components/notifications/notifications";
import CheckAuth from "../checkAuth";

const NotificationsPage = () => {
  return (
    <CheckAuth>
      <Notifications />
    </CheckAuth>
  );
};

export default NotificationsPage;
