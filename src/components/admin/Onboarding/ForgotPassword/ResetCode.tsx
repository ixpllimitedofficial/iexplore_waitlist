import AppButton from "@/components/UI/Button/AppButton";
import AppInput from "@/components/UI/Inputs/AppInput";
import Link from "next/link";

const ResetCode = () => {
  return (
    <section className="flex flex-col gap-8 justify-center mt-10 lg:mt-0">
      <h1 className="text-gold-500 font-bold text-3xl text-center leading-snug self-center">
        Reset password?
      </h1>

      <h1 className="text-[#FBE9D0] text-xl md:text-2xl md:w-[50%] text-center leading-snug self-center">
        We’ve sent a code to
        <span className="text-gold-500"> Maxxconnect127@gmail.com</span>
      </h1>

      <AppInput className="px-7" />

      <Link href="/admin/onboarding?flow=resetPassword" className="self-center">
        <AppButton btnText="Confirm code" className="text-[15px] md:text-lg" />
      </Link>

      <p className="text-gold-500 text-lg font-medium text-center leading-snug self-center">
        Resend code: <span className="text-[#FBE9D0]"> 00:30</span>
      </p>
    </section>
  );
};

export default ResetCode;
