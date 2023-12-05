import AppButton from "@/components/UI/Button/AppButton";
import AppInput from "@/components/UI/Inputs/AppInput";
import Link from "next/link";

const ResetCode = () => {
  return (
    <section className="h-full flex flex-col gap-8 justify-center">
      <h1 className="text-[#E1BD8A] text-3xl w-[50%] text-center leading-snug self-center">
        Reset password?
      </h1>

      <h1 className="text-[#FBE9D0] text-xl w-[50%] text-center leading-snug self-center">
        We’ve sent a code to
        <span className="text-[#E1BD8A]"> Maxxconnect127@gmail.com</span>
      </h1>

      <AppInput placeholder="" className="px-7" />

      <Link href="/onboarding?flow=resetpassword" className="self-center">
        <AppButton btnText="Confirm code" className="px-20 rounded-2xl " />
      </Link>

      <p className="text-[#E1BD8A] text-xl w-[50%] text-center leading-snug self-center">
        Resend code <span className="text-[#FBE9D0]"> 00:30</span>
      </p>
    </section>
  );
};

export default ResetCode;
