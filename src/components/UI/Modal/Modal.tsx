import { useEffect } from "react";
import AppButton from "../Button/AppButton";

type ModalProps = {
  children?: React.ReactNode;
  handleModal?: () => void;
  btnText?: string;
};

const Modal = ({ children, handleModal, btnText }: ModalProps) => {
  return (
    <section className="fixed h-screen w-screen top-[0px] left-[0px] overflow-hidden flex flex-col gap-5 justify-center items-center bg-[#212121bb] z-10">
      {children}

      <AppButton
        btnText={btnText}
        handleClick={handleModal}
        className="px-20"
      />
    </section>
  );
};

export default Modal;
