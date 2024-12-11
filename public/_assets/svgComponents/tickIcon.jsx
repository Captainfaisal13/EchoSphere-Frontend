import React from "react";

const TickIcon = ({ width = "20px", height = "20px" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className="stroke-current"
      viewBox="0 0 24 24"
    >
      <title />

      <g id="Complete">
        <g id="tick">
          <polyline
            fill="none"
            points="3.7 14.3 9.6 19 20.3 5"
            // stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </g>
      </g>
    </svg>
  );
};

export default TickIcon;
