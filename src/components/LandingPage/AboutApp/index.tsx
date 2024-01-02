import React from "react";
import ExploreSection from "./ExploreSection";
import DrinksSection from "./DrinksSection";
import SpotDetailsSection from "./SpotDetailsSection";
import FeedSection from "./FeedSection";

const index = () => {
  return (
    <section className="p-10 flex flex-col items-center">
      <h1 className="font-bold text-3xl">About App</h1>

      <ExploreSection />
      <SpotDetailsSection />
      <DrinksSection />
      <FeedSection />
    </section>
  );
};

export default index;
