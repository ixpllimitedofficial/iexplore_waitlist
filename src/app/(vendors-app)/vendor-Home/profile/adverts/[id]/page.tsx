import React from "react";
import Header from "@/components/vendor-components/MiniHeader/Header";
import Link from "next/link";
import Image from "next/image";
import ArrowLeft from "@/assets/svg/ArrowLeft.svg";
import StoryImg from "@/assets/img/UserWebappImages/StoryImg.png";

const Page = () => {
  return (
    <main>
      <Header title="Profile" className="hidden md:block" />
      <section className="px-3 md:px-7 md:py-6">
        <div className="flex items-center">
          <Link href="/vendor-Home/profile/adverts">
            <Image src={ArrowLeft} alt="ArrowLeft" className="justify-start" />
          </Link>

          <div className="flex flex-col justify-center items-center gap-3 w-full">
            <p className="text-xl font-bold md:text-3xl">Advert Details</p>
          </div>
        </div>
        <div className="bg-[#4D4D4D4D] w-full md:w-[70%] mx-auto mt-10 p-5 rounded-lg">
          <div className="flex flex-col md:flex-row gap-5 items-start md:items-center">
            <div className="md:w-[150px] flex gap-5 items-center">
              <Image src={StoryImg} alt="profile image" />
              <div className="md:hidden">
                <p className="text-xl md:text-2xl font-bold">
                  DJ Maxx Party Hard
                </p>
                <p className="bg-gold-500 text-brandDark w-fit p-1 md:py-2 md:px-3 rounded-3xl my-3">
                  Ad Status Running
                </p>
              </div>
            </div>
            <div>
              <p className=" hidden md:block text-xl md:text-2xl font-bold">
                DJ Maxx Party Hard
              </p>
              <p className="hidden md:block bg-gold-500 text-brandDark w-fit p-1 md:py-2 md:px-3 rounded-3xl my-3">
                Ad Status Running
              </p>
              <p className="text-sm mb-2">Duration: 21 days</p>
              <p className="text-sm mb-2">
                Description: Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Cumque beatae ratione, quae excepturi est dolore repellat
                distinctio aperiam ut illo.
              </p>
              <p className="text-sm mb-2">TimeLeft: 7 days</p>
              <p className="text-sm mb-2">Audience reached: 800</p>
              <p className="text-sm mb-2">User clicks: 736 (85%)</p>
            </div>
          </div>
          <button className="bg-gold-500 w-full py-2 rounded-3xl text-brandDark hover:bg-white">
            Boost ad
          </button>
          <button className="bg-[#E50000] w-full py-2 rounded-3xl text-white mt-5">
            Delete ad
          </button>
        </div>
      </section>
    </main>
  );
};

export default Page;
