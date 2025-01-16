"use client";
import Image from "next/image";
import Modal from "../reusables/modal";
import { useRef, useState } from "react";
import { useUpdateUser } from "../../../network/customHooks";
import { useQueryClient } from "@tanstack/react-query";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "../../../utils/util";

const EditProfileModal = ({ isOpen, setIsOpen, user }) => {
  const { mutate: updateUser, isPending } = useUpdateUser();
  const queryClient = useQueryClient();

  const [name, setName] = useState(user?.name || "");
  const [bio, setBio] = useState(user?.bio || "");
  const profilePicInputRef = useRef(null);
  const coverPicInputRef = useRef(null);

  const [profilePicPreview, setProfilePicPreview] = useState(null);
  const [coverPicPreview, setCoverPicPreview] = useState(null);

  const [cropImage, setCropImage] = useState(null);
  const [cropType, setCropType] = useState(""); // "profile" or "cover"
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onClose = () => {
    setName(user?.name || "");
    setBio(user?.bio || "");
    setProfilePicPreview(null);
    setCoverPicPreview(null);
    profilePicInputRef.current.value = null;
    coverPicInputRef.current.value = null;
    setCropImage(null);
    setIsOpen(false);
  };

  const handleProfilePicClick = () => {
    profilePicInputRef.current.click();
  };

  const handleCoverPicClick = () => {
    coverPicInputRef.current.click();
  };

  const handleImageChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      setCropImage(URL.createObjectURL(file));
      setCropType(type);
    }
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleCropSave = async () => {
    try {
      const croppedImageBlob = await getCroppedImg(
        cropImage,
        croppedAreaPixels
      );
      if (cropType === "profile") {
        setProfilePicPreview(croppedImageBlob);
      } else if (cropType === "cover") {
        setCoverPicPreview(croppedImageBlob);
      }
      setCropImage(null);
      setCropType("");
    } catch (error) {
      console.error("Failed to crop the image", error);
    }
  };

  const blobToFile = (blob, fileName) => {
    return new File([blob], fileName, { type: blob.type });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (name) formData.append("name", name);
    formData.append("bio", bio);
    if (profilePicPreview) {
      const profilePicFile = blobToFile(profilePicPreview, "profile-pic.jpg");
      formData.append("avatar", profilePicFile);
    }

    if (coverPicPreview) {
      const coverPicFile = blobToFile(coverPicPreview, "cover-pic.jpg");
      formData.append("cover", coverPicFile);
    }

    updateUser(formData, {
      onSuccess: () => {
        onClose();
        queryClient.invalidateQueries({ queryKey: ["get-user-profile"] });
        queryClient.invalidateQueries({
          queryKey: ["echo-query"],
        });
      },
    });
  };

  return (
    <>
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
                    : user?.cover || "/_assets/insert-image-icon.svg"
                }
                fill
                alt="profile cover"
                className={`${
                  coverPicPreview || user?.cover
                    ? "object-cover"
                    : "object-contain"
                }`}
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
            onChange={(e) => handleImageChange(e, "cover")}
          />
          <input
            type="file"
            accept="image/*"
            ref={profilePicInputRef}
            style={{ display: "none" }}
            onChange={(e) => handleImageChange(e, "profile")}
          />

          <div className="space-y-2">
            <div>
              <label className="block text-text-7">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="py-2 px-4 rounded-lg bg-bg-4 placeholder:text-text-6 placeholder:font-thin focus:outline-border-3 border border-border-3 text-text-1 w-full"
              />
            </div>

            <div>
              <label className="block text-text-7">Bio</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="py-2 px-4 rounded-lg bg-bg-4 placeholder:text-text-6 placeholder:font-thin focus:outline-border-3 border border-border-3 text-text-1 w-full"
                rows="4"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="px-4 py-2 text-text-0 bg-bg-5 rounded"
                disabled={isPending}
              >
                {isPending ? "Saving Changes..." : "Save Changes"}
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-text-0 bg-bg-5 rounded bg-red-500 disabled:bg-red-500/50"
                disabled={isPending}
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </Modal>

      {/* Crop Modal */}
      {cropImage && (
        <Modal
          isOpen={true}
          onClose={() => setCropImage(null)}
          postion="center"
          size="medium"
        >
          <div className="relative w-full h-[400px]">
            <Cropper
              image={cropImage}
              crop={crop}
              zoom={zoom}
              aspect={cropType === "profile" ? 1 : 3}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
            <div className="flex justify-center mt-4 space-x-4 absolute z-40 left-[50%] -translate-x-[50%]">
              <button
                onClick={handleCropSave}
                className="px-4 py-2 bg-bg-5 text-text-0 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setCropImage(null)}
                className="px-4 py-2 bg-red-500 text-text-0 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default EditProfileModal;
