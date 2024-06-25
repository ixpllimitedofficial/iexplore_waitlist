"use client";

import React, { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/UI/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/UI/input-otp";
import AppButton from "../Button/AppButton";
import { verifyOTPSchema } from "@/types/authSchemas";

// zustand store
import { userStore } from "@/store/user";

const AppInputOTP = ({ userRole, destination }: any) => {
  const verifyOTP = userStore((state: any) => state.verifyOTP);
  const isUserOTPVerified = userStore((state: any) => state.isUserOTPVerified);
  const setisOTPVerified = userStore((state: any) => state.setisOTPVerified);

  const previousUrlForOTP = userStore((state: any) => state.previousUrlForOTP);

  // router
  const router = useRouter();

  const form = useForm<z.infer<typeof verifyOTPSchema>>({
    resolver: zodResolver(verifyOTPSchema),
    defaultValues: {
      otp: "",
    },
  });

  function onSubmit(data: z.infer<typeof verifyOTPSchema>) {
    console.log(data);

    if (previousUrlForOTP === "resetPassword") {
      verifyOTP(data, "verifyOTP");
    } else {
      verifyOTP(data, "verifyUserOTP");
    }
  }

  useEffect(() => {
    console.log(previousUrlForOTP);
    
    if (isUserOTPVerified) {
      if (userRole && previousUrlForOTP === "resetPassword") {
        router.push(`/${userRole}?flow=${previousUrlForOTP}`);
      } else {
        router.push(`/${userRole}`);
      }
    }

    // Cleanup function to be called when the component is unmounted
    return () => {
      // Set isOTPVerified to false
      setisOTPVerified(false);
    };
  }, [
    destination,
    isUserOTPVerified,
    router,
    setisOTPVerified,
    userRole,
    previousUrlForOTP,
  ]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem className="flex flex-col items-center">
              {/* <FormLabel>One-Time Password</FormLabel> */}
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              {/* <FormDescription>
                Please enter the one-time password sent to your phone.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* <Link href="/user?flow=resetPassword" className="self-center"> */}
        <AppButton
          type="submit"
          btnText="Confirm code"
          className="text-sm mt-3 mx-auto"
        />
        {/* </Link> */}
      </form>
    </Form>
  );
};

export default AppInputOTP;
