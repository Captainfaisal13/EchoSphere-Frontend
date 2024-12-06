import React from "react";
import CheckAuth from "../checkAuth";
import Bookmark from "../_components/bookmark/bookmark";

const BookmarkPage = () => {
  return (
    <CheckAuth>
      <Bookmark />
    </CheckAuth>
  );
};

export default BookmarkPage;
