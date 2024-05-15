import AppButton from "@/components/UI/Button/AppButton";
import React from "react";

const Category = () => {
  return (
    <section className="bg-[#333333] border-2 border-gold-500 rounded-xl p-3 md:p-5 flex flex-wrap gap-3 md:justify-between w-[80%] lg:w-[55vw] mx-auto mt-5">
      <AppButton btnText="All" className="text-sm" />
      <AppButton btnText="Club" className="text-sm" />
      <AppButton btnText="Beach" className="text-sm" />
      <AppButton btnText="Restaurants" className="text-sm" />
      <AppButton btnText="Bars" className="text-sm" />
      <AppButton btnText="Lounge" className="text-sm" />
    </section>
  );
};

export default Category;
