"use state";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation'

import AppButton from "@/components/UI/Button/AppButton";
import AppInput from "@/components/UI/Inputs/AppInput";
import Modal from "@/components/UI/Modal/Modal";

import PartyPopperIcon from "@/assets/img/PartyPopper.png";

const EmailConfirmation = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter()

  const handleModal = () => {
    router.push('/')
  };

  const handleShowModal = () => {
    setShowModal(true)
  }

  return (
    <section className="relative h-full flex flex-col gap-10 items-center justify-center">
      {/* modal */}
      {showModal && (
        <Modal handleModal={handleModal} btnText="Let's Go!">
          <Image src={PartyPopperIcon} alt="PartyPopperIcon" />

          <h1 className="text-[#F7D098] font-bold text-3xl">Congratulations</h1>
          <p className="text-[#FBE9D0] text-2xl w-1/4 text-center">
            You are now an explorer, and you have been gifted a bottle of drink
            at the nearest bar
          </p>
        </Modal>
      )}

      <h1 className="text-[#FBE9D0] text-3xl w-[50%] text-center leading-snug">
        Enter the code sent to{" "}
        <span className="text-[#E1BD8A]"> Your email address:</span>
      </h1>

      <AppInput />

      <p className="text-[#E1BD8A] text-xl w-[50%] text-center leading-snug">
        Resend code <span className="text-[#FBE9D0]"> 00:30</span>
      </p>

      <AppButton
        text="Confirm Email Address"
        className="px-20 rounded-2xl"
        handleClick={handleShowModal}
      />
    </section>
  );
};

export default EmailConfirmation;
