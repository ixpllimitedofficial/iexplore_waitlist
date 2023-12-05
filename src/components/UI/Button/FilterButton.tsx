import ArrowButtonDown from "@/assets/svg/ArrowButtonDown.svg";
import Image from "next/image";

type FilterButtonProps = {
  btnText?: string;
  className?: string;
  btnTextClass?: string;
  handleClick?: () => void;
};

const FilterButton = ({
  btnText,
  className,
  btnTextClass,
  handleClick,
}: FilterButtonProps) => {
  return (
    <button
      className={`bg-[#333333] py-3 px-7 border-2 rounded-lg flex items-center gap-3 font-medium ${className}`}
      onClick={handleClick}
    >
      <p className="text-xl">{btnText}</p>
      <Image src={ArrowButtonDown} alt="arrow button down" />
    </button>
  );
};

export default FilterButton;
