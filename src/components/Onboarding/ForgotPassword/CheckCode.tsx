import AppButton from "@/components/UI/Button/AppButton";
import AppInput from "@/components/UI/Inputs/AppInput";
import Link from "next/link";

const CheckCode = () => {
  return (
    <section className="h-full flex flex-col gap-4 pt-16 lg:pt-28">
      <h1 className="text-gold-500 font-semibold text-2xl md:text-3xl text-center leading-snug self-center">
        Check your inbox
      </h1>

      <h1 className="text-gold-500 text-lg md:text-xl md:w-[70%] text-center leading-snug self-center">
        We’ve sent an OTP code to
        <span className="text-white"> Maxxconnect127@gmail.com</span>
      </h1>

      <Link href="/user/onboarding?flow=inputCode" className="mt-5 mx-10">
        <AppButton btnText="Open email app" className="py-3 w-full text-base" />
      </Link>

      <Link href="/user/onboarding?flow=inputCode" className="mx-10">
        <AppButton
          btnText="Enter code manually"
          className="py-3 w-full text-base border-brandGold border-2 bg-transparent text-gold-500"
        />
      </Link>

      {/* <p className="text-gold-500 font-medium text-center leading-snug self-center">
        Resend code: <span className="text-white"> 00:30</span>
      </p> */}
    </section>
  );
};

export default CheckCode;
