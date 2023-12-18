import React from "react";
import AppInput from "../UI/Inputs/AppInput";
import ClubCard from "../UI/Cards/ClubCard";

const ClubsPage = () => {
  return (
    <section className="py-10">
      <h1 className="text-[#E1BD8A] text-3xl font-bold w-[90vw] mx-auto">
        Clubs
      </h1>

      <AppInput
        type="search"
        placeholder="Search"
        inputClass="w-[60%] mx-auto mt-5"
      />

      <div className="flex flex-wrap justify-around mt-14 w-[80vw] mx-auto gap-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12].map((card) => {
          return <ClubCard key={card} />;
        })}
      </div>
    </section>
  );
};

export default ClubsPage;
