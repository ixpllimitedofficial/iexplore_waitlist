"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { vendorStore } from "@/store/vendor";
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
import { signupVendorValidationSchema } from "@/types/authSchemas";
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
  const vendor = vendorStore((state: any) => state.vendor);
  const signupVendor = vendorStore((state: any) => state.signupVendor);
  const isVendorRegistered = vendorStore(
    (state: any) => state.isVendorRegistered
  );
  const setIsVendorRegistered = vendorStore(
    (state: any) => state.setIsVendorRegistered
  );
  const form = useForm<z.infer<typeof signupVendorValidationSchema>>({
    resolver: zodResolver(signupVendorValidationSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      password: "",
      confirm_password: "",
    },
  });

  const { handleSubmit } = form;

  function onSubmit(data: z.infer<typeof signupVendorValidationSchema>) {
    const { ...newData } = data;
    signupVendor(newData);
  }
  useEffect(() => {
    if (isVendorRegistered) {
      router.push("/vendor-Home?flow=checkCode");
    }
    // Cleanup function to be called when the component is unmounted
    return () => {
      // Set isUserRegistered to false
      setIsVendorRegistered(false);
    };
  }, [vendor, router, isVendorRegistered, setIsVendorRegistered]);

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
              onSubmit={handleSubmit(onSubmit)}
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
                  {/* phone */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone:</FormLabel>
                        <FormControl>
                          <Input
                            className={`${inputStyling}`}
                            placeholder=""
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
              {/* <div className="flex justify-between mt-6">
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
              </div> */}
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
