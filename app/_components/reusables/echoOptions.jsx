"use client";
import React, { useEffect, useRef, useState } from "react";
import OptionIcon from "../../../public/_assets/svgComponents/optionIcon";
import { useDeleteEcho } from "../../../network/customHooks";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const EchoOptions = ({ echo }) => {
  const { user } = useSelector((state) => state.user);
  const [showOption, setShowOption] = useState(false);
  const optionRef = useRef(null);
  const router = useRouter();
  const { mutate: deleteEcho } = useDeleteEcho();

  const onClose = () => {
    setShowOption(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionRef.current && !optionRef.current.contains(event.target)) {
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

  const handleDeleteEcho = (echoId) => {
    onClose();
    deleteEcho(echoId, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["echo-query"],
        });
      },
    });
    router.push(`/profile/${echo.username}`);
  };

  return (
    <div className="relative" onClick={(e) => e.preventDefault()}>
      {user?.userId === echo?.user && (
        <div
          onClick={() => {
            setShowOption(true);
          }}
          className="cursor-pointer fill-text-1"
        >
          <OptionIcon />
        </div>
      )}
      {showOption && user.userId === echo.user && (
        <div
          ref={optionRef}
          className="absolute bg-bg-0 w-64 right-0 top-0 z-50 rounded-md border border-border-1 grid"
        >
          {user.userId === echo.user && (
            <button
              className="p-2 text-left text-xs text-text-1"
              onClick={() => handleDeleteEcho(echo._id)}
            >
              Delete Echo
            </button>
          )}
          {/* {user.userId === echo.user && (
            <button className="my-2 text-left">Update Echo</button>
          )} */}
        </div>
      )}
    </div>
  );
};

export default EchoOptions;
