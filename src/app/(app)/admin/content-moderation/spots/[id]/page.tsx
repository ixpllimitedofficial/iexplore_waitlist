import React from "react";
import Image from "next/image";
import SpotImage from "@/assets/img/AdminPageImages/SpotImage.png";
import RatingIconSvg from "@/assets/svg/SpotDetailsSvg/RatingIconSvg.svg";
import EditSpotDetailsDialog from "@/components/admin/ContentModeration/EditSpotDetailsDialog";
import { Badge } from "@/components/UI/badge";
import Divider from "@/components/UI/Divider";
import dynamic from "next/dynamic";
import { DownloadIcon } from "lucide-react";

const UserTraffic = dynamic(() => import('@/components/admin/Dashboard/UserTraffic'), { ssr: false });
const page = () => {
  return (
    <>
      <section className="mt-5 gap-5">
        <p className='text-lg font-bold'>Spot Details</p>
        <div className="">
          <div className="flex flex-col justify-between lg:flex-row mt-5 gap-5">
            <div className='flex flex-col lg:flex-row gap-8 '>
              <Image src={SpotImage} alt="spot image" className="rounded-xl w-full lg:w-[300px] h-[180px]" />

              <div className="flex flex-col gap-2">
                <p className="text-xl font-extrabold whitespace">Club Quilox</p>
                <p className="text-sm">
                  Located at the heart of Lagos is the King of entertainment and
                  nightlife in the city. Experience the thrill of Lagos nightlife
                  here.
                </p>
                <p className="text-sm">Open now: <span>6:00pm - 4:00am</span></p>
                <p>Venue: <span>873 Ozumba Mbadiwe Ave, Victoria Island 106104, Lagos</span></p>
              </div>
            </div>

            <div className="flex flex-col items-start lg:items-center justify-center gap-3 px- py-6 rounded-2xl h-auto ">
              <div className="flex flex-row lg:flex-col items-center justify-center gap-5">
                <span className="w-full lg:w-[196px] bg-[#008800] border border-[#b4ddb4] whitespace-nowrap px-4 py-2 rounded-full text-white font-semibold text-center">
                  Status: Active
                </span>
                <EditSpotDetailsDialog />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row justify-start mt-10">
            <div className='w-full lg:w-[267px] h-auto border border-[#4D4D4D] rounded-lg p-5'>
              <h2 className="text-lg font-bold">Features</h2>
              <p className="mt-4 text-base">Strippers, Free wifi, Security, Car Park, Privacy</p>
            </div>
            <div className='w-full lg:w-[267px] h-auto border border-[#4D4D4D] rounded-lg p-5'>
              <h2 className="text-lg font-bold">Drinks Available</h2>
              <p className="mt-4 text-base">Hennessey, vodka, Imperial blue etc</p>
            </div>
            <div className='flex justify-between gap-4'>
              <div className='w-full lg:w-[127px] flex flex-col justify-center items-center lg:justify-normal h-auto border border-[#4D4D4D] rounded-lg p-5 space-y-5'>
                <h2 className="text-lg font-bold">Ratings</h2>
                <div className="flex gap-2">
                  <p className="text-3xl">4.8</p>
                  <Image
                    src={RatingIconSvg}
                    alt="RatingIconSvg"
                  />
                </div>
                <span className='text-sm whitespace-nowrap'>(2019 Raters)</span>
              </div>
              <div className="w-full lg:w-[193px] h-auto border flex flex-col justify-center lg:justify-normal items-center border-[#4D4D4D] rounded-lg p-5 space-y-4">
                <h2 className="text-lg font-bold lg:mb-4">Drinks</h2>

                <span className="bg-[#E50000] border border-[#4D4D4D] py-1.5 px-4 lg:px-8 lg:mt-2 text-xs rounded-full text-white font-semibold whitespace-nowrap">
                  Out of stock - 25
                </span>

                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-base">
                    <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                    Wine - 201
                  </li>
                  <li className="flex items-center gap-2 text-base">
                    <span className="w-2 h-2 bg-gold-700 rounded-full"></span>
                    Beer - 201
                  </li>
                  <li className="flex items-center gap-2 text-base">
                    <span className="w-2 h-2 bg-gold-800 rounded-full"></span>
                    Others - 201
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full lg:w-[785px] h-auto mt-5">
        <div>
          <div className="">
            <UserTraffic />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
