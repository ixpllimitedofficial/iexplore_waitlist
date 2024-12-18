import React from "react";
import Header from "@/components/vendor-components/MiniHeader/Header";
import DrinksBody from "@/components/vendor-components/Drinks/DrinksBody/DrinksBody";
const Page = () => {
  return (
    <section className="">
      <Header title="Drinks" className="hidden md:block" />
      <DrinksBody />
    </section>
  );
};

export default Page;
