import ArrowButtonDownWhite from "@/assets/svg/ArrowButtonDownWhite.svg";
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
      className={` py-2 md:py-3 px-4 md:px-7 border-2 rounded-lg flex justify-around items-center gap-2 font-medium ${className}`}
      onClick={handleClick}
    >
      <p className={`text-sm md:text-base ${btnTextClass} `}>{btnText}</p>
      <Image
        src={ArrowButtonDownWhite}
        alt="arrow button down"
        className="h-[7px]"
      />
    </button>
  );
};

export default FilterButton;
