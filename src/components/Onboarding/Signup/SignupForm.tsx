"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { userStore } from "@/store/user";
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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select";
import { Checkbox } from "@/components/UI/checkbox";
import { Input } from "@/components/UI/input";
import PasswordField from "@/components/UI/Inputs/PasswordField";
import { Button } from "@/components/UI/button";
import { toast } from "@/components/UI/use-toast";

import { inputStyling } from "@/utils/constant";
import { signupValidationSchema } from "@/types/authSchemas";

import { onLogin, onSignup } from "@/app/actions";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [btnState, setBtnState] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // router
  const router = useRouter();

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
      // location: "",
      referral_code: "",
      password: "",
      confirm_password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof signupValidationSchema>) {
    setBtnState(true);

    const result = await onSignup(data);

    if (result.status === "success") {
      toast({
        title: "Sign up successful",
        description: "Please check your email and confirm your OTP!",
        variant: "success",
      });

      router.push("/signup?flow=verifyOTP");
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
                    placeholder="09012345678"
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
                    max="2006-08-31"
                    {...field}
                  />
                </FormControl>
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
                  <FormLabel className="md:text-lg">
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
            disabled={btnState}
          >
            {!btnState ? "Sign up" : "Signing up..."}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default SignupForm;
