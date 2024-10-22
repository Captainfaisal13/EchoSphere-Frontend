"use client";
import React, { useEffect, useRef, useState } from "react";
import OptionIcon from "../../../public/_assets/svgComponents/optionIcon";
import { useGlobalContext } from "../../context";
import { useDeleteEcho } from "../../../network/customHooks";
import { useRouter } from "next/navigation";

const EchoOptions = ({ echo }) => {
  const { user } = useGlobalContext();
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
        Promise.all([
          queryClient.invalidateQueries(["get-single-echos", echoId]),
          queryClient.invalidateQueries(["get-user-echos"]),
          queryClient.invalidateQueries(["get-following-echos"]),
          queryClient.invalidateQueries(["get-recent-echos"]),
        ]);
      },
    });
    router.push(`/profile/${echo.username}`);
  };

  return (
    <div className="relative" onClick={(e) => e.preventDefault()}>
      {user.userId === echo.user && (
        <div
          onClick={() => {
            setShowOption(true);
          }}
          className="cursor-pointer"
        >
          <OptionIcon />
        </div>
      )}
      {showOption && user.userId === echo.user && (
        <div
          ref={optionRef}
          className="absolute bg-white w-64 right-0 top-0 z-50 rounded-md border border-[#D7D7D7] grid"
        >
          {user.userId === echo.user && (
            <button
              className="p-2 text-left text-xs"
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
