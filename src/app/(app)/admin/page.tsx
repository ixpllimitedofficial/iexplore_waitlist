import Onboarding from "@/components/admin/Onboarding/Onboarding";
import AppNavbar from "@/components/UI/AdminUI/Navbar/LoginNavbar/AppNavbar";
import Image from "next/image";
import OnboardingBgImage from "@/assets/img/OnboardingBgImage.png";

const page = () => {
  return (
    <>
      <AppNavbar />

      <section className="relative px-5 mt-28 md:px-10 flex justify-center lg:justify-between gap-20">
        <div className="relative hidden lg:block">
          <h1 className="font-bold text-4xl absolute left-10 bottom-16 w-4/6">
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
