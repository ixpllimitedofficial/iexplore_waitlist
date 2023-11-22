import Image from "next/image";
import Link from "next/link";
import LoginForm from "./LoginForm";
import AppButton from "@/components/UI/Button/AppButton";

import GoogleIcon from "@/assets/img/GoogleIcon.png";
import AppleIcon from "@/assets/img/AppleIcon.png";

const Login = () => {
  return (
    <section className="mt-7 flex flex-col gap-5">
      {/* form */}
      <LoginForm />

      <Link href="#" className=" text-[#E1BD8A] text-end font-medium">
        Forgot Password
      </Link>

      <AppButton text="Login" />

      {/* divider */}
      <div className="flex items-center">
        <div className="border-t-2 border-[##F9D9AD] flex-grow"></div>
        <div className="px-5 text-[#F9D9AD] text-xl font-bold">or</div>
        <div className="border-t-2 border-[##F9D9AD] flex-grow"></div>
      </div>

      {/* continue with buttons */}
      <div className="flex items-center bg-white text-black p-3 gap-2 rounded-2xl justify-center">
        <Image src={GoogleIcon} alt="GoogleIcon" />
        <button> Continue with Google</button>
      </div>

      <div className="flex items-center bg-white text-black p-3 gap-2 rounded-2xl justify-center">
        <Image src={AppleIcon} alt="AppleIcon" />
        <button>Continue with Apple</button>
      </div>

      <p className="text-[#F7D098] text-center">
        Yet to create an account?{" "}
        <span className="underline font-bold"> Sign up</span>
      </p>
    </section>
  );
};

export default Login;
