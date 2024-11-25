"use client";
import { useEffect, useRef } from "react";

const sizeClasses = {
  small: "w-1/4", // yet to design
  medium: "w-11/12 max-w-[600px] ",
  large: "w-3/4", // yet to design
  full: "w-full", // yet to design
};

// Vertical positioning classes
const positionClasses = {
  center: "items-center",
  top: "items-start pt-20",
  bottom: "items-end",
};

const Modal = ({
  isOpen,
  onClose,
  children,
  postion = "top",
  size = "medium",
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside),
        document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!isOpen) return null; // Do not render if modal is not visible

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center z-50 ${positionClasses[postion]}`}
    >
      <div
        className={`bg-white rounded-lg shadow-lg ${sizeClasses[size]}`}
        ref={modalRef}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;