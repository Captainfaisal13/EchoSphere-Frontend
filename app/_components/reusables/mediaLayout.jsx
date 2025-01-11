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
  // Helper function to determine if the file is a video
  const isVideo = (url) => {
    return /\.(mp4|webm|mkv|mov)$/i.test(url);
  };
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
            {isVideo(mediaItem) ? (
              <video
                src={mediaItem}
                className="w-full h-full object-cover"
                controls
                muted
                playsInline
              />
            ) : (
              <Image
                src={mediaItem}
                fill
                alt={`echo-media-img-${idx}`}
                className="object-cover"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MediaLayout;
