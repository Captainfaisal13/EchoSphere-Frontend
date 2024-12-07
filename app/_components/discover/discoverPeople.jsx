import React from "react";
import Image from "next/image";
import discoverProfiles from "../../data/discoverProfiles";

const DiscoverPeople = () => {
  return (
    <div className="flex flex-col bg-[#E6E6E6] rounded-[4px]">
      <h2 className="p-4 border-b border-[#D7D7D7] text-[#000000]">
        Check out these peoples
      </h2>
      <div className="flex flex-col gap-4 px-3 py-4">
        {discoverProfiles.map((profile) => {
          const { id, username, userid, avatar } = profile;
          return (
            <div key={id} className="flex justify-between">
              <div className="flex gap-2 items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image src={avatar} fill alt="avatar" />
                </div>
                <div className="text-sm">
                  <h3 className="text-sm font-bold text-[#1B1B1B]">
                    {username}
                  </h3>
                  <p className="font text-xs text-[#5B5B5B]">@{userid}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button className="text-[10px] bg-white text-[#5B5B5B] py-2 px-4 rounded-3xl font-bold">
                  Follow
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center py-4 px-2">
        <button className="text-[#808080] text-sm font-bold text-center hover:underline w-full">
          Show more profiles
        </button>
      </div>
    </div>
  );
};

export default DiscoverPeople;
