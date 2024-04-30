import React from "react";
import Image from "next/image";
import DrinkImage from "@/assets/img/AdminPageImages/DrinkImage.png";
import { StarIcon } from "@radix-ui/react-icons";
import AppButton from "@/components/UI/Button/AppButton";
import { Badge } from "@/components/UI/badge";
import EditDrinkDetailsDialog from "@/components/admin/ContentModeration/EditDrinkDetailsDialog";

const page = () => {
  return (
    <>
      <section className="mt-5 bg-[#333333] p-5 lg:p-8 rounded-2xl">
        <p className="font-bold text-2xl text-[#FFFFFF]">Drink details</p>

        <div className="flex flex-col lg:flex-row mt-5 gap-5">
          <Image src={DrinkImage} alt="drink image" />

          <div className="flex flex-col gap-2">
            <p className="text-gold-500 text-2xl font-bold">Imperial Blue</p>

            <p className="text-3xl font-bold">NGN 232,000.00</p>

            <div>
              <p className="text-sm">
                Category:{" "}
                <span className="text-gold-500 font-bold">Spirit</span>{" "}
              </p>
              <p className="text-sm mt-2">
                Drink volume:{" "}
                <span className="text-gold-500 font-bold">1.5L</span>
              </p>
            </div>
          </div>

          <div className="self-start flex flex-col gap-3">
            <Badge className="bg-[#00b69b48] text-[#00B69B] text-sm">
              In Stock
            </Badge>

            <div className="flex flex-col gap-1">
              <p className="text-sm">4.0 Rating (634)</p>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((icon) => {
                  return (
                    <StarIcon
                      key={icon}
                      color="#F7D098"
                      height={22}
                      // className="h-[24px] w-[24px]"
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <EditDrinkDetailsDialog />
        </div>

        {/* divider */}
        <div className="border-t-2 border-[#979797] w-full my-5"></div>

        <p className="text-gold-500 text-lg font-semibold mb-5">
          Spots with drink available
        </p>

        <div className="grid grid-cols-5 gap-3 justify-between">
          {[1, 2, 3, 4, 5, 6].map((card) => {
            return (
              <div
                key={card}
                className="flex flex-col col-span-full lg:col-span-1 gap-2 border-2 border-[#424242] rounded-xl pb-3"
              >
                <Image
                  src={DrinkImage}
                  alt="drink image"
                  height={150}
                  // className=" w-full"
                />

                <div className="p-2">
                  <p className="text-[#999999] text-sm font-semibold">
                    Claim at <span className="text-gold-500">Club Quilox </span>
                  </p>

                  <p className="text-lg mt-1 font-semibold">
                    Johnnie Walker Black Label Air-Ink Limited Edition
                  </p>
                </div>

                <AppButton
                  className="font-medium mx-4 text-sm"
                  btnText="View spot"
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default page;
