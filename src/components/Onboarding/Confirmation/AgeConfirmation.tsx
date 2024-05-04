import Link from "next/link";
import AppButton from "@/components/UI/Button/AppButton";

const Confirmation = () => {
  return (
    <section className="h-full flex flex-col items-center gap-4 pt-28 mt-10 lg:mt-0">
      <h1 className="text-gold-500 text-3xl font-bold mt-10 lg:mt-0">
        Confirmation:
      </h1>

      <div className="bg-gold-500 text-black px-10 md:px-20 py-2 rounded-xl ">
        <h1 className="text-2xl font-semibold">28 years old</h1>
        <p>(February 18, 1995)</p>
      </div>

      <p className="text-center text-xl text-gold-500 lg:w-[80%] leading-normal">
        As part of our commitment to responsible drinking, please confirm your
        age displayed below is correct and you are of legal drinking age.
      </p>

      <Link href="/user/onboarding?flow=emailConfirmation">
        <AppButton
          btnText="Yes, I confirm"
        />
      </Link>
    </section>
  );
};

export default Confirmation;
