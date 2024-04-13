type DividerType = {
  className?: string;
};

const Divider = ({ className }: DividerType) => {
  return (
    <div
      className={` ${className} border-t-2 border-[#979797] w-full my-5`}
    ></div>
  );
};

export default Divider;
