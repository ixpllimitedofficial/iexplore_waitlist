"use client";

import { userStore } from "@/store/user";
import { redirect, usePathname } from "next/navigation";

export default function UserPrivateRoute({ children }: any) {
  const isAdminLoggedin = userStore((state: any) => state.isAdminLoggedin);

  const pathname = usePathname();

  if (pathname === "/admin") {
    return children;
  }

  if (!isAdminLoggedin) {
    return redirect("/admin");
  }

  return children;
}
