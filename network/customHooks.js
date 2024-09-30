"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createEcho,
  getEchos,
  getProfile,
  getRecentFeedEchos,
  login,
  signup,
} from "./apiCalls";

export const useSignup = () => {
  return useMutation({ mutationFn: (signupUser) => signup(signupUser) });
};

export const useLogin = () => {
  return useMutation({ mutationFn: (loginUser) => login(loginUser) });
};

export const useGetUserEchos = ({ userId }) => {
  return useQuery({
    queryKey: ["get-user-echos"],
    queryFn: () => getEchos({ userId }),
  });
};

export const useRecentEchos = () => {
  return useQuery({
    queryKey: ["get-recent-echos"],
    queryFn: () => getRecentFeedEchos(),
  });
};

export const useCreateEcho = () => {
  return useMutation({
    mutationFn: (echoContent) => createEcho(echoContent),
  });
};

// export const useGetProfile = ({ username }) => {
//   return useQuery({
//     queryKey: ["get-profile", username],
//     queryFn: () => getProfile({ username }),
//   });
// };
