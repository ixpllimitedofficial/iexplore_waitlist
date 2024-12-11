import React from "react";
import MobileNavApp from "./MobileNavApp";
import NewDesktopNavApp from "./NewDesktopNavApp";

interface Props{
  sub_title: string;
}
const NewAppNavbar:React.FC<Props> = ({sub_title}) => {
  return (
    <>
      <NewDesktopNavApp title={sub_title}/>
      {/* <MobileNavApp /> */}
    </>
  );
};

export default NewAppNavbar;