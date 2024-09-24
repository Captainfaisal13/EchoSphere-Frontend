import ProfilePage from "../../_components/profile/profile";

const ProfileInfo = async ({ params }) => {
  return <ProfilePage username={params.slug} />;
};

export default ProfileInfo;
