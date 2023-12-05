import AppButton from "@/components/UI/Button/AppButton";
import React from "react";

const Category = () => {
  return (
    <section className="bg-[#333333] border-2 border-[#F7D098] rounded-xl p-5 flex justify-between w-[65%] mx-auto mt-10">
      <AppButton text="All" />
      <AppButton text="Club" />
      <AppButton text="Beach" />
      <AppButton text="Restaurants" />
      <AppButton text="Bars" />
      <AppButton text="Lounge" />
    </section>
  );
};

export default Category;
