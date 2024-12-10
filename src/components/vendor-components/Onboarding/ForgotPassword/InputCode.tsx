import AppInputOTP from "@/components/UI/Inputs/AppInputOTP";

const InputCode = () => {
  return (
    <section className="h-full flex flex-col gap-2 pt-16 lg:pt-28">
      <h1 className=" font-bold hidden lg:block text-3xl text-center leading-snug self-center">
        Cofirm OTP
      </h1>

      <h1 className="text-white md:text-xl md:w-[70%] text-center leading-snug self-center">
        We have sent a code to M**********7@gmail.com
        <span className="block">insert the code below</span>
        {/* <span className="text-white"> Maxxconnect127@gmail.com</span> */}
      </h1>

      <AppInputOTP />

      <p className="text-gold-500 font-medium text-center leading-snug self-center">
        Resend code: <span className="text-white"> 00:30</span>
      </p>
    </section>
  );
};

export default InputCode;
