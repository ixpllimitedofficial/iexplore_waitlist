import AppButton from "@/components/UI/Button/AppButton";
import AppInput from "@/components/UI/Inputs/AppInput";
import React from "react";

const EmailConfirmation = () => {
  return (
    <section className="h-full flex flex-col gap-10 items-center justify-center">
      <h1 className="text-[#FBE9D0] text-3xl w-[50%] text-center leading-snug">
        Enter the code sent to{" "}
        <span className="text-[#E1BD8A]"> Your email address:</span>
      </h1>

      <AppInput />

      <p className="text-[#E1BD8A] text-xl w-[50%] text-center leading-snug">
        Resend code <span className="text-[#FBE9D0]"> 00:30</span>
      </p>

      <AppButton text="Confirm Email Address" className="px-20 rounded-2xl" />
    </section>
  );
};

export default EmailConfirmation;
