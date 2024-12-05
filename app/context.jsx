"use client";
import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
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
