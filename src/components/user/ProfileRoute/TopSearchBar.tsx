"use client";

import { usePathname } from "next/navigation";
import AppSearchInput from "@/components/UI/Inputs/AppSearchInput";
import { Button } from "@/components/UI/button";
import Link from "next/link";

const TopSearchBar = () => {
  const pathname = usePathname();

  return (
    <section>
      <div className="flex flex-col md:flex-row items-center gap-3 md:gap-20 px-5">
        <AppSearchInput
          className="bg-[#4D4D4D66] text-gold-500 border-none focus-visible:ring-0 flex-grow w-full"
          inputClass="placeholder:text-[#B0B0B0] placeholder:text-lg"
        />

        <div className="flex flex-row gap-3">
          <Link href="/user/profile/saved-locations">
            <Button
              className={`${
                pathname === "/user/profile/saved-locations"
                  ? "bg-gold-500 text-brandDark hover:bg-gold-500 hover:text-brandDark"
                  : "bg-[#4D4D4D66] text-[#B0B0B0] hover:bg-gold-500 hover:text-brandDark"
              } transition duration-200 px-5 md:px-10 py-5 rounded-3xl font-bold text-lg`}
            >
              Locations
            </Button>
          </Link>

          <Link href="/user/profile/saved-drinks">
            <Button
              className={`${
                pathname === "/user/profile/saved-drinks"
                  ? "bg-gold-500 text-brandDark hover:bg-gold-500 hover:text-brandDark"
                  : "bg-[#4D4D4D66] text-[#B0B0B0] hover:bg-gold-500 hover:text-brandDark "
              } transition duration-200 px-5 md:px-10 py-5 rounded-3xl font-bold text-lg`}
            >
              Drinks
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopSearchBar;
