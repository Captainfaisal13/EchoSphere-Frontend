import React from "react";
import Echo from "../reusables/echo";
// import echos from "../../data/discoverProfiles.json";

const getEchos = async ({ userId }) => {
  try {
    const data = await fetch(
      `http://localhost:3000/api/v1/tweet/${userId}/tweets`,
      { cache: "no-store" }
    );
    const json = await data.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

const PostEchoList = async ({ userId }) => {
  const data = await getEchos({ userId });
  console.log("data", data);
  const echos = data.detailedTweets.map((echo) => {
    return {
      ...echo,
      text: echo.content,
      time: "5hr",
      replies: "2.5k",
      shares: "569",
    };
  });
  return (
    <div className="px-5 py-4 flex flex-col gap-4">
      {echos.map((echo) => {
        return <Echo echo={echo} />;
      })}
    </div>
  );
};

export default PostEchoList;
