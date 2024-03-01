import Link from "next/link";
import AppButton from "@/components/UI/Button/AppButton";

const Confirmation = () => {
  return (
    <section className="h-full flex flex-col gap-10 items-center justify-center">
      <h1 className="text-[#F7D098] text-2xl font-bold mt-10 lg:mt-0">
        Confirmation:
      </h1>

      <div className="bg-[#F7D098] text-black px-10 md:px-20 py-2 rounded-xl ">
        <h1 className="text-2xl font-semibold">28 years old</h1>
        <p>(February 18, 1995)</p>
      </div>

      <p className="text-center text-xl md:text-2xl text-[#F7D098] lg:w-[70%] leading-normal">
        As part of our commitment to responsible drinking, please confirm your
        age displayed below is correct and you are of legal drinking age.
      </p>

      <Link href="/user/onboarding?flow=emailConfirmation">
        <AppButton
          btnText="Yes, I confirm"
          className="text-[15px] md:text-lg"
        />
      </Link>
    </section>
  );
};

export default Confirmation;
