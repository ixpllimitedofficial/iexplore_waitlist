import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

import AppButton from "@/components/UI/Button/AppButton";
import AppInput from "@/components/UI/Inputs/AppInput";
import Modal from "@/components/UI/Modal/Modal";

import PartyPopperIcon from "@/assets/svg/PartyPopperIcon.svg";

const EmailConfirmation = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleModal = () => {
    router.push("/user");

    // Unsets Background Scrolling to use when SideDrawer/Modal is closed
    document.body.style.overflow = "unset";
  };

  const handleShowModal = () => {
    setShowModal(true);
    // Disables Background Scrolling whilst the SideDrawer/Modal is open
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <section className="relative h-full flex flex-col gap-4 items-center pt-28 mt-10 lg:mt-0">
      {/* modal */}
      {showModal && (
        <Modal handleModal={handleModal} btnText="Let's Go!">
          <Image
            src={PartyPopperIcon}
            alt="PartyPopperIcon"
            className="h-[180px] w-[180px]"
          />

          <h1 className="text-gold-500 font-bold text-3xl">Congratulations</h1>
          <p className="text-gold-500 text-xl w-3/4 lg:w-1/4 text-center">
            You are now an explorer, and you have been gifted a bottle of drink
            at the nearest bar.
          </p>
        </Modal>
      )}

      <h1 className="text-gold-500 font-semibold text-3xl text-center leading-snug self-center">
        Enter code
      </h1>

      <p className="text-center text-xl text-gold-500 md:w-[70%] leading-normal self-center">
        Enter the code sent to <br />
        <span className="text-white"> your email address</span>
      </p>

      <AppInput />

      <p className="text-gold-500 font-medium text-center leading-snug">
        Resend code: <span className="text-white"> 00:30</span>
      </p>

      <AppButton
        btnText="Confirm Email Address"
        handleClick={handleShowModal}
      />
    </section>
  );
};

export default EmailConfirmation;
