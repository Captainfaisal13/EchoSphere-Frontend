import React from "react";

const BackIcon = ({ height = "16px", width = "16px" }) => {
  return (
    <svg
      xmlnsX="http://ns.adobe.com/Extensibility/1.0/"
      xmlnsI="http://ns.adobe.com/AdobeIllustrator/10.0/"
      xmlnsGraph="http://ns.adobe.com/Graphs/1.0/"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlnsA="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
      fill="#000000"
      version="1.1"
      baseProfile="tiny"
      id="Layer_1"
      width={width}
      height={height}
      viewBox="0 0 42 42"
      xmlSpace="preserve"
    >
      <polygon
        fill-rule="evenodd"
        points="27.066,1 7,21.068 26.568,40.637 31.502,35.704 16.865,21.068 32,5.933 "
      />
    </svg>
  );
};

export default BackIcon;
