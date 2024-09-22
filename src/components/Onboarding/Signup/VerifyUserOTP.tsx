"use client";

import { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";
import AppInputOTP from "@/components/UI/Inputs/AppInputOTP";
import { Button } from "@/components/UI/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AppButton from "@/components/UI/Button/AppButton";
import { useForm } from "react-hook-form";
import Modal from "@/components/UI/Modal/Modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/UI/form";
import { Input } from "@/components/UI/input";
import { inputStyling } from "@/utils/constant";

import { emailSchema } from "@/types/authSchemas";

import Image from "next/image";
import ArrowLeft from "@/assets/svg/ArrowLeft.svg";

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

  const requestUserOTP = userStore((state: any) => state.requestUserOTP);

  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof emailSchema>) {
    console.log(data);
    // Restarts to 5 minutes timer
    const time = new Date();
    time.setSeconds(time.getSeconds() + 300);
    restart(time);
    requestUserOTP(data, "requestOTP");
  }

  return (
    <div style={{ textAlign: "center" }}>
      {!isRunning && (
        // <Button
        //   className="bg-gold-500 hover:bg-gold-600 text-black mt-2"
        //   onClick={() => {
        //     // Restarts to 5 minutes timer
        //     const time = new Date();
        //     time.setSeconds(time.getSeconds() + 20);
        //     restart(time);
        //     requestUserOTP(emailForOTP);
        //   }}
        // >
        //   Resend
        // </Button>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 mt-5"
          >
            {/* username */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Email:</FormLabel> */}
                  <FormControl>
                    <Input
                      className={`${inputStyling}`}
                      placeholder="youremail@email.com"
                      {...field}
                    />
                  </FormControl>
                  {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            <AppButton
              btnText="Send code again"
              type="submit"
              className="text-sm"
            />
          </form>
        </Form>
      )}

      <p className="text-gold-500 font-medium text-center leading-snug self-center">
        Resend code:{" "}
        <span className="text-white">
          {minutes}:{seconds}
        </span>
      </p>
    </div>
  );
}

const VerifyUserOTP = () => {
  const isUserOTPVerified = userStore((state: any) => state.isUserOTPVerified);
  const setisOTPVerified = userStore((state: any) => state.setisOTPVerified);
  const emailForOTP = userStore((state: any) => state.emailForOTP);
  const clearEmailForOTPstate = userStore(
    (state: any) => state.clearEmailForOTPstate
  );

  const previousUrlForOTP = userStore((state: any) => state.previousUrlForOTP);

  const router = useRouter();

  const time = new Date();
  time.setSeconds(time.getSeconds() + 300); // 5 minutes timer

  useEffect(() => {
    return () => {
      // Set isOTPVerified to false
      if (isUserOTPVerified) {
        clearEmailForOTPstate();
        setisOTPVerified(false);
      }
    };
  }, [setisOTPVerified, isUserOTPVerified, clearEmailForOTPstate]);

  return (
    <>
      <Image
        src={ArrowLeft}
        alt="ArrowLeft"
        className="mt-12"
        onClick={() => {
          router.back();
        }}
      />

      <section className="h-full flex flex-col gap-5 mt-12">
        <h1 className="text-gold-500 font-semibold text-3xl text-center leading-snug self-center">
          Confirm OTP
        </h1>

        <h1 className="md:text-xl md:w-[70%] text-center leading-snug self-center">
          To confirm your email address, please enter the OTP we sent to{" "}
          {emailForOTP !== "" ? emailForOTP : "your email."}
          {/* <span className="text-white"> Maxxconnect127@gmail.com</span> */}
        </h1>

        <AppInputOTP userRole="user" />

        <MyTimer expiryTimestamp={time} emailForOTP={emailForOTP} />

        <div className="mt-3 flex items-center justify-center gap-1 text-lg text-center">
          <p className="">Already Verified?</p>
          <Link href="/login" className="text-gold-500 underline font-semibold">
            {" "}
            Login
          </Link>
        </div>
      </section>
    </>
  );
};

export default VerifyUserOTP;
