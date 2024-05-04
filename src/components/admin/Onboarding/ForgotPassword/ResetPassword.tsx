import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AppButton from "@/components/UI/Button/AppButton";
import AppInput from "@/components/UI/Inputs/AppInput";
import Modal from "@/components/UI/Modal/Modal";

import PasswordChangeIcon from "@/assets/svg/PasswordChangeIcon.svg";

const ResetPassword = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleModal = () => {
    router.push("/admin");

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
    <section className="h-full flex flex-col gap-4 pt-16 lg:pt-28">
      {/* modal */}
      {showModal && (
        <Modal handleModal={handleModal} btnText="Back to login">
          <Image
            src={PasswordChangeIcon}
            alt="PasswordChangeIcon"
            className="h-[180px] w-[180px]"
          />

          <h1 className="text-gold-500 font-bold text-3xl">Password changed</h1>
          <p className="text-gold-500 text-xl w-3/4 lg:w-1/4 text-center">
            Your password has been changed successfully!
          </p>
        </Modal>
      )}

      <h1 className="text-gold-500 text-2xl md:text-3xl font-semibold text-center leading-snug self-center">
        Reset password?
      </h1>

      <h1 className="text-gold-500 text-lg md:text-xl md:w-[70%] text-center leading-snug self-center">
        Create a new password you’ll easily remember
      </h1>

      <AppInput label="New password:" placeholder="Must be 8 characters" className="md:px-14 lg:px-10" />
      <AppInput label="Confirm new password:" placeholder="Repeat password" className="md:px-14 lg:px-10" />

      <AppButton
        btnText="Reset password"
        className="rounded-2xl self-center"
        handleClick={handleShowModal}
      />
    </section>
  );
};

export default ResetPassword;
