"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AppButton from "@/components/UI/Button/AppButton";
import AppInput from "@/components/UI/Inputs/AppInput";

type LoginFormProps = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();

  const [loginData, setLoginData] = useState<LoginFormProps>({
    email: "",
    password: "",
  });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    router.push("/user");
  };

  const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { email, password } = loginData;

    console.log("Email: ", email, "Password: ", password);
  };

  return (
    <form action={handleLogin} className="flex flex-col gap-5 ">
      <AppInput
        handleChange={handleLoginChange}
        value={loginData.email}
        type="email"
        name="email"
        label="Email address:"
        placeholder="Maxxconnect127@gmail.com"
      />

      <AppInput
        handleChange={handleLoginChange}
        value={loginData.password}
        type="password"
        name="password"
        label="Password:"
        placeholder="***********************"
      />

      <Link
        href="/user/onboarding?flow=forgotPassword"
        className=" text-gold-500 text-end font-medium"
      >
        Forgot Password
      </Link>

      <AppButton
        btnText="Login"
        className="text-sm py-4"
        type="button"
        handleClick={handleLogin}
      />
    </form>
  );
};

export default LoginForm;
