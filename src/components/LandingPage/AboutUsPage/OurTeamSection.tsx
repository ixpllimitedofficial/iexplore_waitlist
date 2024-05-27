import React from "react";

const OurTeamSection = () => {
  return (
    <section className="flex flex-col items-center gap-5 bg-black py-12">
      {/* <h3 className="font-bold text-xl bg-gold-500 text-black py-2 px-4 rounded-2xl">
        Our Team:
      </h3> */}

      <div className="text-center">
        <h3 className="font-bold text-3xl">
          Meet the <span className="text-gold-500">iExplore</span> team:
        </h3>
        <p className="text-lg mt-1 px-5 md:px-0">
          A Group Of Seasoned Team Of Workers
        </p>
      </div>

      {/* team photos */}
      <div className="flex flex-wrap gap-5 justify-around w-[90vw]">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((card) => {
          return (
            <div key={card} className="rounded-3xl overflow-hidden">
              <div className="h-[300px] w-[280px] bg-white"></div>
              <div className="h-[80px] p-10 bg-gold-500"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurTeamSection;
