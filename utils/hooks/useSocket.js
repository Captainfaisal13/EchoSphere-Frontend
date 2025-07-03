import { useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import {
  setShouldNotificationClear,
  setShowNotificationsToast,
  incrementUserUnreadNotificationsCount,
} from "../../redux/slices/userSlice";

export const useSocket = () => {
  const socket = useRef(null);
  const pathName = usePathname();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const pathRef = useRef(pathName);

  // Initialize socket connection when the component mounts
  useEffect(() => {
    socket.current = io(process.env.NEXT_PUBLIC_BACKEND_BASE_URL, {
      transports: ["websocket"],
    });
    return () => {
      socket.current.disconnect();
    };
  }, []);

  // Register the user with the socket server when the user is available
  useEffect(() => {
    if (user?.userId && socket.current) {
      console.log({ socket, user });
      socket.current.emit("register", user.userId);
    }
  }, [user]);

  // Clear notifications when the path changes, except for the notifications page
  // and set the pathRef to the current pathName
  useEffect(() => {
    pathRef.current = pathName;
    if (pathName !== "/notifications") {
      dispatch(setShouldNotificationClear(true));
      dispatch(setShowNotificationsToast(false));
    }
  }, [pathName]);

  useEffect(() => {
    const handleNotification = (message) => {
      console.log("New notification:", message);

      if (pathRef.current === "/notifications") {
        dispatch(setShouldNotificationClear(false));
        dispatch(incrementUserUnreadNotificationsCount());
        dispatch(setShowNotificationsToast(true));
      } else {
        dispatch(incrementUserUnreadNotificationsCount());
      }
    };

    socket.current?.on("notification", handleNotification);

    return () => {
      socket.current?.off("notification", handleNotification);
    };
  }, [socket]);

  return socket;
};
