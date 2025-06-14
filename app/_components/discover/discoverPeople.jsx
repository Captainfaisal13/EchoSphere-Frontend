import React from "react";
import Image from "next/image";
import { useGetUsers } from "../../../network/customHooks";
import FollowButton from "../reusables/followButton";
import Link from "next/link";
import Loader from "../reusables/loader";
import { useRouter } from "next/navigation";
import CrownIcon from "../../../public/_assets/svgComponents/crownIcon";

const DiscoverPeople = () => {
  const router = useRouter();
  const { data: users, isLoading } = useGetUsers();
  if (isLoading)
    return (
      <div className="mt-20">
        <Loader />
      </div>
    );

  return (
    <div className="flex flex-col bg-bg-2 rounded-[4px]">
      <h2 className="p-4 border-b border-border-1 text-text-1">
        Check out these people
      </h2>
      <div className="flex flex-col gap-4 px-3 py-4">
        {users.pages[0]
          .slice(0, 3)
          .map(({ _id, avatar, name, username, isFollowed }) => {
            return (
              <div
                onClick={() => {
                  router.push(`/profile/${username}`);
                }}
                key={_id}
                className="flex gap-2 justify-between cursor-pointer"
              >
                <div className="flex gap-2 items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-none">
                    <Image src={avatar} fill alt="avatar" />
                  </div>
                  <div className="text-sm">
                    <div className="flex">
                      <h3 className="text-sm font-bold text-text-2 line-clamp-1">
                        {name}
                      </h3>
                      {username === "captainfaisal" && (
                        <div className="ml-1 fill-text-1 mb-auto">
                          <CrownIcon />
                          {/* <Image src="/_assets/crown-icon.svg" fill alt="crown-icon" /> */}
                        </div>
                      )}
                    </div>
                    <p className="font text-xs text-text-3 line-clamp-1 word-container">
                      @{username}
                    </p>
                  </div>
                </div>
                <FollowButton isUserFollowed={isFollowed} userId={_id} />
              </div>
            );
          })}
      </div>
      <Link
        href="/discover"
        className="flex justify-center py-4 px-2 border-t border-border-1"
      >
        <button className="text-text-9 text-sm font-bold text-center hover:underline w-full">
          Show more profiles
        </button>
      </Link>
    </div>
  );
};

export default DiscoverPeople;
