import Image from "next/image";
import Onboarding from "@/components/user/Onboarding/Onboarding";
import OnboardingBgImage from "@/assets/img/OnboardingBgImage.png";

const page = () => {

  return (
    <section className="lg:pb-10">
      <section className="relative px-5 mt-28 md:px-10 flex gap-20">
        <div className="relative hidden lg:block self-start">
          <h1 className="font-bold text-4xl absolute left-10 bottom-16 w-4/6">
            Connect with places made for you to have fun
          </h1>
          <Image src={OnboardingBgImage} alt="OnboardingBgImage"></Image>
        </div>

        <Onboarding />
      </section>
    </section>
  );
};

export default page;
