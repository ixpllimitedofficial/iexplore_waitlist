'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowLeft from "@/assets/svg/ArrowLeft.svg";
import Header from "@/components/vendor-components/MiniHeader/Header";
import { useSearchParams } from "next/navigation";

const Page = () => {
  return (
    <main>
      <Header title="Profile" className="hidden md:block" />
      <section className="px-3 md:px-7 md:py-6">
        <div className="flex items-center">
          <Link href="/vendor-Home/profile/adverts/createAd">
            <Image src={ArrowLeft} alt="ArrowLeft" className="justify-start" />
          </Link>

          <div className="flex flex-col justify-center items-center gap-3 w-full">
            <p className="text-xl font-bold md:text-3xl">Ad Checkout</p>
          </div>
        </div>
        <div className="md:w-[50%] mx-auto mt-8">
          <p className="text-xl font-semibold">Premium Plan</p>
          <div className="bg-[#4D4D4D4D] p-3 rounded-lg mt-5">
            <div className="flex justify-between items-center">
              <p className="font-bold">Price:</p>
              <p className="font-bold">N15,000.00</p>
            </div>
            <p className="bg-[#4D4D4D4D] mt-3 py-2 text-center rounded-3xl border border-[#4D4D4D4D] border-opacity-30">
              14Days
            </p>
          </div>
        </div>
        <div className="md:w-[70%] mx-auto mt-5">
          <p className="text-2xl md:text-3xl text-center font-bold">
            Payment method
          </p>
          <div className="mb-5">
            <p className="text-xl md:text-2xl font-semibold mb-3 mt-8">
              Pay with bank transfer
            </p>
            <div className="bg-[#4D4D4D4D] p-3 rounded-lg px-8">
              <div className="flex justify-between items-center my-3">
                <p className="text-sm md:text-xl">Amount:</p>
                <p className="text-sm md:text-xl">15,000.00</p>
              </div>
              <div className="flex justify-between items-center my-3">
                <p className="text-sm md:text-xl">Bank name:</p>
                <p className="text-sm md:text-xl">Stering Bank</p>
              </div>
              <div className="flex justify-between items-center my-3">
                <p className="text-sm md:text-xl">Account number:</p>
                <p className="text-sm md:text-xl">123 456 7890</p>
              </div>
              <div className="flex justify-between items-center my-3">
                <p className="text-sm md:text-xl">Account name:</p>
                <p className="text-sm md:text-xl">iexplore promotion</p>
              </div>
            </div>
            <p className="text-gold-500 text-2xl my-3 font-bold">
              Instructions:
            </p>
            <p>
              1. Please transfer money to this account number through ATM, Bank
              app etc.
            </p>
            <p>
              2. Click on i have made this bank transfer after making transfer
            </p>
            <p>
              3. Payment usually take 30mins or less to be confirmed, please
              exercise patience.
            </p>
          </div>
          <button className="w-full py-2 bg-gold-500 text-center text-brandDark rounded-3xl">
            I have made this bank transfer
          </button>
          <form className="mt-8">
            <p className="text-xl md:text-2xl font-bold">Pay with card</p>
            <p className="text-lg md:text-xl font-semibold my-2">
              Please enter your card details
            </p>
            <div className="w-full h-[100px] flex flex-col rounded-xl md:my-5 bg-[#4D4D4D] px-8 border">
              <label htmlFor="" className="text-xl md:text-2xl mt-2">
                Card Number
              </label>
              <input
                type="text"
                className="h-[80px] bg-inherit border-none outline-none text-xl md:text-2xl"
                placeholder="0000 0000 000 000"
              />
            </div>
            <div className="flex gap-2 md:gap-5 items-center">
              <div className="w-[50%] md:w-full h-[100px] flex flex-col rounded-xl my-5 bg-[#4D4D4D] px-8 border">
                <label htmlFor="" className="text-sm md:text-2xl  mt-2">
                  Card Exipiry
                </label>
                <input
                  type="text"
                  className="h-[80px] bg-inherit border-none outline-none text-xl md:text-2xl "
                  placeholder="MM/YY"
                />
              </div>
              <div className="w-[50%] md:w-full h-[100px] flex flex-col rounded-xl my-5 bg-[#4D4D4D] px-8 border">
                <label htmlFor="" className="text-sm md:text-2xl  mt-2">
                  CVV
                </label>
                <input
                  type="text"
                  className="h-[80px] bg-inherit border-none outline-none text-xl md:text-2xl "
                  placeholder="123"
                />
              </div>
            </div>
            <button className="mb-5 md:mb-0 w-full bg-[#4D4D4D] py-3 rounded-3xl text-2xl hover:bg-gold-500 hover:text-brandDark">
              Pay N15,000.00
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Page;
