"use client";

import { userStore } from "@/store/user";
import { redirect, usePathname } from "next/navigation";
import NewDashboardNavbar from "@/components/UI/AdminUI/Navbar/DashboardNavbar/NewDashboardNavbar";
export default function UserPrivateRoute({ children }: any) {
  const isVendorLoggedin = userStore((state: any) => state.isVendorLoggedin);

  const pathname = usePathname();

  if (pathname === "/vendor-Home") {
    return children;
  }

  // if (!isAdminLoggedin) {
  //   return redirect("/admin");
  // }

  return (
    <section className="grid grid-cols-12">
      {/* navbar */}
      <NewDashboardNavbar />
      <div className="relative col-span-12 lg:col-span-10 pt-5 lg:pt-0 bg-primary">
        {/* main content */}
        {children}
      </div>
    </section>
  );
}
