"use client";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import {
  bookmarkEcho,
  clearUnreadNotificationsCount,
  createEcho,
  deleteEcho,
  followUnfollowUser,
  getBookmarkEchos,
  getFollowingEchos,
  getNotifications,
  getPhotosEchos,
  getRecentFeedEchos,
  getSearchUsers,
  getSingleEcho,
  getTextEchos,
  getUserFollowers,
  getUserFollowings,
  getUserLikedPosts,
  getUserMediaPosts,
  getUserPosts,
  getUserProfile,
  getUserReplies,
  getUsers,
  getVideosEchos,
  likeDislikeEcho,
  login,
  loginWithGoogle,
  logout,
  reEcho,
  shareEcho,
  signup,
  updateUser,
} from "./apiCalls";

export const useSignup = () => {
  return useMutation({ mutationFn: (signupUser) => signup(signupUser) });
};

export const useLogin = () => {
  return useMutation({ mutationFn: (loginUser) => login(loginUser) });
};

export const useLoginWithGoogle = () => {
  return useMutation({ mutationFn: (loginUser) => loginWithGoogle(loginUser) });
};

export const useLogout = () => {
  return useMutation({ mutationFn: () => logout() });
};

export const useGetUserProfile = ({ username }) => {
  return useQuery({
    queryKey: ["get-user-profile", username],
    queryFn: () => getUserProfile({ username }),
  });
};

export const useUpdateUser = () => {
  return useMutation({ mutationFn: (user) => updateUser(user) });
};

export const useGetSingleEcho = ({ echoId }) => {
  return useQuery({
    queryKey: ["get-single-echo", echoId],
    queryFn: () => getSingleEcho({ echoId }),
  });
};

export const useGetFollowingEchos = () => {
  return useInfiniteQuery({
    queryKey: ["echo-list-query", "get-following-echos"],
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
    queryKey: ["echo-list-query", "get-recent-echos"],
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
    queryKey: ["echo-list-query", "get-text-echos"],
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
    queryKey: ["echo-list-query", "get-photos-echos"],
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
    queryKey: ["echo-list-query", "get-videos-echos"],
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

export const useShareEcho = () => {
  return useMutation({
    mutationFn: (tweetId) => shareEcho(tweetId),
  });
};

export const useBookmarkEcho = () => {
  return useMutation({
    mutationFn: (tweetId) => bookmarkEcho(tweetId),
  });
};

export const useGetBookmarkPosts = () => {
  return useInfiniteQuery({
    queryKey: ["echo-list-query", "get-bookmark-posts"],
    queryFn: ({ pageParam }) => getBookmarkEchos({ pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        lastPage?.length >= 10 ? allPages?.length + 1 : undefined;
      return nextPage;
    },
  });
};

export const useFollowUnfollowUser = () => {
  return useMutation({
    mutationFn: (userId) => followUnfollowUser(userId),
  });
};

export const useGetUserFollowers = ({ username }) => {
  return useQuery({
    queryKey: ["get-user-followers", username],
    queryFn: () => getUserFollowers({ username }),
  });
};

export const useGetUserFollowings = ({ username }) => {
  return useQuery({
    queryKey: ["get-user-followers", username],
    queryFn: () => getUserFollowings({ username }),
  });
};

export const useGetUserPosts = ({ username }) => {
  return useInfiniteQuery({
    queryKey: ["echo-list-query", "get-user-posts", username],
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
    queryKey: ["echo-list-query", "get-user-replies", username],
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
    queryKey: ["echo-list-query", "get-user-liked-posts", username],
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
    queryKey: ["echo-list-query", "get-user-media-posts", username],
    queryFn: ({ pageParam }) => getUserMediaPosts({ pageParam, username }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        lastPage?.length >= 10 ? allPages?.length + 1 : undefined;
      return nextPage;
    },
  });
};

export const useGetUsers = () => {
  return useInfiniteQuery({
    queryKey: ["get-users"],
    queryFn: ({ pageParam }) => getUsers({ pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        lastPage?.length >= 10 ? allPages?.length + 1 : undefined;
      return nextPage;
    },
  });
};

export const useGetSearchUsers = ({ query }) => {
  return useInfiniteQuery({
    queryKey: ["get-search-users", query],
    queryFn: ({ pageParam }) => getSearchUsers({ pageParam, query }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        lastPage?.length >= 10 ? allPages?.length + 1 : undefined;
      return nextPage;
    },
    enabled: !!query.trim(),
  });
};

export const useGetNotifications = () => {
  return useInfiniteQuery({
    queryKey: ["get-notifications"],
    queryFn: ({ pageParam }) => getNotifications({ pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        lastPage?.length >= 10 ? allPages?.length + 1 : undefined;
      return nextPage;
    },
  });
};

export const useClearUnreadNotificationsCount = () => {
  return useMutation({
    mutationFn: () => clearUnreadNotificationsCount(),
  });
};
