"use client";

import Link from "next/link";
import { usePathname, useSearchParams, redirect } from "next/navigation";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import AgeConfirmation from "./Confirmation/AgeConfirmation";
import EmailConfirmation from "./Confirmation/EmailConfirmation";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import inputCode from "./ForgotPassword/inputCode";
import ResetPassword from "./ForgotPassword/ResetPassword";
import LoginForm from "./Login/LoginForm";

type FlowType =
  | "signup"
  | "login"
  | "ageConfirmation"
  | "emailConfirmation"
  | "forgotPassword"
  | "inputCode"
  | "resetPassword";

const Onboarding = () => {
  const pathname = usePathname();
  const flowParams = useSearchParams().get("flow") as FlowType;

  // returned component
  return (
    <section className="w-[95vw] lg:pt-20 lg:md-0 lg:w-3/6">
      x{/* dynamically rendered form */}
      {flowParams === null && <LoginForm />}
      {flowParams === "forgotPassword" && <ForgotPassword />}
      {flowParams === "inputCode" && <inputCode />}
      {flowParams === "resetPassword" && <ResetPassword />}
      {/* {flowParams === "signup" && <Signup />}
      {flowParams === "ageConfirmation" && <AgeConfirmation />}
      {flowParams === "emailConfirmation" && <EmailConfirmation />} */}
    </section>
  );
};

export default Onboarding;
