"use client";

import { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import AppInputOTP from "@/components/UI/Inputs/AppInputOTP";
import { Button } from "@/components/UI/button";
import Link from "next/link";

// zustand store
import { userStore } from "@/store/user";

function MyTimer({ expiryTimestamp }: any) {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn(""),
  });

  return (
    <div style={{ textAlign: "center" }}>
      <p className="text-gold-500 font-medium text-center leading-snug self-center">
        Resend code:{" "}
        <span className="text-white">
          {minutes}:{seconds}
        </span>
      </p>
      {!isRunning && (
        <Button
          className="bg-gold-500 hover:bg-gold-600 text-black mt-2"
          onClick={() => {
            // Restarts to 5 minutes timer
            const time = new Date();
            time.setSeconds(time.getSeconds() + 300);
            restart(time);
          }}
        >
          Resend
        </Button>
      )}
    </div>
  );
}

const VerifyUserOTP = () => {
  const isUserOTPVerified = userStore((state: any) => state.isUserOTPVerified);
  const setisOTPVerified = userStore((state: any) => state.setisOTPVerified);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 300); // 5 minutes timer

  useEffect(() => {
    // Reset isUserOTPVerified state before component mounts
    setisOTPVerified(false);

    return () => {
      // Set isOTPVerified to false
      setisOTPVerified(false);
    };
  }, [setisOTPVerified, isUserOTPVerified]);

  return (
    <section className="h-full flex flex-col gap-2 pt-16 lg:pt-28">
      <h1 className="text-gold-500 font-semibold text-2xl text-center leading-snug self-center">
        Input your OTP code
      </h1>

      <h1 className="text-gold-500 md:text-xl md:w-[70%] text-center leading-snug self-center">
        Please input the OTP code sent to your email
        {/* <span className="text-white"> Maxxconnect127@gmail.com</span> */}
      </h1>

      <AppInputOTP userRole="user" />

      <MyTimer expiryTimestamp={time} />

      <div className="mt-3 flex items-center justify-center gap-1 text-sm">
        <p className="text-[##FBE9D0] text-center">Already Registered?</p>
        <Link href="/user" className="text-gold-500 underline font-semibold">
          {" "}
          Login
        </Link>
      </div>
    </section>
  );
};

export default VerifyUserOTP;
