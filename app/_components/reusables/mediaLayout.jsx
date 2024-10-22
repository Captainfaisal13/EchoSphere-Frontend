"use client";
import Image from "next/image";
import React from "react";

const mediaGridResponsive = [
  "grid grid-cols-1",
  "grid grid-cols-2",
  "grid grid-cols-3 grid-rows-2",
  "grid grid-cols-2",
];

const MediaLayout = ({ media }) => {
  // console.log(media);
  return (
    <div className={`gap-1 ${mediaGridResponsive[media.length - 1]}`}>
      {media.map((mediaItem, idx) => {
        return (
          <div
            className={`relative w-full aspect-[1/1] rounded-md overflow-hidden ${
              media.length === 3 && idx === 0 && "col-span-2 row-span-2"
            }`}
            key={idx}
          >
            <Image src={mediaItem} fill alt={`echo-media-img-${idx}`} />
          </div>
        );
      })}
    </div>
  );
};

export default MediaLayout;
