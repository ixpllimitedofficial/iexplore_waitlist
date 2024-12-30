import React from "react";
import NewDashboardDesktopBar from "./NewDashboardDesktopBar";
import NewDashboardMobileBar from "./NewDashboardMobileBar";
import { usePathname } from "next/navigation";

const VENDOR_HOME_PREFIX = "/vendor-Home";

const NewDesktopNavbar = () => {
  const pathname = usePathname();

  const hiddenMobileBarRoutes = [
    `${VENDOR_HOME_PREFIX}/dashboard/set-up`,
    `${VENDOR_HOME_PREFIX}/business/1`,
    `${VENDOR_HOME_PREFIX}/drinks/add`,
    `${VENDOR_HOME_PREFIX}/drinks/remove`,
    `${VENDOR_HOME_PREFIX}/drinks/discount`,
    `${VENDOR_HOME_PREFIX}/drinks/request`,
    `${VENDOR_HOME_PREFIX}/profile/following`,
    `${VENDOR_HOME_PREFIX}/profile/edit`,
    `${VENDOR_HOME_PREFIX}/profile/1`,
    `${VENDOR_HOME_PREFIX}/profile/insight`,
    `${VENDOR_HOME_PREFIX}/profile/terms`,
    `${VENDOR_HOME_PREFIX}/profile/privacy`,
    `${VENDOR_HOME_PREFIX}/profile/support`,
    `${VENDOR_HOME_PREFIX}/profile/adverts`,
    `${VENDOR_HOME_PREFIX}/profile/adverts/1`,
    `${VENDOR_HOME_PREFIX}/profile/adverts/createAd`,
    `${VENDOR_HOME_PREFIX}/profile/adverts/createAd/checkoutAd`,
    `${VENDOR_HOME_PREFIX}/profile/adverts/boostAd`,
    `${VENDOR_HOME_PREFIX}/profile/adverts/boostAd/boostCheckout`,
    `${VENDOR_HOME_PREFIX}/profile/adverts/deleteAd`,
  ];
  // Check if the current path is in the hidden routes
  const shouldShowMobileBar = !hiddenMobileBarRoutes.includes(pathname);

  return (
    <>
      <NewDashboardDesktopBar />
      {shouldShowMobileBar && <NewDashboardMobileBar />}
    </>
  );
};

export default NewDesktopNavbar;
