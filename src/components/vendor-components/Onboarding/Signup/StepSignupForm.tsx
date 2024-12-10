"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { userStore } from "@/store/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import ArrowLeft from "@/assets/svg/ArrowLeft.svg";
import ArrowButtonRight from "@/assets/svg/ArrowButtonRight.svg";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/UI/form";
import { Input } from "@/components/UI/input";
import { inputStyling } from "@/utils/constant";
import { signupValidationSchema } from "@/types/authSchemas";
import PasswordField from "@/components/UI/Inputs/PasswordField";
import NewAppButton from "@/components/UI/Button/NewAppButton";

export default function StepSignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState<number>(1);

  // router
  const router = useRouter();
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // zustand
  const user = userStore((state: any) => state.user);
  const signupUser = userStore((state: any) => state.signupUser);
  const isUserRegistered = userStore((state: any) => state.isUserRegistered);
  const setIsUserRegistered = userStore(
    (state: any) => state.setIsUserRegistered
  );
  const handleNext = () => {
    if (step < 2) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

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
      <p className="py-3 text-3xl text-center hidden lg:block">Sign up</p>
      <div>
        <div className="">
          <p className="text-center text-lg my-6 font-semibold">
            {step === 1 ? "Personal Details" : "Business Details"}
          </p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-7 flex flex-col gap-4"
            >
              {step === 1 && (
                <>
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
                </>
              )}

              {step === 2 && (
                <div>
                  {/* business name */}
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
                </div>
              )}

              <div className="flex justify-between mt-6">
                {step > 1 && (
                  <div className="float-left">
                    <NewAppButton
                      btnText="Back"
                      className="text-sm px-10"
                      handleClick={handleBack}
                      leftIcon={ArrowLeft}
                    />
                  </div>
                )}
                <div
                  className={`ml-auto ${step < 2 ? "text-right" : "w-full"}`}
                ></div>
                {step < 2 ? (
                  <NewAppButton
                    btnText="Next"
                    className="text-sm w-[20%]"
                    handleClick={handleNext}
                  />
                ) : (
                  <div className="flex flex-col justify-end w-full sm:w-[90%] mx-auto">
                    <NewAppButton
                      btnText="Register"
                      type="submit"
                      className="text-sm w-full sm:w-[100%]"
                    />
                    <p className="text-center">
                      Already have an account?{" "}
                      <span className="text-gold-500">
                        <Link href="/vendor-Home">Login</Link>
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
