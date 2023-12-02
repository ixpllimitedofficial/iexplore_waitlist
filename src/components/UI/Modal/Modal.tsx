import { useEffect } from "react";
import AppButton from "../Button/AppButton";

type ModalProps = {
  children?: React.ReactNode;
  handleShowModal?: () => void;
  showModal?: boolean;
};

const Modal = ({ children, handleShowModal, showModal }: ModalProps) => {
  return (
    <section className="fixed h-screen w-screen top-[0px] left-[0px] overflow-hidden flex flex-col gap-5 justify-center items-center bg-[#212121bb] z-10">
      {children}

      <AppButton text="Let's Go!" handleClick={handleShowModal} className="px-20" />
    </section>
  );
};

export default Modal;
