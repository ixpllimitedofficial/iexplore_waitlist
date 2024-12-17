"use client";

import React, { useState, useRef, useCallback } from "react";
import Header from "@/components/vendor-components/MiniHeader/Header";
import Link from "next/link";
import Image from "next/image";
import ArrowLeft from "@/assets/svg/ArrowLeft.svg";
import { useRouter } from "next/navigation";
import DrinksIcon from "@/assets/svg/UserIconsSvg/DrinksIcon.svg";

const Page = () => {
  return (
    <>
      <section className="">
        <Header title="Drinks" className="hidden md:block" />
      </section>
      <section className="px-7 py-6 w-[100%]">
        <div className="flex items-center">
          <Link href="/vendor-Home/drinks">
            <Image src={ArrowLeft} alt="ArrowLeft" className="justify-start" />
          </Link>

          <div className=" mt-14 md:mt-0 flex justify-center items-center gap-3 w-full">
            <p className="font-bold text-lg md:text-3xl">Drink requests</p>
          </div>
        </div>
        <div className="mt-10 w-[100%] mx-auto">
          <div className="grid grid-cols-3 gap-5">
            <div className="bg-[#4D4D4D4D] p-3 rounded-lg flex items-center gap-3">
              <Image
                src={DrinksIcon}
                alt="drinks icon"
                width={45}
                height={45}
                className="p-2 bg-[#4D4D4D] rounded-full"
              />
              <div>
                <p className="text-2xl font-bold pb-2">Total Request</p>
                <p className="text-3xl font-bold text-gold-500">300</p>
              </div>
            </div>
            <div className="bg-[#4D4D4D4D] p-3 rounded-lg flex items-center gap-3">
              <Image
                src={DrinksIcon}
                alt="drinks icon"
                width={45}
                height={45}
                className="p-2 bg-[#4D4D4D] rounded-full"
              />
              <div>
                <p className="text-2xl font-bold pb-2">Claimed</p>
                <p className="text-3xl font-bold text-gold-500">289</p>
              </div>
            </div>
            <div className="bg-[#4D4D4D4D] p-3 rounded-lg flex items-center gap-3">
              <Image
                src={DrinksIcon}
                alt="drinks icon"
                width={45}
                height={45}
                className="p-2 bg-[#4D4D4D] rounded-full"
              />
              <div>
                <p className="text-2xl font-bold pb-2">Unclaimed (Expired)</p>
                <p className="text-3xl font-bold text-gold-500">11</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
