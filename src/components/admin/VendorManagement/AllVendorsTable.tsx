"use client";

import React, { useEffect } from "react";
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
import { adminActions } from "@/app/adminActions";

const AllVendorsTable = () => {
  const router = useRouter();
  const { vendors, isLoading, error, fetchVendors, searchVendors, sortVendors } = adminActions();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchVendors(token);
    }
  }, [fetchVendors]);

  const handleSearch = (value: string) => {
    searchVendors(value);
  };

  const handleSort = (value: 'newest' | 'oldest') => {
    sortVendors(value);
  };

  if (isLoading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center text-red-500 p-4">Error: {error}</div>;

  const handleClick = (id: string) => {
    router.push(`/admin/vendor-management/${encodeURIComponent(id)}`);
  };

  return (
    <section className="mt-5 bg-[#1A1A1A] p-5 rounded-2xl">
      <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-center lg:justify-between">
        <p className="font-bold text-lg text-white">All Explorers</p>

        <div className="flex flex-col lg:flex-row items-center gap-3">
          <AppSearchInput
            className="bg-white border-none focus-visible:ring-0 w-full"
            inputClass="placeholder:text-[##4D4D4D] placeholder:text-sm"
            onChange={handleSearch}
            placeholder="Search vendors..."
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
            <TableHead className="text-white">NAME</TableHead>
            <TableHead className="text-white">PHONE NUMBER</TableHead>
            <TableHead className="text-white">LAST SEEN</TableHead>
            <TableHead className="text-white">CITY</TableHead>
            <TableHead className="text-white">EMAIL</TableHead>
            <TableHead className="text-white">STATUS</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {vendors.map((vendor, index) => (
            <TableRow
              key={vendor.id}
              onClick={() => handleClick(vendor.id)}
              className="cursor-pointer hover:bg-[#424242] transition-colors"
            >
              <TableCell className="font-medium py-5">{index + 1}</TableCell>
              <TableCell>{`${vendor.first_name} ${vendor.last_name}`}</TableCell>
              <TableCell>{vendor.phone || 'N/A'}</TableCell>
              <TableCell>
                {vendor.last_login
                  ? new Date(vendor.last_login).toLocaleDateString()
                  : 'Never'}
              </TableCell>
              <TableCell>{vendor.location || 'N/A'}</TableCell>
              <TableCell>{vendor.email}</TableCell>
              <TableCell>
                <Badge
                  className={`${vendor.is_active
                    ? 'bg-[#00b69b48] text-[#00B69B]'
                    : 'bg-red-100 text-red-500'
                    } text-sm`}
                >
                  {vendor.is_active ? 'Active' : 'Disabled'}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default AllVendorsTable;
