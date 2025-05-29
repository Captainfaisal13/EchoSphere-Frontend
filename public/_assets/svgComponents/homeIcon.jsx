import React from "react";

const HomeIcon = ({ colour }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      // fill={colour}
      className="!fill-current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.99999 10L12 3L20 10L20 20H15V16C15 15.2044 14.6839 14.4413 14.1213 13.8787C13.5587 13.3161 12.7956 13 12 13C11.2043 13 10.4413 13.3161 9.87868 13.8787C9.31607 14.4413 9 15.2043 9 16V20H4L3.99999 10Z"
        // stroke={colour}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="home-icon stroke-current"
      />
    </svg>
  );
};

export default HomeIcon;
