import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AppButton from "@/components/UI/Button/AppButton";
import AppInput from "@/components/UI/Inputs/AppInput";
import Modal from "@/components/UI/Modal/Modal";

import PasswordChangeIcon from "@/assets/img/PasswordChangeIcon.png";

const ResetPassword = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleModal = () => {
    router.push("/admin/onboarding");

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
    <section className="flex flex-col gap-8 justify-center mt-10 lg:mt-0">
      {/* modal */}
      {showModal && (
        <Modal handleModal={handleModal} btnText="Back to login">
          <Image
            src={PasswordChangeIcon}
            alt="PasswordChangeIcon"
            className="h-[180px] w-[180px]"
          />

          <h1 className="text-[#F7D098] font-bold text-3xl">
            Password changed
          </h1>
          <p className="text-[#FBE9D0] text-xl md:text-2xl w-3/4 lg:w-1/4 text-center">
            Your password has been changed successfully!
          </p>
        </Modal>
      )}

      <h1 className="text-[#E1BD8A] text-3xl font-bold text-center leading-snug self-center">
        Reset password?
      </h1>

      <h1 className="text-[#FAE0BA] text-xl md:text-2xl md:w-[50%] text-center leading-snug self-center">
        Create a new password you’ll easily remember
      </h1>

      <AppInput label="New password:" placeholder="Must be 8 characters" />
      <AppInput label="Confirm new password:" placeholder="Repeat password" />

      <AppButton
        btnText="Reset password"
        className="px-20 rounded-2xl self-center"
        handleClick={handleShowModal}
      />
    </section>
  );
};

export default ResetPassword;
