import React from "react";
import CheckAuth from "../checkAuth";
import Settings from "../_components/settings/page";

const SettingPage = () => {
  return (
    <CheckAuth>
      <Settings />
    </CheckAuth>
  );
};

export default SettingPage;
