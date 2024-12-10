import React from "react";
import Header from "@/components/vendor-components/MiniHeader/Header";
import BusinessBody from "@/components/vendor-components/BusinessRoute/BusinessBody";

const page = () => {
  return (
    <section className="">
      <Header title="Business" className="hidden md:block" />
      <BusinessBody />
    </section>
  );
};

export default page;
