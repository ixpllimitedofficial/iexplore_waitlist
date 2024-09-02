type ModalProps = {
  children?: React.ReactNode;
};

const WaitlistModal = ({ children }: ModalProps) => {
  if (typeof window != "undefined" && window.document) {
    document.body.style.overflow = "hidden";
  }

  return (
    <section className="fixed h-screen w-screen top-[0px] left-[0px] overflow-hidden flex flex-col gap-3 md:gap-5 justify-center items-center backdrop-blur-md bg-[#0e0e0ecb] z-[60]">
      {children}
    </section>
  );
};

export default WaitlistModal;
