import Onboarding from "@/components/user/Onboarding/Onboarding";
import OnboardingBgImage from "@/assets/img/OnboardingBgImage.png";
import Image from "next/image";
import AppNavbar from "@/components/UI/Navbar/AppNavbar/AppNavbar";

const page = () => {
  return (
      <>
        <AppNavbar />

      <section className="relative px-5 mt-28 md:px-10 flex justify-center lg:justify-between gap-20">
        <div className="relative hidden lg:block">
          <h1 className="font-bold text-4xl absolute left-10 bottom-16 w-4/6">
            Connect with places made for you to have fun
          </h1>
          <Image src={OnboardingBgImage} alt="OnboardingBgImage" />
        </div>

        <Onboarding />
      </section>
    </>
  );
};

export default page;
