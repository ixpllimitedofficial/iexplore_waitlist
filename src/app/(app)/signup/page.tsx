import Image from "next/image";
import Signup from "@/components/Onboarding/Signup/Signup";
import OnboardingImage from "@/assets/svg/iExploreLogo.svg";

const page = () => {
  return (
    <section className="grid grid-cols-2">
      <div className="col-span-full md:col-span-1">
        <Signup />
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
