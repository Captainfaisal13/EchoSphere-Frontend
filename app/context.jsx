"use client";
import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [replyEchoData, setReplyEchoData] = useState(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareEchoData, setShareEchoData] = useState(null);

  const saveUser = (user) => {
    setUser(user);
  };

  const removeUser = () => {
    setUser(null);
  };

  const fetchUser = async () => {
    console.log("calling fetchuser");
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/users/showMe`,
        { withCredentials: true }
      );
      saveUser(data.user);
    } catch (error) {
      console.log({ error });
      removeUser();
    }
    setIsLoading(false);
  };

  const logoutUser = async () => {
    try {
      await axios.delete("/api/v1/auth/logout");
      removeUser();
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    // Get the saved theme from localStorage or default to light
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    console.log({ user });
  }, [user]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        saveUser,
        user,
        logoutUser,
        showCreateModal,
        setShowCreateModal,
        replyEchoData,
        setReplyEchoData,
        showShareModal,
        setShowShareModal,
        shareEchoData,
        setShareEchoData,
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
