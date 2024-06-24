"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import AppButton from "@/components/UI/Button/AppButton";
import { useForm } from "react-hook-form";
import { userStore } from "@/store/user";
import { useEffect } from "react";

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
import { forgotPasswordValidationSchema } from "@/types/authSchemas";

const ForgotPassword = () => {
  // router
  const router = useRouter();

  // zustand
  const user = userStore((state: any) => state.user);
  const isUserLoggedin = userStore((state: any) => state.isUserLoggedin);
  const loginUser = userStore((state: any) => state.loginUser);

  const form = useForm<z.infer<typeof forgotPasswordValidationSchema>>({
    resolver: zodResolver(forgotPasswordValidationSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof forgotPasswordValidationSchema>) {
    console.log(data);
    router.push("/user?flow=checkCode");
  }

  // useEffect(() => {
  //   // console.log(user);
  //   // console.log(isUserLoggedin);

  //   if (isUserLoggedin) {
  //     router.push("/user/home");
  //   }
  // }, [user, router, isUserLoggedin]);

  return (
    <section className="h-full flex flex-col gap-2 pt-16 lg:pt-28">
      <h1 className="text-gold-500 font-semibold text-2xl md:text-3xl text-center leading-snug self-center">
        Forgot Password?
      </h1>

      <p className="text-center text-lg md:text-xl text-gold-500 md:w-[70%] leading-normal self-center">
        Please enter the email associated with your password
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          {/* username */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email:</FormLabel>
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

          <AppButton btnText="Send code" type="submit" className="text-sm" />
        </form>
      </Form>

      <div className="mt-1 flex items-center justify-center gap-1 text-sm">
        <p className="text-[##FBE9D0] text-center">Remember password?</p>
        <Link href="/user" className="text-gold-500 underline font-semibold">
          {" "}
          Login
        </Link>
      </div>
    </section>
  );
};

export default ForgotPassword;
