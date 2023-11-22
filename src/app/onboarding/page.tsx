import Image from "next/image";
import OnboardingBgImage from "@/assets/img/OnboardingBgImage.png";
import Onboarding from "@/components/Onboarding/Onboarding";

const page = () => {
  return (
    <section className="p-10 flex gap-40">
      <Image src={OnboardingBgImage} alt="OnboardingBgImage" height={600} />

      <Onboarding />
    </section>
  );
};

export default page;
