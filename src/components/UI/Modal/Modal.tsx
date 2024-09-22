import AppButton from "../Button/AppButton";

type ModalProps = {
  children?: React.ReactNode;
  handleModal?: () => void;
  btnText?: string;
};

const Modal = ({ children, handleModal, btnText }: ModalProps) => {
  return (
    <section className="fixed h-screen w-screen top-[0px] left-[0px] overflow-hidden flex flex-col gap-7 justify-center items-center bg-[#0e0e0ee5] z-[60]">
      {children}
    </section>
  );
};

export default Modal;
