
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
import { useRouter } from "next/navigation";
import Image from "next/image";
import DownloadIcon from "@/assets/svg/AdminIconsSvg/DownloadIcon.svg";
import { Badge } from "@/components/UI/badge";
import { adminActions } from "@/app/adminActions";


const AllUsersTable = () => {
  const router = useRouter();
  const { users, isLoading, error, fetchUsers, sortUsers, searchUsers } = adminActions();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUsers(token);
    }
  }, [fetchUsers]);

  const handleClick = (id: string) => {
    router.push(`/admin/user-management/${encodeURIComponent(id)}`);
  };

  // Updated to handle direct string value
  const handleSearch = (value: string) => {
    searchUsers(value);
  };

  const handleSort = (value: 'newest' | 'oldest') => {
    sortUsers(value);
  };

  if (isLoading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center text-red-500 p-4">Error: {error}</div>;

  return (
    <section className="mt-5 bg-[#1A1A1A] p-3 lg:p-5 rounded-2xl">
      <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between">
        <p className="font-bold text-lg text-white">All Explorers</p>

        <div className="flex flex-col lg:flex-row items-center gap-3">
          <AppSearchInput
            className="bg-white border-none focus-visible:ring-0 w-full"
            inputClass="placeholder:text-[##4D4D4D] placeholder:text-sm"
            onChange={handleSearch}
            placeholder="Search users..."
          />
          <div className='w-full flex gap-2'>
            <Select onValueChange={handleSort}>
              <SelectTrigger className="w-full lg:w-auto bg-gold-500 text-black border-none focus-visible:ring-0">
                <SelectValue placeholder="Sort by: Newest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
              </SelectContent>
            </Select>

            <Image src={DownloadIcon} alt="download" />
          </div>
        </div>
      </div>

      <Table className="mt-4 w-[1000px] lg:w-full">
        <TableCaption className="text-[#B5B7C0]">
          Showing data 1 to {users.length} entries
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-[#424242] border-none">
            <TableHead className="text-white">S/N</TableHead>
            <TableHead className="text-white">NAME</TableHead>
            <TableHead className="text-white">PHONE NUMBER</TableHead>
            <TableHead className="text-white">LAST SEEN</TableHead>
            <TableHead className="text-white">EMAIL</TableHead>
            <TableHead className="text-white">ROLE</TableHead>
            <TableHead className="text-white">STATUS</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user, index) => (
            <TableRow
              key={user.id}
              onClick={() => handleClick(user.id)}
              className="cursor-pointer hover:bg-[#424242] transition-colors"
            >
              <TableCell className="font-medium py-5">{index + 1}</TableCell>
              <TableCell>{`${user.first_name} ${user.last_name}`}</TableCell>
              <TableCell>{user.phone || 'N/A'}</TableCell>
              <TableCell>
                {user.last_login
                  ? new Date(user.last_login).toLocaleDateString()
                  : 'Never'}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Badge
                  className={`${user.is_active
                      ? 'bg-[#00b69b48] text-[#00B69B]'
                      : 'bg-red-100 text-red-500'
                    } text-sm`}
                >
                  {user.is_active ? 'Active' : 'Inactive'}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default AllUsersTable;