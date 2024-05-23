import SignupForm from "./SignupForm";
import Link from "next/link";
import AppButton from "@/components/UI/Button/AppButton";
import AppInput from "@/components/UI/Inputs/AppInput";

const Signup = () => {
  return (
    <div className="mt-7 flex flex-col gap-4">
      <SignupForm />

      <div className="flex items-start gap-2">
        <input type="checkbox" aria-label="Check box" className="mt-1" />
        <p className="text-gold-500">
          By creating an account, I verify that i’m over 18 years of age and
          accept the{" "}
          <span className="underline font-bold"> Terms of Service</span> and
          accept the{" "}
          <span className="underline font-bold"> Privacy Policy</span>.
        </p>
      </div>

      <Link href="/user?flow=ageConfirmation">
        <AppButton btnText="Create Account" className="w-full" />
      </Link>
    </div>
  );
};

export default Signup;
