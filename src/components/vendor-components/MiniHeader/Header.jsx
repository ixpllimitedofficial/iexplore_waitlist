import React from "react";

const Header = ({ title, className }) => {
  return (
    <div className={`${className} sticky top-0 z-50 w-[100%] p-6 bg-brandDark text-3xl`}>
      <h1 className="font-bold">{title}</h1>
    </div>
  );
};

export default Header;
