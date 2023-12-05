type ButtonProps = {
  btnText?: string,
  className?: string,
  handleClick?: () => void
}

const AppButton = ({btnText, className, handleClick}: ButtonProps) => {
  return <button className={`${className} bg-[#F7D098] text-[#212121] text-lg py-3 px-7 rounded-3xl font-bold`} onClick={handleClick}>{btnText} </button>;
};

export default AppButton;
