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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/UI/alert-dialog";

const Page = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    router.push("/vendor-Home/profile/adverts/1");
  };
  const handleDelete = () => {
    setOpenDialog(true);
  };
  const handleConfirmDelete = () => {
    // Handle delete logic here
    alert("Delete confirmed");
    console.log("Delete confirmed");
  };
  return (
    <main>
      <Header title="Profile" className="hidden md:block" />
      <section className="px-3 md:px-7 md:py-6">
        <div className="flex items-center">
          <Link href="/vendor-Home/profile/adverts">
            <Image src={ArrowLeft} alt="ArrowLeft" className="justify-start" />
          </Link>

          <div className="flex flex-col justify-center items-center gap-3 w-full">
            <p className="text-xl font-bold md:text-3xl">Remove Ad</p>
          </div>
        </div>
        <div className="md:w-[90%] mt-10 mx-auto">
          <p className="text-2xl font-bold mb-5">Running Ads</p>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
            {[1, 2, 3, 4, 5, 6].map((item, index) => {
              return (
                <AdvertCard
                  key={index}
                  profileImg={StoryImg}
                  title="DJ Maxx Party hard"
                  status="Running"
                  duration="21 Days"
                  time_remaining="7 Days"
                  handleClick={handleClick}
                  handleDelete={handleDelete}
                  isRemoveAd={true}
                />
              );
            })}
          </div>
        </div>
      </section>
      {/* AlertDialog */}
      <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
        <AlertDialogContent className="border-gold-500 flex flex-col justify-center items-center text-center w-[95%] md:w-full">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center text-2xl">
              Remove Ad
            </AlertDialogTitle>
            <AlertDialogDescription className="w-[80%] text-center mx-auto">
              Are you sure you want to remove this advert from your ongoing
              campaign
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex flex-row items-center gap-3">
            <AlertDialogAction
              onClick={handleConfirmDelete}
              className="bg-gold-500 text-brandDark px-6 rounded-full hover:bg-white"
            >
              Remove ad
            </AlertDialogAction>
            <AlertDialogCancel
              onClick={() => setOpenDialog(false)}
              className="bg-brandDark px-6 rounded-full text-gold-500 border-gold-500"
            >
              Cancel
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
};

export default Page;
