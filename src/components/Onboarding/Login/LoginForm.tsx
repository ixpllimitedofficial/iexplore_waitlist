"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import AppButton from "@/components/UI/Button/AppButton";
import AppInput from "@/components/UI/Inputs/AppInput";

import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInput } from "@/types/InputTypes";

import { userStore } from "@/store/user";

const LoginForm = () => {
  // router
  const router = useRouter();

  // zustand
  const loginUser = userStore((state: any) => state.loginUser);

  // react hook form
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    loginUser({
      title: data.email,
      body: data.password,
      userId: 1,
    });
    // router.push("/user");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 ">
      <AppInput
        type="text"
        label="Email Address:"
        registerName="email"
        register={register}
        // placeholder="Maxxconnect127@gmail.com"
        isInputRequired={{ value: true, message: "Email is required!" }}
        errorMessage={errors.email?.message}
      />

      <AppInput
        type="password"
        label="Password:"
        registerName="password"
        register={register}
        // placeholder="***********************"
        isInputRequired={{ value: true, message: "Password is required!" }}
        errorMessage={errors.password?.message}
      />

      <Link
        href="/user/onboarding?flow=forgotPassword"
        className=" text-gold-500 text-end font-medium"
      >
        Forgot Password
      </Link>

      <AppButton btnText="Login" type="submit" />
    </form>
  );
};

export default LoginForm;
