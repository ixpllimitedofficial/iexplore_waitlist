type ButtonProps = {
  text: string
}

const AppButton = ({text}: ButtonProps) => {
  return <button className="bg-[#F7D098] text-[#212121] py-4 rounded-3xl font-bold">{text}</button>;
};

export default AppButton;
