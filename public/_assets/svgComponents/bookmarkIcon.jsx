import React from "react";

const BookmarkIcon = ({ width = "16px", height = "16px" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      id="bookmark"
    >
      <path
        id="primary"
        d="M12,17,5,21V4A1,1,0,0,1,6,3H18a1,1,0,0,1,1,1V21Z"
        // style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"
        // className="fill-none stroke-orange-50 stro"
        style={{
          fill: "currentcolor",
          //   stroke: "#5B5B5B",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2px",
        }}
      />
    </svg>
  );
};

export default BookmarkIcon;
