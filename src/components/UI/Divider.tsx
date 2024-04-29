type DividerType = {
  className?: string;
};

const Divider = ({ className }: DividerType) => {
  return (
    <div
      className={`border-t-2 border-[#979797] w-full my-5 ${className}`}
    ></div>
  );
};

export default Divider;
