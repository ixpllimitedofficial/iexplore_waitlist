"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AppButton from "@/components/UI/Button/AppButton";
import { useForm } from "react-hook-form";
import { userStore } from "@/store/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Checkbox } from "@/components/UI/checkbox";
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
import { Button } from "@/components/UI/button";

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
      username: "",
      role: "user",
      phone: "",
      gender: "",
      date_of_birth: "",
      location: "",
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
                <FormLabel className="text-lg">First Name:</FormLabel>
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
                <FormLabel className="text-lg">Last Name:</FormLabel>
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
                <FormLabel className="text-lg">Email:</FormLabel>
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

          {/* username */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Username:</FormLabel>
                <FormControl>
                  <Input
                    className={`${inputStyling}`}
                    placeholder="Username"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* phone number */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Phone Number:</FormLabel>
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

          {/* gender */}
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Gender</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className={`${inputStyling}`}>
                      <SelectValue
                        placeholder="Gender"
                        className="text-slate-500"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* date of birth*/}
          <FormField
            control={form.control}
            name="date_of_birth"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Date:</FormLabel>
                <FormControl className="">
                  <Input
                    type="date"
                    className={`${inputStyling}`}
                    placeholder="First Name"
                    max="2007-01-01"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* location */}
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Location</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className={`${inputStyling}`}>
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Nigeria">Nigeria</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Referral Code */}
          <FormField
            control={form.control}
            name="referral_code"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Referral Code:</FormLabel>
                <FormControl>
                  <Input
                    className={`${inputStyling}`}
                    placeholder="Referral code"
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
                <FormLabel className="text-lg">Password:</FormLabel>
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
                <FormLabel className="text-lg">Confirm Password:</FormLabel>
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
                  <FormLabel className="text-lg">
                    By creating an account, I verify that I’m over 18 years of
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

          <Button
            className="bg-gold-500 hover:bg-white transition duration-200 text-[#322016] px-8 py-5 lg:py-6 rounded-3xl font-bold text-base flex-grow"
            type="submit"
            onClick={() => {
              router.push("/signup?flow=verifyOTP");
            }}
          >
            Sign up
          </Button>
        </form>
      </Form>
    </>
  );
};

export default SignupForm;
