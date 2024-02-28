import React from "react";

const Analytics = () => {
  return (
    <section className="p-14">
      {/* heading */}
      <div className=" flex justify-between">
        <h1 className="text-[22px] md:text-3xl font-bold">Analytics</h1>

        <select
          name="This week"
          id=""
          className="bg-[#F7D098] text-[#212121] text-xl font-semibold px-2"
        >
          <option value="week">This week</option>
          <option value="month">This month</option>
          <option value="year">This year</option>
        </select>
      </div>

      {/* analytics data */}
      <div className="flex justify-between gap-4 mt-5">
        <div className="bg-[#333333] w-full h-[350px] p-5 rounded-3xl">
          <h1 className="text-[22px] md:text-2xl font-bold">Spots managed</h1>
          <hr className="mt-3" />
        </div>
        <div className="bg-[#333333] w-full h-[350px] p-5 rounded-3xl">
          <h1 className="text-[22px] md:text-2xl font-bold">Drinks</h1>
          <hr className="mt-3" />
        </div>
      </div>

      <div className="bg-[#333333] w-full h-[350px] p-5 mt-5 rounded-3xl">
        <h1 className="text-[22px] md:text-2xl font-bold">Visitors traffic</h1>
        <hr className="mt-3" />
      </div>
    </section>
  );
};

export default Analytics;
