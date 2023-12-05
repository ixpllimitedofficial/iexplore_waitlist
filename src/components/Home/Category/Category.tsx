import AppButton from "@/components/UI/Button/AppButton";
import React from "react";

const Category = () => {
  return (
    <section className="bg-[#333333] border-2 border-[#F7D098] rounded-xl p-5 flex justify-between w-[65%] mx-auto mt-10">
      <AppButton btnText="All" />
      <AppButton btnText="Club" />
      <AppButton btnText="Beach" />
      <AppButton btnText="Restaurants" />
      <AppButton btnText="Bars" />
      <AppButton btnText="Lounge" />
    </section>
  );
};

export default Category;
