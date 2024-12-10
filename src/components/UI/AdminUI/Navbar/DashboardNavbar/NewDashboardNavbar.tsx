import React from "react";
import NewDashboardDesktopBar from "./NewDashboardDesktopBar";
import NewDashboardMobileBar from "./NewDashboardMobileBar";

const NewDesktopNavbar = () => {
  return (
    <>
      <NewDashboardDesktopBar/>
      <NewDashboardMobileBar/>
    </>
  );
};

export default NewDesktopNavbar;
