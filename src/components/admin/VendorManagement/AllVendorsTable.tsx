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
import DownloadIcon from "@/assets/svg/AdminIconsSvg/DownloadIcon.svg";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/UI/badge";

const AllVendorsTable = () => {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/admin/vendor-management/${id}`);
  };

  return (
    <section className="mt-5 bg-[#4D4D4D] p-5 rounded-2xl">
      <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between">
        <p className="font-bold text-lg text-white">All Explorers</p>

        <div className="flex items-center gap-3">
          <AppSearchInput
            className="bg-white border-none focus-visible:ring-0"
            inputClass="placeholder:text-[##4D4D4D] placeholder:text-sm"
          />

          <Select>
            <SelectTrigger className="w-auto bg-gold-500 text-black border-none focus-visible:ring-0">
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
            <TableHead className="text-white">NAME</TableHead>
            <TableHead className="text-white">PHONE NUMBER</TableHead>
            <TableHead className="text-white">LAST SEEN</TableHead>
            <TableHead className="text-white">CITY</TableHead>
            <TableHead className="text-white">EMAIL</TableHead>
            <TableHead className="text-white">STATUS</TableHead>
          </TableRow>
        </TableHeader>

        {[1, 2, 3, 4, 5, 6, 7].map((table) => {
          return (
            <TableBody
              className="border-b-2 border-[#9797974b]"
              key={table}
              onClick={() => handleClick(table)}
            >
              <TableRow>
                <TableCell className="font-medium py-5">{table}</TableCell>
                <TableCell>Christine Brooks</TableCell>
                <TableCell>09123456789</TableCell>
                <TableCell>1Hour ago</TableCell>
                <TableCell>ikeja-Lagos</TableCell>
                <TableCell>brookschristine.mail.com</TableCell>
                <TableCell>
                  <Badge className="bg-[#ffec4348] text-[#FFEC43] text-sm">
                    Pending
                  </Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          );
        })}
      </Table>
    </section>
  );
};

export default AllVendorsTable;
