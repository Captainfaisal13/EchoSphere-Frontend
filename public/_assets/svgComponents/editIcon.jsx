import React from "react";

const EditIcon = ({ height = "20px", width = "20px" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-current"
    >
      <path d="M0 0h48v48H0z" fill="none" />
      <g id="Shopicon">
        <rect
          x="33.172"
          y="4.343"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 3.473 29.5565)"
          width="8.485"
          height="12.485"
        />
        <polygon points="27.172,12 4,35.172 4,44 12.829,44 38.829,18 36,20.828 	" />
      </g>
    </svg>
  );
};

export default EditIcon;
