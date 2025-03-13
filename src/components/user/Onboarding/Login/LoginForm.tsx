"use client";

import { useSession, SessionProvider } from "next-auth/react";

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
import PasswordField from "@/components/UI/Inputs/PasswordField";

import { signIn } from "next-auth/react";
import { showSimpleToast } from "@/utils/functions/alertFunctions";

const LoginForm = () => {
  // const { data: session, status } = useSession();

  // router
  const router = useRouter();

  // zustand
  const user = userStore((state: any) => state.user);

  const form = useForm<z.infer<typeof loginValidationSchema>>({
    resolver: zodResolver(loginValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof loginValidationSchema>) {
    // const res = await signIn("credentials", {
    //   username: data.username_or_email,
    //   password: data.password,
    //   redirect: false,
    // }).then((stuff) => {
    //   // stuff is { error: "CredentialsSignin", status: 200, ok: true, url: null } at this point
    //   console.log("stuff in", stuff);
    // });
    // if (res?.status == 200) {
    //   console.log();
    // } else if (res?.error === "custom error to the client") {
    //   console.log("error");

    //   // handle this particular error
    // } else {
    //   // handle generic error
    // }

    await signIn("credentials", {
      redirect: false,
      username: data.email,
      password: data.password,
    }).then((res) => {
      console.log(res);

      if (res?.ok) {
        return true;
      } else if (res?.error) {
        throw new Error(res.error);
      }
    });
  }

  // useEffect(() => {
  //   if (session) {
  //     showSimpleToast("Logged in successfully", "success");
  //     router.push("/user/home");
  //   }
  // }, [user, router, session]);

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
            name="email"
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
                  <PasswordField
                    field={field}
                    placeholder="Password"
                    inputStyling={inputStyling}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Link
            href="/user?flow=forgotPassword"
            className="self-end text-gold-500 text-end text-sm font-medium"
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
