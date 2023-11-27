import AppButton from "@/components/UI/Button/AppButton";
import AppInput from "@/components/UI/Inputs/AppInput";
import Link from "next/link";

const ForgotPassword = () => {
  return (
    <section className="h-full flex flex-col gap-8 justify-center">
      <h1 className="text-[#FBE9D0] text-3xl w-[50%] text-center leading-snug self-center">
        Forgot Password?
      </h1>

      <p className="text-center text-2xl text-[#F7D098] w-[70%] leading-normal self-center">
        Please enter email associated with your password
      </p>

      <AppInput
        label="Email address:"
        placeholder="Maxxconnect@gmail.com"
        className="px-7"
      />


      <Link href="/onboarding?flow=resetcode" className="self-center">
        <AppButton text="Send code" className="px-20 rounded-2xl " />
      </Link>

      <div className="flex items-center justify-center gap-1">
        <p className="text-[##FBE9D0] text-center">Remember password?</p>
        <Link
          href="/onboarding?flow=login"
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
