import React from "react";

const Loader = ({ classNames = "size-10 my-4" }) => {
  return (
    <div
      className={`border-gray-300 animate-spin rounded-full border-4 border-t-border-2 mx-auto ${classNames}`}
    />
  );
};

export default Loader;
