import Image from "next/image";
import EditProfileButton from "./editProfileButton";
const ProfileInfo = ({ user }) => {
  return (
    <div>
      <div className="min-h-[24vh] relative bg-[#e9e9e9]">
        {user.cover && <Image src={user?.cover} fill alt="profile cover" />}
      </div>
      <div>
        <div className="flex justify-between px-4">
          <div className="h-28 w-28 rounded-full relative overflow-hidden mt-[-62px] ">
            <Image
              src={user.avatar || "/_assets/images/unknown-image.png"}
              className=""
              fill
              alt="profile avatar"
              sizes="auto"
            />
          </div>
          <EditProfileButton user={user} />
        </div>
        <div className="flex flex-col gap-2 mt-2 px-4">
          <div>
            <h2 className="text-2xl font-bold">{user?.name}</h2>
            <h4 className="text-sm text-[#5B5B5B]">@{user?.username}</h4>
          </div>
          <div className="text-sm flex gap-4">
            <button className="text-[#5B5B5B] hover:underline">
              <span className="font-bold text-black">
                {user?.following_count}
              </span>{" "}
              following
            </button>
            <button className="text-[#5B5B5B] hover:underline">
              <span className="font-bold text-black">
                {user?.followers_count}
              </span>{" "}
              followers
            </button>
          </div>
          <p>{user?.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
