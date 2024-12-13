"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import TopSearchBar from "@/components/vendor-components/BusinessRoute/TopSearchBar";
import MarketLogoIcon from "@/assets/svg/VendorSvg/Frame 1000003936.svg";
import ClubCard from "@/components/vendor-components/SportsDetails/ClubCard";

const BusinessBody = () => {
  return (
    <div className="mt-5 px-5">
      <TopSearchBar />
      <Link href="/vendor-Home/dashboard/set-up">
        <div className="bg-[#4D4D4D66] w-full md:w-[35%] mx-auto my-12 p-5 text-center rounded-lg">
          <h1 className="font-bold text-2xl mb-2">Add a new business</h1>
          <div className="flex items-center gap-2 text-left">
            <Image
              src={MarketLogoIcon}
              alt="market logo icon"
              width={50}
              height={50}
            />
            <p className="text-sm text-[#999999]">
              Create new or add existing business to iexplore vendor and monitor
              operations
            </p>
          </div>
        </div>
      </Link>
      {/* spots cards */}
      <h1 className="font-semibold text-3xl">My Spots</h1>
      <div className="my-6 grid grid-col-1 lg:grid-cols-3 gap-5 md:pr-5">
        {[1, 2, 3, 4, 5, 6].map((card) => {
          return <ClubCard key={card} />;
        })}
      </div>
    </div>
  );
};

export default BusinessBody;
