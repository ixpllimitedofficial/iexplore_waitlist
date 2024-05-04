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

      {/* divider */}
      <div className="flex items-center">
        <div className="border-t-2 border-gold-500 flex-grow"></div>
        <div className="px-3 text-gold-500 font-bold">or</div>
        <div className="border-t-2 border-gold-500 flex-grow"></div>
      </div>

      {/* continue with buttons */}
      <div className="flex items-center bg-white text-black py-3 px-5 gap-2 mx-auto rounded-2xl justify-center">
        <Image src={GoogleIcon} alt="GoogleIcon" height={15} />
        <button> Continue with Google</button>
      </div>

      <div className="flex items-center bg-white text-black py-3 px-5 gap-2 mx-auto rounded-2xl justify-center">
        <Image src={AppleIcon} alt="AppleIcon" height={20} />
        <button>Continue with Apple</button>
      </div>
    </section>
  );
};

export default Login;
