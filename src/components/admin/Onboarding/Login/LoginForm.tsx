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

  // react hook form
  const form = useForm<z.infer<typeof loginValidationSchema>>({
    resolver: zodResolver(loginValidationSchema),
    defaultValues: {
      username_or_email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof loginValidationSchema>) {
    console.log(data);
    loginUser(data);
    router.push("/admin/dashboard");
  }

  useEffect(() => {
    // console.log(user);
    // console.log(isUserLoggedin);

    if (isUserLoggedin) {
      router.push("/user/home");
    }
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
            href="/admin?flow=forgotPassword"
            className=" text-gold-500 text-end text-sm font-medium"
          >
            Forgot Password
          </Link>

          {user.message && <p>{user.message}</p>}

          <AppButton btnText="Login" type="submit" className="text-sm" />
        </form>
      </Form>
    </>
  );
};

export default LoginForm;
