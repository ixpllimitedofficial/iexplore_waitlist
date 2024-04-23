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
    router.push("/admin/dashboard");
  };

  const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { email, password } = loginData;

    console.log("Email: ", email, "Password: ", password);
  };

  return (
    <section>
      <div className="hidden bg-[#E1BD8A] w-[50%] mx-auto p-2 lg:flex items-center justify-around rounded-xl">
        <p className="bg-[#212121] text-[#F7D098] p-3 w-2/5 rounded-xl text-center font-bold">
          Login
        </p>
      </div>

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
          href="/admin/onboarding?flow=forgotPassword"
          className=" text-[#E1BD8A] text-end font-medium"
        >
          Forgot Password
        </Link>

        <AppButton
          btnText="Login"
          className="text-[15px] md:text-lg"
          type="button"
          handleClick={handleLogin}
        />
      </form>
    </section>
  );
};

export default LoginForm;
