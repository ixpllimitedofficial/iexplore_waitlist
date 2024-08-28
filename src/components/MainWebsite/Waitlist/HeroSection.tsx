"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { anton } from "@/app/fonts";
import ExplorersWaitingSvg from "@/assets/svg/MainWebsite/ExplorersWaitingSvg.svg";
import WaitlistSuccessSvg from "@/assets/svg/MainWebsite/WaitlistSuccessSvg.svg";
import WaitlistModal from "@/components/MainWebsite/Waitlist/WaitlistModal";
import WaitlistForm from "./WaitlistForm";

const HeroSection = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleModal: any = () => {
    // router.push("/");
    setShowModal(false);

    // Unsets Background Scrolling to use when SideDrawer/Modal is closed
    document.body.style.overflow = "unset";
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <section className="flex flex-col md:flex-row gap-5 lg:gap-24 items-center py-8 px-5 md:p-8 lg:px-16">
      {/* modal */}
      {showModal && (
        <WaitlistModal>
          <Image
            src={WaitlistSuccessSvg}
            alt="WaitlistSuccessSvg"
            className="h-[180px] w-[180px]"
          />

          <h1 className={`text-4xl md:text-5xl ${anton.className} font-bold`}>
            SUBMISSION SENT!
          </h1>
          <p className="md:text-xl w-4/5 md:w-2/4 text-center">
            Yay! you have successfully joined the iexplore waitlist. You will be
            the first to know when we launch with special perks for you.
          </p>

          <Link
            href="/home"
            onClick={handleModal}
            className="bg-gold-500 text-[#322016] text-sm md:text-base text-center px-8 py-2 rounded-3xl font-bold"
          >
            Go Back Home
          </Link>
        </WaitlistModal>
      )}

      {/* left */}
      <div>
        {/* <h1
          className={`text-gold-500 text-5xl md:text-7xl ${anton.className} text-center md:text-left md:w-3/5`}
        >
          YOUR <span className="text-white">NIGHTLIFE COMPANION</span> IN YOUR HANDS
        </h1> */}
        <h1
          className={`text-gold-500 text-5xl md:text-6xl lg:text-7xl ${anton.className} text-center md:text-left lg:w-3/4`}
        >
          YOUR NIGHTLIFE COMPANION IN YOUR HANDS
        </h1>
        <p className="text-lg text-center md:text-left my-4 lg:w-[80%]">
          Everything you need to explore the best of your city’s nightlife. Your
          ultimate nightlife companion in one app.
        </p>

        {/* WAITLIST FORM */}
        <WaitlistForm handleShowModal={handleShowModal} />
        {/*  */}

        <div className="flex items-center justify-center md:justify-start gap-2">
          <Image
            src={ExplorersWaitingSvg}
            alt="ExplorersWaiting"
            className="h-[30px] md:h-[35px] w-auto"
          />
          <p className="text-sm md:text-base text-[#D1D1D1] my-4">
            12.7k Explorers already waiting
          </p>
        </div>
      </div>

      {/* right */}
      <div className="relative h-[400px] md:h-[470px] w-auto">
        <video
          autoPlay
          muted
          loop
          preload="none"
          className="h-full w-full object-cover"
        >
          <source src="/heroVid.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
