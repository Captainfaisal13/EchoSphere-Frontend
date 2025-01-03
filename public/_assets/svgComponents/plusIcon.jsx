import React from "react";

const PlusIcon = ({ width = "20px", height = "20px" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      //   fill="#FFFFFF"
      className="fill-current"
      width={width}
      height={height}
      viewBox="0 0 1920 1920"
    >
      <path
        d="M866.332 213v653.332H213v186.666h653.332v653.332h186.666v-653.332h653.332V866.332h-653.332V213z"
        fill-rule="evenodd"
      />
    </svg>
  );
};

export default PlusIcon;
