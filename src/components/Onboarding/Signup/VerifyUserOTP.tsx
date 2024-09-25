"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useTimer } from "react-timer-hook";

import { useForm } from "react-hook-form";
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

import { emailSchema } from "@/types/authSchemas";

import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";
import AppInputOTP from "@/components/UI/Inputs/AppInputOTP";
import { toast } from "@/components/UI/use-toast";

import ArrowLeft from "@/assets/svg/ArrowLeft.svg";

import { inputStyling } from "@/utils/constant";

import { onResendUserOTP } from "@/app/actions";
import { useState } from "react";

// user otp verification component
const VerifyUserOTP = () => {
  const router = useRouter();

  const time = new Date();
  time.setSeconds(time.getSeconds() + 300); // 5 minutes timer

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
          To confirm your email address, please enter the OTP we sent to your
          email.
        </h1>

        {/* code input component */}
        <AppInputOTP />

        {/* timer component */}
        <MyTimer expiryTimestamp={time} />

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

// timer and resend code component
function MyTimer({ expiryTimestamp }: any) {
  const [btnState, setBtnState] = useState(false);

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

  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof emailSchema>) {
    setBtnState(true);

    // Restarts to 5 minutes timer
    const time = new Date();
    time.setSeconds(time.getSeconds() + 300);
    restart(time);

    const result = await onResendUserOTP(data);

    if (result.status === "success") {
      toast({
        title: "Success",
        description: result.msg,
        variant: "success",
      });
    } else {
      toast({
        title: "An error occured!",
        description: result,
        variant: "destructive",
      });

      setBtnState(false);
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      {!isRunning && (
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
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="bg-gold-500 hover:bg-white transition duration-200 text-[#322016] px-8 py-5 lg:py-6 rounded-3xl font-bold mx-auto"
              type="submit"
              disabled={btnState}
            >
              {!btnState ? "Send code again" : "Sending code..."}
            </Button>
          </form>
        </Form>
      )}

      <p className="text-gold-500 font-medium text-center leading-snug self-center mt-3">
        Resend code:{" "}
        <span className="text-white">
          {minutes}:{seconds}
        </span>
      </p>
    </div>
  );
}
