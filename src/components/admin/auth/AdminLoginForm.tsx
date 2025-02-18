"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { userStore } from "@/store/user";
import { useEffect } from "react";
import { adminStore } from "@/store/admin";
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
import FilterButton from "@/components/UI/Button/FilterButton";
import NewAppButton from "@/components/UI/Button/NewAppButton";

const LoginForm = () => {
  const router = useRouter();

  // zustand
  const admin = adminStore((state: any) => state.admin);
  const isAdminLoggedin = adminStore((state: any) => state.isAdminLoggedin);
  const loginAdmin = adminStore((state: any) => state.loginAdmin);

  // react hook form
  const form = useForm<z.infer<typeof loginValidationSchema>>({
    resolver: zodResolver(loginValidationSchema),
    defaultValues: {
      username_or_email: "",
      password: "",
    },
  });

  // function onSubmit(data: z.infer<typeof loginValidationSchema>) {
  //   const formData = {
  //     username_or_email: data.username_or_email.trim(), 
  //     password: data.password,
  //   };
  //   console.log("Form Data to Submit:", formData);
  //   try {
  //     loginAdmin(formData);
  //   } catch (error: any) {
  //     console.error("Error in onSubmit:", error);
  //   }
  // }
  async function onSubmit(data: z.infer<typeof loginValidationSchema>) {
    const formData = {
      username_or_email: data.username_or_email.trim(),
      password: data.password,
    };

    try {
      const success = await loginAdmin(formData);
      if (success) {
        router.push("/admin/dashboard");
      }
    } catch (error: any) {
      console.error("Error in onSubmit:", error);
    }
  }
  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem("token");
    if (token && isAdminLoggedin) {
      router.push("/admin/dashboard");
    }
  }, [isAdminLoggedin, router]);
  // useEffect(() => {
  //   // console.log(user);
  //   console.log(isAdminLoggedin);
  //   if (isAdminLoggedin) {
  //     router.push("/admin/dashboard");
  //   }
  // }, [router, isAdminLoggedin]);

  return (
    <>
      <p className="py-3 text-3xl text-center font-bold hidden lg:block">Login</p>
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
                <FormLabel>Email address:</FormLabel>
                <FormControl>
                  <Input
                    className={`${inputStyling} `}
                    placeholder="Email"
                    {...field}
                  />
                </FormControl>
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
                <FormMessage />
              </FormItem>
            )}
          />

          <Link
            href="/forgoten-password"
            className=" text-gold-500 text-end text-sm font-medium"
          >
            Forgot Password
          </Link>

          {admin.message && <p>{admin.message}</p>}
          <NewAppButton btnText="Login" type="submit" className="text-sm mb-10 md:mb-5" />
        </form>
      </Form>
    </>
  );
};

export default LoginForm;
