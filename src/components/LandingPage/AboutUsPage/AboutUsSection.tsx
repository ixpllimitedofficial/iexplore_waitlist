import React from "react";

const AboutUsSection = () => {
  return (
    <section className="p-3 md:p-0 flex flex-col w-[90vw] mx-auto mt-10 lg:mt-20 gap-3">
      <h3 className="font-bold text-xl bg-gold-500 text-black mr-auto py-2 px-4 rounded-xl">
        About Us:
      </h3>

      <div className="grid grid-cols-3 justify-between gap-5 lg:gap-10">
        <p className="col-span-full lg:col-span-1 font-bold text-3xl">
          <span className="text-gold-500">Introduction</span> to the BEST
          ENTERTAINMENT AGENCY
        </p>

        <p className="text-lg col-span-full lg:col-span-1">
          We are a dynamic and innovative mobile application with root in the
          nightlife experience market.  The brand is born out of passion and the
          desire to redefine the way we experience the nightlife industry in
          Africa.
        </p>

        <p className="text-lg col-span-full lg:col-span-1">
          Our brand pillars offer cutting edge solutions that will elevate the
          night’s experience. Explorers are exposed to a new and seamless
          perspective to discovering, enjoying and connecting with the best
          nightlife spots In their city
        </p>

        <p className="text-lg col-span-full lg:col-span-1">
          We are more than an application, We are your personal connection to
          the best and happening places in your city. We are committed to
          empowering you to accomplish more, connect deeper and experience life
          to the fullest.
        </p>

        <p className="text-lg col-span-full lg:col-span-1">
        Everyday, Explorers get to go on exciting adventures as they discover new destinations where they can connect and  enjoy the night out with friends.
        </p>
      </div>
    </section>
  );
};

export default AboutUsSection;
