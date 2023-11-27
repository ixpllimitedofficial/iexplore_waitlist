import AppButton from "@/components/UI/Button/AppButton";
import AppInput from "@/components/UI/Inputs/AppInput";
import Link from "next/link";

const ResetPassword = () => {
  return (
    <section className="h-full flex flex-col gap-8 justify-center">
      <h1 className="text-[#E1BD8A] text-3xl w-[50%] text-center leading-snug self-center">
        Reset password?
      </h1>

      <h1 className="text-[#FAE0BA] text-xl w-[50%] text-center leading-snug self-center">
        Create a new password you’ll easily remember
      </h1>

      <AppInput label="New password:" placeholder="Must be 8 characters" className="px-7" />
      <AppInput label="Confirm new password:" placeholder="Repeat password" className="px-7" />

      <Link href="/onboarding?flow=login" className="self-center">
        <AppButton text="Reset password" className="px-20 rounded-2xl " />
      </Link>
    </section>
  );
};

export default ResetPassword;
