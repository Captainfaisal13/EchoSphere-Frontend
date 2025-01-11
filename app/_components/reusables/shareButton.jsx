import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";
import ShareIcon from "../../../public/_assets/svgComponents/shareIcon";

const ShareButton = ({ shares, echoId }) => {
  const { setShowShareModal, setShareEchoData } = useGlobalContext();
  const [shareCount, setShareCount] = useState(shares);

  useEffect(() => {
    setShareCount(shares);
  }, [shares]);

  const handleShare = (e) => {
    e.stopPropagation();
    setShareEchoData(echoId);
    setShowShareModal(true);
  };

  return (
    <button className="flex gap-1" onClick={handleShare}>
      <div className="fill-text-3">
        <ShareIcon height="16px" width="16px" />
      </div>
      <p className="text-xs font-thin my-auto text-text-3">{shareCount}</p>
    </button>
  );
};

export default ShareButton;
