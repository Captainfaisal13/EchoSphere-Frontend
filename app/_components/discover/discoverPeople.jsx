import React from "react";
import Image from "next/image";
import discoverProfiles from "../../data/discoverProfiles";

const DiscoverPeople = () => {
  return (
    <div className="flex flex-col bg-bg-2 rounded-[4px]">
      <h2 className="p-4 border-b border-border-1 text-text-1">
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
                  <h3 className="text-sm font-bold text-text-2">{username}</h3>
                  <p className="font text-xs text-text-3 line-clamp-1">
                    @{userid}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <button className="text-[10px] bg-bg-5 text-text-0 py-2 px-4 rounded-3xl font-bold">
                  Follow
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center py-4 px-2 border-t border-border-1">
        <button className="text-text-9 text-sm font-bold text-center hover:underline w-full">
          Show more profiles
        </button>
      </div>
    </div>
  );
};

export default DiscoverPeople;
