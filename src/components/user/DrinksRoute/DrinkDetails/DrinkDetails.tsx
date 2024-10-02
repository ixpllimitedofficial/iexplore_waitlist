import { Button } from "@/components/UI/button";
import React from "react";

const DrinkDetails = () => {
  return (
    <section className="mt-8">
      {/* images */}
      <div className="grid grid-cols-2 gap-5 h-[380px]">
        <div className="bg-[#4D4D4D66]"></div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#4D4D4D66]"></div>
          <div className="bg-[#4D4D4D66]"></div>
          <div className="bg-[#4D4D4D66]"></div>
          <div className="bg-[#4D4D4D66]"></div>
          <div className="bg-[#4D4D4D66]"></div>
          <div className="bg-[#4D4D4D66]"></div>
        </div>
      </div>

      <Button className="bg-gold-500 hover:bg-white transition duration-200 text-[#322016] px-14 py-5 rounded-3xl font-bold text-base mt-5">
        Claim drink
      </Button>

      {/* details */}
      <div className="mt-7">
        <p className=" font-bold text-2xl">Drink Description</p>

        <div className="mt-2 grid grid-cols-3 gap-20">
          <p className="text-lg col-span-2">
            The bottle designed by Victor Ehikhamenor, is inspired by the
            vibrancy of Lagos and the unbreakable spirit of its inhabitants. It
            embodies the energy that sets Lagos apart and its ability to spur
            its dwellers to Keep Walking. Enjoy this limited-edition Johnnie
            Walker Black Label with notes of sweet vanilla and warming smoky
            finish. It is part of the Johnnie Walker “Keep Walking City
            Collection” that features cities like Tokyo, Seoul, New Mexico and
            others.
          </p>

          <div className="col-span-1 flex flex-col gap-3">
            <p className="text-lg font-bold text-[#D1D1D1]">
              Available at Club Quilox
            </p>
            <p className="text-lg font-bold text-[#D1D1D1]">
              <span className="text-gold-500">Remember: </span>
              You have 24hours to get your drink at this location after you
              claim it online.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrinkDetails;
