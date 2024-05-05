import Image from "next/image";

const CreateEchoModal = ({ setShowCreateModal }) => {
  return (
    <div className="fixed inset-0 bg-black/80 z-10 flex justify-center items-center">
      <div className="w-[32vw] bg-[#E9E9E9] rounded-md py-3 px-3 flex flex-col gap-3">
        <div className="flex justify-between items-center pb-2 px-2 border-b border-[#D7D7D7]">
          <div>
            <button onClick={() => setShowCreateModal(false)}>Cancel</button>
          </div>
          <div>
            <button className="bg-white text-[#5B5B5B] py-1 px-4 rounded-3xl font-bold">
              Post
            </button>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
            <Image src="/_assets/images/dp.jpg" fill alt="user-image" />
          </div>
          <div
            className="h-56 w-full outline-none overflow-auto p-2"
            contentEditable={true}
          />
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
      </div>
    </div>
  );
};

export default CreateEchoModal;
