"use client";

import AppButton from "@/components/UI/Button/AppButton";
import AppInput from "@/components/UI/Inputs/AppInput";
import Link from "next/link";

import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInput } from "@/types/InputTypes";

const ForgotPassword = () => {
  // react hook form
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  return (
    <section className="h-full flex flex-col gap-4 pt-16 lg:pt-28">
      <h1 className="text-gold-500 font-semibold text-2xl md:text-3xl text-center leading-snug self-center">
        Forgot Password?
      </h1>

      <p className="text-center text-lg md:text-xl text-gold-500 md:w-[70%] leading-normal self-center">
        Please enter the email associated with your password
      </p>

      {/* input */}
      <AppInput
        placeholder="Maxxconnect@gmail.com"
        className="md:px-20 lg:px-16 my-3"
        registerName="email"
        register={register}
      />

      <Link href="/user?flow=checkCode" className="self-center">
        <AppButton btnText="Send code" className="text-base" />
      </Link>

      <div className="flex items-center justify-center gap-1">
        <p className="text-[##FBE9D0] text-center">Remember password?</p>
        <Link href="/user" className="text-gold-500 underline font-semibold">
          {" "}
          Login
        </Link>
      </div>
    </section>
  );
};

export default ForgotPassword;
