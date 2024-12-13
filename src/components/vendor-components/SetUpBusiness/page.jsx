"use client";
import React from "react";
import Image from "next/image";
import Styles from "./page.module.css";
import MarketIcon from "@/assets/svg/VendorSvg/marketSvg.svg";
import NotifyIcon from "@/assets/svg/VendorSvg/NoticeSvg.svg";
import DrinksIcon from "@/assets/svg/VendorSvg/drinkSvg.svg";
import AppButton from "@/components/UI/Button/AppButton";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const SetUpBusiness = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/vendor-Home/dashboard/set-up");
  };
  return (
    <div className={`${Styles.container} p-6 rounded-2xl h-fit`}>
      <h1 className="text-2xl font-semibold text-center mb-6">
        Continue business setup
      </h1>
      <div className="border-t-2 border-[#e0e0e042] flex-grow"></div>
      <div className="mt-3 flex gap-2 items-center">
        <Image src={MarketIcon} alt="market icon" />
        <div>
          <h2 className="font-semibold mb-1">Update business information</h2>
          <p className={`${Styles.paragraph} `}>
            Add more information about your business
          </p>
        </div>
      </div>
      <div className="mt-3 flex gap-2 items-center">
        <Image src={NotifyIcon} alt="notify icon" />
        <div>
          <h2 className="font-semibold mb-1">Setup business operations</h2>
          <p className={`${Styles.paragraph} `}>
            Set operation hours and preparations time
          </p>
        </div>
      </div>
      <div className="mt-3 flex gap-2 items-center">
        <Image src={DrinksIcon} alt="drinks icon" />
        <div>
          <h2 className="font-semibold mb-1">Manage drinks catalogue</h2>
          <p className={`${Styles.paragraph} `}>
            Add items to your catalogue easily
          </p>
        </div>
      </div>
      <AppButton
        btnText="Set up business"
        className="w-full mt-3 rounded-full"
        handleClick={handleClick}
      />
    </div>
  );
};

export default SetUpBusiness;
