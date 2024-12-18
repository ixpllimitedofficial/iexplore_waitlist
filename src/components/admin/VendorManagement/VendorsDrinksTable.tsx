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

const VendorsDrinksTable = () => {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/admin/vendor-management/${id}/approve-drink`);
  };

  return (
    <section className="mt-5 bg-brandDarkNeutral p-5 rounded-2xl">
      <p className="font-bold text-xl text-gold-500">Drinks</p>

      {/* TABLE */}
      <Table className="mt-4 w-[1000px] lg:w-full">
        <TableCaption className="text-[#B5B7C0]">
          Showing data 1 to 4 of 4 entries{" "}
          <span className="text-gold-500">(View all)</span>
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-[#424242] border-none">
            <TableHead className=" text-white">S/N</TableHead>
            <TableHead className=" text-white">CUSTOMER</TableHead>
            <TableHead className="text-white">ORDER NO</TableHead>
            <TableHead className="text-white">PAYMENT STATUS</TableHead>
            <TableHead className="text-white">ORDER STATUS</TableHead>
            <TableHead className="text-white">DATE</TableHead>
            <TableHead className="text-white">TOTAL</TableHead>
          </TableRow>
        </TableHeader>

        {[1, 2, 3, 4].map((table) => {
          return (
            <TableBody
              className="border-b-2 border-[#9797974b] "
              key={table}
              onClick={() => handleClick(table)}
            >
              <TableRow>
                <TableCell className="font-medium py-5">{table}</TableCell>
                <TableCell>Dillon Brooks</TableCell>
                <TableCell>3#1i210298</TableCell>
                <TableCell>
                  <Badge className="bg-[#00b69b48] text-[#00B69B] text-sm">
                    Active
                  </Badge>
                </TableCell>
                <TableCell>ORDER FULFILLED</TableCell>
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

export default VendorsDrinksTable;
