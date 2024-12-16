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
import { useRouter } from "next/navigation";
import { Badge } from "@/components/UI/badge";

const UserFavoritesTable = () => {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/admin/user-management/${id}`);
  };

  return (
    <section className="mt-5 bg-[#23232325] p-5 rounded-2xl">
      <p className="font-bold text-xl text-white">Favorites</p>

      {/* TABLE */}
      <Table className="mt-4 w-[1000px] lg:w-full">
        <TableCaption className="text-[#B5B7C0]">
          Showing data 1 to 2 of 2 entries{" "}
          <span className="text-gold-500">(View all)</span>
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-[#424242] border-none">
            <TableHead className=" text-white">S/N</TableHead>
            <TableHead className="text-white">NAME</TableHead>
            <TableHead className="text-white">LOCATION</TableHead>
            <TableHead className="text-white">RATINGS</TableHead>
            <TableHead className="text-white">OPENNG HOURS</TableHead>
            <TableHead className="text-white">STATUS</TableHead>
          </TableRow>
        </TableHeader>

        {[1, 2].map((table) => {
          return (
            <TableBody
              className="border-b-2 border-[#9797974b] "
              key={table}
              onClick={() => handleClick(table)}
            >
              <TableRow>
                <TableCell className="font-medium py-5">{table}</TableCell>
                <TableCell>Club Quilox</TableCell>
                <TableCell>
                  873 Ozumba Mbadiwe Ave, Victoria Island 106104, Lagos
                </TableCell>
                <TableCell>4.0(90)</TableCell>
                <TableCell>6:00PM - 4:00AM</TableCell>
                <TableCell>
                  <Badge className="bg-[#00b69b48] text-[#00B69B] text-sm">
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

export default UserFavoritesTable;
