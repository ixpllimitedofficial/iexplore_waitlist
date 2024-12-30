"use client";

import React, { useState, useRef, useCallback } from "react";
import Header from "@/components/vendor-components/MiniHeader/Header";
import Link from "next/link";
import Image from "next/image";
import ArrowLeft from "@/assets/svg/ArrowLeft.svg";
import DrinksIcon from "@/assets/svg/UserIconsSvg/DrinksIcon.svg";
import CopyAndShareInput from "@/components/vendor-components/Drinks/copyAndShareLink/CopyAndShareInput";
import RequestCard from "@/components/vendor-components/Drinks/requestCard/requestCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter, useSearchParams } from "next/navigation";

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

const ITEMS_PER_PAGE = 9;
// Dummy drink data
const allDrinksData = Array.from({ length: 50 }, (_, i) => i + 1); // Replace with real data

const Page = () => {
  const [allDrinksPage, setAllDrinksPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionType, setActionType] = useState<"accept" | "decline" | null>(
    null
  );
  const [selectedDrink, setSelectedDrink] = useState<number | null>(null);
  const [isAccepted, setIsAccepted] = useState(false);

  // Pagination logic for all tabs
  const paginate = (data: number[], page: number) => {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return data.slice(startIndex, endIndex);
  };

  const totalPages = (data: number[]) =>
    Math.ceil(data.length / ITEMS_PER_PAGE);

  const acceptDrink = () => {
    setActionType("accept");
    setIsModalOpen(true);
  };

  const declineDrink = () => {
    setActionType("decline");
    setIsModalOpen(true);
  };

  const confirmAction = () => {
    if (actionType === "accept") {
      alert("Drink accepted");
    } else if (actionType === "decline") {
      alert("Drink denied");
    }
    setIsModalOpen(false);
    setActionType(null);
  };

  return (
    <>
      <section className="">
        <Header title="Drinks" className="hidden md:block" />
      </section>
      <section className="px-3 md:px-7 md:py-6 w-[100%]">
        <div className="flex items-center">
          <Link href="/vendor-Home/drinks">
            <Image src={ArrowLeft} alt="ArrowLeft" className="justify-start" />
          </Link>

          <div className="md:mt-0 flex justify-center items-center gap-3 w-full">
            <p className="font-bold text-lg md:text-3xl">Drink requests</p>
          </div>
        </div>
        <div className="mt-10 w-[100%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
          <CopyAndShareInput />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 pr-1 md:pr-5 mt-10">
            {paginate(allDrinksData, allDrinksPage).map((drink) => (
              <RequestCard
                key={drink}
                handleAccept={acceptDrink}
                handleDecline={declineDrink}
              />
            ))}
          </div>
          {/* Pagination for All Drinks */}
          <div className="flex justify-between items-center mt-5 mx-0 md:mx-2">
            <div className="flex space-x-1">
              {Array.from({ length: totalPages(allDrinksData) })
                .map((_, index) => index + 1)
                .filter((page) => {
                  // Display first 3 pages, last 2 pages, and current page with neighbors
                  return (
                    page <= 3 ||
                    page > totalPages(allDrinksData) - 2 ||
                    (page >= allDrinksPage - 1 && page <= allDrinksPage + 1)
                  );
                })
                .reduce<(number | string)[]>((acc, page, index, array) => {
                  // Add ellipses where necessary
                  if (index > 0 && page > array[index - 1] + 1) {
                    acc.push("...");
                  }
                  acc.push(page);
                  return acc;
                }, [])
                .map((page, index) =>
                  typeof page === "number" ? (
                    <button
                      key={index}
                      className={`p-1 md:px-3 md:py-1 border rounded-full ${
                        allDrinksPage === page
                          ? "bg-gold-500 text-brandDark font-bold"
                          : "bg-[#4D4D4D] text-[#B0B0B0] font-bold"
                      }`}
                      onClick={() => setAllDrinksPage(page)}
                    >
                      {page}
                    </button>
                  ) : (
                    <span key={index} className="md:px-3 py-1">
                      {page}
                    </span>
                  )
                )}
            </div>
            <div className="flex space-x-2">
              <button
                className={` px-1 md:px-4 py-1 border rounded-md flex md:gap-1 items-center ${
                  allDrinksPage === 1
                    ? "bg-[#4D4D4D] text-[#B0B0B0]"
                    : "bg-gold-500 text-black"
                }`}
                disabled={allDrinksPage === 1}
                onClick={() => setAllDrinksPage(allDrinksPage - 1)}
              >
                <ArrowBackIosNewIcon />
                Previous
              </button>
              <button
                className={`px-1 md:px-4 py-1 border rounded-md flex md:gap-1 items-center ${
                  allDrinksPage === totalPages(allDrinksData)
                    ? "bg-[#4D4D4D] text-[#B0B0B0]"
                    : "bg-gold-500 text-black"
                }`}
                disabled={allDrinksPage === totalPages(allDrinksData)}
                onClick={() => setAllDrinksPage(allDrinksPage + 1)}
              >
                Next
                <ArrowForwardIosIcon />
              </button>
            </div>
          </div>
        </div>

        {/* AlertDialog */}
        <AlertDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <AlertDialogContent className="border-gold-500 flex flex-col justify-center items-center text-center w-[95%] md:w-full">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-center text-2xl">
                {actionType === "accept" ? "Accept Request" : "Decline Request"}
              </AlertDialogTitle>
              <AlertDialogDescription className="w-[80%] text-center mx-auto">
                {actionType === "accept"
                  ? "Are you sure you want to accept this drink? claim request"
                  : "Are you sure you want to decline this drink? claim request"}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex flex-row items-center gap-3">
              <AlertDialogAction
                onClick={confirmAction}
                className="bg-gold-500 text-brandDark px-6 rounded-full hover:bg-white"
              >
                {actionType === "accept" ? "Accept" : "Decline"}
              </AlertDialogAction>
              <AlertDialogCancel
                onClick={() => setIsModalOpen(false)}
                className="bg-brandDark px-6 rounded-full text-gold-500 border-gold-500"
              >
                Cancel
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </section>
    </>
  );
};

export default Page;
