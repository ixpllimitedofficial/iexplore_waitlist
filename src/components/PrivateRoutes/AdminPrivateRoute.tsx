"use client";

import { userStore } from "@/store/user";
import { redirect, usePathname } from "next/navigation";
import DashboardNavbar from "@/components/UI/AdminUI/Navbar/DashboardNavbar/DashboardNavbar";

export default function UserPrivateRoute({ children }: any) {
  const isAdminLoggedin = userStore((state: any) => state.isAdminLoggedin);

  const pathname = usePathname();

  if (pathname === "/admin") {
    return children;
  }

  // if (!isAdminLoggedin) {
  //   return redirect("/admin");
  // }

  return (
    <section className="grid grid-cols-12">
      {/* navbar */}
      <DashboardNavbar />
      <div className="relative col-span-12 lg:col-span-10 pt-5 lg:pt-0  ">
        {/* main content */}
        {children}
      </div>
    </section>
  );
}
