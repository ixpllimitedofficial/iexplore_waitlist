"use client";

import Link from "next/link";
import { usePathname, useSearchParams, redirect } from "next/navigation";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import AgeConfirmation from "./Confirmation/AgeConfirmation";
import EmailConfirmation from "./Confirmation/EmailConfirmation";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import ResetCode from "./ForgotPassword/ResetCode";
import ResetPassword from "./ForgotPassword/ResetPassword";

type FlowType =
  | "signup"
  | "login"
  | "ageConfirmation"
  | "emailConfirmation"
  | "forgotPassword"
  | "resetCode"
  | "resetPassword";

const Onboarding = () => {
  const flowParams = useSearchParams().get("flow") as FlowType;

  // returned component
  return (
    <section className="w-[95vw] lg:pt-20 lg:md-0 lg:w-3/6">
      <div className="hidden bg-[#E1BD8A] w-[50%] mx-auto p-2 lg:flex items-center justify-around rounded-xl">
        <p className="bg-[#212121] text-[#F7D098] p-3 w-2/5 rounded-xl text-center font-bold">
          Login
        </p>
      </div>

      {/* dynamically rendered form */}
      <Login />
      {flowParams === "signup" && <Signup />}
      {flowParams === "ageConfirmation" && <AgeConfirmation />}
      {flowParams === "emailConfirmation" && <EmailConfirmation />}
      {flowParams === "forgotPassword" && <ForgotPassword />}
      {flowParams === "resetCode" && <ResetCode />}
      {flowParams === "resetPassword" && <ResetPassword />}
    </section>
  );
};

export default Onboarding;
