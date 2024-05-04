import SignupForm from "./SignupForm";
import Link from "next/link";
import AppButton from "@/components/UI/Button/AppButton";
import AppInput from "@/components/UI/Inputs/AppInput";

const Signup = () => {
  return (
    <form className="mt-7 flex flex-col gap-4">
      <AppInput label="Full Name:" placeholder="Max Smith" />
      <AppInput label="Email:" placeholder="Maxxconnect127@gmail.com" />
      <AppInput label="Age (28 years old):" placeholder="February 18, 1995" />
      <AppInput label="Phone number:" placeholder="09012345678" />
      <AppInput label="Password:" placeholder="************" />

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

      <Link href="/user/onboarding?flow=ageConfirmation">
        <AppButton
          btnText="Create Account"
          className="w-full"
        />
      </Link>
    </form>
  );
};

export default Signup;
