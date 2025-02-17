"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
import { Badge } from "@/components/UI/badge";

const AllContentsTable = () => {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/admin/content-moderation/drinks/${id}`);
  };

  return (
    <section className="mt-5 bg-[#1A1A1A] p-5 rounded-2xl">
      <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between">
        <p className="font-bold text-xl text-white">All drinks</p>

        <div className="flex flex-col lg:flex-row items-center gap-3">
          <AppSearchInput
            className="bg-white border-none focus-visible:ring-0 w-full"
            inputClass="placeholder:text-[##4D4D4D] placeholder:text-sm"
          />
          <div className='w-full flex gap-2'>
            <Select>
              <SelectTrigger className="w-full lg:w-auto bg-gold-500 text-black border-none focus-visible:ring-0">
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
            <TableHead className="text-white">CATEGORY</TableHead>
            <TableHead className="text-white">QUANTITY</TableHead>
            <TableHead className="text-white">PRICE</TableHead>
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
                <TableCell>Martell Davido Limited Edition XO</TableCell>
                <TableCell>Wine</TableCell>
                <TableCell>200</TableCell>
                <TableCell>#203,450.00</TableCell>
                <TableCell>
                  <Badge className="bg-[#008800] text-[#fff] text-sm rounded-full">
                    Active
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

export default AllContentsTable;
