"use client";
import React from "react";
import Header from "@/components/vendor-components/MiniHeader/Header";
import StoryImg from "@/assets/img/UserWebappImages/StoryImg.png";
import Image from "next/image";
import { Star } from "lucide-react";
import StarIcon from "@mui/icons-material/Star";
import CampaignIcon from "@mui/icons-material/Campaign";
import Link from "next/link";
import ToggleIcon from "@/assets/svg/UserIconsSvg/ToggleIcon.svg";
import BusinessCard from "@/components/vendor-components/ProfileComponents/BusinessCard/page";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PhoneIcon from "@mui/icons-material/Phone";
import PolicyIcon from "@mui/icons-material/Policy";
import ArticleIcon from "@mui/icons-material/Article";
import { useRouter } from "next/navigation";
const Page = () => {
  const businessVerified = true;
  const router = useRouter();
  const handleClick = () => {
    router.push("/vendor-Home/profile/1");
  };
  return (
    <main>
      <Header title="Profile" className="hidden md:block" />
      <section className="w-[40%] my-10 mx-auto">
        <div className="bg-[#4D4D4D4D] p-4 rounded-2xl cursor-pointer">
          <div className="flex justify-center items-center gap-5">
            <Image src={StoryImg} alt="profile image" width={80} height={80} />
            <div>
              <h1 className="text-3xl font-bold my-2">Club Maxx</h1>
              <p className="bg-gold-500 flex gap-1 w-fit p-1 rounded-2xl text-brandDark">
                Business Rating <StarIcon />
                4.5
              </p>
              <p className="text-[#B0B0B0] my-2">Phone: +234 801 234 5678</p>
              <p className="text-[#B0B0B0] my-2">Email: clubmaxx@gmail.com</p>
              <p className="text-[#B0B0B0] my-2">
                Address: Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Aut, et.
              </p>
              <p className="text-[#B0B0B0] my-2">
                {" "}
                Operation hours: 6:00PM - 4:00AM
              </p>
            </div>
          </div>
          <Link href="/vendor-Home/profile/edit">
            <button className="mt-3 w-[100%] bg-[#4D4D4D4D] py-2 rounded-3xl text-[#F6F6F6] hover:bg-gold-500 hover:text-brandDark ">
              Edit business profile
            </button>
          </Link>
        </div>
        <Link href="/vendor-Home/profile">
          <button className="w-[100%] my-5 bg-gold-500 py-3 text-brandDark text-2xl font-bold rounded-2xl">
            <CampaignIcon /> Manage advertisement
          </button>
        </Link>
        <div className="bg-[#4D4D4D4D] p-3 rounded-2xl text-center">
          <p className="text-2xl font-bold mb-3">CAC Number: BN1234567</p>
          <p
            className={`${
              businessVerified ? "bg-[#059702]" : "bg-red-500"
            } py-1 rounded-2xl`}
          >
            Verification status:{" "}
            {businessVerified ? "verified" : "verification pending"}
          </p>
        </div>
        <div className="my-3 flex gap-2">
          <div className="w-[50%] bg-[#4D4D4D4D] p-3 text-center rounded-xl">
            <p className="font-light text-lg">Following</p>
            <p className="text-2xl font-bold">1000</p>
          </div>
          <div className="w-[50%] bg-[#4D4D4D4D] p-3 text-center rounded-xl">
            <p className="font-light text-lg">Followers</p>
            <p className="text-2xl font-bold">1000</p>
          </div>
        </div>
        <div className="bg-[#4D4D4D4D] my-3 flex justify-around p-3  rounded-2xl items-center">
          <p className="text-2xl font-semibold">Notifications</p>
          <Image src={ToggleIcon} alt="toggle icon" />
        </div>
      </section>
      <section className="w-[80%] mx-auto my-8 text-center">
        <p className="text-2xl font-bold">Business</p>

        <div className="grid grid-cols-2 gap-5 md:pr-5 mt-10">
          {[1, 2, 3].map((item) => {
            return <BusinessCard key={item} handleClick={handleClick} />;
          })}
        </div>
      </section>
      <section className="w-[50%] mx-auto my-5">
        <p className="text-2xl font-bold text-center">Resources</p>
        <div className="mt-5 flex gap-5">
          <div className="flex-1 bg-[#4D4D4D4D] border-2 border-[#4D4D4D4D] border-opacity-30 p-3 rounded-lg flex justify-between">
            <div>
              <p>
                {" "}
                <ArticleIcon />
              </p>

              <p className="my-1">Terms of use</p>
            </div>
            <p className="bg-gold-500 w-fit h-fit rounded-lg text-brandDark">
              <KeyboardArrowRightIcon />
            </p>
          </div>
          <div className="flex-1 bg-[#4D4D4D4D] border-2 border-[#4D4D4D4D] border-opacity-30 p-3 rounded-lg flex justify-between">
            <div>
              <PolicyIcon />
              <p className="my-1">Privacy Policy</p>
            </div>
            <p className="bg-gold-500 w-fit h-fit rounded-lg text-brandDark">
              <KeyboardArrowRightIcon />
            </p>
          </div>
          <div className="flex-1 bg-[#4D4D4D4D] border-2 border-[#4D4D4D4D] border-opacity-30 p-3 rounded-lg flex justify-between">
            <div>
              <PhoneIcon />
              <p className="my-1">Call center</p>
            </div>
            <p className="bg-gold-500 w-fit h-fit rounded-lg text-brandDark">
              <KeyboardArrowRightIcon />
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
