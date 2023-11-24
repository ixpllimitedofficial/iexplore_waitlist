type ButtonProps = {
  text: string,
  className?: string
}

const AppButton = ({text, className}: ButtonProps) => {
  return <button className={`${className} bg-[#F7D098] text-[#212121] py-4 rounded-3xl font-bold`}>{text}</button>;
};

export default AppButton;
