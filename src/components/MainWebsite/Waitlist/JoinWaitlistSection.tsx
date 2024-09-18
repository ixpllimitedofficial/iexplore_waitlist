"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import WaitlistSuccessSvg from "@/assets/svg/MainWebsite/WaitlistSuccessSvg.svg";
import WaitlistModal from "@/components/MainWebsite/Waitlist/WaitlistModal";

import { anton } from "@/app/fonts";
import WaitlistForm from "./WaitlistForm";

const JoinWaitlistSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal: any = () => {
    setShowModal(false);

    // Unsets Background Scrolling to use when SideDrawer/Modal is closed
    document.body.style.overflow = "unset";
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <>
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

      <section
        className="mt-14 flex flex-col items-center text-center gap-2 px-4 md:w-[65%] lg:w-2/4 mx-auto"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="2000"
      >
        <h3
          className={`text-gold-500 text-[42px] lg:text-5xl leading-tight ${anton.className}`}
        >
          JOIN THE WAITLIST!
        </h3>
        <p className="lg:text-lg text-[#D1D1D1]">
          Members of our waitlist will receive VIP treatment and early access to
          amazing benefits from iExplore and our global partners.
        </p>
      </section>

      <div
        className="mt-5 mb-16 w-4/5 md:w-3/5 lg:w-2/4 mx-auto"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="2000"
      >
        <WaitlistForm handleShowModal={handleShowModal} />
      </div>
    </>
  );
};

export default JoinWaitlistSection;
