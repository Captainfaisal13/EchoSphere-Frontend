import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useClearUnreadNotificationsCount } from "../../network/customHooks";
import { clearUserUnreadNotificationsCount } from "../../redux/slices/userSlice";
import { usePathname } from "next/navigation";

export const useNotificationClear = () => {
  const { user, shouldNotificationClear } = useSelector((state) => state.user);
  const pathName = usePathname();

  const dispatch = useDispatch();

  const { mutate: clearNotificationsOnServer } =
    useClearUnreadNotificationsCount();

  useEffect(() => {
    // Clear notifications when the user navigates to the notifications page
    // and reset the unread notifications count in the Redux store
    if (pathName === "/notifications") {
      if (user?.unreadNotificationsCount > 0 && shouldNotificationClear) {
        clearNotificationsOnServer();
        dispatch(clearUserUnreadNotificationsCount());
      }
    }
  }, [
    pathName,
    user,
    clearNotificationsOnServer,
    dispatch,
    shouldNotificationClear,
  ]);
};

export default useNotificationClear;
