import SignupForm from "./SignupForm";
import Link from "next/link";
import AppButton from "@/components/UI/Button/AppButton";

const Signup = () => {
  return (
    <section className="mt-7 flex flex-col gap-5">
      {/* form */}
      <SignupForm />

      <div className="flex items-start gap-2">
        <input type="checkbox" aria-label="Check box" className="mt-2" />
        <p className="text-[#E1BD8A]">
          By creating an account, I verify that i’m over 18 years of age and
          accept the{" "}
          <span className="underline font-bold"> Terms of Service</span> and
          accept the{" "}
          <span className="underline font-bold"> Privacy Policy</span>.
        </p>
      </div>

      <Link href="/onboarding?flow=ageConfirmation">
        <AppButton text="Create Account" className="w-full bg-[#111111] text-black" />
      </Link>
    </section>
  );
};

export default Signup;
