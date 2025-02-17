"use client";
import React, { useState } from "react";
import Header from "@/components/vendor-components/MiniHeader/Header";
import ArrowLeft from "@/assets/svg/ArrowLeft.svg";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/UI/tabs";
import StoryImg from "@/assets/img/UserWebappImages/StoryImg.png";

const Page = () => {
  const items = [1, 2, 3, 4, 5, 6]; // Replace with dynamic data when available
  // Initialize state dynamically based on the number of items
  const [followingStates, setFollowingStates] = useState<
    Record<number, boolean>
  >(() => Object.fromEntries(items.map((_, index) => [index, true])));

  const [followerStates, setFollowerStates] = useState<Record<number, boolean>>(
    () => Object.fromEntries(items.map((_, index) => [index, false]))
  );

  const handleFollowing = (index: number) => {
    setFollowingStates((prevStates) => {
      const newStatus = !prevStates[index];
      alert(
        newStatus
          ? `Followed user at index ${index}`
          : `Unfollowed user at index ${index}`
      );
      return {
        ...prevStates,
        [index]: newStatus,
      };
    });
  };
  const handleFollowers = (index: number) => {
    setFollowerStates((prevStates) => ({
      ...prevStates,
      [index]: !prevStates[index], // Toggle the state for the clicked index
    }));

    const newStatus = !followerStates[index];
    alert(
      newStatus
        ? `You are now following user at index ${index}`
        : `You have unfollowed user at index ${index}`
    );
  };
  return (
    <main>
      <Header title="Profile" className="hidden md:block" />
      <section className="px-7 md:py-6">
        <Tabs defaultValue="following" className="w-[100%]">
          <div className="flex items-center">
            <Link href="/vendor-Home/profile">
              <Image
                src={ArrowLeft}
                alt="ArrowLeft"
                className="justify-start"
              />
            </Link>
            <TabsList className="grid grid-cols-2 gap-5 md:w-[50%] mx-auto">
              <TabsTrigger
                value="following"
                className="text-2xl md:text-3xl text-[#4D4D4D] md:pb-3 border-b-2 border-[#4D4D4D] data-[state=active]:!bg-inherit data-[state=active]:shadow-none data-[state=active]:border-gold-500 rounded-none"
              >
                Following
              </TabsTrigger>
              <TabsTrigger
                value="followers"
                className="text-2xl md:text-3xl text-[#4D4D4D] md:pb-3 border-b-2 border-[#4D4D4D] data-[state=active]:!bg-inherit data-[state=active]:shadow-none data-[state=active]:border-gold-500 rounded-none"
              >
                Followers
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="following" className="mt-10 md:mt-8 mx-auto">
            <div className="flex flex-col gap-8">
              {items.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <div className="flex gap-3 items-center">
                      <Image
                        src={StoryImg}
                        alt="profile image"
                        className="w-[50px] h-[50px] md:w-fit md:h-fit "
                      />
                      <p className="md:text-xl font-semibold">Victor Adewale</p>
                    </div>
                    <button
                      onClick={() => handleFollowing(index)}
                      className="border-2 border-gold-500 rounded-3xl py-2 md:py-2 px-3 md:px-8 text-gold-500 hover:bg-gold-500 hover:text-brandDark"
                    >
                      {followingStates[index] ? "Following" : "Follow"}
                    </button>
                  </div>
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value="followers" className=" mt-8 mx-auto">
            <div className="flex flex-col gap-8">
              {items.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <div className="flex gap-3 items-center">
                      <Image
                        src={StoryImg}
                        alt="profile image"
                        className="w-[50px] h-[50px] md:w-fit md:h-fit "
                      />
                      <p className="md:text-xl font-semibold">Victor Adewale</p>
                    </div>
                    <button
                      onClick={() => handleFollowers(index)}
                      className="border-2 border-gold-500 rounded-3xl py-2 md:py-2 px-3 md:px-8 text-gold-500 hover:bg-gold-500 hover:text-brandDark"
                    >
                      {followerStates[index] ? "Following" : "Follow"}
                    </button>
                  </div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
};

export default Page;
