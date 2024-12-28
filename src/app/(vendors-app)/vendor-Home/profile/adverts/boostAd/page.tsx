"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowLeft from "@/assets/svg/ArrowLeft.svg";
import Header from "@/components/vendor-components/MiniHeader/Header";
import AdvertCard from "@/components/vendor-components/AdvertSection/advertCard/page";
import StoryImg from "@/assets/img/UserWebappImages/StoryImg.png";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/vendor-Home/profile/adverts/1");
  };
  const handleBoost =()=>{
    router.push("/vendor-Home/profile/adverts/boostAd/boostCheckout");
  }
  return (
    <main>
      <Header title="Profile" className="hidden md:block" />
      <section className="px-7 md:py-6">
        <div className="flex items-center">
          <Link href="/vendor-Home/profile/adverts">
            <Image src={ArrowLeft} alt="ArrowLeft" className="justify-start" />
          </Link>

          <div className="flex flex-col justify-center items-center gap-3 w-full">
            <p className="hidden md:block font-bold text-3xl">Boost Ad</p>
          </div>
        </div>
        <div className="w-[90%] mt-10 mx-auto">
          <p className="text-2xl font-bold mb-5">Running Ads</p>
          <div className=" grid grid-cols-2 gap-5">
            {[1, 2, 3, 4, 5, 6].map((item) => {
              return (
                <AdvertCard
                  profileImg={StoryImg}
                  title="DJ Maxx Party hard"
                  status="Running"
                  duration="21 Days"
                  time_remaining="7 Days"
                  handleClick={handleClick}
                  handleBoost={handleBoost}
                  isBoostAd={true}
                />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
