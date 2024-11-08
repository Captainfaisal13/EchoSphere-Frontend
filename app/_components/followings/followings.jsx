import React from "react";
import SectionHeader from "../reusables/sectionHeader";
import FollowingsSection from "./followingsSection";

const FollowingPage = () => {
  return (
    <div>
      <SectionHeader heading="Following" />
      <FollowingsSection />
    </div>
  );
};

export default FollowingPage;
