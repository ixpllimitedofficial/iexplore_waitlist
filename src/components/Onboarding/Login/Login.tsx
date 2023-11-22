import React from "react";
import LoginForm from "./LoginForm";
import Link from "next/link";

const Login = () => {
  return (
    <section className="mt-7 flex flex-col gap-5">
      {/* form */}
      <LoginForm />

      <Link href="#" className=" text-[#E1BD8A] text-end font-medium">
        Forgot Password
      </Link>
    </section>
  );
};

export default Login;
