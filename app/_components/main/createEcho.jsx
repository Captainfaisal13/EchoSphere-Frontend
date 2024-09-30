import { useState } from "react";
import Modal from "../../_components/reusables/modal";
import Image from "next/image";
import { useCreateEcho } from "../../../network/customHooks";
import { useQueryClient } from "@tanstack/react-query";
const CreateEcho = ({ isOpen, setIsOpen }) => {
  const queryClient = useQueryClient();
  const { mutate: createEcho } = useCreateEcho();

  const onClose = () => {
    setIsOpen(false);
  };

  const [echoContent, setEchoContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (echoContent.trim()) {
      createEcho(
        { content: echoContent },
        {
          onSuccess: (data) => {
            console.log({ data });

            queryClient.invalidateQueries({
              queryKey: ["get-user-echos"],
              // refetchType: "all",
            });
          },
        }
      );
      setEchoContent("");
      onClose(); // Close the modal after echo creation
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form
        onSubmit={handleSubmit}
        className="w-full bg-[#E9E9E9] rounded-md py-3 px-3 flex flex-col gap-3"
      >
        <div className="flex justify-between items-center pb-2 px-2 border-b border-[#D7D7D7]">
          <div>
            <button onClick={onClose}>Cancel</button>
          </div>
          <div>
            <button
              type="submit"
              className="bg-white text-[#5B5B5B] py-1 px-4 rounded-3xl font-bold"
            >
              Post
            </button>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
            <Image src="/_assets/images/dp.jpg" fill alt="user-image" />
          </div>
          <textarea
            className="w-full p-2 max-h-40 min-h-28  border-none rounded-md outline-none focus:outline-none bg-[#E9E9E9] resize-none"
            placeholder="What's happening?"
            rows="6"
            value={echoContent}
            onChange={(e) => setEchoContent(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-between items-center px-2 pt-2 border-t border-[#D7D7D7]">
          <div className="flex gap-3">
            <div className="w-7 h-7 relative">
              <input type="file" name="media" id="media" className="hidden" />
              <Image src="/_assets/media-upload.svg" fill alt="media-svg" />
            </div>
            <div className="w-7 h-7 relative">
              <input type="file" name="media" id="media" className="hidden" />
              <Image src="/_assets/emoji.svg" fill alt="emoji-svg" />
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
