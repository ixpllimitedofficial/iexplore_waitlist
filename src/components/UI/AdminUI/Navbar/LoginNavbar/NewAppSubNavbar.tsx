import React from "react";

interface Props {
  title: string;
  className: string;
}
const NewAppSubNavbar:React.FC<Props> = ({ title, className }) => {
  return <p className={`${className} text-white`}>{title}</p>;
};

export default NewAppSubNavbar;
