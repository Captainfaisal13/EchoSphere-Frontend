"use client";
import React, { useState } from "react";
import EditProfileModal from "../modals/editProfileModal";
const EditProfileButton = ({ user }) => {
  const [showEditPopup, setShowEditPopup] = useState(false);
  return (
    <div className="flex items-center">
      <button
        className="text-xs text-text-7 bg-bg-2 py-2 px-4 rounded-3xl font-bold"
        onClick={() => setShowEditPopup(true)}
      >
        Edit Profile
      </button>
      <EditProfileModal
        isOpen={showEditPopup}
        setIsOpen={setShowEditPopup}
        user={user}
      />
    </div>
  );
};

export default EditProfileButton;
