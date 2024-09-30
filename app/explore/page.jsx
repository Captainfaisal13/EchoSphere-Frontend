import React from "react";
import ExploreContent from "../_components/explore/explore";
import CheckAuth from "../checkAuth";

const ExplorePage = () => {
  return (
    <CheckAuth>
      <ExploreContent />
    </CheckAuth>
  );
};

export default ExplorePage;
