"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createEcho,
  deleteEcho,
  getEchos,
  getFollowingEchos,
  getPhotosEchos,
  getProfile,
  getRecentFeedEchos,
  getSingleEcho,
  getTextEchos,
  getVideosEchos,
  likeDislikeEcho,
  login,
  reEcho,
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

export const useGetSingleEcho = ({ echoId }) => {
  return useQuery({
    queryKey: ["get-single-echos", echoId],
    queryFn: () => getSingleEcho({ echoId }),
  });
};

export const useGetFollowingEchos = () => {
  return useQuery({
    queryKey: ["get-following-echos"],
    queryFn: () => getFollowingEchos(),
  });
};

export const useGetRecentEchos = () => {
  return useQuery({
    queryKey: ["get-recent-echos"],
    queryFn: () => getRecentFeedEchos(),
  });
};

export const useGetTextEchos = () => {
  return useQuery({
    queryKey: ["get-text-echos"],
    queryFn: () => getTextEchos(),
  });
};

export const useGetPhotosEchos = () => {
  return useQuery({
    queryKey: ["get-photos-echos"],
    queryFn: () => getPhotosEchos(),
  });
};

export const useGetVideosEchos = () => {
  return useQuery({
    queryKey: ["get-videos-echos"],
    queryFn: () => getVideosEchos(),
  });
};

export const useCreateEcho = () => {
  return useMutation({
    mutationFn: (echoContent) => createEcho(echoContent),
  });
};

export const useDeleteEcho = () => {
  return useMutation({
    mutationFn: (echoId) => deleteEcho(echoId),
  });
};

export const useLikeDislikeEcho = () => {
  return useMutation({
    mutationFn: (tweetId) => likeDislikeEcho(tweetId),
  });
};

export const useReEcho = () => {
  return useMutation({
    mutationFn: (tweetId) => reEcho(tweetId),
  });
};

// export const useGetProfile = ({ username }) => {
//   return useQuery({
//     queryKey: ["get-profile", username],
//     queryFn: () => getProfile({ username }),
//   });
// };
