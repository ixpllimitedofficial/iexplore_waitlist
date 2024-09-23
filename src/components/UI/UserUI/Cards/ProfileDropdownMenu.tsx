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

import { signOut } from "@/auth/helpers";
import { useRouter } from "next/navigation";
import { userStore } from "@/store/user";

const ProfileDropdownMenu = () => {
  const logoutUser = userStore((state: any) => state.logoutUser);

  // router
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-[200] -mr-44 mt-6 lg:mt-1 lg:mr-5">
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

        <DropdownMenuItem
          onClick={() => {
            router.push("/login");
            // async () => {
            // await signOut();
          }}
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdownMenu;
