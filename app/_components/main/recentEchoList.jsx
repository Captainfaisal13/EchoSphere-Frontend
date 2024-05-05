import React from "react";
import Echo from "../reusables/echo";

const getEchos = async () => {
  try {
    const data = await fetch("http://localhost:3000/api/v1/tweet/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjIzYjhiZjE4MDQ5NWMzN2IwNGQxMDciLCJuYW1lIjoiSm9obiBCYXllciIsImlhdCI6MTcxMzYxNzA4NywiZXhwIjoxNzE2MjA5MDg3fQ.iz4S7X4gWQT3H9xDaMLiCbjflfqJ5fqJalvMCPdzWRA",
      },
    });

    const json = await data.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

const RecentEchoList = async () => {
  const data = await getEchos();
  const echos = data.tweets.map((echo) => {
    return {
      ...echo,
      text: echo.content,
      username: "Shaikh Faisal",
      userid: "captain.faisal",
      avatar: "/_assets/images/dp.jpg",
      time: "5hr",
      replies: "2.5k",
      reposts: "1.1k",
      likes: "12.32k",
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

export default RecentEchoList;
