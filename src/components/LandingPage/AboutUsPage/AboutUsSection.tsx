import React from "react";

const AboutUsSection = () => {
  return (
    <section className="p-3 md:p-0 flex flex-col w-[90vw] mx-auto mt-10 lg:mt-20 gap-3">
      <h3 className="font-bold text-xl bg-gold-500 text-black mr-auto py-2 px-4 rounded-xl">
        About Us:
      </h3>

      <div className="flex flex-col lg:flex-row justify-between gap-3 lg:gap-10">
        <p className="font-bold text-2xl lg:w-[75%]">
          <span className="text-gold-500">Introduction</span> to the BEST
          ENTERTAINMENT AGENCY
        </p>

        <p className="text-lg">
          We at iExplore aim at bringing you the deserved entertainment you
          deserve at our company, by giving you the best places to relax, drink
          and party.
        </p>

        <p className="text-lg">
          Every day, the iExplore team brings its members diverse and exciting
          content on dining spots, events, destinations, adventures, weekend
          escapes, and more.
        </p>
      </div>
    </section>
  );
};

export default AboutUsSection;
