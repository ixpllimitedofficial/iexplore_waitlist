"use client";

import { vendorStore } from "@/store/vendor";
import { redirect, usePathname } from "next/navigation";
import NewDashboardNavbar from "@/components/UI/AdminUI/Navbar/DashboardNavbar/NewDashboardNavbar";
export default function UserPrivateRoute({ children }: any) {
  const token = vendorStore((state: any) => state.token);
  const { accessToken } = token;
  const pathname = usePathname();

  if (pathname === "/vendor-Home") {
    return children;
  }

  // // Redirect to vendor home if no access token
  // if (!accessToken) {
  //   return redirect("/vendor-Home");
  // }

  return (
    <section className="grid grid-cols-12">
      {/* navbar */}
      <NewDashboardNavbar />
      <div className="relative col-span-12 lg:col-span-10 pt-5 lg:pt-0  bg-primary">
        {/* main content */}
        {children}
      </div>
    </section>
  );
}
