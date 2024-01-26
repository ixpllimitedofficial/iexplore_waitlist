import React from "react";

const AboutUsSection = () => {
  return (
    <section className="flex flex-col w-[90vw] mx-auto mt-20 gap-3">
      <h3 className="font-bold text-xl bg-[#E1BD8A] text-black mr-auto py-2 px-4 rounded-2xl">
        About Us
      </h3>

      <div className="flex flex-col lg:flex-row justify-between gap-7">
        <p className="font-bold text-2xl lg:w-[70%]">
          <span className="text-[#E1BD8A]">Introduction</span>
           {" "}to the BEST ENTERTAINMENT AGENCY
        </p>

        <p className="text-xl">
          We at iExplore aim at bringing you the deserved entertainment you
          deserve at our company, by giving you the best places to relax, drink
          and party.
        </p>

        <p className="text-xl">
          Every day, the iExplore team brings its members diverse and exciting
          content on dining spots, events, destinations, adventures, weekend
          escapes, and more.
        </p>
      </div>
    </section>
  );
};

export default AboutUsSection;
