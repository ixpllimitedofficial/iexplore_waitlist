"use client";

import React from "react";
import Image from "next/image";
import Analytics from "@/components/vendor-components/Analytics/Analytics";
import SetUpBusiness from "@/components/vendor-components/SetUpBusiness/page";
import ClubSection from "@/components/vendor-components/SportsDetails/ClubsSection";
import DrinksSection from "@/components/vendor-components/Drinks/DrinksSection";
import TabsDemo from "@/components/vendor-components/QuestionReviews/page";
import AdvertSection from "@/components/vendor-components/AdvertSection/page";

const DashboardBody = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const anotherContainer = true; // Dynamically change this value
  const isAdvert = true; //Dynamically change this if no advert

  return (
    <section className="px-4 sm:px-7 mt-6">
      {/* <div className={`grid grid-cols-${anotherContainer ? 3 : 1} gap-2 h-fit`}>
        <div className={`col-span-${anotherContainer ? 2 : 3}`}>
          <Analytics hasAnotherContainer={anotherContainer} />
        </div>
        {anotherContainer && (
          <div className="md:col-span-1">
            <SetUpBusiness />
          </div>
        )}
      </div> */}
      <div
        className={`grid ${
          anotherContainer ? "grid-cols-1 lg:grid-cols-3" : "grid-cols-1"
        } gap-2 h-fit`}
      >
        <div
          className={`${
            anotherContainer ? "order-2 lg:order-1 lg:col-span-2" : "col-span-3"
          }`}
        >
          <Analytics hasAnotherContainer={anotherContainer} />
        </div>
        {anotherContainer && (
          <div className="order-1 lg:order-2 lg:col-span-1 mt-16 md:mt-0">
            <SetUpBusiness />
          </div>
        )}
      </div>

      <ClubSection />
      {isAdvert && <AdvertSection />}
      <DrinksSection />
      <div className="w-full">
        <TabsDemo />
      </div>
    </section>
  );
};

export default DashboardBody;
