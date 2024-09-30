import axios from "axios";

const url = "http://localhost:5000/api/v1";

// signup [POST]
// {{URL}}/auth/signup
export const signup = async (signupUser) => {
  try {
    const { data } = await axios.post(`${url}/auth/signup`, signupUser, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

// login [POST]
// {{URL}}/auth/login
export const login = async (loginUser) => {
  try {
    const { data } = await axios.post(`${url}/auth/login`, loginUser, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

// get single user [GET]
// {{URL}}/auth/updateUser

// update user [PATCH] [Token Required]
// {{URL}}/auth/updateUser

// get all tweets [GET] [Token Required]
// {{URL}}/tweet/

// create tweet [POST] [Token Required]
// {{URL}}/tweet
export const createEcho = async (echoContent) => {
  try {
    const { data } = await axios.post(`${url}/tweet`, echoContent, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

// Get a single tweet [GET] [Token Required]
// {{URL}}/tweet/65fada48b5d4641cf01b2a8e

// Update tweet [POST] [Token Required]
// {{URL}}/tweet/65fada48b5d4641cf01b2a8e

// Delete Tweet [POST] [Token Required]
// {{URL}}/tweet/65fada08b5d4641cf01b2a8c

// Like/Dislike Tweet [POST] [Token Required]
// {{URL}}/tweet/65fada48b5d4641cf01b2a8e/like

// Get all likes of tweet [GET] [Token Required]
// {{URL}}/tweet/65fada48b5d4641cf01b2a8e/likes

// Retweet Tweet [POST] [Token Required]
// {{URL}}/tweet/65fada48b5d4641cf01b2a8e/retweet

// Get All Retweets of Tweet [POST] [Token Required]
// {{URL}}/tweet/65fada48b5d4641cf01b2a8e/retweets

// Follow User [POST] [Token Required]
// {{URL}}/user/65fad979b5d4641cf01b2a85/follow

// Get Followers of User [GET] [Token Required]
// {{URL}}/user/65fadd41a08b6648d8c8aead/followers

// Get Following of User [GET] [Token Required]
// {{URL}}/user/65fadd41a08b6648d8c8aead/following

// Get following user tweets [GET] [Token Required]
// {{URL}}/feed/following

/**************************** Feed API Calls **********************************/

// Get recent tweets [GET]
// {{URL}}/feed/recents
export const getRecentFeedEchos = async () => {
  try {
    const data = await fetch(
      `${url}/feed/recents`
      //   { cache: "no-store" }
    );
    const json = await data.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

// Get text tweets [GET]
// {{URL}}/feed/text
export const getTextEchos = async () => {
  try {
    const data = await fetch(
      `${url}/feed/text`
      //   { cache: "no-store" }
    );
    const json = await data.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

// Get photos tweets [GET]
// {{URL}}/feed/photos
export const getPhotosEchos = async () => {
  try {
    const data = await axios.get(`${url}/feed/photos`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

// Get videos tweets [GET]
// {{URL}}/feed/videos
export const getVideosEchos = async () => {
  try {
    const data = await axios.get(`${url}/feed/videos`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

// Get following user tweets [GET]
// {{URL}}/feed/following
export const getFollowingEchos = async () => {
  try {
    const data = await axios.get(`${url}/feed/following`, {
      withCredentials: true,
    });

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getEchos = async ({ userId }) => {
  try {
    const data = await axios.get(`${url}/tweet/${userId}/tweets`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

// Get single user [GET]
// {{URL}}/feed/:username
export const getProfile = async ({ username }) => {
  try {
    const data = await axios.get(`${url}/feed/user/${username}`);
    return { result: data.data, isUserExist: true };
  } catch (error) {
    console.log("error", error);
    console.log("error message", error.message);
    console.log("error status", error.status);
    if (error.status === 404) {
      return { result: {}, isUserExist: false };
    }
    throw error;
  }
};
