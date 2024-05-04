"use client";

import { useSearchParams } from "next/navigation";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import InputCode from "./ForgotPassword/InputCode";
import ResetPassword from "./ForgotPassword/ResetPassword";
import OnboardingForm from "./OnboardingForm";
import CheckCode from "./ForgotPassword/CheckCode";

type FlowType =
  | "ageConfirmation"
  | "emailConfirmation"
  | "forgotPassword"
  | "inputCode"
  | "resetPassword"
  | "checkCode";

const Onboarding = () => {
  const flowParams = useSearchParams().get("flow") as FlowType;

  // returned component
  return (
    <>
      <section className="w-[95vw] pb-14 lg:w-3/6">
        {flowParams === null && <OnboardingForm />}

        {/* dynamically rendered form */}
        {flowParams === "forgotPassword" && <ForgotPassword />}
        {flowParams === "inputCode" && <InputCode />}
        {flowParams === "resetPassword" && <ResetPassword />}
        {flowParams === "checkCode" && <CheckCode />}
      </section>
    </>
  );
};

export default Onboarding;
