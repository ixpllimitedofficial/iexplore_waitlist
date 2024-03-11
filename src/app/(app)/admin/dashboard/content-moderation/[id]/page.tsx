import React from "react";
import Image from "next/image";
import DrinkImage from "@/assets/img/AdminPageImages/DrinkImage.png";
import { StarIcon } from "@radix-ui/react-icons";
import AppButton from "@/components/UI/Button/AppButton";

const page = () => {
  return (
    <>
      <section className="mt-5 bg-[#333333] p-8 rounded-2xl">
        <p className="font-bold text-2xl text-[#FFFFFF]">Drink details</p>

        <div className="flex justify-between mt-5">
          <Image src={DrinkImage} alt="drink image" />

          <div className="flex flex-col gap-4">
            <p className="text-[#F7D098] text-3xl font-bold w-[70%]">
              Martell Davido Limited Edition XO
            </p>

            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((icon) => {
                  return (
                    <StarIcon
                      key={icon}
                      color="#F7D098"
                      height="30"
                      width="30"
                    />
                  );
                })}
              </div>
              <p className="text-xl">4.0 (90 Reviews)</p>
            </div>

            <p className="text-2xl font-bold">NGN 232,000.00</p>
          </div>

          <div>
            <p className="bg-[#00b69b48] text-[#00B69B] px-3 py-1 rounded-md font-semibold">
              In Stock
            </p>
          </div>
        </div>

        {/* divider */}
        <div className="border-t-2 border-[#979797] w-full mt-5 mb-5"></div>

        <p className="text-[#F7D098] text-xl font-semibold mb-5">
          Spots with drink available
        </p>

        <div className="grid grid-cols-5 gap-3 justify-between">
          {[1, 2, 3, 4, 5].map((card) => {
            return (
              <div
                key={card}
                className="flex flex-col col-span-1 gap-2 border-2 border-[#424242] rounded-xl pb-3"
              >
                <Image
                  src={DrinkImage}
                  alt="drink image"
                  height={150}
                  // className=" w-full"
                />

                <div className="p-2">
                  <p className="text-[#999999] font-semibold">
                    Claim at{" "}
                    <span className="text-[#F7D098]">Club Quilox </span>
                  </p>

                  <p className="text-xl mt-2 font-semibold">
                    Johnnie Walker Black Label Air-Ink Limited Edition
                  </p>
                </div>

                <AppButton className="font-medium mx-4" btnText="View spot" />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default page;
