import React from "react";

const LikeIcon = ({ width = "16px", height = "16px" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className="!fill-current"
    >
      <path
        d="M11.4454 20.7608L3.57617 12.5663C1.35964 10.2582 1.49922 6.4736 3.87922 4.34929C6.24035 2.24181 9.82044 2.65105 11.6863 5.24171L12 5.67724L12.3137 5.24171C14.1796 2.65105 17.7596 2.24181 20.1208 4.34929C22.5008 6.4736 22.6404 10.2582 20.4238 12.5663L12.5546 20.7608C12.2483 21.0797 11.7517 21.0797 11.4454 20.7608Z"
        // stroke="#5B5B5B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-current"
      />
    </svg>
  );
};

export default LikeIcon;
