"use client";

import { userStore } from "@/store/user";
import { redirect, usePathname } from "next/navigation";

export default function UserPrivateRoute({ children }: any) {
  const isUserLoggedin = userStore((state: any) => state.isUserLoggedin);

  const pathname = usePathname();

  if (pathname === "/user") {
    return children
  }

  if (!isUserLoggedin) {
    return redirect("/user");
  }

  return children;
}
