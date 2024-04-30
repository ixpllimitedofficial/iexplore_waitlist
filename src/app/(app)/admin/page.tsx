import AppNavbar from "@/components/UI/AdminUI/Navbar/LoginNavbar/AppNavbar";
import Image from "next/image";
import OnboardingBgImage from "@/assets/img/OnboardingBgImage.png";
import Onboarding from "@/components/admin/Onboarding/Onboarding";

const page = () => {
  return (
    <>
      <AppNavbar />

      <section className="relative px-5 mt-28 md:p-10 flex justify-center lg:justify-between">
        <div className="relative hidden lg:block h-full w-[45%]">
          <h1 className="font-bold text-white text-4xl absolute left-10 bottom-16 w-4/6">
            Manage location data and spot overview easily
          </h1>
          <Image src={OnboardingBgImage} alt="OnboardingBgImage" />
        </div>

        <Onboarding />
      </section>
    </>
  );
};

export default page;
