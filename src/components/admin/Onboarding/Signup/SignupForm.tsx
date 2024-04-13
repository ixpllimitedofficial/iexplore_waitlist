import AppInput from "@/components/UI/Inputs/AppInput";
import React from "react";

const SignupForm = () => {
  return (
    <section className="flex flex-col gap-4">
      <AppInput label="Full Name" placeholder="Max Smith" />
      <AppInput label="Email" placeholder="Maxxconnect127@gmail.com" />
      <AppInput label="Age (28 years old)" placeholder="February 18, 1995" />
      <AppInput label="Phone number" placeholder="09012345678"  />
      <AppInput label="Password" placeholder="************" />
    </section>
  );
};

export default SignupForm;
