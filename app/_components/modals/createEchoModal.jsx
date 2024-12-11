import { useEffect, useRef, useState } from "react";
import Modal from "../reusables/modal";
import Image from "next/image";
import { useCreateEcho } from "../../../network/customHooks";
import { useQueryClient } from "@tanstack/react-query";
import { useGlobalContext } from "../../context";
import EmojiPickerModal from "../reusables/emojiPicker";
import CloseIcon from "../../../public/_assets/svgComponents/closeIcon";
import MediaUploadIcon from "../../../public/_assets/svgComponents/mediaUploadIcon";
import EmojiIcon from "../../../public/_assets/svgComponents/emojiIcon";

const CreateEcho = ({ isOpen, setIsOpen }) => {
  const { user, replyEchoData, setReplyEchoData } = useGlobalContext();
  console.log({ replyEchoData });

  const queryClient = useQueryClient();
  const { mutate: createEcho } = useCreateEcho();

  const [echoContent, setEchoContent] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [mediaFiles, setMediaFiles] = useState([]);
  const textareaRef = useRef(null);

  const onClose = () => {
    setIsOpen(false);
    setEchoContent("");
    setReplyEchoData(null);
    setMediaFiles([]);
  };

  const onEmojiPickerClose = () => {
    setShowEmojiPicker(false);
  };

  const onEmojiClick = (event) => {
    const cursorPosition = textareaRef.current.selectionStart; // Get current cursor position
    const textBeforeCursor = echoContent.substring(0, cursorPosition); // Text before the cursor
    const textAfterCursor = echoContent.substring(cursorPosition); // Text after the cursor

    const updatedEcho = textBeforeCursor + event.emoji + textAfterCursor; // Insert emoji at the cursor position
    setEchoContent(updatedEcho); // Update the tweet text
  };

  const handleMediaChange = (e) => {
    const maxFiles = 4;
    const files = Array.from(e.target.files);
    if (files.length + mediaFiles.length > maxFiles) {
      alert(`You can upload up to ${maxFiles} files.`);
      return;
    }

    const validFiles = files.filter(
      (file) => file.type.startsWith("image/") || file.type.startsWith("video/")
    );
    setMediaFiles((prevFiles) => [...prevFiles, ...validFiles]);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = mediaFiles.filter((_, idx) => idx !== index);
    setMediaFiles(updatedFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (echoContent.trim()) {
      const formData = new FormData();
      formData.append("content", echoContent);

      mediaFiles.forEach((files) => {
        formData.append("media", files);
      });

      if (replyEchoData) {
        formData.append("parentTweet", replyEchoData._id);
      }

      createEcho(formData, {
        onSuccess: (data) => {
          console.log({ data });

          queryClient.invalidateQueries({
            queryKey: ["echo-query"],
          });
        },
      });
      onClose(); // Close the modal after echo creation
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form
        onSubmit={handleSubmit}
        className="w-full bg-bg-4 rounded-md py-3 px-3 flex flex-col gap-3"
      >
        <EmojiPickerModal
          showEmojiPicker={showEmojiPicker}
          onEmojiPickerClose={onEmojiPickerClose}
          onEmojiClick={onEmojiClick}
        />
        <div className="flex justify-between items-center pb-2 px-2 border-b border-border-1">
          <div>
            <button className="text-text-1" onClick={onClose}>
              Cancel
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="text-text-0 bg-bg-5 py-1 px-4 rounded-3xl font-bold"
            >
              {replyEchoData ? "Reply" : "Post"}
            </button>
          </div>
        </div>
        {replyEchoData && (
          <div className="py-3 border-b border-border-1">
            <div className="flex gap-2">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                <Image
                  src={replyEchoData?.userAvatar || "/_assets/images/dp.jpg"}
                  fill
                  alt="user-image"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-text-2 pr-1">
                  {replyEchoData?.name}
                </p>
                <p className="text-sm line-clamp-4 text-text-4">
                  {replyEchoData?.content}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="flex gap-2">
          <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
            <Image
              src={user?.avatar || "/_assets/images/dp.jpg"}
              fill
              alt="user-image"
            />
          </div>
          <textarea
            className="w-full p-2 max-h-40 min-h-28 border-none rounded-md placeholder:text-text-6 outline-none text-text-1 focus:outline-none bg-bg-4 resize-none"
            placeholder={
              replyEchoData ? "Write your reply" : "What's happening?"
            }
            rows="6"
            value={echoContent}
            onChange={(e) => setEchoContent(e.target.value)}
            ref={textareaRef}
          ></textarea>
        </div>
        {mediaFiles.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {mediaFiles.map((file, index) => (
              <div key={index} className="relative">
                {file.type.startsWith("image/") ? (
                  <div className="size-24 relative rounded-md">
                    <Image
                      src={URL.createObjectURL(file)}
                      alt="Uploaded file"
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <video className="w-24 h-24 object-cover rounded" controls>
                    <source src={URL.createObjectURL(file)} type={file.type} />
                  </video>
                )}
                <button
                  type="button"
                  className="absolute top-1 right-1 bg-red-600 rounded-full p-[2px]"
                  onClick={() => handleRemoveFile(index)}
                >
                  <CloseIcon height="12px" width="12px" />
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-between items-center px-2 pt-2 border-t border-border-1">
          <div className="flex gap-3">
            <div>
              <label
                className="fill-red-500 cursor-pointer"
                htmlFor="mediaInput"
              >
                <MediaUploadIcon height="28px" width="28px" />
              </label>
              <input
                id="mediaInput"
                type="file"
                accept="image/*,video/*"
                multiple
                onChange={handleMediaChange}
                className="hidden"
              />
            </div>
            <div
              className="fill-yellow-500 cursor-pointer"
              onClick={() => setShowEmojiPicker(true)}
            >
              <EmojiIcon height="28px" width="28px" />
            </div>
          </div>
          <div>
            <div className="bg-white w-8 h-8 rounded-full"></div>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default CreateEcho;
