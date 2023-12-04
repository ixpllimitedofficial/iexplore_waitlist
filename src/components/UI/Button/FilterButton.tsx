import ArrowButtonDown from "@/assets/svg/ArrowButtonDown.svg";
import Image from "next/image";

type FilterButtonProps = {
    btnText: string
}

const FilterButton = ({btnText}: FilterButtonProps) => {
  return (
    <button className="bg-[#333333] py-3 px-8 border-2 rounded-lg flex items-center gap-3">
      <p className="text-xl">{btnText}</p>
      <Image src={ArrowButtonDown} alt="arrow button down" />
    </button>
  );
};

export default FilterButton;
