"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import DrinkImage from "@/assets/img/UserWebappImages/DrinkImage.png";
import BookmarkIcon from "@/assets/svg/BookmarkIcon.svg";
import { Button } from "@/components/UI/button";
import RatingsIcon from "@/assets/svg/UserIconsSvg/RatingsIcon.svg";
import { DeleteIcon, Trash2Icon } from "lucide-react";
type EventProps = {
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleDelete?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  removeDiscount?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onSaveDiscount: (discountData: {
    selectedDiscount: number | null;
    customDiscount: string;
  }) => void;
  showDeleteButton?: boolean; // Add this prop
  hideDicountContent?: boolean;
};
const DrinkCard = ({
  handleClick,
  showDeleteButton,
  handleDelete,
  hideDicountContent,
  removeDiscount,
  onSaveDiscount,
}: EventProps) => {
  const [selectedDiscount, setSelectedDiscount] = useState<number | null>(null);
  const [customDiscount, setCustomDiscount] = useState<string>("");

  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the form from reloading
    // Pass the values to the parent component
    onSaveDiscount({ selectedDiscount, customDiscount });
  };
  return (
    <div
      className={`relative bg-[#4D4D4D66] px-2 py-3 rounded-3xl flex flex-col ${
        hideDicountContent ? "mb-10" : ""
      }`}
    >
      {/* badge */}
      {/* <h1 className="absolute bg-gold-500 text-black px-4 py-1 rounded-3xl right-7 top-7 font-bold">
        Free
      </h1> */}

      <div className="w-full h-[130px] md:h-[200px] overflow-hidden rounded-3xl">
        <Image
          src={DrinkImage}
          alt="drink image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex items-center justify-between mt-4 mb-1 px-2">
        <p className="text-sm md:text-lg font-semibold">
          Johnnie Walker Black Label
        </p>

        <div className="flex items-center gap-1">
          <Image
            src={RatingsIcon}
            alt="RatingsIcon"
            height={20}
            className={`${hideDicountContent ? "block" : "hidden"} md:block`}
          />
          <p
            className={`${
              hideDicountContent ? "block" : "hidden"
            } font-bold text-gold-500 text-lg md:block`}
          >
            4.5
          </p>
        </div>
      </div>

      <div className="px-2 flex items-center my-1">
        <p className=" text-sm md:text-xl font-bold">N232,000</p>
        <p
          className={`${
            hideDicountContent ? "block" : "hidden"
          }pl-2 text-lg text-[#D1D1D1] hidden md:block`}
        >
          Available at Club Quilox
        </p>
      </div>

      <Button
        className="bg-gold-500 hover:bg-white transition duration-200 text-[#322016] px-10 py-5 rounded-3xl font-bold text-sm md:text-lg mt-3"
        onClick={handleClick}
      >
        Drinks Details
      </Button>
      {showDeleteButton && ( // Conditionally render the delete button
        <Button
          className="flex gap-1 items-center bg-[#E50000] text-white hover:bg-gold-500 hover:text-brandDark transition duration-200 md:px-10 py-5 rounded-3xl font-bold text-sm md:text-lg mt-3"
          onClick={handleDelete}
        >
          <Trash2Icon />
          Remove Drink
        </Button>
      )}
      {hideDicountContent && (
        <div className="mt-3">
          <form onSubmit={handleSubmit}>
            <p className="text-[#F6F6F6]">Select discount</p>
            <div className="my-5 flex gap-1 items-center">
              {[10, 25, 50, 75].map((discount) => (
                <Button
                  type="button"
                  key={discount}
                  onClick={() => setSelectedDiscount(discount)}
                  className={`bg-[#4D4D4D] text-[#B0B0B0] rounded-2xl flex-1 hover:bg-gold-500 hover:text-brandDark ${
                    selectedDiscount === discount
                      ? "bg-gold-500 text-brandDark"
                      : ""
                  }`}
                >
                  {discount}%
                </Button>
              ))}
            </div>
            <p className="text-[#F6F6F6] text-lg">Set custom Discount</p>
            <input
              type="text"
              value={customDiscount}
              onChange={(e) => setCustomDiscount(e.target.value)}
              className="mt-3 w-[100%] rounded-full bg-[#4D4D4D] p-1 px-3 outline-none border"
            />
            <div className="absolute -bottom-12 w-[97%]">
              <div className="flex justify-between gap-3">
                <Button
                  type="button"
                  onClick={removeDiscount}
                  className="bg-[#E50000] text-white rounded-2xl hover:bg-white hover:text-brandDark"
                >
                  Remove Discount
                </Button>
                <Button
                  type="submit"
                  className="bg-gold-500 text-white rounded-2xl px-8 hover:bg-white hover:text-brandDark"
                >
                  Save
                </Button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default DrinkCard;
