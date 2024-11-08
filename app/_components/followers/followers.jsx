import React from "react";
import SectionHeader from "../reusables/sectionHeader";
import FollowersSection from "./followersSection";

const FollowersPage = () => {
  return (
    <div>
      <SectionHeader heading="Followers" />
      <FollowersSection />
    </div>
  );
};

export default FollowersPage;
