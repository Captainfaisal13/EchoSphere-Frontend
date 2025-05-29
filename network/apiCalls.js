import axiosInstance from "./axiosInstance";

const apiCall = async (method, url, data = null, params = null) => {
  try {
    return await axiosInstance({
      method,
      url,
      data,
      params,
    });
  } catch (error) {
    console.error("API Calling Error:", error);
    throw error;
  }
};

export const signup = async (signupUser) => {
  return apiCall("post", `/auth/signup`, signupUser);
};

export const login = async (loginUser) => {
  return apiCall("post", `/auth/login`, loginUser);
};

export const loginWithGoogle = async (credential) => {
  return apiCall("post", `/auth/login/google`, credential);
};

export const logout = async () => {
  return apiCall("delete", `/auth/logout`);
};

export const updateUser = async (user) => {
  return apiCall("patch", `/users/updateUser`, user);
};

export const createEcho = async (echoContent) => {
  return apiCall("post", `/tweet`, echoContent);
};

export const getSingleEcho = async ({ echoId }) => {
  return apiCall("get", `/tweet/${echoId}`);
};

export const deleteEcho = async (echoId) => {
  return apiCall("delete", `/tweet/${echoId}`);
};

export const likeDislikeEcho = async (echoId) => {
  return apiCall("post", `/tweet/${echoId}/like`);
};

export const reEcho = async (echoId) => {
  return apiCall("post", `/tweet/${echoId}/retweet`);
};

export const shareEcho = async (echoId) => {
  return apiCall("post", `/tweet/${echoId}/share`);
};

export const bookmarkEcho = async (echoId) => {
  return apiCall("post", `/tweet/${echoId}/bookmark`);
};

export const getBookmarkEchos = async ({ pageParam }) => {
  return apiCall("get", `/tweet/bookmarks?page=${pageParam}`);
};

export const followUnfollowUser = async (userId) => {
  return apiCall("post", `/follow/${userId}`);
};

export const getUserFollowers = async ({ username }) => {
  return apiCall("get", `/follow/${username}/followers?isUsername=true`);
};

export const getUserFollowings = async ({ username }) => {
  return apiCall("get", `/follow/${username}/followings?isUsername=true`);
};

export const getRecentFeedEchos = async ({ pageParam }) => {
  return apiCall("get", `/feed/recents?page=${pageParam}`);
};

export const getTextEchos = async ({ pageParam }) => {
  return apiCall("get", `/feed/text?page=${pageParam}`);
};

export const getPhotosEchos = async ({ pageParam }) => {
  return apiCall("get", `/feed/photos?page=${pageParam}`);
};

export const getVideosEchos = async ({ pageParam }) => {
  return apiCall("get", `/feed/videos?page=${pageParam}`);
};

export const getFollowingEchos = async ({ pageParam }) => {
  return apiCall("get", `/feed/following?page=${pageParam}`);
};

export const getUserProfile = async ({ username }) => {
  return apiCall("get", `/feed/user/${username}`);
};

export const getUserPosts = async ({ username, pageParam }) => {
  return apiCall("get", `/feed/user/${username}/posts?page=${pageParam}`);
};

export const getUserReplies = async ({ username, pageParam }) => {
  return apiCall("get", `/feed/user/${username}/replies?page=${pageParam}`);
};

export const getUserLikedPosts = async ({ username, pageParam }) => {
  return apiCall("get", `/feed/user/${username}/likes?page=${pageParam}`);
};

export const getUserMediaPosts = async ({ username, pageParam }) => {
  return apiCall("get", `/feed/user/${username}/media?page=${pageParam}`);
};

export const getUsers = async ({ pageParam }) => {
  return apiCall("get", `/feed/getUsers?page=${pageParam}`);
};
