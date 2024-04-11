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

const AllVendorsTable = () => {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/admin/dashboard/vendor-management/${id}`);
  };

  return (
    <section className="mt-5 bg-[#333333] p-5 rounded-2xl">
      <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between">
        <p className="font-bold text-2xl text-[#F7D098]">All vendors</p>

        <div className="flex items-center gap-5">
          <AppSearchInput
            className="bg-[#F7D09866z] text-[#F7D098] border-none focus-visible:ring-0"
            inputClass="placeholder:text-[#F7D098]"
          />

          <Select>
            <SelectTrigger className="w-auto bg-[#F7D09866] text-[#F7D098] border-none focus-visible:ring-0">
              <SelectValue placeholder="Sort by: Newest" />
            </SelectTrigger>
            <SelectContent className="">
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="latest">Latest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* TABLE */}
      <Table className="mt-4 w-[1000px] lg:w-full">
        <TableCaption className="text-[#B5B7C0]">
          Showing data 1 to 8 of 256K entries
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-[#424242] border-none">
            <TableHead className=" text-white">S/N</TableHead>
            <TableHead className="text-white">NAME</TableHead>
            <TableHead className="text-white">PHONE NUMBER</TableHead>
            <TableHead className="text-white">BUSINESS NAME</TableHead>
            <TableHead className="text-white">BUSINESS PHONE NUMBER</TableHead>
            <TableHead className="text-white">BUSINESS EMAIL</TableHead>
            <TableHead className="text-center text-white">STATUS</TableHead>
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
                <TableCell>Club 777</TableCell>
                <TableCell>09123456789</TableCell>
                <TableCell>brookschristine.mail.com</TableCell>
                <TableCell className="text-center">
                  <p className="bg-[#ffec4348] text-[#FFEC43]  py-1 rounded-md font-semibold m-auto">
                    Pending
                  </p>
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
