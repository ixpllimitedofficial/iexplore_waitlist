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
      <section className="mt-5 bg-brandDarkNeutral  rounded-2xl ">
        <p className="font-bold text-2xl text-[#FFFFFF]">Drink details</p>

        <div className="w-full flex flex-col lg:flex-row mt-5 gap-5  lg:justify-between items-start lg:items-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <Image src={DrinkImage} alt="drink image" />

            <div className="flex flex-col gap-2">
              <p className="text- text-2xl font-extrabold whitespace">Imperial Blue Limited Edition</p>
              <p className="text-2xl font-extrabold ">NGN 232,000.00</p>

              <div>
                <p className="text-sm">
                  Category:{" "}
                  <span className="text-white font-normal">Spirit</span>{" "}
                </p>
                <p className="text-sm mt-2">
                  Drink volume:{" "}
                  <span className="text-white font-normal">1.5L</span>
                </p>
                <p className="text-sm mt-2">
                  Ratings:{" "}
                  <span className="text-white font-normal">4.0(345)</span>
                </p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col items-start lg:items-center justify-center gap-3 px- py-6 rounded-2xl h-auto ">
            <div className=" flex flex-row lg:flex-col items-center justify-center gap-5">
              <span className="lg:w-[196px] w-full bg-[#008800] border border-[#b4ddb4] whitespace-nowrap px-4 py-2 rounded-full text-white font-semibold text-center">
                In stock
              </span>
              <EditDrinkDetailsDialog />
            </div>
          </div>

        </div>

        {/* divider */}
        <div className="border-t-2 border-[#979797] w-full my-5"></div>

        <p className="text-gold-500 text-lg font-semibold mb-5">
          Spots with drink available
        </p>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {[1, 2, 3, 4, 5, 6].map((card) => (
            <div
              key={card}
              className="flex flex-col gap-2 border-2 border-[#424242] rounded-xl pb-3"
            >
              <Image
                src={DrinkImage}
                alt="drink image"
                height={150}
                className="w-full"
              />

              <div className="p-2 text-center">
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
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
