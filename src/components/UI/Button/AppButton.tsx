import Image from "next/image";

type ButtonProps = {
  btnText?: string;
  className?: string;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  leftIcon?: string;
  rightIcon?: string;
  type?: "submit" | "button" | "reset";
};

const AppButton = ({
  btnText,
  className,
  handleClick,
  leftIcon,
  rightIcon,
  type,
}: ButtonProps) => {
  return (
    <button
      className={`${className} bg-brandGold text-white py-2 px-4 md:px-10 rounded-xl font-bold flex items-center justify-center gap-1`}
      onClick={handleClick}
      type={type}
    >
      {leftIcon && <Image src={leftIcon} alt="leftIcon" height={20}  color="white"/>}
      <p>{btnText}</p>{" "}
      {rightIcon && <Image src={rightIcon} alt="rightIcon" height={15}  />}
    </button>
  );
};

export default AppButton;
