"use client";
import React from "react";
import DashboardHeader from "@/components/vendor-components/Dashboard/DashboardHeader";
import DashboardBody from "@/components/vendor-components/Dashboard/DashboardBody";
import Header from "@/components/vendor-components/MiniHeader/Header";
import { useStore } from "zustand";
import { vendorStore } from "@/store/vendor";
import { isAuthenticated } from "@/utils/auth";
import { useRouter } from "next/navigation";
const Page = () => {
  const token = useStore(vendorStore, (state: any) => state.token);

  return (
    <section className="">
      <Header title="Home" className="hidden md:block" />
      {/* <DashboardHeader /> */}
      <DashboardBody />
    </section>
  );
};

export default Page;
