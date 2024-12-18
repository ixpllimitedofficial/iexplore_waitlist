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

  // Pagination logic for all tabs
  const paginate = (data: number[], page: number) => {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return data.slice(startIndex, endIndex);
  };

  const totalPages = (data: number[]) =>
    Math.ceil(data.length / ITEMS_PER_PAGE);

const acceptDrink =()=>{
  alert("drinks accepted");
}
const declineDrink =()=>{
  alert("Drinks denied");
}


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
          <div className="flex justify-between items-center mt-5 mx-2">
            <div className="flex space-x-1">
              {Array.from({ length: totalPages(allDrinksData) }).map(
                (_, index) => (
                  <button
                    key={index + 1}
                    className={`px-3 py-1 border rounded-full ${
                      allDrinksPage === index + 1
                        ? "bg-gold-500 text-brandDark font-bold"
                        : "bg-[#4D4D4D] text-[#B0B0B0] font-bold"
                    }`}
                    onClick={() => setAllDrinksPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                )
              )}
            </div>
            <div className="flex space-x-2">
              <button
                className={`px-4 py-1 border rounded-md flex gap-1 items-center ${
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
                className={`px-4 py-1 border rounded-md flex gap-1 items-center ${
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
      </section>
    </>
  );
};

export default Page;
