import LoginForm from "./LoginForm";
import Link from "next/link";
import AppButton from "@/components/UI/Button/AppButton";

const Login = () => {
  return (
    <section className="mt-7 flex flex-col gap-5">
      {/* form */}
      <LoginForm />

      <Link href="#" className=" text-[#E1BD8A] text-end font-medium">
        Forgot Password
      </Link>

      <AppButton />

      {/* divider */}
      <div className="flex items-center">
        <div className="border-t-2 border-[##F9D9AD] flex-grow"></div>
        <div className="px-5 text-[#F9D9AD] text-xl font-bold">
          or
        </div>
        <div className="border-t-2 border-[##F9D9AD] flex-grow"></div>
      </div>

      {/* continue with buttons */}
      <button>Continue with Google</button>
      <button>Continue with Apple</button>

    </section>
  );
};

export default Login;
