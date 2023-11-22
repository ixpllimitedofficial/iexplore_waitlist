import AppInput from "@/components/UI/Inputs/AppInput";
import React from "react";

const LoginForm = () => {
  return (
    <section className="flex flex-col gap-7 ">
      <AppInput label="Email address" placeholder="Maxxconnect127@gmail.com" />
      <AppInput label="Password" placeholder="***********************" />
    </section>
  );
};

export default LoginForm;
