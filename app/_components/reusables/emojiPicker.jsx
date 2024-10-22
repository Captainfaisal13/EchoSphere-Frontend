import EmojiPicker from "emoji-picker-react";
import React, { useEffect, useRef } from "react";

const EmojiPickerModal = ({
  showEmojiPicker,
  onEmojiPickerClose,
  onEmojiClick,
}) => {
  const emojiPickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target)
      ) {
        onEmojiPickerClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onEmojiPickerClose]);

  return (
    <div
      ref={emojiPickerRef}
      className="absolute z-[60] top-[30%] left-[50%] -translate-x-[50%]"
    >
      <EmojiPicker open={showEmojiPicker} onEmojiClick={onEmojiClick} />
    </div>
  );
};

export default EmojiPickerModal;
