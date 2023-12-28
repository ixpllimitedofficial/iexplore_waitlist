import Image from "next/image";
import OnboardingBgImage from "@/assets/img/OnboardingBgImage.png";
import Onboarding from "@/components/Onboarding/Onboarding";

const page = () => {
  return (
    <section className="relative px-5 py-10 md:p-10 flex justify-center lg:justify-between">     
      <div className="relative hidden lg:block h-full w-[45%]">
        <h1 className="font-bold text-4xl absolute left-10 bottom-16 w-4/6">Connect with places made for you to have fun</h1>
        <Image src={OnboardingBgImage} alt="OnboardingBgImage" />
      </div>

      <Onboarding />
    </section>
  );
}; 

export default page;
