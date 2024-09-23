import React from "react";
import DashboardDesktopBar from "./DashboardDesktopBar";
import DashboardMobileBar from "./DashboardMobileBar";

const DashboardNavbar = () => {
  return (
    <>
      <DashboardDesktopBar />
      <DashboardMobileBar />
    </>
  );
};

export default DashboardNavbar;
