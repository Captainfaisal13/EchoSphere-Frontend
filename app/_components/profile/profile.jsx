import Image from "next/image";
import React from "react";
import ClientTabsServerContent from "../reusables/clientTabsServerContent";
import PostEchoList from "./postEchoList";
import ReplyEchoList from "./replyEchoList";
import MediaEchoList from "./mediaEchoList";
import LikeEchoList from "./likeEchoList";

const tabs = ["Posts", "Replies", "Media", "Likes"];

const ProfilePage = () => {
  return (
    <div className="w-[50vw] border border-t-0 border-[#D7D7D7] max-h-screen overflow-scroll scrollbar-hide">
      <div className="flex flex-col gap-4">
        <div className="bg-red-700 min-h-[24vh] relative">
          <Image src="/_assets/images/poster1.png" fill />
        </div>
        <div>
          <div className="flex justify-between px-4">
            <div className="h-28 w-28 rounded-full bg-blue-700 relative overflow-hidden mt-[-62px]">
              <Image src="/_assets/images/dp.jpg" className="" fill />
            </div>
            <div className="flex items-center">
              <button className="text-xs text-[#414141] bg-[#E6E6E6] py-2 px-4 rounded-3xl font-bold">
                Edit Profile
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-2 px-4">
            <div>
              <h2 className="text-2xl font-bold">Shaikh Faisal</h2>
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
        <ClientTabsServerContent
          tabs={tabs}
          PostEchoList={<PostEchoList />}
          ReplyEchoList={<ReplyEchoList />}
          MediaEchoList={<MediaEchoList />}
          LikeEchoList={<LikeEchoList />}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
