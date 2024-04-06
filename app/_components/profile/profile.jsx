import Image from "next/image";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="w-[50vw] border border-[#D7D7D7] max-h-screen overflow-scroll scrollbar-hide">
      <div className="">
        <div className="bg-red-700 min-h-[20vh]"></div>
        <div className="flex justify-between px-4">
          <div className="h-28 w-28 rounded-full bg-blue-700 relative overflow-hidden mt-[-48px]">
            <Image src="/_assets/images/avatar2.png" className="" fill />
          </div>
          <div className="flex items-center">
            <button className="text-xs text-[#414141] bg-[#E6E6E6] py-2 px-4 rounded-3xl font-bold">
              Edit Profile
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-2 px-4">
          <div>
            <h2 className="text-2xl font-extrabold">Shaikh Faisal</h2>
            <h4 className="text-sm text-[#5B5B5B]">
              @captainfaisal.shaikhfaisal
            </h4>
          </div>
          <div className="text-sm flex gap-4">
            <button className="text-[#5B5B5B] hover:underline">
              <span className="font-bold text-black">10</span> following
            </button>
            <button className="text-[#5B5B5B] hover:underline">
              <span className="font-bold text-black">97</span> followers
            </button>
          </div>
          <p>Bahaar ho ki khazaan - La-Ilaha-IllAllah.</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
