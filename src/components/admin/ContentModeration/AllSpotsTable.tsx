"use client";

import React, { useEffect } from "react";
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
import { adminActions } from "@/app/adminActions";
import { formatTo12Hour } from "@/utils/functions/timeFormatter";


const AllSpotsTable = () => {
  const router = useRouter();
  const { spots, fetchSpots, searchSpots, sortSpots, isLoading, error } = adminActions()

  console.log(spots)

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchSpots(token)
    }
  }, [fetchSpots]);

  const handleSearch = (value: string) => {
    searchSpots(value)
  }

  const handleSort = (value: 'newest' | 'oldest') => {
    sortSpots(value)
  }

  if (isLoading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center text-red-500 p-4">Error: {error}</div>;

  const handleClick = (id: string) => {
    router.push(`/admin/content-moderation/spots/${encodeURIComponent(id)}`);
  };

  return (
    <section className="mt-5 bg-[#1A1A1A] p-5 rounded-2xl">
      <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between">
        <p className="font-bold text-xl text-white">All spots</p>
        <div className="flex flex-col lg:flex-row items-center gap-3">
          <AppSearchInput
            className="bg-white border-none focus-visible:ring-0 w-full"
            inputClass="placeholder:text-[##4D4D4D] placeholder:text-sm"
            onChange={handleSearch}
               placeholder="Search spots..."
          />
          <div className='w-full flex gap-2'>
            <Select onValueChange={handleSort}>
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
            <TableHead className="text-white">SPOT NAME</TableHead>
            <TableHead className="text-white">LOCATION</TableHead>
            <TableHead className="text-white">RATING</TableHead>
            <TableHead className="text-white">WORKING HOURS</TableHead>
            <TableHead className="text-white">STATUS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border-b-2 border-[#9797974b]">
          {spots.map((spot, index) => (
            <TableRow
              key={spot.id}
              onClick={() => handleClick(spot.id)}
              className="cursor-pointer hover:bg-[#424242] transition-colors"
            >
              <TableCell className="font-medium py-5">{index + 1}</TableCell>
              <TableCell>{spot.name}</TableCell>
              <TableCell>{spot.location}</TableCell>
              <TableCell>4.0 (90)</TableCell>
              <TableCell>{`${formatTo12Hour(spot.opening_time)} - ${formatTo12Hour(spot.closing_time)}`}</TableCell>
              <TableCell>
                {/* <Badge className="bg-[#008800] text-[#fff] text-sm rounded-full">
                  Active
                </Badge> */}
                <Badge
                  className={`${spot.is_verified
                    ? 'bg-[#008800] text-[#fff]'
                    : 'bg-red-100 text-red-500'
                    } text-sm`}
                >
                  {spot.is_verified ? 'Active' : 'Disabled'}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  )
};

export default AllSpotsTable;
