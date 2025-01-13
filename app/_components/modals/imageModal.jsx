import React from "react";
import { useGlobalContext } from "../../context";
import Modal from "../reusables/modal";
import Image from "next/image";
import CloseIcon from "../../../public/_assets/svgComponents/closeIcon";

const ImageModal = ({ isOpen, setIsOpen }) => {
  const { imageModalData, setImageModalData } = useGlobalContext();
  const onClose = () => {
    setIsOpen(false);
    setImageModalData(null);
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      postion="center"
      size="full"
      easyClose={true}
    >
      <div className="w-full h-full bg-white/10 relative">
        <div
          className="my-auto cursor-pointer fill-text-5 bg-bg-5 rounded-full p-2 absolute top-2 right-2 z-10"
          onClick={onClose}
        >
          <CloseIcon width="24" height="24" />
        </div>
        <div className="relative w-full h-full mx-auto">
          <Image
            src={imageModalData}
            fill
            alt="image"
            className="object-contain"
          />
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
