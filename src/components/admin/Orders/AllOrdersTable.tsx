"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/UI/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select";
import AppSearchInput from "@/components/UI/Inputs/AppSearchInput";
import { useRouter } from "next/navigation";
import Image from "next/image";
import DownloadIcon from "@/assets/svg/AdminIconsSvg/DownloadIcon.svg";
import { Badge } from "@/components/UI/badge";

const AllOrdersTable = () => {
  const router = useRouter();

  const handleClick = (id: number) => {
    // router.push(`/admin/dashboard/user-management/${id}`);
  };

  return (
    <section className="mt-5 bg-[#333333] p-5 rounded-2xl">
      <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between">
        <p className="font-bold text-xl text-gold-500">All Orders</p>

        <div className="flex items-center gap-3">
          <AppSearchInput
            className="bg-gold-800 text-gold-500 border-none focus-visible:ring-0"
            inputClass="placeholder:text-gold-500 placeholder:text-sm"
          />

          <Select>
            <SelectTrigger className="w-auto bg-gold-800 text-gold-500 border-none focus-visible:ring-0">
              <SelectValue placeholder="Sort by: Newest" />
            </SelectTrigger>
            <SelectContent className="">
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="latest">Latest</SelectItem>
            </SelectContent>
          </Select>

          <Image src={DownloadIcon} alt="download" />
        </div>
      </div>

      {/* TABLE */}
      <Table className="mt-4 w-[1000px] lg:w-full">
        <TableCaption className="text-[#B5B7C0]">
          Showing data 1 to 8 of 256K entries{" "}
          <span className="text-gold-500">(View all)</span>
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-[#424242] border-none">
            <TableHead className=" text-white">S/N</TableHead>
            <TableHead className="text-white">CUSTOMER</TableHead>
            <TableHead className="text-white">VENDOR</TableHead>
            <TableHead className="text-white">ORDER NO</TableHead>
            <TableHead className="text-white">PAYMENT STATUS</TableHead>
            <TableHead className="text-white">FULFILMENT STATUS</TableHead>
            <TableHead className="text-white">DATE</TableHead>
            <TableHead className="text-white">TOTAL</TableHead>
          </TableRow>
        </TableHeader>

        {[1, 2, 3, 4, 5, 6, 7].map((table) => {
          return (
            <TableBody
              className="border-b-2 border-[#9797974b] "
              key={table}
              onClick={() => handleClick(table)}
            >
              <TableRow>
                <TableCell className="font-medium py-5">{table}</TableCell>
                <TableCell>Dillon Brooks</TableCell>
                <TableCell>John Drew</TableCell>
                <TableCell>3#1i210298</TableCell>
                <TableCell>
                  <Badge className="bg-[#00b69b48] text-[#00B69B] text-sm">
                    PAID
                  </Badge>
                </TableCell>
                <TableCell>DRINK CLAIMED</TableCell>
                <TableCell>02/10/2024</TableCell>
                <TableCell>N54,000</TableCell>
              </TableRow>
            </TableBody>
          );
        })}
      </Table>
    </section>
  );
};

export default AllOrdersTable;
