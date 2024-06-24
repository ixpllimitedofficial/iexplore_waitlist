"use client";

import { Button } from "@/components/UI/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar";
import Link from "next/link";

import { userStore } from "@/store/user";

const ProfileDropdownMenu = () => {
  const logoutUser = userStore((state: any) => state.logoutUser);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-[200] mr-3">
        <DropdownMenuLabel>Anita Cruz</DropdownMenuLabel>

        <DropdownMenuSeparator />
        {/* <DropdownMenuGroup>
          <Link href="/admin/profile">
            <DropdownMenuItem>Profile</DropdownMenuItem>
          </Link>

          <Link href="/admin/settings">
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator /> */}

        <DropdownMenuItem onClick={() => logoutUser()}>
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdownMenu;
