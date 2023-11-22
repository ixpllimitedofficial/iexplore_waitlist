import AppInput from "@/components/UI/Inputs/AppInput";
import React from "react";

const LoginForm = () => {
  return (
    <section className="flex flex-col gap-7 ">
      <AppInput />
      <AppInput />
    </section>
  );
};

export default LoginForm;
