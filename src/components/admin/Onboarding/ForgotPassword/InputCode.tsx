import AppInputOTP from "@/components/UI/Inputs/AppInputOTP";

const InputCode = () => {
  return (
    <section className="h-full flex flex-col gap-2 pt-16 lg:pt-28">
      <h1 className="text-gold-500 font-semibold text-2xl text-center leading-snug self-center">
        Input your OTP code
      </h1>

      <h1 className="text-gold-500 md:text-xl md:w-[70%] text-center leading-snug self-center">
        Please input the OTP code sent to your email
        {/* <span className="text-white"> Maxxconnect127@gmail.com</span> */}
      </h1>

      <AppInputOTP userRole="admin" />

      <p className="text-gold-500 font-medium text-center leading-snug self-center">
        Resend code: <span className="text-white"> 00:30</span>
      </p>
    </section>
  );
};

export default InputCode;
