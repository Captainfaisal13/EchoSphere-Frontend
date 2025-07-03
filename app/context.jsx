"use client";
import { useTheme } from "next-themes";
import React, { createContext, useContext, useEffect } from "react";
import { fetchUser } from "../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSocket } from "../utils/hooks/useSocket";
import { useNotificationClear } from "../utils/hooks/useNotificationClear";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { theme, setTheme, systemTheme } = useTheme();
  const { user } = useSelector((state) => state.user);
  const socket = useSocket();
  useNotificationClear();
  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser());
    }
  }, [dispatch]);

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        systemTheme,
        socket: socket.current,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
