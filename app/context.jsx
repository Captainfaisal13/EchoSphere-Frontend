"use client";
import { useTheme } from "next-themes";
import React, { useContext, useEffect } from "react";
import { fetchUser } from "../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { theme, setTheme } = useTheme();
  const { user } = useSelector((state) => state.user);

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
