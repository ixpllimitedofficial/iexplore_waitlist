"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { userStore } from "@/store/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Checkbox } from "@/components/UI/checkbox";
import Link from "next/link";

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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select";
import { Input } from "@/components/UI/input";
import { inputStyling } from "@/utils/constant";
import { signupValidationSchema } from "@/types/authSchemas";
import PasswordField from "@/components/UI/Inputs/PasswordField";
import NewAppButton from "@/components/UI/Button/NewAppButton";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // router
  const router = useRouter();

  // zustand
  const user = userStore((state: any) => state.user);
  const signupUser = userStore((state: any) => state.signupUser);
  const isUserRegistered = userStore((state: any) => state.isUserRegistered);
  const setIsUserRegistered = userStore(
    (state: any) => state.setIsUserRegistered
  );

  const form = useForm<z.infer<typeof signupValidationSchema>>({
    resolver: zodResolver(signupValidationSchema),
    defaultValues: {
      checkbox: false,
      first_name: "",
      last_name: "",
      email: "",
      business_name: "",
      business_address: "",
      business_email_address: "",
      business_phone_number: "",
      role: "user",
      phone: "",
      gender: "",
      date_of_birth: "",
      // location: "",
      referral_code: "",
      password: "",
      confirm_password: "",
    },
  });

  function onSubmit(data: z.infer<typeof signupValidationSchema>) {
    const { checkbox, ...newData } = data;
    signupUser(newData);
  }

  useEffect(() => {
    console.log(isUserRegistered);
    if (isUserRegistered) {
      router.push("/user?flow=verifyOTP");
    }

    // Cleanup function to be called when the component is unmounted
    return () => {
      // Set isUserRegistered to false
      setIsUserRegistered(false);
    };
  }, [user, router, isUserRegistered, setIsUserRegistered]);

  return (
    <>
      <p className="py-3 text-3xl text-center">Sign up</p>
      <p className="text-center text-lg my-6 font-semibold">Personal Details</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-7 flex flex-col gap-4"
        >
          {/* first name */}
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name:</FormLabel>
                <FormControl>
                  <Input
                    className={`${inputStyling}`}
                    placeholder="First Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* last name */}
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name:</FormLabel>
                <FormControl>
                  <Input
                    className={`${inputStyling}`}
                    placeholder="Last Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email:</FormLabel>
                <FormControl>
                  <Input
                    className={`${inputStyling}`}
                    placeholder="Maxxconnect127@gmail.com"
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
                <FormLabel>Create Password:</FormLabel>
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

          {/* confirm password */}
          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password:</FormLabel>
                <FormControl>
                  <PasswordField
                    field={field}
                    placeholder="Confirm Password"
                    inputStyling={inputStyling}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className="text-center text-lg my-6 font-semibold">
            Business Details
          </p>
          {/* first name */}
          <FormField
            control={form.control}
            name="business_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business name:</FormLabel>
                <FormControl>
                  <Input
                    className={`${inputStyling}`}
                    placeholder="Business name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* business email */}
          <FormField
            control={form.control}
            name="business_email_address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business email address:</FormLabel>
                <FormControl>
                  <Input
                    className={`${inputStyling}`}
                    placeholder="Maxxconnect127@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* business phone number */}
          <FormField
            control={form.control}
            name="business_phone_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business phone number:</FormLabel>
                <FormControl>
                  <Input
                    className={`${inputStyling}`}
                    placeholder="+2341234567890"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* business address*/}
          <FormField
            control={form.control}
            name="business_address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business address:</FormLabel>
                <FormControl>
                  <Input
                    className={`${inputStyling}`}
                    placeholder="Business address"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* checkbox */}
          <FormField
            control={form.control}
            name="checkbox"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="text-gold-500">
                  <FormLabel>
                    By creating an account, I verify that i’m over 18 years of
                    age and accept the{" "}
                    <span className="underline font-bold">
                      Terms of Service
                    </span>{" "}
                    and accept the{" "}
                    <span className="underline font-bold"> Privacy Policy</span>
                    .
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />

          <NewAppButton btnText="Register" type="submit" className="text-sm" />
          <p className="text-center">
            Already have an account?{" "}
            <span className="text-gold-500">
              <Link href="/vendor-Home">Login</Link>
            </span>
          </p>
        </form>
      </Form>
    </>
  );
};

export default SignupForm;
