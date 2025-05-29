import React from "react";

const BackIcon = ({ height = "16px", width = "16px" }) => {
  return (
    <svg
      xmlnsx="http://ns.adobe.com/Extensibility/1.0/"
      xmlnsi="http://ns.adobe.com/AdobeIllustrator/10.0/"
      xmlnsgraph="http://ns.adobe.com/Graphs/1.0/"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlnsa="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
      className="!fill-current"
      version="1.1"
      baseProfile="tiny"
      id="Layer_1"
      width={width}
      height={height}
      viewBox="0 0 42 42"
      xmlSpace="preserve"
    >
      <polygon
        fillRule="evenodd"
        points="27.066,1 7,21.068 26.568,40.637 31.502,35.704 16.865,21.068 32,5.933 "
      />
    </svg>
  );
};

export default BackIcon;
