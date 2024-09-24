const url = "http://localhost:5000/api/v1";

// signup [POST]
// {{URL}}/auth/signup

// login [POST]
// {{URL}}/auth/login

// get single user [GET]
// {{URL}}/auth/updateUser

// update user [PATCH] [Token Required]
// {{URL}}/auth/updateUser

// get all tweets [GET] [Token Required]
// {{URL}}/tweet/

// create tweet [POST] [Token Required]
// {{URL}}/tweet

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
    const data = await fetch(
      `${url}/feed/photos`
      //   { cache: "no-store" }
    );
    const json = await data.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

// Get videos tweets [GET]
// {{URL}}/feed/videos
export const getVideosEchos = async () => {
  try {
    const data = await fetch(
      `${url}/feed/videos`
      //   { cache: "no-store" }
    );
    const json = await data.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

export const getEchos = async ({ userId }) => {
  try {
    const data = await fetch(
      `${url}/tweet/${userId}/tweets`
      //   { cache: "no-store" }
    );
    const json = await data.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

// Get single user [GET]
// {{URL}}/feed/:username
export const getProfile = async ({ username }) => {
  try {
    const data = await fetch(`${url}/feed/user/${username}`, {
      cache: "no-store",
    });

    if (!data.ok) {
      throw new Error("404 Not found");
    }

    const result = await data.json();
    return { result, isUserExist: true };
  } catch (error) {
    if (error.message === "404 Not found") {
      return {
        isUserExist: false,
        result: {},
      };
    }
    throw new Error(`Internal Server Error`);
  }

  // try {
  //   const data = await axios.get(`${url}/feed/user/${username}`);
  //   // console.log({ data });

  //   return { result: data.data, isUserExist: true };
  // } catch (error) {
  //   console.log("error", error);
  //   console.log("error message", error.message);
  //   console.log("error status", error.status);
  //   return { result: {}, isUserExist: false };
  // }
};
