import Image from "next/image";
import ConditionalButtons from "./conditionalButtons";
import Link from "next/link";
const ProfileInfo = ({ user }) => {
  return (
    <div>
      <div className="min-h-[24vh] relative bg-bg-4">
        {user?.cover && <Image src={user?.cover} fill alt="profile cover" />}
      </div>
      <div>
        <div className="flex justify-between px-4">
          <div className="h-28 w-28 rounded-full relative overflow-hidden mt-[-62px] ">
            <Image
              src={user?.avatar || "/_assets/images/unknown-image.png"}
              className=""
              fill
              alt="profile avatar"
              sizes="auto"
            />
          </div>
          <ConditionalButtons user={user} />
        </div>
        <div className="flex flex-col gap-2 mt-2 px-4">
          <div>
            <h2 className="text-2xl font-bold text-text-2">{user?.name}</h2>
            <h4 className="text-sm text-text-3">@{user?.username}</h4>
          </div>
          <div className="text-sm flex gap-4">
            <Link
              href={`/profile/${user?.username}/followings`}
              className="text-text-3 hover:underline"
            >
              <span className="font-bold text-text-1">
                {user?.followingCount}
              </span>{" "}
              following
            </Link>
            <Link
              href={`/profile/${user?.username}/followers`}
              className="text-text-3 hover:underline"
            >
              <span className="font-bold text-text-1">
                {user?.followerCount}
              </span>{" "}
              followers
            </Link>
          </div>
          <p className="text-text-1 text-sm">{user?.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
