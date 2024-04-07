import React from "react";
import Echo from "./echo";
import echos from "../../data/recentechos.json";

const RecentEchoList = () => {
  return (
    <div className="px-5 py-4 flex flex-col gap-4">
      {echos.map((echo) => {
        return <Echo echo={echo} />;
      })}
    </div>
  );
};

export default RecentEchoList;
