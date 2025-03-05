// 'use client'

// import React from "react";
// import DashboardHeader from "@/components/admin/Dashboard/DashboardHeader";
// import DashboardBody from "@/components/admin/Dashboard/DashboardBody";
// import useAdminAuth from "@/utils/adminAuth"

// const Page = () => {
//   const { isLoading, isAuthenticated } = useAdminAuth()

//   if (isLoading || !isAuthenticated) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <p>Loading...</p>
//       </div>
//     );
//   }
//   return (
//     <section className="">
//       <DashboardHeader />
//       <DashboardBody />
//     </section>
//   );
// };

// export default Page;
"use client";
import DashboardHeader from "@/components/admin/Dashboard/DashboardHeader";
import DashboardBody from "@/components/admin/Dashboard/DashboardBody";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { adminStore } from "@/store/admin";

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);
  const isAdminLoggedin = adminStore((state) => state.isAdminLoggedin);
  const router = useRouter();

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("adminToken="));

    if (!token) {
      router.replace("/admin-login");
    } else {
      setIsLoading(false);
    }
  }, [router]); 

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section>
        <DashboardHeader />
        <DashboardBody />
      </section>
    </div>
  );
}
