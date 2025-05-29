import React from "react";

const NotificationIcon = ({ colour }) => {
  return (
    <svg
      // fill={colour}
      height="95%"
      width="95%"
      version="1.1"
      id="XMLID_266_"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 24 24"
      xmlSpace="preserve"
      className="!fill-current stroke-none"
    >
      <g id="notification">
        <g>
          <path
            d="M12,24c-2.2,0-4-1.8-4-4H0v-2h3V9c0-5,4-9,9-9s9,4,9,9v9h3v2h-8C16,22.2,14.2,24,12,24z M10,20c0,1.1,0.9,2,2,2s2-0.9,2-2
         H10z M5,18h14V9c0-3.9-3.1-7-7-7S5,5.1,5,9V18z"
          />
        </g>
      </g>
    </svg>
  );
};

export default NotificationIcon;
