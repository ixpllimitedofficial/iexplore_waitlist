"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopSearchBar from "@/components/vendor-components/BusinessRoute/TopSearchBar";
import MarketLogoIcon from "@/assets/svg/VendorSvg/Frame 1000003936.svg";
import ClubCard from "@/components/vendor-components/SportsDetails/ClubCard";
import { PlusCircle, MinusCircle, GiftIcon } from "lucide-react";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import DrinksTab from "@/components/vendor-components/Drinks/DrinksTabs/page";
import { useRouter, useSearchParams } from "next/navigation";

const DrinksBody = () => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.trim()) {
      router.push(
        `drinks/drinks-search?query=${encodeURIComponent(searchQuery)}`
      );
    }
  };
  return (
    <div className="mt-5 px-5">
      <TopSearchBar value={query} onChange={handleSearch} />
      <div className="flex gap-5 md:w-[65%] justify-center items-center mt-10 mx-auto text-center">
        <Link href="/vendor-Home/drinks/add" className="w-[50%]">
          <div className="bg-[#4D4D4D66] flex gap-2 items-center p-3 md:p-5 rounded-lg">
            <div className="bg-[#4D4D4D] p-1 md:p-2 rounded-full">
              <PlusCircle />
            </div>
            <div>
              <h1 className="font-bold text-sm md:text-2xl mb-2">Add Drinks</h1>
              <p className="text-sm text-[#999999]">Add more or new drinks</p>
            </div>
          </div>
        </Link>
        <Link href="/vendor-Home/drinks/add" className="w-[50%]">
          <div className="bg-[#4D4D4D66] flex gap-2 items-center p-3 md:p-5 rounded-lg">
            <div className="bg-[#4D4D4D] p-1 md:p-2 rounded-full">
              <MinusCircle />
            </div>
            <div>
              <h1 className="font-bold text-sm md:text-2xl mb-2">
                Remove Drinks
              </h1>
              <p className="text-sm text-[#999999]">
                Remove more or old drinks
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex gap-5 md:w-[65%] justify-center items-center mt-3 mx-auto text-center">
        <Link href="/vendor-Home/drinks/add" className="w-[50%]">
          <div className="bg-[#4D4D4D66] flex gap-2 items-center p-3 md:p-5 rounded-lg">
            <div className="bg-[#4D4D4D] p-1 md:p-2 rounded-full">
              <LocalOfferOutlinedIcon />
            </div>
            <div>
              <h1 className="font-bold text-sm md:text-2xl mb-2">
                Drinks Discount
              </h1>
              <p className="text-sm text-[#999999]">
                Update discount on your drinks
              </p>
            </div>
          </div>
        </Link>
        <Link href="/vendor-Home/drinks/request" className="w-[50%]">
          <div className="bg-[#4D4D4D66] flex gap-2 items-center p-5 rounded-lg">
            <div className="bg-[#4D4D4D] p-1 md:p-2 rounded-full">
              <GiftIcon />
            </div>
            <div>
              <h1 className="font-bold text-sm md:text-2xl mb-2">
                Drinks Request
              </h1>
              <p className="text-sm text-[#999999]">
                View claimed requests on your drinks
              </p>
            </div>
          </div>
        </Link>
      </div>
      {/* spots cards */}
      <div className="mt-10">
        <h1 className="font-neueMontreal text-3xl">My Drinks</h1>
        <DrinksTab />
      </div>
    </div>
  );
};

export default DrinksBody;
