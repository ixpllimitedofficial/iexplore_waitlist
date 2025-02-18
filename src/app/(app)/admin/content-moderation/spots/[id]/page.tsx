'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import SpotImage from "@/assets/img/AdminPageImages/SpotImage.png";
import RatingIconSvg from "@/assets/svg/SpotDetailsSvg/RatingIconSvg.svg";
import EditSpotDetailsDialog from "@/components/admin/ContentModeration/EditSpotDetailsDialog";
import { Badge } from "@/components/UI/badge";
import Divider from "@/components/UI/Divider";
import dynamic from "next/dynamic";
import { DownloadIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { formatTo12Hour } from "@/utils/functions/timeFormatter";

interface Creator {
  id: string;
  username: string;
  email: string;
}

interface SpotData {
  id: string;
  creator: Creator;
  category: string;
  features: string[];
  offers: string[];
  primary_image: string;
  name: string;
  location: string;
  state: string;
  description: string;
  slug: string;
  entry: string;
  is_verified: boolean;
  created_at: string;
  updated_at: string;
  opening_time: string;
  closing_time: string;
}

const UserTraffic = dynamic(() => import('@/components/admin/Dashboard/UserTraffic'), { ssr: false });
const Page = () => {
  const pathname = usePathname();
  const spotId = pathname.split("/").pop() || "";
  const [spotData, setSpotData] = useState<SpotData | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token && spotId) {
      const fetchVendorData = async () => {
        try {
          const response = await fetch(
            `https://ixpl-backend.vercel.app/api/v1/admin/contentmoderation/spot/${encodeURIComponent(spotId)}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );

          if (!response.ok) {
            throw new Error("Failed to fetch vendor data");
          }

          const data: SpotData = await response.json();
          console.log("Parsed Spot Data:", data);
          setSpotData(data);
        } catch (error) {
          console.error("Error fetching vendor details:", error);
        }
      };

      fetchVendorData();
    }
  }, [spotId]);
  console.log(spotData)
  if (!spotData) {
    return <p className="text-center text-gray-400">Loading spot details...</p>;
  }
  return (
    <>
      <section className="mt-5 gap-5">
        <p className='text-lg font-bold'>Spot Details</p>
        <div className="">
          <div className="flex flex-col justify-between lg:flex-row mt-5 gap-5">
            <div className='flex flex-col lg:flex-row gap-8 '>
              <Image src={spotData.primary_image || SpotImage} alt="spot image" width={300} height={400} className="rounded-xl w-full lg:w-[300px] h-[200px] lg:h-[180px]" />

              <div className="flex flex-col gap-2">
                <p className="text-xl font-extrabold whitespace">{spotData.name}</p>
                <p className="text-sm">
                  {spotData.description}
                </p>
                Open now: <span>{`${formatTo12Hour(spotData.opening_time)} - ${formatTo12Hour(spotData.closing_time)}`}</span>
                <p>Venue: <span>{spotData.location}</span></p>
              </div>
            </div>

            <div className="flex flex-col items-start lg:items-center justify-center gap-3 px- py-6 rounded-2xl h-auto ">
              <div className="flex flex-row lg:flex-col items-center justify-center gap-5">
                <span className={`w-[60%] border md:w-full text-white text-sm md:text-lg  text-center  font-semibold px-4 py-2 rounded-full whitespace-nowrap ${spotData.is_verified ? "bg-[#008800] border-green-700" : "bg-red-500 border-red-700"}`}>
                  Status: {spotData.is_verified ? "Active" : "Inactive"}
                </span>
                <EditSpotDetailsDialog  spotId={spotId}  initialSpotData={spotData}/>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row justify-start mt-10">
            <div className='w-full lg:w-[267px] h-auto border border-[#4D4D4D] rounded-lg p-5'>
              <h2 className="text-lg font-bold">Features</h2>
              <p className="mt-4 text-base">{spotData.features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}</p>
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

export default Page;
