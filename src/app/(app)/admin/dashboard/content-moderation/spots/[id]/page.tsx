import React from "react";
import Image from "next/image";
import SpotImage from "@/assets/img/AdminPageImages/SpotImage.png";

const page = () => {
  return (
    <section className="mt-5 grid grid-cols-4 gap-5">
      <div className="col-span-3 bg-[#333333] p-5 lg:p-8 rounded-2xl">
        <p className="font-bold text-2xl text-[#FFFFFF]">Club Quilox</p>

        <div className="flex flex-col lg:flex-row mt-5 gap-5">
          <Image src={SpotImage} alt="spot image" />

          <div className="flex flex-col gap-10">
            <p className="text-lg">
              Located at the heart of Lagos is the King of entertainment and
              nightlife in the city. Experience the thrill of Lagos nightlife
              here.
            </p>

            <div className="flex justify-between gap-5">
              <p className="font-medium w-[60%]">
                873 Ozumba Mbadiwe Ave, Victoria Island 106104, Lagos
              </p>

              <div className="">
                <p className="">Open now</p>
                <p className="text-gold-500 font-medium">6:00pm - 4:00am</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-1 flex flex-col gap-10 bg-[#333333] py-8 px-5 rounded-2xl">
        <div>
          <p className="text-xl font-bold mb-1">Features</p>
          <p className="text-gold-500 font-medium">
            Strippers, Free wifi, Security, Car Park, Privacy
          </p>
        </div>

        <div className="">
          <p className="text-xl font-bold mb-1">Drinks available</p>
          <p className="text-gold-500 font-medium">
            Hennessy 220, Vodka, desperado, Imperial Blue, Lacoco.
          </p>
        </div>
      </div>

      <div className="col-span-full bg-[#333333] p-5 lg:p-8 rounded-2xl">
      <p className="font-bold text-xl text-[#FFFFFF]">User traffic</p>
      </div>
    </section>
  );
};

export default page;
