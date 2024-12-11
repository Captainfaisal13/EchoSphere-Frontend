"use client";
import Image from "next/image";
import Modal from "../reusables/modal";
import { useRef, useState } from "react";
import { useUpdateUser } from "../../../network/customHooks";
import { useQueryClient } from "@tanstack/react-query";

const EditProfileModal = ({ isOpen, setIsOpen, user }) => {
  const { mutate: updateUser } = useUpdateUser();
  const queryClient = useQueryClient();

  const [name, setName] = useState(user?.name || "");
  const [bio, setBio] = useState(user?.bio || "");
  const profilePicInputRef = useRef(null);
  const coverPicInputRef = useRef(null);

  const [profilePicPreview, setProfilePicPreview] = useState(null);
  const [coverPicPreview, setCoverPicPreview] = useState(null);

  const onClose = () => {
    setName(user?.name || "");
    setBio(user?.bio || "");
    setProfilePicPreview(null);
    setCoverPicPreview(null);
    profilePicInputRef.current.value = null;
    coverPicInputRef.current.value = null;
    setIsOpen(false);
  };

  const handleProfilePicClick = () => {
    profilePicInputRef.current.click();
  };

  const handleCoverPicClick = () => {
    coverPicInputRef.current.click();
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicPreview(file);
    }
  };

  const handleCoverPicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverPicPreview(file);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (name) formData.append("name", name);
    formData.append("bio", bio);
    if (profilePicPreview) {
      console.log({ profilePicPreview });
      formData.append("avatar", profilePicPreview);
    }
    if (coverPicPreview) {
      console.log({ coverPicPreview });
      formData.append("cover", coverPicPreview);
    }

    updateUser(formData, {
      onSuccess: (data) => {
        console.log({ data });
        queryClient.invalidateQueries({
          queryKey: ["get-user-profile"],
          // refetchType: "all",
        });
      },
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} postion="center" size="medium">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 mx-auto p-4 bg-bg-4 rounded-md"
      >
        <h1 className="text-xl font-bold text-text-1 text-center">
          Edit profile
        </h1>

        <div className="relative">
          {/* Cover Picture */}
          <div
            className="h-36 bg-bg-4 relative cursor-pointer"
            onClick={handleCoverPicClick}
          >
            <Image
              src={
                coverPicPreview
                  ? URL.createObjectURL(coverPicPreview)
                  : user?.cover || "/_assets/images/poster1.png"
              }
              fill
              alt="profile cover"
              className="object-cover"
            />
          </div>

          {/* Profile Picture */}
          <div
            className="h-20 w-20 rounded-full relative overflow-hidden mt-[-62px] ml-4 cursor-pointer"
            onClick={handleProfilePicClick}
          >
            <Image
              src={
                profilePicPreview
                  ? URL.createObjectURL(profilePicPreview)
                  : user?.avatar || "/_assets/images/unknown-image.png"
              }
              fill
              alt="profile avatar"
              className="object-cover"
            />
          </div>
        </div>

        {/* Hidden file inputs */}
        <input
          type="file"
          accept="image/*"
          ref={coverPicInputRef}
          style={{ display: "none" }}
          onChange={handleCoverPicChange}
        />
        <input
          type="file"
          accept="image/*"
          ref={profilePicInputRef}
          style={{ display: "none" }}
          onChange={handleProfilePicChange}
        />

        <div className="space-y-2">
          <div>
            <label className="block text-text-7">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-border-1 rounded"
            />
          </div>

          <div>
            <label className="block text-text-7">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full p-2 border border-border-1 rounded"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-text-0 bg-bg-5 rounded"
          >
            Save Changes
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditProfileModal;
