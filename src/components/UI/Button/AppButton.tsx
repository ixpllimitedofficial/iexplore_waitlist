type ButtonProps = {
  text: string,
  className?: string,
  handleClick?: () => void
}

const AppButton = ({text, className, handleClick}: ButtonProps) => {
  return <button className={`${className} bg-[#F7D098] text-[#212121] text-lg py-3 px-7 rounded-3xl font-bold`} onClick={handleClick}>{text} </button>;
};

export default AppButton;
