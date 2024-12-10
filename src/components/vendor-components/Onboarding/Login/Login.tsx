import Link from "next/link";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <section className="lg:mt-7 flex flex-col gap-5">
      {/* form */}
      <LoginForm />

      {/* <div className="flex items-center justify-center gap-1">
        <p className="text-[##FBE9D0] text-center">
          Yet to create an account?{" "}
        </p>
        <Link
          href="/admin/?flow=signup"
          className="text-gold-500 underline font-semibold"
        >
          {" "}
          Sign up
        </Link>
      </div> */}
    </section>
  );
};

export default Login;
