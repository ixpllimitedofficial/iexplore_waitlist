// import DesktopNavApp from "@/components/Navbars/UserWebappNavbar/DesktopNavApp";
import DesktopNavApp from "./DesktopNavApp";
import MobileNavApp from "./MobileNavApp";

const AppNavbar = () => {
  return (
    <>
      <DesktopNavApp />
      <MobileNavApp />
    </>
  );
};

export default AppNavbar;
