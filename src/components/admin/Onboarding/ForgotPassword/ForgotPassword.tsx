import AppButton from "@/components/UI/Button/AppButton";
import AppInput from "@/components/UI/Inputs/AppInput";
import Link from "next/link";

const ForgotPassword = () => {
  return (
    <section className="h-full flex flex-col gap-4 pt-16 lg:pt-28">
      <h1 className="text-gold-500 font-semibold text-2xl md:text-3xl text-center leading-snug self-center">
        Forgot Password?
      </h1>

      <p className="text-center text-lg md:text-xl text-gold-500 md:w-[70%] leading-normal self-center">
        Please enter the email associated with your password
      </p>

      <AppInput placeholder="Maxxconnect@gmail.com" className="md:px-20 lg:px-16 my-3" />

      <Link href="/admin?flow=checkCode" className="self-center">
        <AppButton btnText="Send code" className="text-base" />
      </Link>

      <div className="flex items-center justify-center gap-1">
        <p className="text-[##FBE9D0] text-center">Remember password?</p>
        <Link
          href="/admin"
          className="text-gold-500 underline font-semibold"
        >
          {" "}
          Login
        </Link>
      </div>
    </section>
  );
};

export default ForgotPassword;
