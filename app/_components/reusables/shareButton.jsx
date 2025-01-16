import React, { useEffect, useState } from "react";
import ShareIcon from "../../../public/_assets/svgComponents/shareIcon";
import {
  setShareEchoData,
  setShowShareModal,
} from "../../../redux/slices/userSlice";
import { useDispatch } from "react-redux";

const ShareButton = ({ shares, echoId }) => {
  const dispatch = useDispatch();
  const [shareCount, setShareCount] = useState(shares);

  useEffect(() => {
    setShareCount(shares);
  }, [shares]);

  const handleShare = (e) => {
    e.stopPropagation();
    dispatch(setShareEchoData(echoId));
    dispatch(setShowShareModal(true));
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
