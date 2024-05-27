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
import { loginValidationSchema } from "@/types/authSchemas";

const LoginForm = () => {
  // router
  const router = useRouter();

  // zustand
  const user = userStore((state: any) => state.user);
  const isUserLoggedin = userStore((state: any) => state.isUserLoggedin);
  const loginUser = userStore((state: any) => state.loginUser);

  const form = useForm<z.infer<typeof loginValidationSchema>>({
    resolver: zodResolver(loginValidationSchema),
    defaultValues: {
      username_or_email: "",
      password: "",
    },
    // defaultValues: {
    //   username_or_email: "ayomisco",
    //   password: "MySecret@123",
    // },
  });

  function onSubmit(data: z.infer<typeof loginValidationSchema>) {
    console.log(data);
    alert(
      `Logged in with: Username: ${data.username_or_email}, Password: ${data.password} `
    );
    router.push("/user/home");
    // loginUser(data);
  }

  useEffect(() => {
    // console.log(user);
    // console.log(isUserLoggedin);

    // if (isUserLoggedin) {
    //   router.push("/user/home");
    // }
  }, [user, router, isUserLoggedin]);

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          {/* username */}
          <FormField
            control={form.control}
            name="username_or_email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username or Email:</FormLabel>
                <FormControl>
                  <Input
                    className={`${inputStyling}`}
                    placeholder="Username or Email"
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

          {/* password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password:</FormLabel>
                <FormControl>
                  <Input
                    className={`${inputStyling}`}
                    placeholder="Password"
                    {...field}
                    type="password"
                  />
                </FormControl>
                {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <Link
            href="/user?flow=forgotPassword"
            className=" text-gold-500 text-end text-sm font-medium"
          >
            Forgot Password
          </Link>

          <AppButton btnText="Login" type="submit" className="text-sm" />
        </form>
      </Form>
    </>
  );
};

export default LoginForm;
