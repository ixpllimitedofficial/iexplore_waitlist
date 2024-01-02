import AppButton from "@/components/UI/Button/AppButton";
import AppInput from "@/components/UI/Inputs/AppInput";
import Link from "next/link";

const ForgotPassword = () => {
  return (
    <section className="h-full flex flex-col gap-6 justify-center mt-10 lg:mt-0">
      <h1 className="text-[#FBE9D0] font-bold text-3xl text-center leading-snug self-center">
        Forgot Password?
      </h1>

      <p className="text-center text-xl md:text-2xl text-[#F7D098] md:w-[70%] leading-normal self-center">
        Please enter email associated with your password
      </p>

      <AppInput placeholder="Maxxconnect@gmail.com" className="px-7" />

      <Link href="/new-home/onboarding?flow=resetCode" className="self-center">
        <AppButton btnText="Send code" className="text-[15px] md:text-lg" />
      </Link>

      <div className="flex items-center justify-center gap-1 text-lg">
        <p className="text-[##FBE9D0] text-center">Remember password?</p>
        <Link
          href="/new-home/onboarding?flow=login"
          className="text-[#F7D098] underline font-semibold"
        >
          {" "}
          Login
        </Link>
      </div>
    </section>
  );
};

export default ForgotPassword;
