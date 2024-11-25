"use client";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import {
  createEcho,
  deleteEcho,
  followUnfollowUser,
  getFollowingEchos,
  getPhotosEchos,
  getRecentFeedEchos,
  getSingleEcho,
  getTextEchos,
  getUserFollowers,
  getUserFollowings,
  getUserLikedPosts,
  getUserMediaPosts,
  getUserPosts,
  getUserProfile,
  getUserReplies,
  getVideosEchos,
  likeDislikeEcho,
  login,
  reEcho,
  signup,
  updateUser,
} from "./apiCalls";

export const useSignup = () => {
  return useMutation({ mutationFn: (signupUser) => signup(signupUser) });
};

export const useLogin = () => {
  return useMutation({ mutationFn: (loginUser) => login(loginUser) });
};

export const useGetUserProfile = ({ username }) => {
  return useQuery({
    queryKey: ["get-user-profile"],
    queryFn: () => getUserProfile({ username }),
  });
};

export const useUpdateUser = () => {
  return useMutation({ mutationFn: (user) => updateUser(user) });
};

export const useGetSingleEcho = ({ echoId }) => {
  return useQuery({
    queryKey: ["get-single-echos", echoId],
    queryFn: () => getSingleEcho({ echoId }),
  });
};

export const useGetFollowingEchos = () => {
  return useInfiniteQuery({
    queryKey: ["get-following-echos"],
    queryFn: ({ pageParam }) => getFollowingEchos({ pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        lastPage?.length >= 10 ? allPages?.length + 1 : undefined;
      return nextPage;
    },
  });
};

export const useGetRecentEchos = () => {
  return useInfiniteQuery({
    queryKey: ["get-recent-echos"],
    queryFn: ({ pageParam }) => getRecentFeedEchos({ pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        lastPage?.length >= 10 ? allPages?.length + 1 : undefined;
      return nextPage;
    },
  });
};

export const useGetTextEchos = () => {
  return useInfiniteQuery({
    queryKey: ["get-text-echos"],
    queryFn: ({ pageParam }) => getTextEchos({ pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        lastPage?.length >= 10 ? allPages?.length + 1 : undefined;
      return nextPage;
    },
  });
};

export const useGetPhotosEchos = () => {
  return useInfiniteQuery({
    queryKey: ["get-photos-echos"],
    queryFn: ({ pageParam }) => getPhotosEchos({ pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        lastPage?.length >= 10 ? allPages?.length + 1 : undefined;
      return nextPage;
    },
  });
};

export const useGetVideosEchos = () => {
  return useInfiniteQuery({
    queryKey: ["get-videos-echos"],
    queryFn: ({ pageParam }) => getVideosEchos({ pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        lastPage?.length >= 10 ? allPages?.length + 1 : undefined;
      return nextPage;
    },
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

export const useFollowUnfollowUser = () => {
  return useMutation({
    mutationFn: (userId) => followUnfollowUser(userId),
  });
};

export const useGetUserFollowers = ({ username }) => {
  return useQuery({
    queryKey: ["get-user-followers"],
    queryFn: () => getUserFollowers({ username }),
  });
};

export const useGetUserFollowings = ({ username }) => {
  return useQuery({
    queryKey: ["get-user-followers"],
    queryFn: () => getUserFollowings({ username }),
  });
};

export const useGetUserPosts = ({ username }) => {
  return useInfiniteQuery({
    queryKey: ["get-user-posts"],
    queryFn: ({ pageParam }) => getUserPosts({ pageParam, username }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        lastPage?.length >= 10 ? allPages?.length + 1 : undefined;
      return nextPage;
    },
  });
};

export const useGetUserReplies = ({ username }) => {
  return useInfiniteQuery({
    queryKey: ["get-user-replies"],
    queryFn: ({ pageParam }) => getUserReplies({ pageParam, username }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        lastPage?.length >= 10 ? allPages?.length + 1 : undefined;
      return nextPage;
    },
  });
};

export const useGetUserLikedPosts = ({ username }) => {
  return useInfiniteQuery({
    queryKey: ["get-user-liked-posts"],
    queryFn: ({ pageParam }) => getUserLikedPosts({ pageParam, username }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        lastPage?.length >= 10 ? allPages?.length + 1 : undefined;
      return nextPage;
    },
  });
};

export const useGetUserMediaPosts = ({ username }) => {
  return useInfiniteQuery({
    queryKey: ["get-user-media-posts"],
    queryFn: ({ pageParam }) => getUserMediaPosts({ pageParam, username }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        lastPage?.length >= 10 ? allPages?.length + 1 : undefined;
      return nextPage;
    },
  });
};