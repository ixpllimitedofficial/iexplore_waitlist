import Image from "next/image";

type ButtonProps = {
  btnText?: string;
  className?: string;
  handleClick?: () => void;
  leftIcon?: string;
  rightIcon?: string;
};

const AppButton = ({
  btnText,
  className,
  handleClick,
  leftIcon,
  rightIcon,
}: ButtonProps) => {
  return (
    <button
      className={`${className} bg-[#F7D098] text-[#212121] text-lg py-2 px-4 rounded-xl font-bold flex items-center justify-center gap-2`}
      onClick={handleClick}
    >
      {leftIcon && <Image src={leftIcon} alt="leftIcon" height={20} />}
      <p>{btnText}</p>{" "}
      {rightIcon && <Image src={rightIcon} alt="rightIcon" height={12} />}
    </button>
  );
};

export default AppButton;
