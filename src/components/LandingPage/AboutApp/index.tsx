import React from "react";
import ExploreSection from "./ExploreSection";
import DrinksSection from "./DrinksSection";
import SpotDetailsSection from "./SpotDetailsSection";
import FeedSection from "./FeedSection";
import AboutPageTextIcon from "@/assets/svg/LandingPageSvg/AboutPageTextIcon.svg"
import Image from "next/image";

const index = () => {
  return (
    <section className="p-10 flex flex-col items-center">
      <div>
        <Image src={AboutPageTextIcon} alt="AboutPageTextIcon" className="mx-auto" />
        <h1 className="font-bold text-3xl">About App</h1>
      </div>

      <ExploreSection />
      <SpotDetailsSection />
      <DrinksSection />
      <FeedSection />
    </section>
  );
};

export default index;
