import React from "react";
import DashboardHeader from "@/components/vendor-components/Dashboard/DashboardHeader";
import DashboardBody from "@/components/vendor-components/Dashboard/DashboardBody";
import Header from "@/components/vendor-components/MiniHeader/Header";
const page = () => {
  return (
    <section className="">
      <Header title="Home" className="hidden md:block" />
      {/* <DashboardHeader /> */}
      <DashboardBody />
    </section>
  );
};

export default page;
