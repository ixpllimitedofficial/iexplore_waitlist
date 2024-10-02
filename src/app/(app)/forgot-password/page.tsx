import Link from "next/link";
import Image from "next/image";

import ExploreLogo from "@/assets/svg/NavbarSvg/iExploreTextLogoSvg.svg";
import OnboardingImage from "@/assets/svg/iExploreLogo.svg";

import LoginForm from "@/components/Onboarding/Login/LoginForm";
import ForgotPasswordForm from "@/components/Onboarding/ForgotPassword/ForgotPasswordForm";

const page = () => {
  return (
    <section className="grid grid-cols-2">
      <div className="col-span-full md:col-span-1">
        <section className="py-7 px-5 lg:px-10">
          <Image src={ExploreLogo} alt="iExploreLogo.png" height={45} />

          <div className="relative mt-40 flex gap-20 justify-between items-center">
            {/* login form */}
            <div className="w-full">
              <p className="text-3xl font-bold text-center">Reset Password</p>
              <p className="mt-3 mb-7 text-lg text-center">
                Please enter the email associated with your password
              </p>

              {/* forogot password form */}
              <ForgotPasswordForm />

              <div className="flex items-center justify-center mt-5 gap-2">
                <p className="text-lg font-medium">Remembered Password?</p>
                <Link
                  href="/login"
                  className="text-gold-500 text-end text-lg font-medium"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="hidden md:col-span-1 sticky top-0 h-screen md:flex place-items-center">
        <Image
          src={OnboardingImage}
          alt="OnboardingImage"
          className="object-cover h-[85%] w-auto mx-auto"
        ></Image>
      </div>
    </section>
  );
};

export default page;
