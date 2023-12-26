"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import AgeConfirmation from "./Confirmation/AgeConfirmation";
import EmailConfirmation from "./Confirmation/EmailConfirmation";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import ResetCode from "./ForgotPassword/ResetCode";
import ResetPassword from "./ForgotPassword/ResetPassword";

type FlowType = "signup" | "login" | "ageConfirmation" | "emailConfirmation" | "forgotPassword" | "resetCode" | "resetPassword";

const Onboarding = () => {
  const flowParams = useSearchParams().get("flow") as FlowType;

  // links style
  const activeLinkStyle: string =
    "bg-[#212121] text-[#F7D098] p-3 w-2/5 rounded-xl text-center font-bold";

  const unactiveLinkStyle: string =
    "w-2/5 text-[#212121] text-center font-bold";

  // returned component
  return (
    <section className="w-5/6">
      {/* links */}
      {flowParams !== "login" &&
      flowParams !== "signup" ? (
        ""
      ) : (
        <div className="bg-[#E1BD8A] p-2 flex items-center justify-around rounded-xl">
          <Link
            href="/onboarding?flow=login"
            className={
              flowParams === "login" ? activeLinkStyle : unactiveLinkStyle
            }
          >
            Login
          </Link>

          <Link
            href="/onboarding?flow=signup"
            className={
              flowParams === "signup" ? activeLinkStyle : unactiveLinkStyle
            }
          >
            Signup
          </Link>
        </div>
      )}

      {/* dynamically rendered form */}
      {flowParams === "login" && <Login />}
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
