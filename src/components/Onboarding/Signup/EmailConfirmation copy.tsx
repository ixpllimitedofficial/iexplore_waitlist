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
    <section
      className="fixed h-screen w-screen top-[0px] left-[0px] overflow-hidden flex flex-col gap-4 justify-center items-center bg-[#0E0E0E]"
      onClick={handleModal}
    >
      <Image
        src={PartyPopperIcon}
        alt="PartyPopperIcon"
        className="h-[180px] w-[180px]"
      />

      <h1 className="text-gold-500 font-bold text-3xl">Congratulations</h1>
      <p className="text-gold-500 text-xl w-3/4 lg:w-1/4 text-center">
        You are now an explorer, and you have been gifted a bottle of drink at
        the nearest bar.
      </p>
    </section>
  );
};

export default EmailConfirmation;
