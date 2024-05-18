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

const formSchema = z.object({
  username_or_email: z
    .string()
    .min(3, { message: "Username must be at least 10 characters." }),
  password: z.string().min(5, {
    message: "Password must be at least 2 characters.",
  }),
});

const LoginForm = () => {
  // router
  const router = useRouter();

  // zustand
  const user = userStore((state: any) => state.user);
  const isUserLoggedin = userStore((state: any) => state.isUserLoggedin);
  const loginUser = userStore((state: any) => state.loginUser);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username_or_email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    loginUser(data);
  }

  useEffect(() => {
    console.log(user);
    console.log(isUserLoggedin);

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
            href="/user?flow=forgotPassword"
            className=" text-gold-500 text-end text-sm font-medium"
          >
            Forgot Password
          </Link>

          {user.message && <p>{user.message}</p>}

          <AppButton btnText="Login" type="submit" className="text-sm" />
        </form>
      </Form>

      {/* <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 ">
        <AppInput
          type="text"
          label="Email Address:"
          registerName="email"
          register={register}
          // placeholder="Maxxconnect127@gmail.com"
          isInputRequired={{ value: true, message: "Email is required!" }}
          errorMessage={errors.email?.message}
        />

        <AppInput
          type="password"
          label="Password:"
          registerName="password"
          register={register}
          // placeholder="***********************"
          isInputRequired={{ value: true, message: "Password is required!" }}
          errorMessage={errors.password?.message}
        />

        <Link
          href="/user?flow=forgotPassword"
          className=" text-gold-500 text-end font-medium"
        >
          Forgot Password
        </Link>

        <p>{user.message}</p>

        <AppButton btnText="Login" type="submit" />
      </form> */}
    </>
  );
};

export default LoginForm;
