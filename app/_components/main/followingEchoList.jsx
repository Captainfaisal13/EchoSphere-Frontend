import Echo from "../reusables/echo";
// import echos from "../../data/followingechos.json";

// 1020
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWZhZGQ0MWEwOGI2NjQ4ZDhjOGFlYWQiLCJuYW1lIjoiU2hhaWtoIEZhaXNhbCIsImlhdCI6MTcxMzY0MzQ1MCwiZXhwIjoxNzE2MjM1NDUwfQ.hIu-iZdaBxqonI2j1OnLl4VJYxFuIQhCT3XZ4zOfXec

// 3412
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWZhZDk3OWI1ZDQ2NDFjZjAxYjJhODUiLCJuYW1lIjoiQ2FwdGFpbkZhaXNhbCIsImlhdCI6MTcxMzYxNzI2NSwiZXhwIjoxNzE2MjA5MjY1fQ.9I7iUGeVFyCVc1Mcvbtypebf9WMIWR03vHUacGIbbCg

// {
//   "id": 1,
//   "username": "Shaikh Faisal",
//   "userid": "captain.faisal",
//   "avatar": "/_assets/images/dp.jpg",
//   "time": "5hr",
//   "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum accusantium, nam reiciendis nihil aliquam, ipsum incidunt earum natus corrupti corporis voluptatum eveniet, temporibus perspiciatis inventore vitae atque! Accusantium, harum iure! Reiciendis cupiditate similique, magnam dicta eius facilis nam repudiandae, adipisci unde dolorem quasi, perspiciatis doloremque ullam tempore tenetur eaque culpa illum possimus consequuntur sit facere accusamus molestiae! Ipsam, asperiores!",
//   "replies": "2.5k",
//   "reposts": "1.1k",
//   "likes": "12.32k",
//   "shares": "569"
// }

const getEchos = async () => {
  try {
    const data = await fetch("http://localhost:3000/api/v1/tweet/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWZhZDk3OWI1ZDQ2NDFjZjAxYjJhODUiLCJuYW1lIjoiQ2FwdGFpbkZhaXNhbCIsImlhdCI6MTcxMzYxNzI2NSwiZXhwIjoxNzE2MjA5MjY1fQ.9I7iUGeVFyCVc1Mcvbtypebf9WMIWR03vHUacGIbbCg",
      },
    });

    const json = await data.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

const FollowingEchoList = async () => {
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

export default FollowingEchoList;
