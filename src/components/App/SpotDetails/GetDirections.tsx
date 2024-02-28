import Link from "next/link";
import React from "react";

const GetDirections = () => {
  return (
    <section className="relative bg-white h-[300px] md:h-[500px] md:w-[90%] mx-auto mt-10 rounded-3xl flex  items-center justify-center">
      <Link
        href="/userspot-details/directions"
        className="absolute bottom-10 text-center flex flex-col justify-center items-center"
      >
        <p className="rounded-xl px-3 md:px-10 py-2 bg-[#333333] text-lg md:text-xl text-[#E1BD8A] font-medium">
          Get directions via maps
        </p>
      </Link>
    </section>
  );
};

export default GetDirections;
