"use client";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";
import { getFollowingEchos } from "../../../network/apiCalls";
import Echos from "../reusables/Echos";

const FollowingEchoList = () => {
  const { user } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(true);
  const [echos, setEchos] = useState(null);

  const fetchData = async ({ userId }) => {
    try {
      const data = await getFollowingEchos({ userId });
      setEchos(
        data.followingTweets.map((echo) => {
          return {
            ...echo,
            text: echo.content,
            time: "5hr",
            replies: "2.5k",
            shares: "569",
          };
        })
      );
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchData({ userId: user.userId });
    }
  }, [user]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return <Echos echos={echos} />;
};

export default FollowingEchoList;
