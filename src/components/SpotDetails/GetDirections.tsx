import Link from "next/link";
import React from "react";

const GetDirections = () => {
  return (
    <section className="relative bg-white h-[500px] w-[90%] mx-auto mt-10 rounded-3xl flex  items-center justify-center">
      <Link href="/spot-details/directions" className="absolute bottom-10 text-center flex flex-col justify-center items-center">
        <p className="rounded-xl px-10 py-4 bg-[#333333] text-2xl text-[#E1BD8A]">
          Get directions via maps
        </p>
      </Link>
    </section>
  );
};

export default GetDirections;
