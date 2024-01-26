import AppButton from "@/components/UI/Button/AppButton";
import React from "react";

const Category = () => {
  return (
    <section className="bg-[#333333] border-2 border-[#F7D098] rounded-xl p-3 md:p-5 flex flex-wrap gap-3 md:justify-between w-[80%] lg:w-[65%] mx-auto mt-10">
      <AppButton btnText="All" className="text-sm md:text-lg" />
      <AppButton btnText="Club" className="text-sm md:text-lg" /> 
      <AppButton btnText="Beach" className="text-sm md:text-lg" />
      <AppButton btnText="Restaurants" className="text-sm md:text-lg" />
      <AppButton btnText="Bars" className="text-sm md:text-lg" />
      <AppButton btnText="Lounge" className="text-sm md:text-lg" />
    </section>
  );
};

export default Category;
