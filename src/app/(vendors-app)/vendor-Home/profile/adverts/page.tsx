"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowLeft from "@/assets/svg/ArrowLeft.svg";
import Header from "@/components/vendor-components/MiniHeader/Header";
import TopSearchBar from "@/components/vendor-components/BusinessRoute/TopSearchBar";
import { useRouter } from "next/navigation";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import InsightsIcon from "@mui/icons-material/Insights";
import AdvertCard from "@/components/vendor-components/AdvertSection/advertCard/page";
import StoryImg from "@/assets/img/UserWebappImages/StoryImg.png";

const Page = () => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.trim()) {
      router.push(
        `drinks/drinks-search?query=${encodeURIComponent(searchQuery)}`
      );
    }
  };
  const handleClick = () => {
    router.push("/vendor-Home/profile/adverts/1");
  };

  return (
    <>
      <Header title="Profile" className="hidden md:block" />
      <section className="px-3 md:px-7 md:py-6">
        <div className="flex items-center">
          <Link href="/vendor-Home/profile">
            <Image src={ArrowLeft} alt="ArrowLeft" className="justify-start" />
          </Link>

          <div className="flex flex-col justify-center items-center gap-3 w-full">
            <p className="text-xl font-bold md:text-3xl">
              Manage Advertisement
            </p>
          </div>
        </div>
        <div className="hidden md:block mt-8">
          <TopSearchBar value={query} onChange={handleSearch} />
        </div>
        <div className="w-full md:w-[90%] mx-auto flex flex-col md:flex-row gap-5 mt-8">
          <div className="flex-1 bg-[#4D4D4D4D] p-3 rounded-lg">
            <Link href="/vendor-Home/profile/adverts/createAd">
              <div className="flex gap-3 items-center">
                <div className="bg-[#4D4D4D4D] bg-opacity-30 p-2 rounded-full">
                  <AddIcon />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold">Apply for ad</p>
                  <p className="text-[#D1D1D1]">
                    Create a new advertisement campaign
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex-1 bg-[#4D4D4D4D] p-3 rounded-lg">
            <Link href="/vendor-Home/profile/adverts/boostAd">
              <div className="flex gap-3 items-center">
                <div className="bg-[#4D4D4D4D] bg-opacity-30 p-2 rounded-full">
                  <InsightsIcon />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold">Boost ad</p>
                  <p className="text-[#D1D1D1]">Boost ad to reach more users</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex-1 bg-[#4D4D4D4D] p-3 rounded-lg">
            <Link href="/vendor-Home/profile/adverts/deleteAd">
              <div className="flex gap-3 items-center">
                <div className="bg-[#4D4D4D4D] bg-opacity-30 p-2 rounded-full">
                  <DeleteIcon />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold">Delete ad</p>
                  <p className="text-[#D1D1D1]">
                    Remove ads as you have currently running
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-[90%] mt-5 md:mt-10 mx-auto">
          <p className="text-2xl font-bold mb-5">Running Ads</p>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
            {[1, 2, 3, 4, 5, 6].map((item, index) => {
              return (
                <AdvertCard
                  key={index}
                  profileImg={StoryImg}
                  title="DJ Maxx Party hard"
                  status="Running"
                  duration="21 Days"
                  time_remaining="7 Days"
                  handleClick={handleClick}
                />
              );
            })}
          </div>
        </div>
        <div className="w-full md:w-[90%] mt-5 md:mt-10 mx-auto">
          <p className="text-2xl font-bold mb-5">Expired Ads</p>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
            {[1, 2, 3, 4].map((item, index) => {
              return (
                <AdvertCard
                  key={index}
                  profileImg={StoryImg}
                  title="DJ Maxx Party hard"
                  status="Running"
                  duration="21 Days"
                  time_remaining="7 Days"
                  handleClick={handleClick}
                  isExpired={true}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
