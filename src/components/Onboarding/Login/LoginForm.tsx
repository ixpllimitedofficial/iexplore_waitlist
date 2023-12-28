import Link from "next/link";
import { useRouter } from "next/navigation";
import AppButton from "@/components/UI/Button/AppButton";
import AppInput from "@/components/UI/Inputs/AppInput";

const LoginForm = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/");
  };

  return (
    <form action={handleLogin} className="flex flex-col gap-5 ">
      <AppInput label="Email address:" placeholder="Maxxconnect127@gmail.com" />
      <AppInput label="Password:" placeholder="***********************" />

      <Link
        href="/onboarding?flow=forgotPassword"
        className=" text-[#E1BD8A] text-end font-medium"
      >
        Forgot Password
      </Link>

      <AppButton
        btnText="Login"
        className="text-[15px] md:text-lg"
        type="submit"
      />
    </form>
  );
};

export default LoginForm;
