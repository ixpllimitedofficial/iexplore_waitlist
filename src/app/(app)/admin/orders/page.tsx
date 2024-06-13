import React from "react";
import Image from "next/image";
import GlasscupIconSvg from "@/assets/svg/AdminIconsSvg/GlasscupIconSvg.svg";
import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import AllOrdersTable from "@/components/admin/Orders/AllOrdersTable";

const page = () => {
  const divStyle =
    "col-span-full md:col-span-3 lg:col-span-2 flex items-center gap-2 bg-brandDarkNeutral pr-5 py-5 rounded-2xl text-sm";

  return (
    <>
      <div className="grid grid-cols-8 gap-4 mt-5">
        <div className={divStyle}>
          <div className="bg-gold-500 p-1 h-full"></div>

          <div className="flex-grow">
            <p>TOTAL ORDERS</p>
            <div className="flex gap-1 items-center">
              <p className="font-bold text-base">200</p>

              <div className="flex items-center">
                <ArrowUpIcon color="#00AC4F" />
                <p className="text-sm">
                  <span className="text-sm text-[#00AC4F]"> 16% </span> this
                  month
                </p>
              </div>
            </div>
          </div>

          <Image src={GlasscupIconSvg} alt="GlasscupIconSvg" />
        </div>
        <div className={divStyle}>
          <div className="bg-gold-500 p-1 h-full"></div>

          <div className="flex-grow">
            <p>CLAIMED DRINKS</p>
            <div className="flex gap-1 items-center">
              <p className="font-bold text-base">50</p>

              <div className="flex items-center">
                <ArrowDownIcon color="#FF1800" />
                <p className="text-sm">
                  <span className="text-sm text-[#FF1800]">1% </span> this month
                </p>
              </div>
            </div>
          </div>

          <Image src={GlasscupIconSvg} alt="GlasscupIconSvg" />
        </div>
        <div className={divStyle}>
          <div className="bg-gold-500 p-1 h-full"></div>

          <div className="flex-grow">
            <p>UNCLAIMED DRINKS</p>
            <p className="font-bold text-base">20</p>
          </div>

          <Image src={GlasscupIconSvg} alt="GlasscupIconSvg" />
        </div>
      </div>

      <AllOrdersTable />
    </>
  );
};

export default page;
