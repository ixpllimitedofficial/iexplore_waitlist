import AppButton from "@/components/UI/Button/AppButton";
import Link from "next/link";
import React from "react";

const Confirmation = () => {
  return (
    <section className="h-full flex flex-col gap-10 items-center justify-center">
      <h1 className="text-[#F7D098] text-2xl font-bold">Confirmation:</h1>

      <div className="bg-[#F7D098] text-black px-20 py-2 rounded-xl ">
        <h1 className="text-2xl font-semibold">28 years old</h1>
        <p>(February 18, 1995)</p>
      </div>

      <p className="text-center text-2xl text-[#F7D098] w-[70%] leading-normal">
        As part of our commitment to responsible drinking, please confirm your
        age displayed below is correct and you are of legal drinking age.
      </p>

      <Link href="/onboarding?flow=emailConfirmation">
        <AppButton btnText="Yes, I confirm" className="px-20 rounded-2xl" />
      </Link>
    </section>
  );
};

export default Confirmation;
