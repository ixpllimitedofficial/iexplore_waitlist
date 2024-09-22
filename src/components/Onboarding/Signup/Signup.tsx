"use client";

import { useSearchParams } from "next/navigation";
import CheckCode from "./CheckCode";
import SignupForm from "./SignupForm";
import VerifyUserOTP from "./VerifyUserOTP";
import Link from "next/link";
import Image from "next/image";
import ExploreLogo from "@/assets/svg/NavbarSvg/iExploreTextLogoSvg.svg";
import OnboardingImage from "@/assets/svg/iExploreLogo.svg";

type FlowType =
  | "ageConfirmation"
  | "emailConfirmation"
  | "forgotPassword"
  | "verifyOTP"
  | "resetPassword"
  | "checkCode";

const Signup = () => {
  const flowParams = useSearchParams().get("flow") as FlowType;

  // returned component
  return (
    <section className="py-7 px-3 lg:px-10">
      <Image src={ExploreLogo} alt="iExploreLogo.png" />

      {flowParams === null && (
        <div className="">
          <div className="mt-10 flex gap-20 justify-between">
            <div className="">
              <div>
                <p className="text-3xl font-bold">Sign up ⚡</p>
              </div>
              <p className="mt-3 mb-7 text-lg">
                Get started with iexplore and begin your experience
              </p>

              <div className="">
                <SignupForm />

                <div className="flex items-center mt-5 gap-1">
                  <p className="text-lg font-medium">
                    Already have an account?
                  </p>
                  <Link
                    href="/login"
                    className="text-gold-500 text-end text-lg font-medium"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* dynamically rendered form */}
      {flowParams === "verifyOTP" && <VerifyUserOTP />}
    </section>
  );
};

export default Signup;
