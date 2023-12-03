import Image from "next/image";
import OnboardingBgImage from "@/assets/img/OnboardingBgImage.png";
import Onboarding from "@/components/Onboarding/Onboarding";

const page = () => {
  return (
    <section className="relative p-10 flex gap-28">     
      <div className="relative w-3/4">
        <h1 className="font-bold text-4xl absolute left-10 bottom-16 w-4/6">Connect with places made for you to have fun</h1>
        <Image src={OnboardingBgImage} alt="OnboardingBgImage" className="h-full" />
      </div>

      <Onboarding />
    </section>
  );
};

export default page;
