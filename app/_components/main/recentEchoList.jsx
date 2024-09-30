import { getRecentFeedEchos } from "../../../network/apiCalls";
import Echos from "../reusables/Echos";

const RecentEchoList = async () => {
  const data = await getRecentFeedEchos();
  const echos = data.AllTweets.map((echo) => {
    return {
      ...echo,
      text: echo.content,
      time: "5hr",
      replies: "2.5k",
      shares: "569",
    };
  });
  return <Echos echos={echos} />;
};

export default RecentEchoList;
