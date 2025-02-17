import React from "react";
import Header from "@/components/vendor-components/MiniHeader/Header";
import RemoveTabs from "@/components/vendor-components/Drinks/removeTabs/page";
import DiscountTabs from "@/components/vendor-components/Drinks/discountTabs/page";

import Image from "next/image";
import Link from "next/link";
import ArrowLeft from "@/assets/svg/ArrowLeft.svg";

const Page = () => {
  return (
    <section className="">
      <Header title="Drinks" className="hidden md:block" />

      <div className="flex items-center md:mt-5 mx-3">
        <Link href="/vendor-Home/drinks">
          <Image src={ArrowLeft} alt="ArrowLeft" className="justify-start" />
        </Link>

        <div className="md:mt-0 flex justify-center items-center gap-3 w-full">
          <p className="font-bold text-lg md:text-3xl">Drink Discount</p>
        </div>
      </div>
      {/* spots cards */}
      <div className="mt-10 mx-2 md:mx-5">
        <DiscountTabs />
      </div>
    </section>
  );
};

export default Page;
