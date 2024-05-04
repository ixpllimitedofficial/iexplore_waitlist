import AppButton from "@/components/UI/Button/AppButton";
import AppInput from "@/components/UI/Inputs/AppInput";
import Link from "next/link";

const InputCode = () => {
  return (
    <section className="h-full flex flex-col gap-4 pt-16 lg:pt-28">
      <h1 className="text-gold-500 font-semibold text-2xl md:text-3xl text-center leading-snug self-center">
        Input your OTP code
      </h1>

      <h1 className="text-gold-500 text-lg md:text-xl md:w-[70%] text-center leading-snug self-center">
        Please input the OTP code sent to
        <span className="text-white"> Maxxconnect127@gmail.com</span>
      </h1>

      <AppInput className="px-7" />

      <Link href="/admin?flow=resetPassword" className="self-center">
        <AppButton btnText="Confirm code" className="text-base" />
      </Link>

      <p className="text-gold-500 font-medium text-center leading-snug self-center">
        Resend code: <span className="text-white"> 00:30</span>
      </p>
    </section>
  );
};

export default InputCode;
