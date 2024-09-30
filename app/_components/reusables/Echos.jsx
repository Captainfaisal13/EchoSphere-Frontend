import React from "react";
import Echo from "./echo";

const Echos = ({ echos }) => {
  return (
    <div className="px-2 md:px-5 py-2 md:py-4 flex flex-col gap-2 md:gap-4">
      {echos.map((echo, idx) => {
        return <Echo key={idx} echo={echo} />;
      })}
    </div>
  );
};

export default Echos;
