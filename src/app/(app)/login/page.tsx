import Link from "next/link";
import Image from "next/image";
import ExploreLogo from "@/assets/svg/NavbarSvg/iExploreTextLogoSvg.svg";
import LoginForm from "@/components/Onboarding/Login/LoginForm";
import OnboardingImage from "@/assets/svg/iExploreLogo.svg";

const page = () => {
  return (
    <section className="grid grid-cols-2">
      <div className="col-span-full md:col-span-1">
        <section className="py-7 px-3 lg:px-10">
          <Image src={ExploreLogo} alt="iExploreLogo.png" />

          <div className="relative mt-16 flex gap-20 justify-between items-center">
            {/* login form */}
            <div className="w-full">
              <div>
                <p className="text-3xl font-bold">Hello there 👋</p>
              </div>
              <p className="mt-3 mb-7 text-lg">
                Welcome to the iExplore experience
              </p>

              {/* login form */}
              <LoginForm />

              <div className="flex items-center mt-5 gap-2">
                <p className="text-lg font-medium">New to iExplore?</p>
                <Link
                  href="/signup"
                  className="text-gold-500 text-end text-lg font-medium"
                >
                  Create account
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
