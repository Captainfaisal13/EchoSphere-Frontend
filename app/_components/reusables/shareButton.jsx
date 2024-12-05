import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";

const ShareButton = ({ shares, echoId }) => {
  const { setShowShareModal, setShareEchoData } = useGlobalContext();
  const [shareCount, setShareCount] = useState(shares);

  useEffect(() => {
    setShareCount(shares);
  }, [shares]);

  const handleShare = (e) => {
    e.preventDefault();
    setShareEchoData(echoId);
    setShowShareModal(true);
  };

  return (
    <button className="flex gap-1" onClick={handleShare}>
      <div className="relative w-4 h-4">
        <Image src="/_assets/share-icon.svg" fill alt="share-icon" />
      </div>
      <p className="text-xs font-thin my-auto text-[#5B5B5B]">{shareCount}</p>
    </button>
  );
};

export default ShareButton;
